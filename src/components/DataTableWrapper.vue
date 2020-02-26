<template>
  <div>
    <b-container class="mb-4">
      <b-row>
        <b-col class="pl-0">
          <div class="d-flex text-capitalize align-items-center">
            <span>show</span>
            <b-form-select
              :options="entriesOpt(customEntryOptions)"
              class="w-25 mx-2"
              v-model="perPageProps"
            ></b-form-select>
            <span>entries</span>
          </div>
        </b-col>
        <b-col class="pr-0">
          <div class="d-flex justify-content-end">
            <slot name="right-header"></slot>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <slot></slot>
    <div class="d-flex align-items-center">
      <span class="px-2"
        >Display {{ fromPage }} to {{ toPage }} of
        {{ totalEntries }} entries</span
      >
      <b-pagination
        class="mt-4 d-flex justify-content-center"
        v-model="currentPageProps"
        :total-rows="rows"
        :per-page="perPage"
        style="margin-left: 10rem"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    callbackFunc: {
      type: Function,
      required: true
    },
    customEntryOptions: {
      type: Object,
      default: Object
    }
  },
  async mounted() {
    await ((this.callbackFunc &&
      (this.callbackFunc
        |> (_ => _.call(this))
        |> (_ => _.then(this.processData)))) ||
      null);
  },
  methods: {
    processData(res) {
      const { rows = 0, fromPage = 0, toPage = 0, totalEntries = 0 } = res;

      this.rows = rows;
      this.fromPage = fromPage;
      this.toPage = toPage;
      this.totalEntries = totalEntries;
    },
    valueChanged({ perPage, currentPage }) {
      this.$emit("valueChanged", {
        perPage: perPage,
        currentPage: currentPage
      });
    }
  },
  data: () => ({
    // currentPage: 1,
    rows: 0,
    // perPage: 10,
    fromPage: 0,
    toPage: 0,
    totalEntries: 0
  }),
  computed: {
    perPageProps: {
      get() {
        return this.perPage;
      },
      set(val) {
        this.valueChanged({ perPage: val });
      }
    },
    currentPageProps: {
      get() {
        return this.currentPage;
      },
      set(val) {
        this.valueChanged({ currentPage: val });
      }
    }
  }
};
</script>
