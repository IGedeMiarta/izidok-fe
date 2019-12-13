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
          <h5 class="text-uppercase font-weight-bold">tanda-tanda vital</h5>
          <b-row v-for="(data, index) in tandaVital()" :key="index">
            <b-col cols="4" class="text-capitalize">{{ data.label }}</b-col>
            <b-col cols="1">:</b-col>
            <b-col cols="7">{{ data.value }}</b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">anamnesa</h5>
          <b-row>
            <b-col cols="12">
              <p>{{ randomSentence() }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">pemeriksaan fisik</h5>
          <b-row>
            <b-col
              cols="3"
              class="text-capitalize m-2"
              v-for="data in 5"
              :key="data"
            >
              <img
                src="http://lorempixel.com/250/300/cats/"
                class="img-fluid"
                alt="img"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">diagnosa</h5>
          <b-row>
            <b-col cols="12">{{ randomSentence() }}</b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="ml-2 mt-4">
          <h5 class="text-uppercase font-weight-bold">
            konsultasi selanjutnya
          </h5>
          <b-row>
            <b-col cols="12">
              <p>06/09/2069</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-button variant="primary" class="text-capitalize float-right">download</b-button>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
import randomSentence from "random-sentence";

export default {
  data: () => ({
    loading: true
  }),
  mounted() {
    this.$root.$on("rerender", () => {
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
