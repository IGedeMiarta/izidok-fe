<template>
  <div>
    <page-title
      heading="Rekam Medis"
      :breadcrumb="[
        {
          label: 'Rekam Medis',
          link: '/rekam-medis'
        },
        {
          label: 'List Rekam Medis',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="col-md-12 no-padding">
            <DataTableWrapper
              :perPage="perPage"
              :currentPage="currentPage"
              :callbackFunc="fetchListRekamMedis"
              @valueChanged="handleValueChanged"
            >
              <b-table
                :items="rekam_medisList"
                :fields="fieldList"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                thead-tr-class="izd-datatable"
                :no-local-sorting="true"
              >
                <template v-slot:head()="data">
                  {{ data.label }}
                  <b-input
                    size="sm"
                    class="mt-2 w-95"
                    v-if="data.field.searchable"
                    @input="searchValueChanged($event, data.field.key)"
                  />
                </template>

                <template v-slot:cell(jenis_kelamin)="data">
                  {{ jenisKelamin(data.value) }}
                </template>

                <template v-slot:cell(actions)="data">
                   <span
                    class="d-flex align-items-center justify-content-between"
                  >
                    <b-button
                      @click="
                          detailRiwayatRekamMedis({
                            pasien_id: data.item.pasien_id
                          })
                        "
                      variant="primary"
                      size="sm"
                      v-tooltip="'Riwayat Rekam Medis'"
                      ><font-awesome-icon icon="search"
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
import { mapGetters } from "vuex";
import startCase from "lodash/startCase";
import debounce from "lodash/debounce";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowUp,
  faTrashAlt,
  faSearch,
  faPencilAlt,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
// import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import { DateTime as LuxonDateTime } from "luxon";

library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);

export default {
  components: {
    DataTableWrapper: () => import("../../components/DataTableWrapper")
    // Datetime
  },
  data() {
    return {
      sortBy: "",
      sortDesc: false,
      currentPage: 1,
      rows: 0,
      fromPage: 0,
      toPage: 0,
      perPage: 10,
      rekam_medisList: [],
      namaPasien: "",
      isOperator: "",
      noRekamMedis: "",
      tanggalLahir: "",
      searchValue: [],
      totalEntries: 0
      // items: [
      //   {
      //     isActive: true,
      //     age: 40,
      //     first_name: "Dickerson",
      //     last_name: "Macdonald"
      //   },
      //   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      //   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      // ]
    };
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
      this.fetchListRekamMedis();
    },
    perPage() {
      this.fetchListRekamMedis();
    },
    sortBy() {
      this.fetchListRekamMedis();
    },
    sortDesc() {
      this.fetchListRekamMedis();
    },
    searchValue: {
      handler: "fetchListRekamMedis",
      deep: true
    }
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
        [
          {
            key: "no"
          },
          {
            key: "nomor_rekam_medis"
          },
          {
            key: "nama",
            label: "nama pasien"
          },
          {
            key: "jenis_kelamin"
          },
          {
            key: "nomor_hp"
          },
          {
            key: "actions"
          }
        ]
        |> (v => s({ field: v, customFunc: r }))
        |> (z => g({ field: z }))
      );
    }
  },
  methods: {
    async cekPaket() {
      try {
        const res = await axios.get(
          `${this.url_api}/cekPaket`
        );

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

        if(res.data !== null) {
          if(res.data.data.paket_id === 1) {
            var nm_paket = "Trial"
          }else if (res.data.data.paket_id === 2) {
            var nm_paket = "Starter"
          }else if (res.data.data.paket_id === 3) {
            var nm_paket = "Essential"
          }else {
            var nm_paket = "Premium"
          }
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
      } catch (err) {
        // console.log(err);
      }
    },
    handleValueChanged({ perPage, currentPage }) {
      perPage && (perPage |> (_ => (this.perPage = _)));
      currentPage && (currentPage |> (_ => (this.currentPage = _)));
    },
    searchValueChanged: debounce(function(val, key) {
      const { searchValue } = this;

      const z = searchValue.filter(item => item.key !== key);
      this.searchValue = [
        ...z,
        {
          key,
          value: val
        }
      ];
    }, 500),
    rekamMedis({ klinik_id, pasien_id }) {
      this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
    },
      detailRiwayatRekamMedis({ pasien_id } = {}) {
      if (pasien_id) {
        this.$router.push({
          name: "riwayat-rekam-medis",
          params: {
            pasien_id: pasien_id
          }
        });
      }
    },

    async deletePasien(id) {
      try {
        const res = await axios.delete(`${this.url_api}/pasien/${id}`);
        const { status, data } = res.data;
        if (status) {
          this.$swal({
            type: "success",
            title: startCase("deleted"),
            text: startCase("pasien berhasil di hapus")
          });
          this.fetchListRekamMedis();
        } else {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("pasien gagal di hapus")
          });
        }
      } catch (err) {
        this.$swal({
          type: "error",
          title: startCase("gagal"),
          text: startCase("pasien gagal di hapus")
        });
      }
    },
    determineParameter() {
      const { searchValue, sortBy, sortDesc } = this;
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
    async fetchListRekamMedis() {
      try {
        const res = await axios.get(
          `${this.url_api}/rekam_medis?limit=${this.perPage}&page=${
            this.currentPage
          }${this.determineParameter()}`
          /* &nama_pasien=${this.namaPasien}&no_rekam_medis=${this.noRekamMedis}&tanggal_lahir=${tanggalLahir} */
        );
        const { success, data } = res.data;
        if (success) {
          const { total } = data;
          const {
            data: listRekamMedis,
            total: totalEntries,
            to: toPage,
            from: fromPage
          } = data;
          this.totalEntries = totalEntries;
          this.toPage = toPage;
          this.fromPage = fromPage;
          this.rekam_medisList = [
            ...listRekamMedis.map((item, index) => {
              return {
                ...item,
                no: (this.currentPage - 1) * this.perPage + index + 1
              };
            })
          ];
          this.rows = data.total;
          return this;
        }
      } catch (err) {
        // console.log(err);
      }
    },
    formatedDate(d) {
      return moment(d).format("D MMM YYYY");
    }
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

/* @media screen and (max-width: 1275px; min-width: 1116px;) {
    #btn-tambah {
      margin-left :         
    }
} */
</style>
