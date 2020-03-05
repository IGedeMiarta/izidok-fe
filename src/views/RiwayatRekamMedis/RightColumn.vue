<template>
  <div class="pr-3 py-4">
    <template v-if="loading">
      <div class="d-flex align-items-center justify-content-center min-vh-100">
        <b-spinner
          label="Loading..."
          variant="primary"
          class="mx-auto d-block"
        ></b-spinner>
      </div>
    </template>
    <template v-else>
      <b-row>
        <b-col cols="12">
          10/12/2019
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
              <p>
                Sudah 5 hari demam tidak turun. Sempat kejang dan kaku leher.
                Minum obat paracetamol lupa di telan.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>pemeriksaan fisik</u></h5>
          <img src="@/assets/img/badan.jpeg" class="img-fluid" alt="img" />
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>diagnosa</u></h5>
          <b-row>
            <b-col cols="12">
              <p>J010 : Tetanus</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold"><u>tata laksana</u></h5>
          <b-row>
            <b-col cols="12">
              <p>Antibiotik, Debridement Luka</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">
            <u>pemeriksaan penunjang</u>
          </h5>
          <b-row>
            <b-col cols="12">
              <p>Pemeriksaan darah rutin</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <b-row>
            <b-col cols="12">
              <p>Uploaded File : </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">
           <u>konsultasi selanjutnya</u>
          </h5>
          <b-row>
            <b-col cols="12">
              <p>04/09/2010</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-button variant="primary" class="text-capitalize float-right"
            >download</b-button
          >
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
import randomSentence from "random-sentence";

export default {
  data: () => ({
    loading: true,
    datarekammedis : []
  }),
  mounted() {
    this.$root.$on("rerender", () => {
      if (!this.loading) {
        this.loading = true;
        this.resetLoading();
      }
    });
    this.showrightRekamMedis();
    this.resetLoading();
  },
  methods: {
    resetLoading() {
      setTimeout(() => {
        this.loading = false;
      }, this.randomNumber());
    },
     async showrightRekamMedis() {
          try {
              var isRoute = this.$router.currentRoute.params.id;
              const res = await axios.get(
                  `${this.url_api}/rekam_medis/${isRoute}`
              );
              const { status, data } = res.data;
              if (status) {
                  this.datarekammedis = res.data;
              }
          } catch (err) {
              // alert(err);
          }
      },
    tandaVital() {
      const tmp = [
        {
          label: "tensi sistole",
          value: `${this.randomNumber()} mmHg`
        },
        {
          label: "tensi diastole",
          value: `${this.randomNumber()} mmHg`
        },
        {
          label: "nadi",
          value: `${this.randomNumber()} Kali/Menit`
        },
        {
          label: "suhu",
          value: `${this.randomNumber()} C`
        },
        {
          label: "respirasi",
          value: `${this.randomNumber()} Kali/Menit`
        },
        {
          label: "tb".toUpperCase(),
          value: this.randomNumber()
        },
        {
          label: "bb".toUpperCase(),
          value: this.randomNumber()
        }
      ];

      return tmp;
    },
    randomSentence: randomSentence,
    randomNumber() {
      return Math.floor(Math.random() * 1000);
    }
  }
};
</script>
