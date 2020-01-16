<template>
  <div>
    <page-title
      heading="Antrean Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan',
          active: true
        }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-body">
          <div class="accordion mb-5">
            <div class="card card-box">
              <div class="card-header">
                <b-button
                  class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                  v-b-toggle.accordion-1
                >
                  <div class="d-block">
                    <h5 class="d-block">Filter Data</h5>
                    <h6 class="d-block text-capitalize">klik untuk filter</h6>
                  </div>
                  <font-awesome-icon icon="angle-up" class="font-size-xl" />
                </b-button>
              </div>
              <b-collapse
                id="accordion-1"
                :visible="false"
                accordion="accordion-example"
                role="tabpanel"
                class="m-2 p-2"
              >
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-group label="tanggal" class="text-capitalize">
                        <!-- <b-form-input /> -->
                        <date-picker
                          class="w-100"
                          type="daterange"
                          start-placeholder="Start date"
                          end-placeholder="End date"
                          :picker-options="pickerOptions"
                          v-model="daterangeValue"
                          format="dd-MM-yyyy"
                          value-format="dd-MM-yyyy"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        label="no rekam medis"
                        class="text-capitalize"
                      >
                        <b-form-input v-model="noRekamMedis" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group label="status" class="text-capitalize">
                        <b-form-select
                          v-model="statusAntrean"
                          :options="['Konsultasi', 'Menunggu', 'Selesai']"
                        />
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
                      <b-button
                        variant="first"
                        class="text-capitalize float-right"
                        @click="fetchAntrean(1)"
                        >cari</b-button
                      >
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-4">
            <b-button
              :to="{ name: 'registrasi-rawat-jalan' }"
              variant="primary"
              class="text-capitalize ml-2"
              >registrasi rawat jalan</b-button
            >
          </div>
          <b-modal ref="my-modal" title="Data Registrasi Pasien">
            <b-row
              v-for="(data, index) in dataRegistrasiPasien"
              :key="index"
              class="mb-2 pl-3 pr-3"
            >
              <b-col cols="6">
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
                <b-button
                  variant="primary"
                  class="float-right"
                  @click="toggleModal"
                >
                  Tutup
                </b-button>
              </div>
            </template>
          </b-modal>
          <b-table bordered striped hover :fields="fields" :items="items">
            <template v-slot:cell(actions)="data">
              <div class="d-flex justify-content-around">
                <template
                  v-if="
                    data.item.status &&
                      data.item.status.toLowerCase() === 'batal'
                  "
                >
                  <b-button
                    variant="warning"
                    size="sm"
                    @click="restorePembatalanAntrean(data)"
                  >
                    <span class="btn-wrapper--icon">
                      <font-awesome-icon icon="redo" />
                    </span>
                  </b-button>
                </template>
                <template v-else>
                  <b-button
                    :variant="item.variant"
                    size="sm"
                    v-for="(item, index) in [
                      { variant: 'primary', icon: 'search' },
                      { variant: 'success', icon: 'sign-in-alt' },
                      { variant: 'danger', icon: 'trash-alt' }
                    ]"
                    :key="index"
                    @click="clickBtnAction(item.icon, data)"
                    v-b-popover.hover.top="
                      item.variant == 'success' ? 'Halaman Rekam Medis' : null
                    "
                  >
                    <span class="btn-wrapper--icon">
                      <font-awesome-icon :icon="item.icon" />
                    </span>
                  </b-button>
                </template>
              </div>
            </template>

            <template v-slot:cell()="data">
              <template
                v-if="
                  data.item.status && data.item.status.toLowerCase() === 'batal'
                "
              >
                <span style="color: red">{{ data.value }}</span>
              </template>
              <template v-else>
                <span>{{ data.value }}</span>
              </template>
            </template>
          </b-table>
          <b-pagination
            class="d-flex justify-content-center mt-4"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            @input="changePage"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import startCase from "lodash/startCase";
import { DatePicker } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { DateTime as LuxonDateTime } from "luxon";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faSearch,
  faSignInAlt,
  faTrashAlt,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

library.add(faAngleUp, faSearch, faSignInAlt, faTrashAlt, faRedo);
locale.use(lang);

const __dataRegistrasiPasien = {
  rekam_medis: {
    label: "no. rekam medis",
    value: null
  },
  ktp: {
    label: "no. ktp",
    value: null
  },
  nama: {
    label: "nama lengkap",
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
  waktu: {
    label: "waktu konsultasi",
    value: null
  }
};

export default {
  components: {
    // Datetime,
    DatePicker
  },
  data: () => ({
    dataRegistrasiPasien: null,
    currentPage: 1,
    rows: 0,
    perPage: 10,
    fields: [
      "no",
      { key: "waktu_konsultasi", label: "waktu konsultasi" },
      "nomor rekam medis",
      "nama pasien",
      "jenis kelamin",
      "nomor hp",
      "dokter tujuan",
      { key: "actions", label: "actions" },
      "status"
    ],
    items: [],
    pasiens: [],
    noRekamMedis: "",
    namaPasien: "",
    tanggal: null,
    statusAntrean: "Menunggu",
    minDatetime: LuxonDateTime.local().toISO(),
    maxDatetime: LuxonDateTime.local()
      .plus({ years: 3 })
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
  mounted() {
    moment.locale("id");
    this.tanggal = moment().format("YYYY-MM-DD");
    this.fetchAntrean();
  },
  methods: {
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
        pasien_id = null
      } = {}
    }) {
      try {
        const { toggleModal, getPasien } = this;
        const res = await getPasien(pasien_id);
        if (res) {
          const {
            id,
            dokter_id: dokter,
            pasien_id,
            nomor_antrian,
            klinik_id,
            waktu_konsultasi: waktu,
            pasien: {
              nomor_rekam_medis,
              nik: ktp,
              nama,
              nomor_hp: hp,
              jenis_kelamin: kelamin
            }
          } = res;
          const x = __dataRegistrasiPasien;
          x["rekam_medis"].value = nomor_rekam_medis;
          x["ktp"].value = ktp;
          x["nama"].value = nama;
          x["hp"].value = hp;
          x["kelamin"].value = kelamin;
          x["dokter"].value = dokter;
          x["waktu"].value = moment(waktu).format("DD-MM-YYYY HH:mm:ss");
          this.dataRegistrasiPasien = x;
          this.toggleModal();
        }
      } catch (err) {
        console.log(err);
      }
    },
    rekamMedis(data) {
      const { item } = data;
      this.$router.push(`/rekam-medis/${item.transaksi_id}/${item.pasien_id}`);
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    async fetchAntrean(page = 1) {
      let dt = moment().format("YYYY-MM-DD");
      try {
        const reverseDate = date => moment(date).format("YYYY-MM-DD");
        const res = await axios.get(
          `${this.url_api}/transaksi?limit=${
            this.perPage
          }&status=${this.statusAntrean.toUpperCase()}&from=${reverseDate(
            this.daterangeValue[0]
          )}&to=${reverseDate(
            this.daterangeValue[1]
          )}&page=${page}&no_rekam_medis=${this.noRekamMedis}&nama_pasien=${
            this.namaPasien
          }`
        );
        const { status, data } = res.data;
        if (status) {
          const { total, data: antreanData } = data;
          this.items = antreanData.map((item, index) => {
            return {
              no: (page - 1) * this.perPage + index + 1,
              waktu_konsultasi:
                item.waktu_konsultasi &&
                moment(item.waktu_konsultasi).format("DD-MM-YYYY HH:mm:ss"),
              "nomor rekam medis": item.pasien.nomor_rekam_medis,
              "nama pasien": item.pasien.nama,
              "jenis kelamin": this.jenisKelamin(item.pasien.jenis_kelamin),
              "nomor hp": item.pasien.nomor_hp,
              "dokter tujuan": "dr. Aviandra",
              pasien_id: item.pasien_id,
              transaksi_id: item.id,
              status: item.status
            };
          });
          // console.log(this.items)
          this.rows = total;
        }
      } catch (err) {
        alert(err);
      }
    },
    async getPasien(id) {
      if (!id) {
        return false;
      }

      try {
        const res = await axios.get(`${this.url_api}/transaksi/${id}`);
        const { status, data, message } = res.data;
        if (status) {
          const { waktu_konsultasi, examination_by: dokter_id, pasien } = data;
          return { waktu_konsultasi, dokter_id, pasien };
        } else {
          this.$swal({
            text: message,
            type: "warning"
          });
        }
      } catch (err) {
        alert(err);
      }
    },
    clickBtnAction(icon, data) {
      const {
        pembatalanAntrean,
        assignDataRegistrasiPasien,
        rekamMedis
      } = this;
      const {
        item: { "nama pasien": nama_pasien, pasien_id }
      } = data;

      switch (icon) {
        case "search":
          return assignDataRegistrasiPasien(data);

        case "sign-in-alt":
          return rekamMedis(data);

        case "trash-alt":
          return pembatalanAntrean({
            namaPasien: nama_pasien,
            pasienId: pasien_id
          });

        default:
          break;
      }
    },
    restorePembatalanAntrean(data) {
      const {
        item: { "nama pasien": nama_pasien, pasien_id }
      } = data;

      this.$swal({
        title: startCase("restore antrean"),
        text: `Apakah anda yakin akan mengembalikan ${nama_pasien} pada antrean?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        const { value } = res;
        if (value) {
          this.updateStatusAntrean("menunggu", pasien_id);
        }
      });
    },
    pembatalanAntrean({ namaPasien = null, pasienId } = {}) {
      this.$swal({
        title: startCase("pembatalan antrean"),
        text: `Apakah antrean pasien ${namaPasien} benar akan dibatalkan?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        const { value } = res;
        if (value) {
          this.updateStatusAntrean("batal", pasienId);
        }
      });
    },
    async updateStatusAntrean(antreanStatus, id) {
      try {
        const res = await axios.put(`${this.url_api}/transaksi/${id}`, {
          status: antreanStatus.toUpperCase()
        });
        const { status, data, message } = res.data;
        if (status) {
          this.fetchAntrean();
        } else {
          this.$swal({
            text: message,
            type: "warning"
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    tanggalSelected($event) {
      this.tanggal = moment($event).format("YYYY-MM-DD");
    }
  }
};
</script>
