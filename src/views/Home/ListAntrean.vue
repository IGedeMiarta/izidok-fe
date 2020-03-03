<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <span class="text-capitalize mx-2" style="width: 150px"
        >antrean hari ini :</span
      >
      <b-input class="w-50 mr-2" size="sm" />
      <div class="d-flex justify-content-between ml-2">
        <b-button variant="primary" size="sm" class="text-capitalize mr-2"
          >tambah antrean</b-button
        >
        <b-button variant="primary" size="sm" class="text-capitalize mr-2"
          >registrasi pasien baru</b-button
        >
      </div>
    </div>
    <b-table :items="items"> </b-table>
    <b-pagination class="d-flex justify-content-center mt-4"></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          no_urut: 21,
          nama_pasien: "Dickerson",
          jenis_kelamin: "L",
          status_pasien: "Konsultasi"
        },
        {
          no_urut: 22,
          nama_pasien: "Larsen",
          jenis_kelamin: "L",
          status_pasien: "Menunggu"
        },
        {
          no_urut: 23,
          nama_pasien: "Geneva",
          jenis_kelamin: "L",
          status_pasien: "Menunggu"
        },
        {
          no_urut: 24,
          nama_pasien: "Jami",
          jenis_kelamin: "L",
          status_pasien: "Menunggu"
        }
      ]
    };
  }
};
</script>
