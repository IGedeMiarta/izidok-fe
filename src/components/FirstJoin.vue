<template>
  <b-modal
    ref="first-join-modal"
    body-class="p-0"
    :hide-footer="true"
    :hide-header="true"
    size="lg"
    centered
    no-close-on-esc
    no-close-on-backdrop
  >
    <div class="row no-gutters">
      <div class="col-lg-5">
        <img
          src="@/assets/img/stock-photos/stock-1.jpg"
          class="rounded-left img-fit-container"
          alt="..."
        />
      </div>
      <div class="col-lg-7">
        <div class="p-5">
          <img
            src="@/assets/img/illustrations/business_plan.svg"
            class="w-25 d-block img-fluid"
            alt=""
          />
          <h1 class="display-4 my-3 font-weight-bold">
            Selamat bergabung dengan iziDok
          </h1>
          <p class="font-size-lg text-black mb-4">
            iziDok siap membantu untuk memudahkan Anda dalam menangani pasien
            dan Klinik/Tempat Praktik Anda.
          </p>
          <!-- <p class="font-size-sm mb-3 text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p> -->
          <a
            href="javascript:void(0);"
            class="text-capitalize btn btn-primary btn-block"
          >
            mulai
          </a>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["modalShow"],
  mounted() {
    if (this.modalShow) {
      this.$refs["first-join-modal"].show();
    }
  }
  // computed: {
  //   modalProp: {
  //     set() {
  //       this.$emit("toggleModal");
  //     },
  //     get() {
  //       return this.modalShow;
  //     }
  //   }
  // }
};
</script>
