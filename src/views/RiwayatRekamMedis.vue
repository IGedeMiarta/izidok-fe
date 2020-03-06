<template>
  <div>
    <page-title
      heading="Rekam Medis"
      :breadcrumb="[
        {
          label: 'Rekam Medis'
        },
        {
          label: 'Riwayat',
          active: true
        }
      ]"
      defaultSlotCol="7"
      rightSlot
    >
      <template v-slot:defaultSlot>
        <b-col cols="8">
          <b-row>
            <b-col cols="12">
              <h5 class="display-4 mt-1 mb-2 font-weight-bold">Riwayat Rekam Medis</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <p class="text-uppercase mb-2">Nama Pasien</p>
            </b-col>
            <b-col cols="1">:</b-col>
            <b-col cols="7">
              <p class="text-uppercase mb-2">{{ pasien.nama }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <p class="text-uppercase mb-2">Nomor Rekam Medis</p>
            </b-col>
            <b-col cols="1">:</b-col>
            <b-col cols="7">
              <p class="text-uppercase mb-2">{{ pasien.nomor_rekam_medis }}</p>
            </b-col>
          </b-row>
        </b-col>
      </template>
      <template v-slot:rightSlot>
        <b-col
          cols="4"
          class="d-flex align-items-center justify-content-around"
        >
          <b-button variant="primary" class="text-uppercase" @click="kembali()">kembali</b-button>
          <b-button
            variant="info" class="text-uppercase"
            @click="
              rekamMedis({
               pasien_id: pasien.id,
               klinik_id: pasien.klinik_id
               })"
            >tulis rekam medis</b-button>
        </b-col>
      </template>
    </page-title>
    <div class="container">
      <div class="card card-box " >
        <div class="card-body p-4">
<<<<<<< HEAD
          <b-row style="height:700px;">
            <b-col sm="6">
              <LeftColumn class="rrm-content"/>
            </b-col>
            <b-col sm="6" >
=======
          <b-row>
            <b-col cols="6">
              <LeftColumn class="rrm-content" />
            </b-col>
            <b-col cols="6">
>>>>>>> b73c371089f6d7873ab61d675a2c85dc5efdd895
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
import { library } from "@fortawesome/fontawesome-svg-core";
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


<<<<<<< HEAD
  library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);
  export default {
    props: {
      pasien_id: Number,
    },
    data() {
      return {
        pasien: "",
        klinik_id: ""
      }
    },
    components: {
      LeftColumn: () => import("./RiwayatRekamMedis/LeftColumn.vue"),
      RightColumn: () => import("./RiwayatRekamMedis/RightColumn.vue")
    },
    methods: {
      kembali() {
        this.$router.back();
      },
      async fetchPasien() {
        let res = await axios.get(`${this.url_api}/pasien/${this.pasien_id}`);
        this.pasien = res.data.data;
      },
      rekamMedis({
        pasien_id,
        klinik_id
      }) {
        this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
      },
=======
library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);
export default {
  props: {
    pasien_id: Number
  },
  data() {
    return {
      pasien: "",
      klinik_id: ""

    }
  },
  components: {
    LeftColumn: () => import("./RiwayatRekamMedis/LeftColumn.vue"),
    RightColumn: () => import("./RiwayatRekamMedis/RightColumn.vue")
  },
  methods: {
    kembali() {
        this.$router.back();
    },
    async fetchPasien() {
      let res = await axios.get(`${this.url_api}/pasien/${this.pasien_id}`);
      this.pasien = res.data.data;

>>>>>>> b73c371089f6d7873ab61d675a2c85dc5efdd895
    },
        rekamMedis({ pasien_id, klinik_id }) {
         this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
     },

  },
  mounted() {
    this.fetchPasien()

  }
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
  .rrm-content {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 700px;
    margin-top:20px;
  }

  @media (max-width: 300px) {
    .rrm-content {
      margin-top:20px;
      max-height: 200px;
    }
=======
.rrm-content {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 450px;
}

@media (max-width: 300px) {
  .rrm-content {
    max-height: 200px;
>>>>>>> b73c371089f6d7873ab61d675a2c85dc5efdd895
  }
}
</style>
