<template>
  <!-- <div>
    <div class="app-content--inner p-0 d-flex flex-column"> -->
  <div>
    <b-row class="my-4">
      <b-col cols="12">
        <div>
          <ol class="d-inline-block breadcrumb text-uppercase font-size-xs p-0">
            <li class="d-inline-block breadcrumb-item">
              <a href="javascript:void(0);">Beranda</a>
            </li>
            <li
              class="d-inline-block breadcrumb-item active"
              aria-current="page"
            >
              dashboard
            </li>
          </ol>
          <div class="d-flex flex-row align-items-center">
            <h5 class="display-4 mt-1 mb-1 font-weight-bold text-capitalize flex-grow-1">
              dashboard
            </h5>
            <h5 class="display-4 mt-1 mb-1 font-weight-bold text-capitalize">
              Hari ini, {{ nowIndonesia }}
            </h5>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="align-items-center">
      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <CardDashboard
              title="pasien baru"
              :highlight="5"
              bg-color="bg-first"
            />
          </b-col>
          <b-col cols="6">
            <CardDashboard
              title="pasien rawat jalan"
              :highlight="dataRawatJalan"
              bg-color="bg-success"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <CardDashboard title="antrean" :highlight="nomor_antrean" />
          </b-col>
          <b-col cols="6">
            <CardDashboard
              title="pendapatan"
              highlight="1.500.000"
              bg-color="bg-warning"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col>
            <TableDashboard />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="d-flex">
      <!-- <TrendPasien class="flex-grow-1 my-2" :seriesData="dataSeries" /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "home",
  components: {
    CardDashboard: () => import("@/components/CardDashboard"),
    TableDashboard: () => import("@/components/TableDashboard")
    // TrendPasien: () => import("@/components/TrendPasien")
  },
  mounted() {
    Promise.all([
      this.getAntrean(),
      this.getRawatJalan(),
      this.getPasienBaru()
    ]);
  },
  computed: {
    now() {
      return moment().format("YYYY-MM-DD");
    },
    nowIndonesia() {
      moment.locale('ID')
      return moment().format('D MMMM YYYY')
    }
  },
  methods: {
    async getRawatJalan() {
      try {
        var today = new Date();
        var dateToday = today.getDate();
        const res = await axios.get(
          `${this.url_api}/dash-rawat-jalan?from=${this.now}&to=${this.now}`
        );
        const { status, data } = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getPasienBaru() {
      try {
        var today = new Date();
        var dateToday = today.getDate();
        var date =
          today.getFullYear() +
          "-" +
          "0" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const res = await axios.get(
          `${this.url_api}/dash-pasien?type=date_range&from=${date}&to=${date}`
        );
        const { status, data } = res;
      } catch (err) {
        console.log(err);
      }
    },
    async getAntrean() {
      try {
        const res = await axios.get(`${this.url_api}/dash-antrian`);
        const {
          status,
          data: { nomor_antrian = 0 }
        } = res.data;
        if (status) {
          this.nomor_antrean = nomor_antrian;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  data: () => ({
    nomor_antrean: 0,
    pasienBaru: 0,
    dataRawatJalan: 0
    // dataSeries: [
    //   {
    //     name: "Pasien Baru",
    //     type: "column",
    //     data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    //   },
    //   {
    //     name: "Pasien Rawat Jalan",
    //     type: "column",
    //     data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    //   },
    //   {
    //     name: "Pendapatan",
    //     type: "line",
    //     data: [20, 29, 37, 36, 44, 45, 50, 58]
    //   }
    // ]
  })
};
</script>

<style lang="scss">
.apexcharts-title-text {
  font-weight: 800 !important;
}
</style>
