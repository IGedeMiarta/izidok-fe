<template>
  <b-modal centered v-model="modalShow">
    <p>Akun Anda berhasil diaktivasi. Silakan login untuk mengakses iziDok</p>
    <div slot="modal-footer">
      <b-link to="login" variant="primary">Login</b-link>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false
    };
  },
  mounted() {
    this.modalShow = !this.modalShow;
  }
};
</script>
