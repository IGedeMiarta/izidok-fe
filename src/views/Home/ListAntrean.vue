<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <span class="text-capitalize mr-2" style="width: 150px">antrean hari ini :</span>
      <b-input class="w-50"/>
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
    <b-pagination
      class="d-flex justify-content-center mt-4"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>
