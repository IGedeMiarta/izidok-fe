<template>
  <div>
    <Top
      v-bind:heading="dataPasien.nama"
      v-bind:subheading="'NOMOR: '+dataPasien.nomor_rekam_medis+' / '+dataPasien.jenis_kelamin+' / ? Tahun'"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div>
            <div class="accordion mb-3">
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                    v-b-toggle.accordion-1
                  >
                    <span>Anamnesa</span>
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Anamnesa />
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
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Pemeriksaan ref="pemeriksaan"/>
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
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Diagnosa ref="diagnosa"/>
                  </div>
                </b-collapse>
              </div>
            </div>
            <Footer />
            <button @click="saveData" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./RekamMedis/Header.vue";
import Footer from "./RekamMedis/Footer.vue";
import Anamnesa from "./RekamMedis/Anamnesa";
import Pemeriksaan from "./RekamMedis/Pemeriksaan.vue";
import Diagnosa from "./RekamMedis/Diagnosa";
import axios from "axios";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "RekamMedis",
  components: {
    Top,
    Anamnesa,
    Pemeriksaan,
    Diagnosa,
    Footer
  },
   methods: {
    ...mapActions(['fetchPasien', 'fetchOrgans', 'saveRekamMedis']),
    saveData(){
        // get data anamnesa
        // this.saveRekamMedis(this.dataPasien);
        
        // get data pemeriksaan
        // this.$refs.pemeriksaan.toDataUrl();

        // get data diagnosa
        // this.$refs.diagnosa.toDataUrl();
        // console.log(this.dataKodePenyakit);
    }
  },
  computed: mapGetters(['dataPasien', 'dataOrgans', 'dataKodePenyakit']),
  created() {
    this.fetchPasien();
    this.fetchOrgans();
  }
};
</script>
