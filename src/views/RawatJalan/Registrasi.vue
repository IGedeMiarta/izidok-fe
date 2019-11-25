<template>
  <div>
    <page-title
      heading="Registrasi Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan'
        },
        { label: 'registrasi', active: true }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-header">
          <h4 class="text-capitalize my-2">form registrasi rawat jalan</h4>
        </div>
        <div class="card-body">
          <b-form>
            <b-form-group label="no rekam medis" class="text-capitalize">
              <b-form-input trim />
            </b-form-group>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>
