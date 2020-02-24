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
                    <img src="@/assets/img/logo-izidok-white.png" class="w-50 mx-auto d-block mt-5 mb-2 img-fluid" />
                    <template v-if="this.isAktif">
                      <p class="mb-5">
                        {{this.isAktif}}
                      </p>
                      <router-link to="/login" exact class="btn btn-lg btn-primary btn-block w-100">
                        Kembali ke Halaman Login
                      </router-link>
                    </template>
                    <template v-else>
                      <p class="mb-5">
                        Email Anda telah terdaftar dan sedang menunggu aktivasi
                      </p>
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
                          Kembali ke Halaman Login
                        </router-link>
                        <template v-if="intervalCounter && resendLinkActivation < 3">
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
    props: ["email", "user_id", "created_at"],
    data() {
      return {
        resendLinkActivation: 0,
        counter: staticCounter,
        intervalCounter: null,
        startExpired: null,
        endExpired: null,
        isAktif: null
      };
    },
    mounted() {
      this.counterFunc();
      this.startExpired = moment(this.created_at).format("DD-MMMM-YYYY, h:mm:ss ");
    },
    computed: {
      counterValue() {
        return this.counter;
      },
      now() {
        return moment().format("DD-MMMM-YYYY, h:mm:ss ");
      },
    },
    methods: {
      redirectToRegister() {
        this.$router.replace("/register");
      },
      redirectToLogin() {
        this.$router.replace("/login");
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
                   this.isAktif = 'Akun Anda sudah diaktivasi. Silahkan login untuk masuk ke dalam akun Anda!'
                } else if (res.data.message.match(/expired/)) {
                  this.$router.push({
                    name: "verification-result",
                    params: {
                      state: "expired"
                    }
                  });
                }
              }
            
            // else {
            //     this.isExpired = 'Akun Anda sudah diaktivasi. Silahkan login untuk masuk ke dalam akun Anda!'
            // }
          }
        } catch (err) {}
      },
      counterFunc() {
        if (this.counter !== staticCounter) {
          this.counter = staticCounter;
        }
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