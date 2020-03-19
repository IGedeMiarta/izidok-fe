<template>
  <div>
    <page-title heading="Antrean Pasien" :breadcrumb="[
        {
          label: 'rawat jalan',
          active: true,
          link: '/antrean'
        }
      ]" />
    <div class="container-fluid">
      <div class="card card-box mb-5">
        <div class="card-body">
          <!-- <div class="accordion mb-5"> -->
            <!-- <div class="card card-box">
              <div class="card-header">
                <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                  v-b-toggle.accordion-1>
                  <div class="d-block">
                    <h5 class="d-block">Filter Data</h5>
                    <h6 class="d-block text-capitalize">klik untuk filter</h6>
                  </div> -->
                  <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" />
                </b-button>
              </div>
              <b-collapse id="accordion-1" :visible="false" accordion="accordion-example" role="tabpanel"
                class="m-2 p-2">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-group label="tanggal" class="text-capitalize"> -->
                        <!-- <b-form-input /> -->
                        <!-- <date-picker class="w-100" type="daterange" start-placeholder="Start date"
                          end-placeholder="End date" :picker-options="pickerOptions" v-model="daterangeValue"
                          format="dd-MM-yyyy" value-format="dd-MM-yyyy" /> -->
                      <!-- </b-form-group>
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
          </div> -->
          <div class="d-flex justify-content-end mb-4">
            
          </div>
          <b-modal ref="my-modal" title="Detail Registrasi Antrean">
            <b-row v-for="(data, index) in dataRegistrasiPasien" :key="index" class="mb-2 pl-3 pr-3">
              <b-col sm="6">
                <div class="d-flex">
                  <template v-if="data.label == 'TANDA TANDA VITAL' || data.label == 'DATA PASIEN'">
                    <strong>{{data.label}}</strong>
                  </template>
                  <template v-else>
                    <div class="flex-grow-1 text-capitalize">
                     {{ data.label }}
                  </div>
                  <span>:</span>
                  </template>
                </div>
              </b-col>
              <b-col sm="6">
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
           <b-button :to="{ name: 'registrasi-rawat-jalan' }" variant="primary" class="text-capitalize ml-2">Tambah Antrean</b-button>
            </template>
            <b-table :items="pasiens" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
              thead-tr-class="izd-datatable" :no-local-sorting="true">
              <template v-slot:head()="data">
                {{ data.label }}
                <b-input size="sm" class="mt-2 w-82" v-if="data.field.searchable"
                  @input="searchValueChanged($event, data.field.key)"  />
              </template>

              <template v-slot:cell(jenis_kelamin)="data">
                {{ jenisKelamin(data.value) }}
              </template>

              <template  v-slot:cell(status)="data" >
                 <template v-if="data.value == 'MENUNGGU'">
                     <b-button variant="warning" size="sm" style="font-size:13px;">{{data.value}}</b-button>
                  </template>
                  <template v-if="data.value == 'KONSULTASI'">
                    <b-button variant="primary" size="sm" style="font-size:13px;">{{data.value}}
                    </b-button>
                  </template>
              </template>
              <template v-slot:cell(actions)="data">
                <span>
                  <b-dropdown id="dropdown-1" class="m-md-2 text-capitalize" variant="primary" size="sm" right>
                    <template v-slot:button-content>
                      <font-awesome-icon icon="copy" />
                    </template>
                    <b-dropdown-item @click="
                          assignDataRegistrasiPasien(data);
                        ">Detail Registrasi Antrean</b-dropdown-item>
                    <template v-if="isOperator == false">
                      <b-dropdown-item @click="
                            rekamMedis(data)
                          ">Tulis rekam medis</b-dropdown-item>
                    </template>
                    <template v-if="data.item.status !== 'KONSULTASI'">
                    <b-dropdown-item @click="
                          pembatalanAntrean({
                            id: data.item.id,
                            namaPasien: data.item.nama
                          })
                        ">hapus antrean</b-dropdown-item>
                    </template>
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
  // import {
  //   DatePicker
  // } from "element-ui";
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

  const __dataRegistrasiPasien = {
    dp: {
      label: "DATA PASIEN",
    },
    nama: {
      label: "nama pasien",
      value: null
    },
    rekam_medis: {
      label: "no. rekam medis",
      value: null
    },
    hp: {
      label: "no. handphone",
      value: null
    },
    kelamin: {
      label: "jenis kelamin",
      value: null
    },
    dokter: {
      label: "dokter",
      value: null
    },
    tanda: {
      label: "TANDA TANDA VITAL",
    },
    
    tb : {
      label : "tinggi badan ",
      value : null,
    },
    bb : {
      label : "berat badan ",
      value : null
    },
    suhu : {
      label : "suhu",
      value : null,
    },
    tensi_diastole : {
      label : "tekanan diastole",
      value : null
    },
    tensi_sistole : {
      label : "tekanan sistole",
      value : null
    },
    nadi : {
      label : "nadi",
      value : null,
    },
    anamnesis : {
      label : "anamnesis",
      value : null
    },
  };

  export default {
    components: {
      // Datetime,
      // DatePicker,
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
      checkPaketData: null,
      searchValue: [],
      totalEntries: 0,
      isOperator: "",
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
        const r = val => Boolean(/(waktu_konsultasi|status|actions|jenis_kelamin)\b/gi.test(val) ? !1 : 1);
        return (
          [{
              key: "waktu_konsultasi",
              label: "waktu registrasi",
              thStyle: "width: 13%"
            },
            {
              key: "nomor_antrian",
              label: "no. urut",
              thStyle: "width: 10%"
            },
            {
              key: "nama",
              label: "nama pasien"
            },
            {
              key: "nomor_hp",
              thStyle: "width: 16%"
            },
            {
              key: "jenis_kelamin",
              thStyle: "width: 14%"
            },
            {
              key: "actions"
            },
            {
              key: "status"
            }
           ] 
             |> (v => s({ field: v, customFunc: r }))
             |> (z => g({ field: z }))
        );
      },
    },
    async mounted() {
        await this.checkPaket();
        if(this.checkPaketData.data.paket_id === 1) {
            var nm_paket = "Trial"
          }else if (this.checkPaketData.data.paket_id === 2) {
            var nm_paket = "Starter"
          }else if (this.checkPaketData.data.paket_id === 3) {
            var nm_paket = "Essential"
          }else {
            var nm_paket = "Premium"
          }
          
        if(this.checkPaketData.message === 'Anda belum melakukan pembelian paket apapun'){
           this.$swal({
              text: this.checkPaketData.message,
              type: "warning",
              confirmButtonText: startCase("ya"),
              allowOutsideClick : false,
              showCancelButton: false,
              allowEnterKey: false,
           }).then(res => {
           const {
             value
           } = res;
           if (value) {
             this.$router.push(`/subskripsi`);
           }
         })
        } 
        else if (this.checkPaketData.message === 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+this.checkPaketData.data.started_date+' hingga '+this.checkPaketData.data.expired_date+'!') {
          this.$swal({
              text: this.checkPaketData.message,
              type: "warning",
              allowOutsideClick : false,
              showCancelButton: false,
              confirmButtonText: startCase("ya")
           });
        }
        else if(this.checkPaketData.message === 'Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.'){
          this.$swal({
              text: this.checkPaketData.message,
              type: "warning",
              allowOutsideClick : false,
              showCancelButton: false,
              allowEnterKey: false,
              confirmButtonText: startCase("ya")
           }).then(res => {
           const {
             value
           } = res;
           if (value) {
             this.$router.push(`/subskripsi`);
           }
         })
        }
        else if(this.checkPaketData.message === 'Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.')
        {
           this.$swal({
              text: this.checkPaketData.message,
              type: "warning",
              confirmButtonText: startCase("ya"),
              allowOutsideClick : false,
              showCancelButton: false,
              allowEnterKey: false,
           }).then(res => {
           const {
             value
           } = res;
           if (value) {
             this.$router.push(`/subskripsi`);
           }
         })
        } else if (this.checkPaketData.message === 'Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.')
        {
          this.$swal({
              text: this.checkPaketData.message,
              type: "warning",
              confirmButtonText: startCase("ya"),
              allowOutsideClick : false,
              showCancelButton: false,
              allowEnterKey: false,
           }).then(res => {
           const {
             value
           } = res;
           if (value) {
             this.$router.push(`/subskripsi`);
           }
         });
        }
        else {
          moment.locale("id");
          this.tanggal = moment().format("YYYY-MM-DD");
          // this.fetchAntrean();
          if (!this.isDoctor) {
            this.isOperator = true;
          } else {
            this.isOperator = false;
          }
        }
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
     async checkPaket(){
       try {
        const res = await axios.get(`${this.url_api}/cekPaket`);
        this.checkPaketData = res.data
       } catch {

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
      determineParameter() {
        const {
          searchValue,
          sortBy,
          sortDesc
        } = this;
        let v = "";
        searchValue.map(item => {
        const x =
           (item.key === "nama" && "nama_pasien") || item.key;
          v += `&${x}=${item.value}`;
        });

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
                return {
                  id : item.id,
                  waktu_konsultasi: item.waktu_konsultasi,
                  nomor_antrian: item.nomor_antrian,
                  status: item.status,
                  jenis_kelamin: item.jenis_kelamin,
                  nama: item.nama,
                  nomor_hp: item.nomor_hp,
                  pasien_id :item.pasien_id,
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
      async assignDataRegistrasiPasien({
        item: {
          rekam_medis = null,
          ktp = null,
          nama = null,
          hp = null,
          kelamin = null,
          dokter = null,
          waktu = null,
          pasien_id = null,
          id = null,
          anamnesis = null,
          tb = null,
          bb = null,
          suhu = null,
          nadi = null,
          tensi_diastole = null,
          tensi_sistole = null,
        } = {}
      }) {
        try {
          const {
            toggleModal,
            getPasien
          } = this;
          const res = await getPasien(id);
          if (res) {
            const {
              id,
              dokter_id: dokter,
              pasien_id,
              nomor_antrian,
              klinik_id,
              anamnesa :anamnesis,
              waktu_konsultasi: waktu,
              pasien: {
                nomor_rekam_medis,
                nik: ktp,
                nama,
                nomor_hp: hp,
                jenis_kelamin: kelamin,
                tensi_sistole : tensi_sistole,
                tensi_diastole : tensi_diastole,
                nadi : nadi,
                suhu : suhu,
                tinggi_badan: tb,
                berat_badan : bb,
              }
            } = res;
            const x = __dataRegistrasiPasien;
            x["nama"].value = nama;
            x["rekam_medis"].value = nomor_rekam_medis;
            x["hp"].value = hp;
            x["kelamin"].value = this.jenisKelamin(kelamin);
            x["dokter"].value = dokter.nama;

            x["tb"].value = tb + ' (cm)';
            x["bb"].value = bb + ' (kg)';
            x["suhu"].value = suhu +' (celcius)';
            x["tensi_sistole"].value = tensi_sistole;
            x["tensi_diastole"].value = tensi_diastole;
            x["nadi"].value = nadi;
            x["anamnesis"].value = anamnesis;

            this.dataRegistrasiPasien = x;
            this.toggleModal();
          }
        } catch (err) {
        }
      },
      rekamMedis(data) {
        const {
          item
        } = data;
        this.$router.push(`/rekam-medis/${item.id}/${item.pasien_id}`);
      },
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
      async getPasien(id) {
        if (!id) {
          return false;
        }
        try {
          const res = await axios.get(`${this.url_api}/transaksi/${id}`);
          const {
            status,
            data,
            message
          } = res.data;
          if (status) {
            const {
              waktu_konsultasi,
              examination_by: dokter_id,
              anamnesa,
              pasien
            } = data;
            return {
              waktu_konsultasi,
              dokter_id,
              anamnesa,
              pasien
            };
          } else {
            this.$swal({
              text: message,
              type: "warning"
            });
          }
        } catch (err) {
          // alert(err);
        }
      },
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
      pembatalanAntrean({
        namaPasien = null,
        id
      } = {}) {
        this.$swal({
          title: startCase("pembatalan antrean"),
          text: `Apakah antrean pasien ${namaPasien} benar akan dibatalkan?`,
          type: "question",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          const {
            value
          } = res;
          if (value) {
            this.updateStatusAntrean("batal", id);
          }
        });
      },
      async updateStatusAntrean(antreanStatus, id) {
        try {
          const res = await axios.put(`${this.url_api}/transaksi/${id}`, {
            status: antreanStatus.toUpperCase()
          });
          const {
            status,
            data,
            message
          } = res.data;
          if (status) {
            console.log('asdasdasd');
            this.$swal({
              type: "success",
              title: startCase("sukses hapus antrean"),
              text: `Antrean pasien sudah dibatalkan.`,
            });
            this.fetchListAntrean();
          } else {
            this.$swal({
              text: message,
              type: "warning"
            });
          }
        } catch (err) {
        }
      },
      tanggalSelected($event) {
        this.tanggal = moment($event).format("YYYY-MM-DD");
      }
    }
  };
</script>