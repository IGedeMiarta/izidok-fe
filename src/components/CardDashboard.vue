<template>
  <div>
    <a
      class="card border-0 card-box card-box-hover-rise card-box-hover text-white align-box-row align-items-start mb-5"
      :class="bgColor"
    >
      <div>
        <div class="px-4 pt-4 pb-0">
          <div class="display-4 font-weight-bold">
            {{ highlight }}
          </div>
          <div
            class="font-weight-bold text-white mt-3 font-size-sm text-capitalize"
          >
            {{ title }}
          </div>
        </div>
        <!-- <div
          class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"
        ></div> -->
        <div
          class="mt-4 d-flex align-items-center border-top"
        >
          <div class="py-2 px-4 d-flex flex-grow-1 justify-content-center">
            <span class="text-capitalize">lebih lanjut</span>
            <div class="ml-auto align-self-center">
              <font-awesome-icon icon="chevron-right" class="font-size-xl" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="ml-auto align-self-center">
        <font-awesome-icon icon="chevron-right" class="font-size-xl" />
      </div> -->
    </a>
  </div>
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
    }
  }
};
</script>
