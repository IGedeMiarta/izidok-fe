<template>
  <div class="app-wrapper bg-light">
    <div class="app-main">
      <router-link
        to="/register"
        exact
        class="btn btn-lg btn-success btn-go-back"
      >
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="arrow-left" />
        </span>
        <span class="btn-wrapper--label">Kembali ke halaman Pendaftaran</span>
      </router-link>
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div class="hero-wrapper bg-composed-wrapper min-vh-100">
                <div class="flex-grow-1 w-100 d-flex align-items-center">
                  <div class="col-lg-6 px-4 mx-auto text-center text-black">
                    <img
                      src="@/assets/img/illustrations/500.svg"
                      class="w-50 mx-auto d-block my-5 img-fluid"
                      alt=""
                    />

                    <h1 class="mb-3 px-4 font-weight-bold text-capitalize">
                      pendaftaran anda berhasil
                    </h1>
                    <h4
                      class="line-height-sm font-weight-light d-block px-1 mb-3 text-black-50"
                    >
                      Verifikasi akun Anda sekarang. Link verifikasi dikirimkan
                      ke {{ email }}
                    </h4>
                    <strong class="d-block">
                      <template v-if="resendLinkActivation < 3">
                        Tidak mendapatkan email verifikasi?
                      </template>
                      <template v-else>
                        Anda telah mencapai batas limit aktivasi. Silahkan hubungi Customer Care iziDok.
                      </template>
                    </strong>
                    <template v-if="resendLinkActivation < 3">
                      <template
                        v-if="intervalCounter && resendLinkActivation <= 3"
                      >
                        <p class="my-1">
                          Tunggu <span>{{ this.counterValue }}</span> detik
                          lagi...
                        </p>
                      </template>
                      <button
                        class="btn px-5 btn-first mt-4 mb-3 btn-lg"
                        :disabled="counter !== 0"
                        @click="this.triggerResend"
                      >
                        <span class="btn-wrapper--label">
                          Kirim ulang email
                        </span>
                      </button>
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
import axios from 'axios';

library.add(faArrowLeft);

const staticCounter = 60;

export default {
  props: ['email', 'user_id'],
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
        if (resendLinkActivation < 3) {
          this.resendLinkActivation++;
          this.counterFunc();

          const res = await axios.get(`${this.url_api}/email/resend/${this.user_id}`);

        }
      }
      catch (err) {

      }
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
