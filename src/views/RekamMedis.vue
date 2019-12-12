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
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
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
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
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
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
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
                    <font-awesome-icon icon="angle-up" class="font-size-xl" />
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
            <div class="col-xl-12 d-flex justify-content-xl-end">
              <button class="btn btn-success m-2">Download</button>
              <button class="btn btn-info m-2">Keluar</button>
              <button @click="save()" class="btn btn-primary m-2 btn-spinner">
                <b-spinner v-show="saving_params.is_saving" class="btn-wrapper--icon" small></b-spinner>
                <span class="btn-wrapper--label">Simpan</span>
              </button>
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
  faEraser,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPenAlt, faKeyboard, faEraser, faAngleUp);

import { mapGetters, mapActions } from "vuex";
import router from "@/router";

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
  methods: {
    ...mapActions(["fetchData", "saveRekamMedis"]),
    async save() {
      const saving = await this.saveRekamMedis();

      if (!this.saving_params.is_next_konsul) {
        return this.handleError('Anda belum memilih durasi konsultasi!');
      }

      if (!this.saving_params.is_agree) {
        return this.handleError('Anda belum menyetujui pernyataan!');
      }

      if (!this.saving_params.is_saved) {
        return this.handleError('Penyimpanan Rekam Medis gagal!');
      }

      return this.$swal(
        "Rekam medis tersimpan!",
        "Klik tombol untuk melanjutkan!",
        "success"
      ).then(res => {
        router.push({
          path: "/pembayaran"
        });
      });
    },
    handleError(message) {
    return this.$swal({
      type: "error",
      title: "Oops...",
      text: message
    });
  },
  },
  computed: mapGetters(["pasien", "saving_params"]),
  created() {
    this.fetchData();
  }
};
</script>

<style>
.dot {
  margin-right: 8px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}

.icon {
  color: #cccccc;
}

.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.3);
}

.active {
  color: #464159;
  transform: scale(1.3);
}

.color_active {
  transform: scale(1.3);
}
</style>
