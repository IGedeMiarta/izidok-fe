<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien',
          link : '/pasien'
        },
        {
          label: 'Detail Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box">
        <div class="card-header">
          <h4 class="text-capitalize my-2">detail pasien</h4>
        </div>
        <div class="card-body">
          <PasienForm
            formType="detail"
            @keluar="goingPlaces"
            @submitForm="submitForm"
            :idPasien="idPasien"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import startCase from "lodash/startCase";

export default {
  props: {
    idPasien: [String, Number]
  },
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
  beforeRouteEnter(to, from, next) {
    const { params } = to;
    const { idPasien } = params;
    if (!idPasien) {
      next(false);
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
      this.editPasien(data);
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
    async editPasien(postData) {
      try {
        const { idPasien } = postData;
        const res = await axios.put(
          `${this.url_api}/pasien/${idPasien}`,
          postData
        );
        const { status, data } = res.data;
        if (status) {
          this.goingPlaces();
        }
      } catch (err) {
        // alert(err);
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
