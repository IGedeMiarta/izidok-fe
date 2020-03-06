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
              <b-table :items="pembayaranList" :fields="fieldList" thead-tr-class="kntl" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                :no-local-sorting="true" class="text-center">
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
      async fetchListPembayaran() {
        try {
          const today =
            this.tanggalLahir && moment(this.tanggalLahir).format("YYYY-MM-DD");
          const res = await axios.get(
            `${this.url_api}/pembayaran?limit=${this.perPage}&page=${
            this.currentPage
          }${this.determineParameter()}`
          );
          const {
            success,
            data
          } = res.data;
          console.log(data);
          if (success) {
            const {
              total,
                data: listPembayaran,
              total: totalEntries,
              to: toPage,
              from: fromPage
            } = data;
            
            this.totalEntries = totalEntries;
            this.toPage = toPage;
            this.fromPage = fromPage;
            this.pembayaranList = [
              ...listPembayaran.map((item, index) => {
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