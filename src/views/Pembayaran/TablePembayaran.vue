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
      <vue-select :options="listLayanan"></vue-select>
    </template>

    <template v-slot:cell(qty)="data">
      <b-form-input type="number" />
    </template>

    <template v-slot:cell(nilai)="data">
      <b-form-input />
    </template>

    <template v-slot:cell(subtotal)="data">
      <b-form-input />
    </template>
  </b-table>
</template>

<script>
import axios from "axios";

export default {
  components: {
    "vue-select": () => import("@/components/VueSelect.vue")
  },
  data: () => ({
    items: [{ no: 1, layanan: "harriz", qty: 0, nilai: 12000, subtotal: 2000 }],
    listLayanan: []
  }),
  mounted() {
    this.fetchLayanan();
  },
  methods: {
    fields() {
      return ["no.", "layanan", "qty", "nilai", "subtotal"];
    },
    async fetchLayanan() {
      try {
        const res = await axios.get(`${this.url_api}/pasien`);
        const { status, data } = res.data;
        if (status) {
          this.listLayanan = data.map(item => ({
            label: `${item.nama_layanan} - ${item.kode_layanan}`,
            code: item.kode_layanan
          }));
        }
      } catch (err) {
        console.log(err);
      }
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
