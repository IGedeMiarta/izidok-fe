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
          <PasienForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";

export default {
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
    }
  }),
  beforeRouteLeave(to, from, next) {
    this.$swal({
      title: startCase("keluar"),
      text: `Apakah anda yakin untuk keluar dari halaman ini?`,
      type: "warning",
      showCancelButton: true,
      cancelButtonText: startCase("tidak"),
      confirmButtonText: startCase("ya")
    }).then(res => {
      if (res.value) {
        this.tambahPasien();
        next();
      } else {
        next(false);
      }
    });
  },
  methods: {
    tambahPasien() {
      this.$swal({
        text: `Data Berhasil di simpan`,
        type: "success"
      });
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
