<template>
  <a
    class="card border-0 card-box card-box-hover-rise card-box-hover text-white align-box-row align-items-start mb-5 w-100 card-dashboard"
    :class="[bgColor, pointerHoverProps]"
  >
    <div class="px-2 py-3 w-100 d-flex align-items-center flex-row" style="height: 125px">
      <div>
        <div
          class="font-weight-bold text-white my-1 font-size-sm text-capitalize"
        >
          {{ title }}
        </div>
        <div class="d-flex align-items-center">
          <div class="display-3 font-weight-bold">
            {{ highlight }}
          </div>
        </div>
      </div>
      <div class="d-flex flex-grow-1 justify-content-center" v-if="showArrow">
        <div class="ml-auto align-self-end">
          <font-awesome-icon icon="chevron-right" class="font-size-xl" />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight);

export default {
  // components: {
  //   "font-awesome-icon": FontAwesomeIcon
  // },
  props: {
    title: {
      required: true,
      type: String
    },
    highlight: {
      required: true,
      type: [Number, String]
    },
    bgColor: {
      required: false,
      type: String,
      default: "bg-midnight-bloom"
    },
    pointerHover: {
      required: false,
      type: Boolean,
      default: true
    },
    showArrow: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  computed: {
    pointerHoverProps() {
      return this.pointerHover ? "card-pointer" : null;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-dashboard {
  background-position: bottom center;
  // background-image: url("../assets/img/home-bg1.png") !important;
}

.card-pointer {
  cursor: pointer;
}
</style>
