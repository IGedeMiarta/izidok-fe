<template>
  <div>
    <page-title
      heading="Pembayaran"
      :breadcrumb="[
        {
          label: 'Pembayaran'
        },
        {
          label: 'Daftar Pembayaran',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h3 class="text-capitalize">preview struk</h3>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-top">
            <div class="d-flex flex-column justify-cotent-center w-50">
              <Struk class="flex-grow-1" />
            </div>
            <div class="flex-shrink-1">
              <button type="button" class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    Struk: () => import("./Struk.vue")
  },
  computed: {
    ...mapGetters({
      strukVal: "struk/struk_values"
    })
  },
  mounted() {
    console.log(this.strukVal);
  }
};
</script>
