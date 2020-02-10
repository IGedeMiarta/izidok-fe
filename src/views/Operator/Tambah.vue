<template>
  <div>
    <page-title
      heading="Manajemen Operator"
      :breadcrumb="[
        {
          label: 'Manajemen Operator'
        },
        {
          label: 'Tambah Operator',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h4>Tambah Operator</h4>
            <!--  <small>Custom</small>
              <b>Example widget with table inside.</b> -->
          </div>
        </div>
        <div class="card-body">
          <div class="container">
            <div class="col-md-12 no-padding mb-4">
              <h4>Data Operator</h4>
            </div>
            <div class="form-row">
              <b-form-group
                label="Nama Operator*"
                class="text-capitalize col-md-6 pr-3"
                style="position: relative"
              >
                <b-form-input
                />
              </b-form-group>
            </div>
            <div class="form-row">
              <b-form-group
                label="Email*"
                class="text-capitalize col-md-6 pr-3"
                style="position: relative"
              >
                <b-form-input
                />
              </b-form-group>
            </div>
            <div class="form-row">
              <div class="col-md-6 pr-3">
                <b-button variant="first" class="float-right pr-5 pl-5"
                  >SIMPAN</b-button
                >
                <b-button variant="danger" class="float-right pr-5 pl-5 mr-3"
                  >KELUAR</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-md-12"
        style="border-radius:10px;"
      >
        <div class="p-3">
          <b-pagination
            class="d-flex justify-content-center mt-4"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>
<style scoped lang="css">
.no-padding {
  padding: 0 !important;
}
</style>
