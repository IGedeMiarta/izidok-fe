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
      <div class="d-flex align-items-center">
        <b-form-input class="flex-grow-1" />
        <div class="d-flex flex-shrink-1 justify-content-around">
          <font-awesome-layers class="fa-lg">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="plus"
              transform="shrink-6"
              class="text-white"
            />
          </font-awesome-layers>
          <font-awesome-layers class="fa-lg">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="minus"
              transform="shrink-6"
              class="text-white"
            />
          </font-awesome-layers>
        </div>
      </div>
    </template>
  </b-table>
</template>

<script>
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeLayers } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faMinus, faCircle);

export default {
  components: {
    FontAwesomeLayers,
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
      const tmp = [
        "no.",
        { label: "layanan", thStyle: "width: 30%" },
        { label: "qty", thStyle: "width: 12%" },
        "nilai",
        "subtotal"
      ];

      return tmp.map(item => ({
        key: item.label ? item.label : item,
        label: item.label ? item.label : item,
        thStyle: item.thStyle && item.thStyle
      }));
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
