<template>
  <div>
    <page-title heading="Antrean Rawat Jalan" :breadcrumb="[
        {
          label: 'rawat jalan',
          active: true,
          link: '/antrean'
        }
      ]" />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-body">
          <div class="accordion mb-5">
            <div class="card card-box">
              <div class="card-header">
                <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                  v-b-toggle.accordion-1>
                  <div class="d-block">
                    <h5 class="d-block">Filter Data</h5>
                    <h6 class="d-block text-capitalize">klik untuk filter</h6>
                  </div>
                  <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                </b-button>
              </div>
              <b-collapse id="accordion-1" :visible="false" accordion="accordion-example" role="tabpanel"
                class="m-2 p-2">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-group label="tanggal" class="text-capitalize">
                        <!-- <b-form-input /> -->
                        <date-picker class="w-100" type="daterange" start-placeholder="Start date"
                          end-placeholder="End date" :picker-options="pickerOptions" v-model="daterangeValue"
                          format="dd-MM-yyyy" value-format="dd-MM-yyyy" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="no rekam medis" class="text-capitalize">
                        <b-form-input v-model="noRekamMedis" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group label="status" class="text-capitalize">
                        <b-form-select v-model="statusAntrean" :options="['Konsultasi', 'Menunggu', 'Selesai']" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="nama pasien" class="text-capitalize">
                        <b-form-input v-model="namaPasien" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="my-2">
                    <b-col>
                      <b-button variant="first" class="text-capitalize float-right" @click="fetchAntrean(1)">cari
                      </b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-4">
            <b-button :to="{ name: 'registrasi-rawat-jalan' }" variant="primary" class="text-capitalize ml-2">registrasi
              rawat jalan</b-button>
          </div>
          <b-modal ref="my-modal" title="Data Registrasi Pasien">
            <b-row v-for="(data, index) in dataRegistrasiPasien" :key="index" class="mb-2 pl-3 pr-3">
              <b-col cols sm="6">
                <div class="d-flex">
                  <div class="flex-grow-1 text-capitalize">
                    {{ data.label }}
                  </div>
                  <span>:</span>
                </div>
              </b-col>
              <b-col cols="6">
                {{ data.value }}
              </b-col>
            </b-row>

            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button variant="primary" class="float-right" @click="toggleModal">
                  Tutup
                </b-button>
              </div>
            </template>
          </b-modal>
          <DataTableWrapper :perPage="perPage" :currentPage="currentPage" :callbackFunc="fetchListAntrean"
            @valueChanged="handleValueChanged">
            <template v-slot:right-header>
              <!-- <b-button variant="primary" class="text-uppercase align-self-end" :to="{
                    name: 'pasien-tambah'
                  }">tambah pasien</b-button> -->
            </template>
            <b-table :items="pasiens" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
              thead-tr-class="kntl" :no-local-sorting="true">
              <template v-slot:head()="data">
                {{ data.label }}
                <b-input size="sm" class="mt-2 w-95" v-if="data.field.searchable"
                  />
                   <!-- @input="searchValueChanged($event, data.field.key)" -->
              </template>

              <template v-slot:cell(jenis_kelamin)="data">
                {{ jenisKelamin(data.value) }}
              </template>

              <template v-slot:cell(actions)="data">
                <span>
                  <b-dropdown id="dropdown-1" class="m-md-2 text-capitalize" variant="primary" size="sm" right>
                    <template v-slot:button-content>
                      <font-awesome-icon icon="copy" />
                    </template>
                    <b-dropdown-item @click="
                          editPasien({
                            id: data.item.id
                          })
                        ">edit data pasien</b-dropdown-item>
<!-- @click="
                          detailPasien({
                            id: data.item.id
                          })
                        " -->
                    <b-dropdown-item >view detail pasien</b-dropdown-item>
                    <template v-if="isOperator == false">
                      <b-dropdown-item @click="
                            rekamMedis({
                              pasien_id: data.item.id,
                              klinik_id: data.item.klinik_id
                            })
                          ">lihat riwayat rekam medis</b-dropdown-item>
                    </template>
                    <b-dropdown-item @click="
                          removePasien({
                            id: data.item.id,
                            nama: data.item.nama
                          })
                        ">hapus data pasien</b-dropdown-item>
                  </b-dropdown>
                </span>
              </template>
            </b-table>
          </DataTableWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {
    mapGetters
  } from "vuex";
  import startCase from "lodash/startCase";
  import debounce from "lodash/debounce";
  import {
    DatePicker
  } from "element-ui";
  import "element-ui/lib/theme-chalk/index.css";

  import {
    DateTime as LuxonDateTime
  } from "luxon";

  import {
    library
  } from "@fortawesome/fontawesome-svg-core";

  import moment from "moment";

  import lang from "element-ui/lib/locale/lang/en";
  import locale from "element-ui/lib/locale";
import {
  faArrowRight,
  faArrowUp,
  faTrashAlt,
  faSearch,
  faPencilAlt,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
  library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);
  locale.use(lang);

  // const __dataRegistrasiPasien = {
  //   rekam_medis: {
  //     label: "no. rekam medis",
  //     value: null
  //   },
  //   ktp: {
  //     label: "no. ktp",
  //     value: null
  //   },
  //   nama: {
  //     label: "nama lengkap",
  //     value: null
  //   },
  //   hp: {
  //     label: "no. handphone",
  //     value: null
  //   },
  //   kelamin: {
  //     label: "jenis kelamin",
  //     value: null
  //   },
  //   dokter: {
  //     label: "dokter",
  //     value: null
  //   },
  //   waktu: {
  //     label: "waktu konsultasi",
  //     value: null
  //   }
  // };

  export default {
    components: {
      // Datetime,
      DatePicker,
      DataTableWrapper: () => import("../../components/DataTableWrapper")
    },
    data: () => ({
      dataRegistrasiPasien: null,
      // fields: [
      //   "no",
      //   {
      //     key: "waktu_konsultasi",
      //     label: "waktu konsultasi"
      //   },
      //   "nomor rekam medis",
      //   "nama pasien",
      //   "jenis kelamin",
      //   "nomor hp",
      //   "dokter tujuan",
      //   {
      //     key: "actions",
      //     label: "actions"
      //   },
      //   "status"
      // ],
      items: [],
      pasiens: [],
      noRekamMedis: "",
      namaPasien: "",
      waktuRegistrasi: "",
      tanggal: null,
      searchValue: null,
      statusAntrean: "Menunggu",
      sortBy: "",
      sortDesc: false,
      currentPage: 1,
      rows: 0,
      fromPage: 0,
      toPage: 0,
      perPage: 10,
      minDatetime: LuxonDateTime.local().toISO(),
      maxDatetime: LuxonDateTime.local()
        .plus({
          years: 3
        })
        .toISO(),
      pickerOptions: {
        disabledDate: date => {
          const x = moment(date);
          const day = moment().subtract(1, "day");
          return x.isBefore(day);
        }
      },
      daterangeValue: Array(2).fill(new Date(), 0, 2)
    }),
    computed : {
      ...mapGetters({
        isDoctor: "doctorRole"
      }),
      fieldList() {
        const {
          generateFieldList: g,
          setSearchableAndSortableFieldList: s
        } = this;
        const r = val => Boolean(/(actions)\b/gi.test(val) ? !1 : 1);
        return (
          [{
              key: "waktu_konsultasi"
            },
            {
              key: "nomor_antrian"
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
            },
            {
                key: "status"
            }
           ] 
          |> (v => s({
            field: v,
            customFunc: r
          })) 
          |> (z => g({
            field: z
          }))
        );
      }
    },
    mounted() {
      moment.locale("id");
      this.tanggal = moment().format("YYYY-MM-DD");
      // this.fetchAntrean();
      // this.fetchListAntrean();
    },
    watch: {
      currentPage() {
        this.fetchListAntrean();
      },
      perPage() {
        this.fetchListAntrean();
      },
      sortBy() {
        this.fetchListAntrean();
      },
      sortDesc() {
        this.fetchListAntrean();
      },
      searchValue: {
        handler: "fetchListAntrean",
        deep: true
      }
    },
    methods: {
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
      rekamMedis({
        klinik_id,
        pasien_id
      }) {
        this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
      },
      determineParameter() {
        const {
          searchValue,
          sortBy,
          sortDesc
        } = this;
        let v = "";
        // searchValue.map(item => {
        //   console.log('a',item)
        //   // const x = (item.key === "nama" && "nama_pasien") || item.key;
        //   // v += `&${x}=${item.value}`;
        // });
        if (sortBy) {
          v += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
        }
        return v;
      },
      async fetchListAntrean() {
        try {
          const waktuRegistrasi =
            this.waktuRegistrasi && moment(this.waktuRegistrasi).format("YYYY-MM-DD");
          const res = await axios.get(
            `${this.url_api}/transaksi?limit=${this.perPage}&page=${
            this.currentPage
          }${this.determineParameter()}`
            /* &nama_pasien=${this.namaPasien}&no_rekam_medis=${this.noRekamMedis}&tanggal_lahir=${tanggalLahir} */
          );
          const {
            success,
            data
          } = res.data;
          if (success) {
            const {
              trans_klinik: dataAntrean,
              total
            } = data;
            const {
              data: listAntrean,
              total: totalEntries,
              to: toPage,
              from: fromPage
            } = dataAntrean;
            this.totalEntries = totalEntries;
            this.toPage = toPage;
            this.fromPage = fromPage;
            this.pasiens = [
              ...listAntrean.map((item, index) => {
                console.log(item)
                return {
                  id : item.id,
                  waktu_konsultasi: item.waktu_konsultasi,
                  nomor_antrian: item.nomor_antrian,
                  status: item.status,
                  jenis_kelamin: item.pasien.jenis_kelamin,
                  nama: item.pasien.nama,
                  nomor_hp: item.pasien.nomor_hp,
                  // ...item,
                  no: (this.currentPage - 1) * this.perPage + index + 1
                };
              })
            ];
            this.rows = dataAntrean.total;
            return this;
          }
        } catch (err) {
          // console.log(err);
        }
      },
      changePage(page) {
        this.fetchAntrean(page);
      },
      // async assignDataRegistrasiPasien({
      //   item: {
      //     rekam_medis = null,
      //     ktp = null,
      //     nama = null,
      //     hp = null,
      //     kelamin = null,
      //     dokter = null,
      //     waktu = null,
      //     pasien_id = null,
      //     transaksi_id = null
      //   } = {}
      // }) {
      //   try {
      //     const {
      //       toggleModal,
      //       getPasien
      //     } = this;
      //     const res = await getPasien(transaksi_id);
      //     if (res) {
      //       const {
      //         id,
      //         dokter_id: dokter,
      //         pasien_id,
      //         nomor_antrian,
      //         klinik_id,
      //         waktu_konsultasi: waktu,
      //         pasien: {
      //           nomor_rekam_medis,
      //           nik: ktp,
      //           nama,
      //           nomor_hp: hp,
      //           jenis_kelamin: kelamin
      //         }
      //       } = res;
      //       const x = __dataRegistrasiPasien;
      //       x["rekam_medis"].value = nomor_rekam_medis;
      //       x["ktp"].value = ktp;
      //       x["nama"].value = nama;
      //       x["hp"].value = hp;
      //       x["kelamin"].value = this.jenisKelamin(kelamin);
      //       x["dokter"].value = dokter.nama;
      //       x["waktu"].value = moment(waktu).format("DD-MM-YYYY HH:mm:ss");
      //       this.dataRegistrasiPasien = x;
      //       this.toggleModal();
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      // rekamMedis(data) {
      //   const {
      //     item
      //   } = data;
      //   this.$router.push(`/rekam-medis/${item.transaksi_id}/${item.pasien_id}`);
      // },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs["my-modal"].toggle("#toggle-btn");
      },
      // async fetchAntrean(page = 1) {
      //   let dt = moment().format("YYYY-MM-DD");
      //   try {
      //     const reverseDate = date =>
      //       moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
      //     const res = await axios.get(
      //       `${this.url_api}/transaksi?limit=${
      //       this.perPage
      //     }&status=${this.statusAntrean.toUpperCase()}&from=${reverseDate(
      //       this.daterangeValue[0]
      //     )}&to=${reverseDate(
      //       this.daterangeValue[1]
      //     )}&page=${page}&no_rekam_medis=${this.noRekamMedis}&nama_pasien=${
      //       this.namaPasien
      //     }`
      //     );
      //     const {
      //       status,
      //       data
      //     } = res.data;
      //     if (status) {
      //       const {
      //         total,
      //         data: antreanData
      //       } = data;
      //       this.items = antreanData.map((item, index) => {
      //         const {
      //           examination_by: {
      //             nama: dokter_tujuan
      //           }
      //         } = item;
      //         return {
      //           no: (page - 1) * this.perPage + index + 1,
      //           waktu_konsultasi: item.waktu_konsultasi &&
      //             moment(item.waktu_konsultasi).format("DD-MM-YYYY"),
      //           "nomor rekam medis": item.pasien.nomor_rekam_medis,
      //           "nama pasien": item.pasien.nama,
      //           "jenis kelamin": this.jenisKelamin(item.pasien.jenis_kelamin),
      //           "nomor hp": item.pasien.nomor_hp,
      //           "dokter tujuan": dokter_tujuan,
      //           pasien_id: item.pasien_id,
      //           transaksi_id: item.id,
      //           status: item.status
      //         };
      //       });
      //       // console.log(this.items)
      //       this.rows = total;
      //     }
      //   } catch (err) {
      //     // alert(err);
      //   }
      // },
      // async getPasien(id) {
      //   if (!id) {
      //     return false;
      //   }

      //   try {
      //     const res = await axios.get(`${this.url_api}/transaksi/${id}`);
      //     const {
      //       status,
      //       data,
      //       message
      //     } = res.data;
      //     if (status) {
      //       const {
      //         waktu_konsultasi,
      //         examination_by: dokter_id,
      //         pasien
      //       } = data;
      //       return {
      //         waktu_konsultasi,
      //         dokter_id,
      //         pasien
      //       };
      //     } else {
      //       this.$swal({
      //         text: message,
      //         type: "warning"
      //       });
      //     }
      //   } catch (err) {
      //     // alert(err);
      //   }
      // },
      // clickBtnAction(icon, data) {
      //   const {
      //     pembatalanAntrean,
      //     assignDataRegistrasiPasien,
      //     rekamMedis
      //   } = this;
      //   const {
      //     item: {
      //       "nama pasien": nama_pasien,
      //       pasien_id,
      //       transaksi_id
      //     }
      //   } = data;

      //   switch (icon) {
      //     case "search":
      //       return assignDataRegistrasiPasien(data);

      //     case "sign-in-alt":
      //       return rekamMedis(data);

      //     case "trash-alt":
      //       return pembatalanAntrean({
      //         namaPasien: nama_pasien,
      //         transaksi_id
      //       });

      //     default:
      //       break;
      //   }
      // },
      // restorePembatalanAntrean(data) {
      //   const {
      //     item: {
      //       "nama pasien": nama_pasien,
      //       pasien_id,
      //       transaksi_id
      //     }
      //   } = data;

      //   this.$swal({
      //     title: startCase("restore antrean"),
      //     text: `Apakah anda yakin akan mengembalikan ${nama_pasien} pada antrean?`,
      //     type: "question",
      //     showCancelButton: true,
      //     cancelButtonText: startCase("tidak"),
      //     confirmButtonText: startCase("ya")
      //   }).then(res => {
      //     const {
      //       value
      //     } = res;
      //     if (value) {
      //       this.updateStatusAntrean("menunggu", transaksi_id);
      //     }
      //   });
      // },
      // pembatalanAntrean({
      //   namaPasien = null,
      //   transaksi_id
      // } = {}) {
      //   this.$swal({
      //     title: startCase("pembatalan antrean"),
      //     text: `Apakah antrean pasien ${namaPasien} benar akan dibatalkan?`,
      //     type: "question",
      //     showCancelButton: true,
      //     cancelButtonText: startCase("tidak"),
      //     confirmButtonText: startCase("ya")
      //   }).then(res => {
      //     const {
      //       value
      //     } = res;
      //     if (value) {
      //       this.updateStatusAntrean("batal", transaksi_id);
      //     }
      //   });
      // },
      // async updateStatusAntrean(antreanStatus, id) {
      //   try {
      //     const res = await axios.put(`${this.url_api}/transaksi/${id}`, {
      //       status: antreanStatus.toUpperCase()
      //     });
      //     const {
      //       status,
      //       data,
      //       message
      //     } = res.data;
      //     if (status) {
      //       this.fetchAntrean();
      //     } else {
      //       this.$swal({
      //         text: message,
      //         type: "warning"
      //       });
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      // tanggalSelected($event) {
      //   this.tanggal = moment($event).format("YYYY-MM-DD");
      // }
    }
  };
</script>