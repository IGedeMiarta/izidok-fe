<template>
  <b-table :fields="fields()" :items="items" borderless class="table-pembayaran">
    <template v-slot:cell(no)="data">
      {{ data.index + 1 }}
    </template>

    <template v-slot:cell(layanan)="data">
      <vue-select :options="listLayanan" v-model="data.item.layanan"></vue-select>
    </template>

    <template v-slot:cell(qty)="data">
      <b-form-input type="number" v-model="data.item.qty" />
    </template>

    <template v-slot:cell(nilai)="data">
      <b-form-input v-model="data.item.nilai" disabled  /> 
    </template>

    <template v-slot:cell(subtotal)="data">
      <div class="d-flex align-items-center">
        <b-form-input class="flex-grow-1" :value="data.item.subtotal" disabled />
        <div class="d-flex flex-shrink-1 justify-content-around ml-3">
          <font-awesome-layers class="fa-lg mr-1 btn-actions" @click="kurang(data.index)"
            :class="{ invisible: items.length < 1 }" v-if="items.length > 1">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon icon="minus" transform="shrink-6" class="text-white" />
          </font-awesome-layers>
          <font-awesome-layers class="fa-lg ml-1 btn-actions" @click="tambah"
            :class="{ invisible: data.index !== items.length - 1 }">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon icon="plus" transform="shrink-6" class="text-white" />
          </font-awesome-layers>
        </div>
      </div>
    </template>
  </b-table>
</template>

<script>
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faPlus,
    faMinus,
    faCircle
  } from "@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeLayers
  } from "@fortawesome/vue-fontawesome";

  library.add(faPlus, faMinus, faCircle);

  export default {
    components: {
      FontAwesomeLayers,
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data: () => ({
      listLayanan: {},
      items: [{
        no: 1,
        layanan: null,
        qty: 1,
        nilai: null,
        subtotal: null
      }, ],
    }),
    mounted() {
      this.fetchLayanan();
      this.calcValue(this.items);
    },
    watch: {
      items: {
        deep: true,
        handler: function (newVal) {
          const tmp = newVal.map(item => {
            item.subtotal = item.qty * item.nilai;
            item.nilai = item.layanan.tarif
            return item;
          });
          this.calcValue(tmp);
          return tmp;
        }
      }
    },
    methods: {
      calcValue(val) {
        this.$emit("valueChanged", val);
      },
      tambah() {
        const {
          items
        } = this;
        const tmp = items[items.length - 1];
        this.items = [
          ...items,
          Object.keys(tmp).reduce((obj, val) => {
            if (val === "no") {
              obj[val] = parseInt(tmp[val]) + 1;
            } else {
              obj[val] = "";
            }
            return obj;
          }, {})
        ];
      },
      kurang(index) {
        const {
          items
        } = this;
        const tmp = items.splice(index, 1);
      },
      fields() {
        const tmp = [{
            key: "no",
            label: "no."
          },
          {
            label: "layanan",
            thStyle: "width: 30%"
          },
          {
            key: "qty",
            label: "qty",
            thStyle: "width: 12%"
          },
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
          const res = await axios.get(
            `${this.url_api}/layanan`
          );
          const {
            items
          } = this;

          const {
            success,
            data
          } = res.data;

          if (success) {
            const {
              layanan: tarifData,
              total
            } = data;
            
            const {
              data: listTarif
            } = tarifData;

            this.listLayanan = listTarif.map( val => ({
              ...val,
              label: `${val.nama_layanan} - ${val.kode_layanan}`,
              code: val.kode_layanan,
            }));
            this.rows = tarifData.total;
            console.log(items);
          }
        } catch (err) {
          // console.log(err);
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

<style lang="scss" scoped>
  .btn-actions {
    font-size: 26px;
    cursor: pointer;
  }
</style>