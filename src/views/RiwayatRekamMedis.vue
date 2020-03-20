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
              <h5 class="display-4 mt-1 mb-2 font-weight-bold">Riwayat Rekam Medis</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <p class="text-uppercase mb-2">Nama Pasien</p>
            </b-col>
            <b-col sm="1">:</b-col>
            <b-col sm="7">
              <p class="text-uppercase mb-2">{{ pasien.nama }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <p class="text-uppercase mb-2">Nomor Rekam Medis</p>
            </b-col>
            <b-col sm="1">:</b-col>
            <b-col sm="7">
              <p class="text-uppercase mb-2">{{ pasien.nomor_rekam_medis }}</p>
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
    <div class="container">
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
      kembali() {
        // this.$router.back();
        this.$router.push({
          path: '/rekam-medis'
        });
      },
      async fetchPasien() {
        let res = await axios.get(`${this.url_api}/pasien/${this.pasien_id}`);
        console.log(res.data.status);
        if (res.data.status == false || res.data.data_rm == false) {
          this.$swal({
            type: "error",
            title: startCase("Gagal"),
            text: startCase("Data Riwayat Rekam Medis tidak ditemukan!")
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
