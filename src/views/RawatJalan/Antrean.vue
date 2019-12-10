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
                        <Datetime
                          input-class="form-control"
                          zone="Asia/Jakarta"
                          format="dd-LL-yyyy"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        label="no rekam medis"
                        class="text-capitalize"
                      >
                        <b-form-input />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="nama pasien" class="text-capitalize">
                        <b-form-input />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-4">
            <b-button variant="first" class="text-capitalize mr-2"
              >cari</b-button
            >
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
                <template v-if="true">
                  <b-button
                    :variant="item.variant"
                    size="sm"
                    v-for="(item, index) in [
                      { variant: 'primary', icon: 'search' },
                      { variant: 'success', icon: 'sign-in-alt' },
                      { variant: 'danger', icon: 'trash-alt' }
                    ]"
                    :key="index"
                    @click="clickBtnAction(item.icon)"
                  >
                    <span class="btn-wrapper--icon">
                      <font-awesome-icon :icon="item.icon" />
                    </span>
                  </b-button>
                </template>
                <template v-else>
                  <b-button
                    variant="warning"
                    size="sm"
                    @click="restorePembatalanAntrean('dawai pagi')"
                  >
                    <span class="btn-wrapper--icon">
                      <font-awesome-icon icon="redo" />
                    </span>
                  </b-button>
                </template>
              </div>
            </template>

            <template v-slot:cell()="data">
              <span>{{ data.value }}</span>
            </template>
          </b-table>
          <b-pagination
            class="d-flex justify-content-center mt-4"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faSearch,
  faSignInAlt,
  faTrashAlt,
  faRedo
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp, faSearch, faSignInAlt, faTrashAlt, faRedo);

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
    Datetime
  },
  data: () => ({
    dataRegistrasiPasien: null,
    currentPage: 1,
    rows: 100,
    perPage: 10,
    fields: [
      "no",
      "nomor rekam medis",
      "nama pasien",
      "jenis kelamin",
      "nomor hp",
      "dokter tujuan",
      { key: "actions", label: "actions" }
    ],
    items: [
      {
        no: 123,
        "nomor rekam medis": "asd123",
        "nama pasien": "asd",
        "jenis kelamin": "perempuan",
        "nomor hp": "0912382399",
        "dokter tujuan": "dawai pagi",
        actions: 1
      }
    ]
  }),
  mounted() {
    // this.fetchAntrean()
  },
  methods: {
    assignDataRegistrasiPasien({
      rekam_medis = null,
      ktp = null,
      nama = null,
      hp = null,
      kelamin = null,
      dokter = null,
      waktu = null
    } = {}) {
      const x = __dataRegistrasiPasien;
      x["rekam_medis"].value = rekam_medis;
      x["ktp"].value = ktp;
      x["nama"].value = nama;
      x["hp"].value = hp;
      x["kelamin"].value = kelamin;
      x["dokter"].value = dokter;
      x["waktu"].value = waktu;
      this.dataRegistrasiPasien = x;
      this.toggleModal();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    async fetchAntrean() {
      try {
        const res = await axios.post(
          `${this.url_api}/transaksi&status="QUEUED"`
        );
        const { status, data } = res.data;
      } catch (err) {
        // console.log(err);
      }
    },
    clickBtnAction(icon) {
      const { pembatalanAntrean, assignDataRegistrasiPasien } = this;

      switch (icon) {
        case "search":
          return assignDataRegistrasiPasien();

        case "sign-in-alt":
          break;

        case "trash-alt":
          return pembatalanAntrean("dawai pagi");

        default:
          break;
      }
    },
    restorePembatalanAntrean(namaPasien = null) {
      this.$swal({
        title: startCase("restore antrean"),
        text: `Apakah anda yakin akan mengembalikan ${namaPasien} pada antrean?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        if (res.value) {
          // console.log(res);
        }
      });
    },
    pembatalanAntrean(namaPasien = null) {
      this.$swal({
        title: startCase("pembatalan antrean"),
        text: `Apakah antrean pasien ${namaPasien} benar akan dibatalkan?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        if (res.value) {
          // console.log(res);
        }
      });
    }
  }
};
</script>
