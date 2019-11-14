<template>
  <div>
    <b-modal centered v-model="modalShow">
      <p>Akun Anda berhasil diaktivasi. Silakan login untuk mengakses iziDok</p>
      <div slot="modal-footer">
        <b-button @click="redirectToLogin" variant="primary">Login</b-button>
      </div>
    </b-modal>
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
