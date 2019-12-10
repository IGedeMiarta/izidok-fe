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
          <h5 class="display-4 mt-1 mb-1 font-weight-bold text-capitalize">
            dashboard monitoring hari ini
          </h5>
        </div>
      </b-col>
    </b-row>
    <b-row class="align-items-center">
      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <CardDashboard title="pasien baru" :highlight="5" bg-color="bg-first" />
          </b-col>
          <b-col cols="6">
            <CardDashboard title="pasien rawat jalan" :highlight="15" bg-color="bg-success" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <CardDashboard title="antrean" :highlight="4" />
          </b-col>
          <b-col cols="6">
            <CardDashboard title="pendapatan" highlight="1.500.000" bg-color="bg-warning" />
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
      <TrendPasien class="flex-grow-1 my-2" :seriesData="dataSeries" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    CardDashboard: () => import("@/components/CardDashboard"),
    TableDashboard: () => import("@/components/TableDashboard"),
    TrendPasien: () => import("@/components/TrendPasien")
  },
  data: () => ({
    dataSeries: [
      {
        name: "Pasien Baru",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Pasien Rawat Jalan",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      },
      {
        name: "Pendapatan",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ]
  })
};
</script>

<style lang="scss">
.apexcharts-title-text {
  font-weight: 800 !important;
}
</style>
