<template>
  <div>
    <top
      v-bind:heading="pasien.nama"
      v-bind:subheading="'NOMOR: '+pasien.nomor_rekam_medis+' / '+pasien.jenis_kelamin+' / ? Tahun'"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div>
            <div class="accordion mb-5">
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                    v-b-toggle.accordion-1
                  >
                    <span>Anamnesa</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Anamnesa v-bind:pasien="pasien" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-2
                  >
                    <span>Pemeriksaan Fisik</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Pemeriksaan v-bind:organs="organs" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-3
                  >
                    <span>Diagnosa</span>
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
                  </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Diagnosa />
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "./RekamMedis/Header.vue";
import Anamnesa from "./RekamMedis/Anamnesa";
import Pemeriksaan from "./RekamMedis/Pemeriksaan.vue";
import Diagnosa from "./RekamMedis/Diagnosa";
import axios from "axios";

export default {
  name: "RekamMedis",
  components: {
    top,
    Anamnesa,
    Pemeriksaan,
    Diagnosa
  },
  data() {
    return {
      organs: [],
      pasien: {}
    };
  },
  methods: {
    getOrgan() {
      let self = this;
      axios
        .get("http://localhost:9000/api/v1/organ", {
          headers: {
            Authorization:
              "Bearer RnkySmZJRUg5bHYzODNpS1d1UnV4ajJ0ZFpGSVhrVlVUTVNzY0N1Qg==",
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          let res = response.data.data;
          self.organs = res.organ;

          console.log(res.organ);
        })
        .catch(err => console.log(err));
    },
    getPasien() {
      let self = this;
      axios
        .get("http://localhost:9000/api/v1/pasien/1", {
          headers: {
            Authorization:
              "Bearer RnkySmZJRUg5bHYzODNpS1d1UnV4ajJ0ZFpGSVhrVlVUTVNzY0N1Qg==",
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          let res = response.data;
          self.pasien = res.data;

          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getOrgan();
    this.getPasien();
  }
};
</script>
