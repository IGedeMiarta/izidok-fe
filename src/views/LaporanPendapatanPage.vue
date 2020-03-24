<template>
  <div>
    <page-title
      heading="Laporan Pendapatan"
      :breadcrumb="[
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Laporan Pendapatan',
          active: true
        }
      ]"
    />

    <div class="container-fluid">
      <LaporanPendapatan />
    </div>
  </div>
</template>

<script>
export default {
    components: {
        LaporanPendapatan: () => import("@/views/Home/LaporanPendapatan")
    }
}
</script>