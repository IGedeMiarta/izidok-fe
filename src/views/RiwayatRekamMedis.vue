<template>
  <div>
    <page-title heading="Rekam Medis" :breadcrumb="[
        {
          label: 'Rekam Medis'
        },
        {
          label: 'Riwayat',
          active: true
        }
      ]" defaultSlotCol="7" rightSlot>
      <template v-slot:defaultSlot>
        <b-col sm="8">
          <b-row>
            <b-col sm="12">
              <h5 class="display-4 mt-1 mb-2 font-weight-bold text-left">Riwayat Rekam Medis</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <p class="text-uppercase mb-2 text-left">Nama Pasien</p>
            </b-col>
            <b-col sm="1">:</b-col>
            <b-col sm="6">
              <p class="text-uppercase text-left mb-2">{{ pasien.nama }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <p class="text-uppercase mb-2 text-left">Nomor Rekam Medis</p>
            </b-col>
            <b-col sm="1">:</b-col>
            <b-col sm="6">
              <p class="text-uppercase text-left mb-2">{{ pasien.nomor_rekam_medis }}</p>
            </b-col>
          </b-row>
        </b-col>
      </template>
      <template v-slot:rightSlot>
        <b-col sm="4" class="d-flex align-items-center justify-content-around">
          <b-button variant="primary" class="text-uppercase" @click="kembali()">kembali</b-button>
          <!-- <b-button variant="info" class="text-uppercase" @click="
              rekamMedis({
               pasien_id: pasien.id,
               klinik_id: pasien.klinik_id
               })">tulis rekam medis</b-button> -->
        </b-col>
      </template>
    </page-title>
    <div class="container-fluid">
      <div class="card card-box ">
        <div class="card-body p-4">
          <b-row style="height:700px;">
            <b-col sm="6">
              <LeftColumn class="rrm-content" />
            </b-col>
            <b-col sm="6">
              <RightColumn class="rrm-content" />
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        faCopy
    } from "@fortawesome/free-solid-svg-icons";
    // import { Datetime } from "vue-datetime";
    import "vue-datetime/dist/vue-datetime.css";
    import startCase from "lodash/startCase";
    import upperCase from "lodash/upperCase";
    import moment from "moment";
    moment.locale('id');


  library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);
  export default {
    props: {
      pasien_id: [Number, String],
    },
    data() {
      return {
        pasien: "",
        klinik_id: "",
      }
    },
    components: {
      LeftColumn: () => import("./RiwayatRekamMedis/LeftColumn.vue"),
      RightColumn: () => import("./RiwayatRekamMedis/RightColumn.vue")
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
            moment.locale("ID");
            var dateStart = moment(res.data.data.started_date).format('DD MMMM YYYY');
            var dateEnd = moment(res.data.data.expired_date).format('DD MMMM YYYY');
            return this.$swal({
              text: 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+dateStart+' hingga '+dateEnd+' !',
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
      kembali() {
        // this.$router.back();
        this.$router.push({
          path: '/rekam-medis'
        });
      },
      async fetchPasien() {
        let res = await axios.get(`${this.url_api}/pasien/${this.pasien_id}`);
        if (res.data.status == false || res.data.data_rm == false) {
          this.$swal({
            type: "error",
            title: startCase("Gagal"),
            text: startCase(`Pasien ${res.data.data.nama} belum memiliki rekam medis!`)
          }).then(res => {
            if (res.value) {
              this.$router.push(`/rekam-medis`)
            }
          });
        }
        this.pasien = res.data.data;
      },
      rekamMedis({
        pasien_id,
        klinik_id
      }) {
        this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
      },
    },
    mounted() {
      this.cekPaket();
      this.fetchPasien()
    }
  };
</script>

<style lang="scss" scoped>
  .rrm-content {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 700px;
    margin-top: 20px;
  }

  @media (max-width: 300px) {
    .rrm-content {
      margin-top: 20px;
      max-height: 200px;
    }
  }
</style>
