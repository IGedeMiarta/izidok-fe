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
