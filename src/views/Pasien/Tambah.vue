<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien'
        },
        {
          label: 'Tambah Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box">
        <div class="card-header">
          <h4 class="text-capitalize my-2">form registrasi rawat jalan</h4>
        </div>
        <div class="card-body">
          <PasienForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PasienForm: () => import("./PasienForm")
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
<style scoped lang="css">
.no-padding {
  padding: 0 !important;
}
</style>
