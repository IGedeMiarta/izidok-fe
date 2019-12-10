<template>
  <div>
    <Top />
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
                    <span>Tanda - tanda Vital</span>
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <TandaVital />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                    v-b-toggle.accordion-2
                  >
                    <span>Anamnesa</span>
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Anamnesa />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-3
                  >
                    <span>Pemeriksaan Fisik</span>
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Pemeriksaan ref="pemeriksaan" />
                  </div>
                </b-collapse>
              </div>
              <div class="card card-box">
                <div class="card-header">
                  <b-button
                    class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed"
                    v-b-toggle.accordion-4
                  >
                    <span>Diagnosa</span>
                    <!-- <font-awesome-icon icon="angle-up" class="font-size-xl" /> -->
                  </b-button>
                </div>
                <b-collapse id="accordion-4" accordion="accordion-example" role="tabpanel">
                  <div class="card-body">
                    <Diagnosa ref="diagnosa" />
                  </div>
                </b-collapse>
              </div>
            </div>
            <Footer ref="footer" />
            <div
              class="col-xl-12 d-flex justify-content-xl-end"
            >
              <button class="btn btn-info m-2">Keluar</button>
              <button @click="saveRekamMedis" class="btn btn-primary m-2">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./RekamMedis/Header.vue";
import TandaVital from "./RekamMedis/TandaVital";
import Anamnesa from "./RekamMedis/Anamnesa";
import Pemeriksaan from "./RekamMedis/Pemeriksaan.vue";
import Diagnosa from "./RekamMedis/Diagnosa";
import Footer from "./RekamMedis/Footer.vue";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenAlt,
  faKeyboard,
  faEraser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPenAlt, faKeyboard, faEraser);

import { mapGetters, mapActions } from "vuex";

export default {
  name: "RekamMedis",
  components: {
    Top,
    TandaVital,
    Anamnesa,
    Pemeriksaan,
    Diagnosa,
    Footer
  },
  methods: mapActions(["fetchData", "saveRekamMedis"]),
  computed: mapGetters(["pasien"]),
  created() {
    this.fetchData();
  }
};
</script>
