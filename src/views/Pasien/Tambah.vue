<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien'
        },
        {
          label: 'Tambah Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box">
        <div class="card-header">
          <h4 class="text-capitalize my-2">tambah pasien</h4>
        </div>
        <div class="card-body">
          <div class="mb-4">
            <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              useCustomSlot
              class="custom-dropzone"
            >
              <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title text-capitalize">
                  ambil foto <span class="text-uppercase">ktp</span>
                </h3>
              </div></vue-dropzone
            >
          </div>
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
    vueDropzone: () => import("vue2-dropzone"),
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
        text: `Apakah anda yakin untuk keluar dari halaman ini?`,
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
    simpan() {
      this.$swal({
        text: `Data Berhasil di simpan`,
        type: "success"
      });
    },
    submitForm(data) {
      this.beingSubmit = true;
      this.addPasien(data);
    },
    goingPlaces() {
      const tmp = {
        name: "pasien-list"
      };

      if (this.beingSubmit) {
        tmp.onComplete = this.simpan();
      }

      this.$router.push(tmp);
    },
    async addPasien(postData) {
      try {
        const res = await axios.post(
          `${this.url_api}/pasien`,
          this.mapPasienFormData(postData)
        );
        const { status, data } = res.data;
        if (status) {
          this.goingPlaces();
        }
      } catch (err) {
        alert(err);
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
