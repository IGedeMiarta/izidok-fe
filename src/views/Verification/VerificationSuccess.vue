<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="container">
                <b-modal centered v-model="modalShow">
                  <p>
                    Akun Anda berhasil diaktivasi. Silakan login untuk mengakses
                    iziDok
                  </p>
                  <div slot="modal-footer">
                    <b-button @click="redirectToLogin" variant="primary"
                      >Login</b-button
                    >
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false
    };
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
    redirectToLogin() {
      this.$router.replace("/login");
    }
  },
  mounted() {
    this.toggleModal();
  },
  destroyed() {
    this.toggleModal();
  }
};
</script>
