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
          label: 'edit Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box">
        <div class="card-header">
          <h4 class="text-capitalize my-2">edit pasien</h4>
        </div>
        <div class="card-body">
          <PasienForm
            formType="edit"
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
import pasienMixin from "./mixins";

export default {
  props: {
    idPasien: [String, Number]
  },
  mixins: [pasienMixin],
  components: {
    // vueDropzone: () => import("vue2-dropzone"),
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
  beforeRouteEnter(to, from, next) {
    const { params } = to;
    const { idPasien } = params;
    if (!idPasien) {
      next({
        name: "pasien-list"
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
      console.log('submit',data)
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
        const res = await axios.put(
          `${this.url_api}/pasien/${this.idPasien}`,
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
