<template>
  <div class="pr-3 py-4">
    <template v-if="loading">
      <div class="d-flex align-items-center justify-content-center min-vh-100">
        <b-spinner label="Loading..." variant="primary" class="mx-auto d-block"></b-spinner>
      </div>
    </template>
    <template v-else>
      <b-row>
        <b-col cols="12">
          {{ datetimeFormat(datarekammedis.updated_at) }}
        </b-col>
        <b-col cols="12" class="ml-3 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>tanda-tanda vital</u></h5>
          <b-row v-for="(data, index) in tandaVital()" :key="index">
            <b-col cols="4" class="text-capitalize">{{ data.label }}</b-col>
            <b-col cols="1">:</b-col>
            <b-col cols="7">{{ data.value }}</b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>anamnesa</u></h5>
          <b-row>
            <b-col cols="12">
              <template v-if="this.datarekammedis.anamnesa.notes !== null">
                <p v-html="this.datarekammedis.anamnesa.notes"></p>
              </template>
              <template v-if="this.datarekammedis.anamnesa.draw_path !== null">
                <img :src="this.datarekammedis.anamnesa.draw_path" class="img-fluid" alt="img" />
              </template>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>pemeriksaan fisik</u></h5>
          <template v-if="this.datarekammedis.pemeriksaan_fisik.notes !== null">
            <p v-html="this.datarekammedis.pemeriksaan_fisik.notes"></p>
          </template>
          <template v-if="this.datarekammedis.pemeriksaan_fisik.draw_path !== null">
            <img :src="this.datarekammedis.pemeriksaan_fisik.draw_path" class="img-fluid" alt="img" />
          </template>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>diagnosa</u></h5>
          <div v-for="items in kodediagnosa" :key="items.id">
            <p v-html="items.kode+' - '+items.description"></p>
          </div>
          <template v-if="this.datarekammedis.diagnosa.notes !== null">
            <p v-html="this.datarekammedis.diagnosa.notes"></p>
          </template>
          <template v-if="this.datarekammedis.diagnosa.draw_path !== null">
            <img :src="this.datarekammedis.diagnosa.draw_path" class="img-fluid" alt="img" />
          </template>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>tata laksana</u></h5>
          <template v-if="this.datarekammedis.tatalaksana.notes !== null">
            <p v-html="this.datarekammedis.tatalaksana.notes"></p>
          </template>
          <template v-if="this.datarekammedis.tatalaksana.draw_path !== null">
            <img :src="this.datarekammedis.tatalaksana.draw_path" class="img-fluid" alt="img" />
          </template>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">
            <u>pemeriksaan penunjang</u>
          </h5>
          <template v-if="this.datarekammedis.pemeriksaan_penunjang.notes !== null">
            <p v-html="this.datarekammedis.pemeriksaan_penunjang.notes"></p>
          </template>
          <template v-if="this.datarekammedis.pemeriksaan_penunjang.draw_path !== null">
            <img :src="this.datarekammedis.pemeriksaan_penunjang.draw_path" class="img-fluid" alt="img" />
          </template>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <b-row>
            <b-col cols="12">
              <p>Uploaded File : </p>
              <template v-if="this.datarekammedis.pemeriksaan_penunjang.files !== 'null'">
                <div v-for="items in datafile" :key="items.id">
                  <a :href="items.url" target="_blank">{{items.name}}</a>
                </div>
              </template>
              <template v-else>
                <strong>Data upload file tidak ada</strong> 
              </template>
            </b-col>
          </b-row>
        </b-col>
        <template v-if="this.datarekammedis.transklinik.tgl_next_konsultasi !== '1970-01-01'">
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">
            <u>konsultasi selanjutnya</u>
          </h5>
          <b-row>
            <b-col cols="12">
              <p>{{ dateFormat(datarekammedis.transklinik.tgl_next_konsultasi) }}</p>
            </b-col>
          </b-row>
        </b-col>
        </template>
      </b-row>
    </template>
  </div>
</template>

<script>
  import randomSentence from "random-sentence";
  import axios from "axios";
  import moment from "moment";
  export default {
    props: ["rekam_medis"],
    data: () => ({
      loading: true,
      datafile: null,
      datarekammedis: [],
      idRekamMedis: null,
      kodediagnosa: [],
    }),
    mounted() {
      this.idRekamMedis = this.rekam_medis;
      this.$root.$on("rerender", (id) => {
        this.showrightRekamMedis(id);
        if (!this.loading) {
          this.loading = true;
          this.resetLoading();
        }
      });
      this.resetLoading();
    },
    methods: {
      resetLoading() {
        setTimeout(() => {
          this.loading = false;
        }, this.randomNumber());
      },
      async showrightRekamMedis(id) {
        let res = await axios.get(`${this.url_api}/rekam_medis/${id}`);
        this.datarekammedis = res.data.data;
        if (this.datarekammedis.pemeriksaan_penunjang.files) {
          this.datafile = JSON.parse(this.datarekammedis.pemeriksaan_penunjang.files);
        }
        this.kodediagnosa = res.data.data.kode_diagnosa;
      },
      tandaVital() {
        const tmp = [{
            label: "tensi sistole",
            value: this.datarekammedis.anamnesa.tensi_sistole ? this.datarekammedis.anamnesa.tensi_sistole+' mmHg' : '0 mmHg'
          },
          {
            label: "tensi diastole",
            value: this.datarekammedis.anamnesa.tensi_diastole ? this.datarekammedis.anamnesa.tensi_diastole+' mmHg' : '0 mmHg'
          },
          {
            label: "nadi",
            value: this.datarekammedis.anamnesa.nadi ? this.datarekammedis.anamnesa.nadi+' Kali/Menit' : '0 Kali/Menit'
          },
          {
            label: "suhu",
            value: this.datarekammedis.anamnesa.suhu ? this.datarekammedis.anamnesa.suhu+' C' : '0 C'
          },
          {
            label: "respirasi",
            value: this.datarekammedis.anamnesa.respirasi ? this.datarekammedis.anamnesa.respirasi+' Kali/Menit' : '0 Kali/Menit'
          },
          {
            label: "tb".toUpperCase(),
            value: this.datarekammedis.anamnesa.tinggi_badan ? this.datarekammedis.anamnesa.tinggi_badan : '0'
          },
          {
            label: "bb".toUpperCase(),
            value: this.datarekammedis.anamnesa.berat_badan ? this.datarekammedis.anamnesa.berat_badan : '0'
          }
        ];
        return tmp;
      },
      randomSentence: randomSentence,
      randomNumber() {
        return Math.floor(Math.random() * 1000);
      },
      dateFormat(d) {
        return moment(d).format("DD MMM YYYY")
      },
      datetimeFormat(d) {
        return moment(d).format("DD MMM YYYY HH:mm:ss")
      },
    }
  };
</script>