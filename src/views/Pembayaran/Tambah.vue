<template>
  <div>
    <page-title
      heading="Pembayaran"
      :breadcrumb="[
        {
          label: 'Manajemen Pembayaran'
        },
        {
          label: 'Pembayaran',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box border-0">
        <div class="card-header border-0 py-4 px-5">
          <div class="d-flex flex-column w-100">
            <span class="text-capitalize mb-1">senin, 19 november 2019</span>
            <b-row
              v-for="(data, index) in headerData"
              :key="index"
              class="mb-1"
            >
              <b-col cols="2">{{ data.label }}</b-col>
              <b-col cols="auto">:</b-col>
              <b-col cols="auto">{{ data.value }}</b-col>
            </b-row>
          </div>
        </div>
        <div class="card-body">
          <TablePembayaran />
        </div>
        <div class="card-footer">
          <div class="px-4 py-2 d-flex flex-row justify-content-end">
            <div class="w-50 d-flex flex-column text-capitalize">
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">total</b-col>
                <b-col cols="5">
                  <b-form-input />
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">potongan</b-col>
                <b-col cols="5">
                  <b-form-input />
                </b-col>
                <b-col cols="auto">%</b-col>
              </b-row>
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">total nett</b-col>
                <b-col cols="5">
                  <b-form-input />
                </b-col>
              </b-row>
              <div class="w-100 mt-2 d-flex">
                <b-button variant="danger" class="text-uppercase mr-3"
                  >preview struk</b-button
                >
                <b-button variant="success" class="text-uppercase mr-3"
                  >simpan</b-button
                >
                <b-button variant="primary" class="text-uppercase"
                  >bayar</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import upperCase from "lodash/upperCase";

export default {
  components: {
    TablePembayaran: () => import("./TablePembayaran.vue")
  },
  data: () => ({
    headerData: [
      {
        label: `${startCase("no")}. ${upperCase("rm")}`,
        value: null
      },
      {
        label: `${startCase("nama pasien")}`,
        value: null
      },
      {
        label: `${startCase("jaminan")}`,
        value: null
      },
      {
        label: `${startCase("nama dokter")}`,
        value: null
      },
      {
        label: `${startCase("waktu masuk")}`,
        value: null
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
// .card {
//   border-width: 0;
// }
.card {
  .card-header {
    background-color: #eaf9e6;
  }
}
</style>
