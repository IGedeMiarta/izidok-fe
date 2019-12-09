<template>
  <b-table
    :fields="fields()"
    :items="items"
    borderless
    class="table-pembayaran"
  >
  <template v-slot:cell(index)="data">
    {{ data.index }}
  </template>

  <template v-slot:cell(layanan)="data">
    <b-form-input/>
    <!-- {{ data.layanan }} -->
  </template>
  </b-table>
</template>

<script>
export default {
  data: () => ({
    items: [
      { no: 1, layanan: "harriz", qty: 1, nilai: 12000, "sub-total": 2000 }
    ]
  }),
  methods: {
    fields() {
      return ["no.", "layanan", "qty", "nilai", "sub-total"];
    }
  }
};
</script>

<style lang="scss">
.table {
  &.table-pembayaran {
    thead {
      th {
        background-color: transparent !important;
      }
    }
  }
}
</style>
