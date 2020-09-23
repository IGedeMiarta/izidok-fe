<template>
  <div class="app-wrapper bg-light confirm-signup-bg">
    <div class="app-main">
      <!-- <router-link
        to="/register"
        exact
        class="btn btn-lg btn-success btn-go-back"
      >
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="arrow-left" />
        </span>
        <span class="btn-wrapper--label">Kembali ke halaman Pendaftaran</span>
      </router-link> -->
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div class="hero-wrapper bg-composed-wrapper min-vh-100">
                <div class="flex-grow-1 w-100 d-flex align-items-center">
                  <div class="col-lg-6 px-4 mx-auto text-center text-white">
                    <!-- <img
                      src="@/assets/img/illustrations/500.svg"
                      class="w-50 mx-auto d-block my-5 img-fluid"
                      alt=""
                    /> -->
                    <img src="@/assets/img/logo-izidok-white.png" class="w-50 mx-auto d-block mt-5 mb-2 img-fluid" />
                    <!-- <h1 class="mb-3 px-4 font-weight-bold text-capitalize">
                      pendaftaran anda berhasil
                    </h1> -->
                    <!-- moment(this.pembayaranList['created_at']).format("DD-MMMM-YYYY,  h:mm:ss a"); -->

                    <template v-if="isExpired">
                      <p class="mb-5">
                        Link aktivasi telah berakhir, silahkan lakukan registrasi ulang!
                      </p>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <button class="btn px-5 btn-first my-2 btn-lg btn-block w-75 text-capitalize"
                          @click="this.redirectToRegister">
                          Kembali ke Registrasi
                        </button>
                      </div>
                    </template>
                    <template v-else>
                      <template v-if="fromLogin === true">
                      <p class="mb-5">
                        Email Anda telah terdaftar dan sedang menunggu aktivasi
                      </p>
                      </template>
                      <template v-else>
                      <p class="mb-5">
                        Halo, Dokter! Pendaftaran akun izidok Anda hampir selesai. Tinggal selangkah lagi untuk dapat mengakses aplikasi Rekam Medis Terlengkap dan Tercanggih. Silahkan cek email Anda untuk melakukan verifikasi akun!
                      </p>
                      </template>
                      <p class="d-block mb-2" style="font-weight: 600">
                        <template v-if="resendLinkActivation < 3">
                          Tidak mendapatkan email verifikasi?
                        </template>
                        <template v-else>
                          Anda telah mencapai batas limit aktivasi. Silahkan
                          hubungi Customer Care izidok.
                        </template>
                      </p>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <template v-if="resendLinkActivation < 3">
                          <button class="btn px-5 btn-first my-2 btn-lg btn-block w-75 text-capitalize"
                            :disabled="counter !== 0" @click="this.triggerResend">
                            Kirim ulang email
                          </button>
                        </template>

                        <router-link to="/login" exact class="btn btn-lg btn-outline-white btn-block w-75">
                          <!-- <b-button
                        class="px-5 my-2 btn-lg btn-block w-75 text-white"
                        variant="outline-white"
                      > -->
                          Kembali ke Halaman Login
                          <!-- </b-button> -->
                        </router-link>
                        <template v-if="resendLinkActivation < 3 && intervalCounter">
                          <p class="my-2">
                            Tunggu
                            <span style="color: #3c44b1">{{ this.counterValue }}</span>
                            detik lagi...
                          </p>
                        </template>
                      </div>
                    </template>
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
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import {
    required,
    minLength,
    maxLength,
    sameAs,
    email,
    numeric
  } from "vuelidate/lib/validators";
  import moment from "moment";
  import axios from "axios";

  library.add(faArrowLeft);

  const staticCounter = 60;

  export default {
    props: ["email", "user_id", "created_at", "fromLogin"],
    data() {
      return {
        resendLinkActivation: 0,
        counter: staticCounter,
        intervalCounter: null,
        isExpired: false
      };
    },
    beforeRouteEnter(to, from, next) {
      if (to.params.user_id && to.params.created_at) {
        next();
      } else {
        next("/");
      }
    },
    mounted() {
      if(this.fromLogin !== true) {
        this.counterFunc();
      }
      else {
        this.counter = 0;
      }

      let expiredAt = moment(this.created_at).add(50, 'minutes');
      setInterval(() => {
        this.isExpired = moment() >= expiredAt ? true : false
      }, 1000)
    },
    computed: {
      counterValue() {
        return this.counter;
      }
    },
    methods: {
      redirectToRegister() {
        this.$router.replace("/register");
      },
      async triggerResend() {
        try {
          const {
            resendLinkActivation
          } = this;
          if (resendLinkActivation <= 3) {
            this.resendLinkActivation++;
            this.counterFunc();
            const res = await axios.get(
              `${this.url_api}/email/resend/${this.user_id}`
            );
            if (res.data.status == false) {
              if (res.data.message.match(/already/)) {
                this.$router.push({
                  name: "verification-result",
                  params: {
                    state: "already-activated"
                  }
                });
              } else if (res.data.message.match(/expired/)) {
                this.$router.push({
                  name: "verification-result",
                  params: {
                    state: "expired"
                  }
                });
              }
            }
          }
        } catch (err) {}
      },
      counterFunc() {
        if (this.counter !== staticCounter) {
          this.counter = staticCounter;
        }

        if (this.intervalCounter) clearInterval(this.intervalCounter);

        this.intervalCounter = setInterval(() => {
          if (this.counter > 0) {
            this.counter--;
          } else {
            clearInterval(this.intervalCounter);
            this.intervalCounter = null;
          }
        }, 1000);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .confirm-signup-bg {
    background-image: url("~@/assets/img/confirm-signup.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .btn-outline-white {
    &:hover {
      color: #4190ff !important;
    }
  }
</style>