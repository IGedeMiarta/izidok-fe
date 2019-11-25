<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="container">
                <b-modal centered v-model="modalShow" no-close-on-backdrop hide-header-close>
                  <p>
                    {{ text[state] }}
                  </p>
                  <div slot="modal-footer">
                    <b-button @click="redirectToLogin" variant="primary">
                      {{ state == 'success' ? 'Login' : 'Kembali ke Login' }}
                    </b-button>
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
  props: ['state'], // success | already-activated | expired
  data() {
    return {
      modalShow: false,
      text: {
        'success'           : 'Akun Anda berhasil diaktivasi. Silakan login untuk mengakses iziDok.',
        'already-activated' : 'Akun Anda gagal diaktivasi. Email anda telah teraktivasi sebelumnya.',
        'failed'            : 'Akun Anda gagal diaktivasi. Lakukan aktivasi ulang.',
      }
    };
  },
  beforeRouteEnter: (to, from, next) => {
    if([
      'success', 
      'already-activated', 
      'failed'].includes(to.params.state)) {
      next()
    }
    else {
      next('/')
    }

    // if (!to.params.summary) {
    //   next("/");
    // } else {
    //   next(vm => {
    //     vm.prevRoute = from
    //   });
    // }
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
