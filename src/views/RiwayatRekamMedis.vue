<template>
  <div>
    <page-title
      heading="Rekam Medis"
      :breadcrumb="[
        {
          label: 'Rekam Medis'
        },
        {
          label: 'Riwayat',
          active: true
        }
      ]"
      defaultSlotCol="7"
      rightSlot
    >
      <template v-slot:defaultSlot>
        <b-col cols="7">
          <b-row v-for="(data, index) in headerData()" :key="index">
            <b-col cols="4">
              <p class="text-uppercase mb-2">{{ data.label }}</p>
            </b-col>
            <b-col cols="1">:</b-col>
            <b-col cols="7"
              ><p class="text-uppercase mb-2">{{ data.value }}</p></b-col
            >
          </b-row>
        </b-col>
      </template>
      <template v-slot:rightSlot>
        <b-col
          cols="5"
          class="d-flex align-items-center justify-content-around"
        >
          <b-button variant="primary" class="text-uppercase">kembali</b-button>
          <b-button variant="info" class="text-uppercase"
            >tulis rekam medis</b-button
          >
        </b-col>
      </template>
    </page-title>
    <div class="container">
      <div class="card card-box">
        <div class="card-body p-4">
          <b-row>
            <b-col cols="6">
              <LeftColumn class="rrm-content" />
            </b-col>
            <b-col cols="6">
              <RightColumn class="rrm-content" />
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    LeftColumn: () => import("./RiwayatRekamMedis/LeftColumn.vue"),
    RightColumn: () => import("./RiwayatRekamMedis/RightColumn.vue")
  },
  methods: {
    headerData() {
      return [
        {
          label: "nama pasien",
          value: "mega ceriawaty"
        },
        {
          label: "no rm",
          value: "00000001-01"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.rrm-content {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 450px;
}

@media (max-width: 300px) {
  .rrm-content {
    max-height: 200px;
  }
}
</style>
