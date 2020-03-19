<template>
  <div>
    <page-title
      heading="Daftar Pasien"
      :breadcrumb="[
        {
          label: 'Daftar Pasien',
          link: '/pasien'
        },
        {
          label: 'Tambah Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box">
        <div class="card-header"  style="background-color : #d3e8eb">
          <h4 class="text-capitalize my-2">tambah pasien</h4>
        </div>
        <div class="card-body">
          <PasienForm @keluar="goingPlaces" @submitForm="submitForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import startCase from "lodash/startCase";
import pasienMixin from "./mixins";

export default {
  mixins: [pasienMixin],
  components: {
    PasienForm: () => import("./PasienForm")
  },
  data: () => ({
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" }
    },
    beingSubmit: false
  }),
  mounted() {
    this.cekPaket();
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
      } catch (err) {
        // console.log(err);
      }
    },
    simpan(nama_pasien, nomor_rekam_medis) {
      this.$swal({
        title: startCase("data berhasil disimpan"),
        text: `Pasien atas nama '${nama_pasien}' tersimpan dengan nomor rekam medis ${nomor_rekam_medis}`,
        type: "success"
      });
    },
    submitForm(data) {
      this.beingSubmit = true;
      this.addPasien(data);
    },
    goingPlaces(nama_pasien, nomor_rekam_medis) {
      const tmp = {
        name: "pasien-list"
      };

      if (this.beingSubmit) {
        tmp.onComplete = this.simpan(nama_pasien, nomor_rekam_medis);
      }

      this.$router.push(tmp);
    },
    beforeAddPasien(postData) {
      // sementara untuk demo nomor rekam medis di buat urutan dulu
      postData.klinik_id = this.$store.state.user.klinik_id;
      axios.get(`${this.url_api}/pasien`).then(res => {
        let totalCurrentPasien = res.data.data.pasien.total;
        postData.nomor_rekam_medis = 100000 + (totalCurrentPasien + 1);
        this.addPasien(postData);
      });
    },
    async addPasien(postData) {
      try {
        console.log(postData)
        const res = await axios.post(
          `${this.url_api}/pasien`,
          this.mapPasienFormData(postData)
        );
        const {
          success,
          data: { nama, nomor_rekam_medis }
        } = res.data;
        if (success) {
          this.goingPlaces(nama, nomor_rekam_medis);
        }
      } catch (err) {
        if (err.response) {
          const { message } = err.response.data;
          this.$swal({
            text: `${message || "something went wrong"}`,
            type: "error"
          });
        }
        // console.log(err);
      } finally {
        this.beingSubmit = false;
      }
    }
  }
};
</script>
<style lang="scss">
.custom-dropzone {
  .dz-message {
    padding: 10rem 1rem;
  }
}
</style>
