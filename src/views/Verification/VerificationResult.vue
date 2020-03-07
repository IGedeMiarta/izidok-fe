<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="container">
                <b-modal
                  centered
                  v-model="modalShow"
                  no-close-on-backdrop
                  hide-header-close
                  header-class="d-none"
                  footer-class="border-0 pt-0"
                  body-class="pb-2 pt-4"
                  content-class="shadow-none border-0 p-3"
                  dialog-class="modal-verification"
                >
                  <template v-slot:modal-backdrop>
                    <div
                      style="width: 100%; height: 100%; background-color: #fff; position: absolute;"
                      class="fck-this-backdrop"
                    ></div>
                  </template>
                  <strong style="color : #3F7EA7;font-size:16px;"> 
                    {{ text[state] }}
                  </strong>
                  <div slot="modal-footer">
                   <template v-if="state == 'success' || state == 'failed' || state == 'already-activated'">
                    <b-button @click="redirectToLogin" style="background-color :#3F7EA7;margin-right:19px;margin-top : 15px;color:white" >
                      <template v-if="state == 'success' ">
                        Login
                      </template>
                      <template v-else>
                        Kembali ke Login
                      </template>
                    </b-button>
                   </template>
                   <template v-else> 
                    <b-button @click="redirectToRegister" style="background-color :#3F7EA7;margin-right:19px;margin-top : 15px;color:white" >  
                        Kembali ke Registrasi
                    </b-button>
                   </template>
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
  props: ["state"], // success | already-activated | expired
  data() {
    return {
      modalShow: false,
      text: {
        success:
          "Akun Anda berhasil diaktivasi. Silakan login untuk mengakses izidok.",
        "already-activated":
          "Akun Anda gagal diaktivasi. Email Anda telah teraktivasi sebelumnya.",
        failed: "Akun Anda gagal diaktivasi. Lakukan aktivasi ulang.",
        expired : "Link aktivasi telah berakhir, silahkan lakukan registrasi ulang!"
      }
    };
  },
  beforeRouteEnter: (to, from, next) => {
    if (["success", "already-activated", "failed","expired"].includes(to.params.state)) {
      next();
    } else {
      next("/");
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
    },
    redirectToRegister(){
      this.$router.replace("/register");
    }
  },
  mounted() {
    this.toggleModal();
    console.log(this.$refs.modalVerification);
  },
  destroyed() {
    this.toggleModal();
  }
};
</script>

<style lang="scss">
.fck-this-backdrop {
  background-image: url("~@/assets/img/confirm-signup.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.modal-verification {
  max-width: 580px;
}
</style>
