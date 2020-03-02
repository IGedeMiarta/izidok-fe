<template>
  <div class="page-title">
    <b-row>
      <slot name="defaultSlot">
        <b-col :cols="defaultSlotCol">
          <div>
            <template
              v-if="breadcrumb && breadcrumb.length && breadcrumb.length > 0"
            >
              <ol class="breadcrumb text-uppercase font-size-xs p-0">
                <li
                  class="breadcrumb-item"
                  v-for="(data, index) in breadcrumb"
                  :key="index"
                  :class="{ active: data.active }"
                >
                  <template v-if="data.active">
                    {{ data.label }}
                  </template>
                  <a :href="data.link" v-else>{{ data.label }}</a>
                </li>
              </ol>
            </template>

            <h5 class="display-4 mt-1 mb-2 font-weight-bold">{{ heading }}</h5>
            <p class="mb-0" :class="customStyleSubheading" v-if="subheading">
              <span v-if="subheadingRaw" v-html="subheadingRawText"></span>
              <span v-else>{{ subheading }}</span>
            </p>
          </div>
        </b-col>
      </slot>
      <template v-if="rightSlot">
        <slot name="rightSlot"></slot>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    icon: [String, Boolean],
    heading: String,
    subheading: [String, Boolean, Object],
    customStyleSubheadingProp: Object,
    breadcrumb: Array,
    defaultSlotCol: {
      type: [String, Number],
      default: 12
    },
    rightSlot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    subheadingRaw() {
      const { subheading } = this;

      return (typeof subheading === "object" && true) || false;
    },
    subheadingRawText() {
      const { subheading } = this;

      const { text } = subheading;

      return text;
    },
    customStyleSubheading() {
      const { customStyleSubheadingProp } = this;
      const x =
        customStyleSubheadingProp && Object.keys(customStyleSubheadingProp);

      return (
        (customStyleSubheadingProp && x.length && x.length > 0 && x) || {
          "text-black-50": true
        }
      );
    }
  }
};
</script>
