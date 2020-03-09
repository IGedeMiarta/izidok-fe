<template>
  <b-table :fields="fields()" :items="details" borderless class="table-pembayaran">
    <template v-slot:cell(no)="data">
      {{data.index + 1}}
    </template>

    <template v-slot:cell(layanan)="data">
      <vue-select :class="{'is-invalid':layananErrors.includes(data.item.kode_layanan)}" :options="listLayanan" v-model="data.item.nama_layanan" @input="inputLayanan($event, data.index)" value="nama_layanan" :disabled="assistantRole"></vue-select>
      <div class="invalid-feedback d-block" v-if="layananErrors.includes(data.item.kode_layanan)">Layanan Tidak Boleh Sama</div>
    </template>

    <template v-slot:cell(qty)="data">
      <b-form-input min=1 @keypress="isNumber($event)" type="number" v-model="data.item.quantity" :disabled="assistantRole" />
    </template>

    <template v-slot:cell(nilai)="data">
      <money v-model="data.item.tarif" v-bind="money" class="form-control text-right" disabled />
    </template>

    <template v-slot:cell(subtotal)="data">
      <div class="d-flex align-items-center">
        <money  :value="data.item.quantity * data.item.tarif" v-bind="money" class="form-control flex-grow-1 text-right" disabled />
        <div class="d-flex flex-shrink-1 justify-content-around ml-3" v-if="!assistantRole">
          <font-awesome-layers class="fa-lg mr-1 btn-actions" @click="kurang(data.index)"
            :class="{ invisible: data.index < 1 }" v-if="data.index > 1">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon icon="minus" transform="shrink-6" class="text-white" />
          </font-awesome-layers>
          <font-awesome-layers class="fa-lg ml-1 btn-actions" @click="tambah"
            :class="{ invisible: data.index !== details.length - 1 }">
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
  import { mapGetters } from "vuex";
  import { Money } from 'v-money';

  library.add(faPlus, faMinus, faCircle);

  export default {
    components: {
      FontAwesomeLayers,
      "vue-select": () => import("@/components/VueSelect.vue"),
      Money
    },
    props: ['items'],
    data: () => ({
      money: {
        decimal: "",
        thousands: ",",
        prefix: "Rp. ",
        suffix: "",
        precision: 0,
        masked: false
      },
      details: [],
      listLayanan: [],
      layananErrors: []
    }),
    computed: {
      ...mapGetters(["assistantRole"])
    },
    mounted() {
      this.details = this.items;
      this.fetchLayanan()
        .then(() => {
          this.details.forEach(detail => {
            this.listLayanan.forEach(layanan => {
              if(detail.kode_layanan == layanan.kode_layanan) {
                detail.nama_layanan = layanan;
              }
            })
          })
        });
      this.calcValue(this.details);
    },
    watch: {
      details: {
        deep: true,
        handler: function (newVal) {
          newVal.forEach(detail => {
            detail.subtotal = parseInt(detail.quantity) * parseInt(detail.tarif)
          })
          this.calcValue(newVal);
        }
      },
      layananErrors(newVal) {
        this.$emit('layananDuplicateErrorState', newVal.length > 0)
      }
    },
    methods: {
      calcValue(val) {
        this.$emit("valueChanged", val);
      },
      calculateSubtotal(item) {
        return item.quantity * 12345;
      },
      toNumber(v) {
        return parseInt(v.replace(/\D/g, ""))
      },
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
          evt.preventDefault();;
        } else {
          return true;
        }
      },
      tambah() {
        const {
          details
        } = this;
        const tmp = details[details.length - 1];
        this.details = [
          ...details,
          Object.keys(tmp).reduce((obj, val) => {
            if (val === "no") {
              obj[val] = parseInt(tmp[val]) + 1;
            } else if(val === 'quantity') {
              obj[val] = 1;
            } else {
              obj[val] = "";
            }
            return obj;
          }, {})
        ];
      },
      kurang(index) {
        const {
          details
        } = this;
        if (index > 1) {
          const tmp = details.splice(index, 1);

          let newLayananErrors = [];
          this.layananErrors.forEach(item => {
            if(tmp[0].kode_layanan != item) newLayananErrors.push(item); 
          })
          this.layananErrors = newLayananErrors;
        }
      },
      fields() {
        const tmp = [{
            key: "no",
            label: "no.",
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
            `${this.url_api}/getalllayanan`
          );

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

             this.listLayanan = listTarif.map(val => ({
              ...val,
              label: `${val.nama_layanan} - ${val.kode_layanan}`,
            }));
            this.rows = tarifData.total;
          }
        } catch (err) {
          // console.log(err);
        }
      },
      inputLayanan($event, index) {
        if ($event == null) {
          this.details[index].nama_layanan = ""
          this.details[index].kode_layanan = 0
          this.details[index].tarif = 0
        }else{
          this.details[index].nama_layanan = $event
          this.details[index].kode_layanan = $event.kode_layanan
          this.details[index].tarif = $event.tarif
        }

        this.determineDuplicateLayanan()
      },
      determineDuplicateLayanan() {
        let duplicate = [];
        this.details.forEach((det, detIndex) => {
          let found = false;
          this.details.forEach((detail, detailIndex) => {
            if(detIndex != detailIndex) {
              if(det.kode_layanan == detail.kode_layanan) {
                found = true
              }
            }
          })

          if(found && !duplicate.includes(det.kode_layanan)) {
            duplicate.push(det.kode_layanan);
          }
        })
        this.layananErrors = duplicate;
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
<style lang="scss">
  .v-select.is-invalid {
    .vs__dropdown-toggle {
      border-color: red;
    }
  }
</style>