<template>
  <div>
    <page-title heading="Pembayaran" :breadcrumb="[
        {
          label: 'Pembayaran',
          link : '/pembayaran'
        },
        {
          label: 'List Pembayaran',
          active: true
        }
      ]" />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="col-md-12 no-padding">
            <DataTableWrapper :perPage="perPage" :currentPage="currentPage" :callbackFunc="fetchListPembayaran"
              @valueChanged="handleValueChanged">
              <b-table :items="pembayaranList" :fields="fieldList" thead-tr-class="izd-datatable" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                :no-local-sorting="true">
                <template v-slot:head()="data">
                  {{ data.label }}
                  <b-input size="sm" class="mt-2 w-95" v-if="data.field.searchable"
                    @input="searchValueChanged($event, data.field.key)" />
                </template>
                <template v-slot:cell(jenis_kelamin)="data">
                  {{ jenisKelamin(data.value) }}
                </template>
                <template v-slot:cell(status)="data">
                  <template v-if="data.value == 'BELUM LUNAS'">
                    <strong style="color:red">{{data.value}}</strong> 
                  </template>
                  <template v-if="data.value == 'LUNAS'">
                    <strong>{{data.value}}</strong>
                  </template>
                </template>
                <template v-slot:cell(actions)="data">
                  <span
                    class="d-flex align-items-center justify-content-between"
                  >
                    <b-button 
                      variant="primary"
                      size="sm" 
                      class="mr-1"
                      v-tooltip="'Lihat Struk'"
                      :disabled="data.item.status == 'BELUM LUNAS'"
                      @click="viewStruk(data.item.id)"
                      ><font-awesome-icon icon="search"
                    /></b-button>
                 
                    <b-button
                      variant="success"
                      size="sm"
                      v-tooltip="'Halaman Pembayaran'"
                      @click="detailBayar(data.item.id)"
                      v-if="data.item.status == 'BELUM LUNAS'"
                      ><font-awesome-icon icon="money-bill-wave"
                    /></b-button>
                  </span>
                </template>
              </b-table>
            </DataTableWrapper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import startCase from "lodash/startCase";
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowRight,
    faArrowUp,
    faTrashAlt,
    faSearch,
    faPencilAlt,
    faMoneyBillWave
  } from "@fortawesome/free-solid-svg-icons";

  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import debounce from "lodash/debounce";
  library.add(faArrowRight,faMoneyBillWave, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

  export default {
    components: {
      "font-awesome-icon": FontAwesomeIcon,
      DataTableWrapper: () => import("../../components/DataTableWrapper")
    },
    data() {
      return {
        pembayaranList: [],
        sortBy: "",
        sortDesc: false,
        currentPage: 1,
        rows: 0,
        fromPage: 0,
        toPage: 0,
        perPage: 10,
        searchValue: [],
        totalEntries: 0
      };
    },
    computed: {
      ...mapGetters({
        isDoctor: "doctorRole"
      }),
      fieldList() {
        const {
          generateFieldList: g,
          setSearchableAndSortableFieldList: s
        } = this;
        const r = val => Boolean(/(no|actions)\b/gi.test(val) ? !1 : 1);
        return (
          [{
              key: "no"
            },
            {
              key: "nomor_rekam_medis",
              label: "no. rekam medis"
            },
            {
              key: "nama",
              label: "nama pasien"
            },
            {
              key: "jenis_kelamin"
            },
            {
              key: "status",
              label: "status pembayaran"
            },
            {
              key: "actions"
            },
          ] |> (v => s({
            field: v,
            customFunc: r
          })) |> (z => g({
            field: z
          }))
        );
      }
    },
    mounted() {
      this.cekPaket();
      if (!this.isDoctor) {
        this.isOperator = true;
      } else {
        this.isOperator = false;
      }
    },
    watch: {
      currentPage() {
        this.fetchListPembayaran();
      },
      perPage() {
        this.fetchListPembayaran();
      },
      sortBy() {
        this.fetchListPembayaran();
      },
      sortDesc() {
        this.fetchListPembayaran();
      },
      searchValue: {
        handler: "fetchListPembayaran",
        deep: true
      }
    },
    methods: {
      async cekPaket() {
        try {
          const res = await axios.get(
            `${this.url_api}/cekPaket`
          );

          if(res.data.data.paket_id === 1) {
            var nm_paket = "Trial"
          }else if (res.data.data.paket_id === 2) {
            var nm_paket = "Starter"
          }else if (res.data.data.paket_id === 3) {
            var nm_paket = "Essential"
          }else {
            var nm_paket = "Premium"
          }

          //Kuota habis, masa berlaku masih ada/tidakada, sudah beli paket.
          if (res.data.message === 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!') {
            return this.$swal({
              text: 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!',
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {

              }
            });
          }
          //Kuota habis, masa berlaku masih ada, belum beli paket.
          if (res.data.message === 'Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Kuota habis, masa berlaku habis, belum beli paket
          if (res.data.message === 'Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Kuota masih ada, masa berlaku habis (kuota hangus), belum beli paket.
          if (res.data.message === 'Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Saat inisiasi, memilih ‘beli paket’, lalu ketika statusnya sedang menunggu pembayaran, dia ingin akses menu lain.
          if (res.data.message === 'Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //saat blum ada paket satupun
          if (res.data.message === 'Anda belum melakukan pembelian paket apapun') {
            return this.$swal({
              text: "Anda tidak memiliki paket apapun, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.$router.push(`/subskripsi`);
              }
            });
          }
        } catch (err) {
          // console.log(err);
        }
      },
      determineParameter() {
        const {
          searchValue,
          sortBy,
          sortDesc
        } = this;
        let v = "";
        searchValue.map(item => {
          const x = (item.key === "nama" && "nama_pasien") || item.key;
          v += `&${x}=${item.value}`;
        });
        if (sortBy) {
          v += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
        }
        return v;
      },
      handleValueChanged({
        perPage,
        currentPage
      }) {
        perPage && (perPage |> (_ => (this.perPage = _)));
        currentPage && (currentPage |> (_ => (this.currentPage = _)));
      },
      searchValueChanged: debounce(function (val, key) {
        const {
          searchValue
        } = this;
        const z = searchValue.filter(item => item.key !== key);
        this.searchValue = [
          ...z,
          {
            key,
            value: val
          }
        ];
      }, 500),
      detailBayar(id) {
        if (id) {
          this.$router.push({
            name: "pembayaran-tambah",
            params: {
              bayar_id: id
            }
          });
        }
      },
      viewStruk(id) {
        if (id) {
          this.$router.push({
            name: "pembayaran-struk",
            params: {
              pembayaran_id: id
            }
          });
        }
      }
      // async fetchListpembayaran() {
      //   try {
      //     var today = new Date();
      //     var date = today.getFullYear() + '-' + '0' + (today.getMonth() + 1) + '-' + today.getDate();
      //     const res = await axios.get(
      //       `${this.url_api}/pembayaran?from=${date}&to=${date}`
      //     );
      //     const {
      //       success,
      //       data
      //     } = res.data;
      //     if (success) {
      //       const {
      //         pembayaran: pembayaranData,
      //         total
      //       } = data;
      //       const {
      //         data: listPembayaran
      //       } = pembayaranData;
      //       this.pembayaranList = [...listPembayaran];
      //       this.rows = pembayaranData.total;
      //     }
      //   } catch (err) {
      //     // console.log(err);
      //   }
      // },
    }
  };
</script>
<style scoped lang="css">
  .bg-kuning {
    background: #f7fc6b;
  }

  .bg-kuning,
  .bg-danger,
  .bg-first {
    color: black !important;
  }

  .no-padding {
    padding: 0 !important;
  }

  .page-item.active a {
    background: #3b86ff;
    border: none !important;
  }

  .ninja-shadow {
    box-shadow: 0px 8px 15px 0px lightgrey;
  }
</style>