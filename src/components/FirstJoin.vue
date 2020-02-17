<template>
  <div class="app-wrapper bg-white">
    <div class="app-content p-0">
      <div class="flex-grow-1 w-100 d-flex align-items-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 pl-0 d-none d-lg-flex align-items-center">
              <img src="@/assets/img/forgot.jpg" class="img-fluid" alt="lupa password izidok" />
            </div>
            <div class="col-md-6 first-join">
              <div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-5 w-100">
                      <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                        style="width: 49% !important;">
                    </div>
                  </div>
                  <div class="col-md-10">
                    <br>
                    <p style="color:gray">
                      Selamat bergabung dengan izidok
                    </p>
                    <p style="color:gray">izidok siap membantu untuk memudahkan Anda dalam menangani pasien dan tempat
                      praktik
                      anda</p>
                    <router-link :to="{name:'input-tarif',params:{klinik_id:klinik_id}}"
                      class="btn btn-lg btn-block mt-4 "
                      style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                      Masuk
                    </router-link>
                  </div>
                </div>
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
    props: ["modalShow", 'klinik_id'],
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

<style scoped>
  .first-join {
    margin-top: 150px;
  }

  @media only screen and (max-width: 600px) {
    .first-join {
      margin-top: 35px;
    }
  }
</style>