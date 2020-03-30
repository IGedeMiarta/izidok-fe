<template>
  <div id="app" class="d-flex flex-fill">
    <loading :active.sync="isLoading" :is-full-page="true">
      <b-spinner
        style="width:5rem;height:5rem;color:#4b80b6 !important;"
        type="grow"
        label="Loading..."
        variant="info"
      ></b-spinner>
    </loading>
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import "vue-loading-overlay/dist/vue-loading.css";
import "element-ui/lib/theme-chalk/index.css";

const default_layout = "default";

export default {
  components: {
    loading: () => import("vue-loading-overlay")
  },
  computed: {
    ...mapGetters(["isLoading"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
    auth_error() {
      return this.$store.state.autherror;
    }
  },
  methods: {
    showAuthError() {
      this.$swal({
        allowOutsideClick: false,
        type: "warning",
        text: this.$store.state.autherror
      }).then(e => {
        this.$store.commit("SET_BEARER_TOKEN", null);
        this.$store.commit("SET_USER", null);
        this.$store.commit("SET_AUTHERROR", null);
        this.$router.push("/login");
      });
    }
  },
  watch: {
    auth_error(newVal, oldVal) {
      if (newVal) {
        this.showAuthError();
      }
    }
  },
  mounted() {
    if (this.$store.state.autherror) {
      this.showAuthError();
    }
  }
};
</script>

<style lang="scss">
@import "assets/bamburgh.scss";

.vld-overlay {
  &.is-full-page {
    z-index: 1100;
  }
}

@media only screen and (max-width: 900px) {
  .vdatetime-popup {
    transform: scale(.8, .7) translate(-60%, -70%) !important;
  }
} 

// @media only screen and (max-width: 768px) and (orientation: landscape) {
//   .vdatetime-popup {
//     height: 100%;
//     overflow: scroll;
//   }
// }

// @media only screen and (max-width: 500px) {
//   .vdatetime-popup {
//     height: 100%;
//     overflow: scroll;
//   }
// }

// @media only screen and (max-width: 500px) and (min-height: 500px) {
//   .vdatetime-popup {
//     height: auto !important;
//     overflow: scroll;
//   }
// }
</style>
