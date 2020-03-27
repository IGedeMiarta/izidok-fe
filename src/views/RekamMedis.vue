<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div>
            <div class="accordion mb-3">
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                    v-b-toggle.accordion-1
                  >
                    <span>Tanda - tanda Vital</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <TandaVital />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box" ref="box_anamnesa">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                    v-b-toggle.accordion-2
                  >
                    <span>Anamnesis</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Anamnesa />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box" id="box_pemeriksaan_fisik">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-3
                  >
                    <span>Pemeriksaan Fisik</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Pemeriksaan ref="pemeriksaan" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box" id="box_diagnosa">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-4 >
                    <span>Diagnosis</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-4" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Diagnosa ref="diagnosa" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-5
                  >
                    <span>Tata Laksana</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-5" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <TataLaksana ref="tata-laksana" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-6
                  >
                    <span>Pemeriksaan Penunjang</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-6" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <PemeriksaanPenunjang ref="pemeriksaan-penunjang" />
                  </div>
                </b-collapse>
              </div>
            </div>
            <Footer ref="footer" />
            <div class="col-sm-12 d-flex justify-content-xl-end">
              <!-- <button class="btn btn-success m-2">Print</button> -->
              <button @click="exitButton()" class="btn btn-info m-2">Keluar</button>
              <button @click="saveButton()" class="btn btn-primary m-2 btn-spinner">
                <b-spinner v-show="saving_params.is_saving" class="btn-wrapper--icon" small></b-spinner>
                <span class="btn-wrapper--label">Simpan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./RekamMedis/Header.vue";
import TandaVital from "./RekamMedis/TandaVital";
import Pemeriksaan from "./RekamMedis/Pemeriksaan.vue";
import Diagnosa from "./RekamMedis/Diagnosa";
import TataLaksana from "./RekamMedis/TataLaksana";
import PemeriksaanPenunjang from "./RekamMedis/PemeriksaanPenunjang";
import Footer from "./RekamMedis/Footer.vue";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenAlt,
  faKeyboard,
  faEraser,
  faAngleUp,
  faCamera,
  faFolder,
  faDownload,
  faEye,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faPenAlt,
  faKeyboard,
  faEraser,
  faAngleUp,
  faCamera,
  faFolder,
  faDownload,
  faEye,
  faTrash
);

import { mapGetters, mapActions } from "vuex";
import router from "@/router";
import startCase from "lodash/startCase";

export default {
  data: () => {
    return {
      beingSubmit: false,
    }
  },
  name: "RekamMedis",
  components: {
    Header,
    TandaVital,
    Anamnesa: () => import("./RekamMedis/Anamnesa"),
    Pemeriksaan,
    Diagnosa,
    TataLaksana,
    PemeriksaanPenunjang,
    Footer
  },
  beforeRouteLeave(to, from, next) {
    if (!this.beingSubmit) {
      this.$swal({
        title: startCase("keluar"),
        text: `Apakah Anda yakin untuk keluar dari halaman ini?`,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        if (res.value) {
          next();
        } else {
          next(false);
        }
      });
    } else {
      next();
    }
  },
  mounted() {
    this.cekPaket();
  },
  methods: {
    // import the action from VUEX
    ...mapActions(["fetchData", "saveRekamMedis"]),
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
              this.beingSubmit = true;
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
              this.beingSubmit = true;
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
              this.beingSubmit = true;
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
              this.beingSubmit = true;
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
              this.beingSubmit = true;
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
    async saveButton() {

      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false
      });
      return this.$swal({
        text: "Lanjutkan untuk simpan?",
        title: "Data yang sudah disimpan tidak dapat diubah!",
        showCancelButton: true,
        confirmButtonText: "Ya, lanjut pembayaran",
        cancelButtonText: "Tidak",
        reverseButtons: true
      }).then(async result => {
        if (result.value) {

          // call vuex action (saveRekamMedis())
          const saving = await this.saveRekamMedis();

          if (!this.saving_params.is_next_konsul) {
            return this.handleError("Anda belum memilih durasi konsultasi!");
          }

          if (!this.saving_params.is_email_format) {
            return this.handleError("Silahkan lengkapi Email Pengingat!");

          }

          if (!this.saving_params.is_saved) {
            this.validate();
            return this.handleError("Penyimpanan Rekam Medis gagal!");
          }

          if (!this.saving_params.is_kuotanotnull) {
            return this.handleError("Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.");
          }
          this.beingSubmit = true;
          this.$swal
            .fire(
              "Rekam medis tersimpan!",
              "klik tombol ok untuk melanjutkan.",
              "success"
            )
            .then(res => {
              router.push({
                name: "pembayaran-tambah",
                params: {
                  bayar_id: saving.data.pembayaran.id
                }
              });
            });
        }
      });
    },
    handleError(message) {
      return this.$swal({
        type: "error",
        title: "Oops...",
        text: message
      });
    },
    exitButton() {
      return this.$swal({
        text: "Apakah Anda yakin untuk keluar?",
        title: "Keluar",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        type: "warning"
      }).then(res => {
        if (res.value) {
          let transklinik_id = this.$router.currentRoute.params.transklinik_id;
          axios.put(`${this.url_api}/transaksi/${transklinik_id}`, {status: 'MENUNGGU'})
            .then(() => {
              router.push({
                path: "/rawat-jalan/antrean"
              });
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      });
    },
    validate() {
      console.log('postData', this.postData)
      //only validate two field
      if (!this.postData.anamnesa_text) {
        this.$root.$emit('bv::toggle::collapse', 'accordion-2');
        this.$refs['box_anamnesa'].style.setProperty('border-color', 'red');
        return;
      }
      else {
        this.$refs['box_anamnesa'].style.removeProperty('border-color');
      }

      if (!this.postData.kode_penyakit || !this.postData.diagnosis_text) {
        this.$root.$emit('bv::toggle::collapse', 'accordion-4');
        document.getElementById("box_diagnosa").style.setProperty('border-color', 'red');
        return;
      }
    }
  },
  computed: mapGetters(["pasien", "saving_params", "postData"]),
  created() {
    this.fetchData();
  }
};
</script>

<style>
.dot {
  margin-right: 8px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}

.icon {
  color: #cccccc;
}

.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.3);
}

.active_tool {
  color: #464159;
  transform: scale(1.3);
}

.color_active {
  transform: scale(1.3);
}
</style>
