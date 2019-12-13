<template>
  <div class="py-3">
    <b-row>
      <b-col cols="12">
        <h5 class="text-capitalize font-weight-bold">cari berdasarkan:</h5>
      </b-col>
      <b-col cols="12">
        <b-row>
          <b-col cols="4">
            <b-form-group label="Bulan">
              <b-form-select :options="monthName()"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group label="Tahun">
              <b-form-select :options="yearValues()"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="4" class="d-flex align-items-center">
            <b-button variant="primary" class="text-capitalize">cari</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="mt-4">
        <h5 class="text-uppercase font-weight-bold">riwayat rekam medis</h5>
        <b-row class="pl-1 pr-4">
          <b-col
            cols="4"
            v-for="(data, index) in [
              'cat headache',
              'cat sore',
              'catfluenza',
              'cat cough'
            ]"
            :key="index"
            class="mb-4"
          >
            <div class="my-4 mx-0 p-0 position-relative h-100">
              <img src="@/assets/img/cat.jpg" class="img-fluid" />
              <div
                class="card card-box position-absolute w-100 rounded-0 border-0"
                style="bottom: 0; background-color: #214179; color: #fff; cursor: pointer"
                @click="rerender"
              >
                <div class="card-body text-capitalize text-center py-1">
                  <b-row>
                    <b-col cols="12"> 1{{ index }}/12/2019</b-col>
                    <b-col cols="12">{{ data }}</b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    rerender() {
      this.$root.$emit("rerender");
    },
    monthName() {
      return Array.apply(0, Array(12)).map(function(_, i) {
        return moment()
          .month(i)
          .format("MMMM");
      });
    },
    yearValues() {
      const dateStart = moment("1969-01-01");
      const dateEnd = moment("2019-12-31");
      const timeValues = [];

      while (
        dateEnd > dateStart ||
        dateStart.format("M") === dateEnd.format("M")
      ) {
        timeValues.push(dateStart.format("YYYY"));
        dateStart.add(1, "year");
      }

      return timeValues;
    }
  }
};
</script>
