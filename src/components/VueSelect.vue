<template>
  <v-select
    class="vue-select-custom"
    :options="options"
    :error="error"
  ></v-select>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  components: {
    "v-select": () => import("vue-select")
  },
  props: {
    error: Boolean,
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.v-select {
  &.vue-select-custom {
    & > .vs__dropdown-toggle {
      height: 41.75px !important;
    }

    &.error {
      & > .vs__dropdown-toggle {
        border-color: red;
      }
    }
  }
}
</style>
