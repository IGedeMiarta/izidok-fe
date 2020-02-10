<template>
  <div>
    <a
      href="javascript:void(0);"
      class="card border-0 card-box card-box-hover-rise card-box-hover text-white align-box-row align-items-start mb-5 p-4"
      :class="bgColor"
    >
      <div>
        <div class="display-3 font-weight-bold">
          {{ highlight }}
        </div>
        <div
          class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"
        ></div>
        <div class="font-weight-bold text-white-50 font-size-sm text-uppercase">
          {{ title }}
        </div>
      </div>
      <div class="ml-auto card-hover-indicator align-self-center">
        <font-awesome-icon icon="chevron-right" class="font-size-xl" />
      </div>
    </a>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  props: {
    title: {
      required: true,
      type: String
    },
    highlight: {
      required: true,
      type: Number
    },
    bgColor: {
      required: false,
      type: String,
      default: 'bg-midnight-bloom'
    }
  }
};
</script>
