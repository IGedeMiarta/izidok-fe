<template>
  <div id="app" class="d-flex flex-fill">
    <loading :active.sync="isLoading" :is-full-page="true" />
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "vue-loading-overlay/dist/vue-loading.css";

const default_layout = "default";

export default {
  components: {
    loading: () => import("vue-loading-overlay")
  },
  computed: {
    ...mapGetters(["isLoading"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "assets/bamburgh.scss";
</style>
