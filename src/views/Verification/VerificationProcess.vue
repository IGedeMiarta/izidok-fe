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
                    <img
                      src="@/assets/img/logo-izidok-white.png"
                      class="w-50 mx-auto d-block mt-5 mb-2 img-fluid"
                    />
                    <!-- <h1 class="mb-3 px-4 font-weight-bold text-capitalize">
                      pendaftaran anda berhasil
                    </h1> -->
                    <p class="mb-5">
                      Silahkan cek email Anda untuk melakukan verifikasi akun izidok!
                    </p>
                    <!-- <h4
                      class="line-height-sm font-weight-light d-block px-1 mb-3 text-white"
                    >
                      Verifikasi akun Anda sekarang. Link verifikasi dikirimkan
                      ke {{ email }}
                    </h4> -->
                    <p class="d-block mb-2" style="font-weight: 600">
                      <template v-if="resendLinkActivation < 3">
                        Tidak mendapatkan email verifikasi?
                      </template>
                      <template v-else>
                        Anda telah mencapai batas limit aktivasi. Silahkan
                        hubungi Customer Care izidok.
                      </template>
                    </p>
                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <template v-if="resendLinkActivation < 3">
                        <button
                          class="btn px-5 btn-first my-2 btn-lg btn-block w-75 text-capitalize"
                          :disabled="counter !== 0"
                          @click="this.triggerResend"
                        >
                          Kirim ulang email
                        </button>
                      </template>

                      <router-link
                        to="/login"
                        exact
                        class="btn btn-lg btn-outline-white btn-block w-75"
                      >
                        <!-- <b-button
                        class="px-5 my-2 btn-lg btn-block w-75 text-white"
                        variant="outline-white"
                      > -->
                        Kembali ke Halaman Login
                        <!-- </b-button> -->
                      </router-link>
                      <template
                        v-if="intervalCounter && resendLinkActivation <= 3"
                      >
                        <p class="my-2">
                          Tunggu
                          <span style="color: #3c44b1"
                            >{{ this.counterValue }}</span
                          >
                          detik lagi...
                        </p>
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
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email,
  numeric
} from "vuelidate/lib/validators";
import axios from "axios";

library.add(faArrowLeft);

const staticCounter = 60;

export default {
  props: ["email", "user_id"],
  data() {
    return {
      resendLinkActivation: 0,
      counter: staticCounter,
      intervalCounter: null
    };
  },
  mounted() {
    this.counterFunc();
  },
  computed: {
    counterValue() {
      return this.counter;
    }
  },
  methods: {
    async triggerResend() {
      try {
        const { resendLinkActivation } = this;
        if (resendLinkActivation <= 3) {
          this.resendLinkActivation++;
          this.counterFunc();

          const res = await axios.get(
            `${this.url_api}/email/resend/${this.user_id}`
          );
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
