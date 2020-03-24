<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="-fluid">
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
                    Link atur ulang password telah berakhir!
                  </strong>
                  <div slot="modal-footer">
                    <b-button @click="redirectToLogin" style="background-color :#3F7EA7;margin-right:19px;margin-top : 15px;color:white" >
                      {{ state == "success" ? "Login" : "Kembali ke Login" }}
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
  props: ["state"], // success | already-activated | expired
  data() {
    return {
      modalShow: false,
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
