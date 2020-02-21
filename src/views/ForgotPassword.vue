<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 pl-0 d-none d-lg-flex align-items-center">
                  <template v-if="this.currentStep == 1">
                    <div class="wrap" :style="wrapStyle">
                      <img src="@/assets/img/forgot1.jpg" :style="wrapImgStyle" alt="lupa password izidok" />
                    </div>
                  </template>
                  <template v-if="this.currentStep == 2">
                    <div class="wrap" :style="wrapStyle">
                      <img src="@/assets/img/forgot.jpg" :style="wrapImgStyle" alt="lupa password izidok" />
                    </div>
                  </template>
                </div>
                <div class="col-md-6 pr-0 d-flex align-items-center">
                  <div>
                    <img src="/img/izidok.baaa69b4.png" alt="izidok"
                      class="img-fluid w-100 d-block float-left logo-forgot" style="width: 39% !important;height:100%;">
                    <div class="mt-3 col-md-10">
                      <template v-if="this.currentStep == 1">
                        <label class="mb-3 mt-4" style="margin-top:35px; margin-left:20px ;color:gray">
                          Masukkan email yang terintegrasi dengan Akun
                        </label>
                      </template>
                      <template v-if="this.currentStep == 2">
                        <label class="mb-3 mt-4" style="margin-top:35px; margin-left:20px ;color:gray">
                          Masukkan password baru Anda untuk dapat melanjutkan akses ke izidok
                        </label>
                      </template>
                      <div>
                        <component :is="currentStepComponent" :token="token"></component>
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

  library.add(faArrowLeft);

  export default {
    props: ["token"],
    data() {
      return {
        currentStep: 1,
        windowHeight: 0
      };
    },
    components: {
      Step1: () => import("./ForgotPassword/Step1.vue"),
      Step2: () => import("./ForgotPassword/Step2.vue")
    },
    computed: {
      currentStepComponent() {
        return `Step${this.currentStep}`;
      },
      wrapStyle() {
        return {
          height: this.windowHeight + 'px'
        }
      },
      wrapImgStyle() {
        return {
          "max-height": this.windowHeight + 'px'
        }
      },
    },
    mounted() {
      this.redirectResetPassword();
      this.windowHeight = window.innerHeight;
      this.$nextTick(() => {
        window.addEventListener('resize', (e) => {
          this.windowHeight = window.innerHeight;
        })
      })
    },
    methods: {
      redirectResetPassword() {
        if (this.token) {
          this.currentStep++;
        }
      }
    }
  };
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
  }

  .wrap img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
  }

  .logo-forgot {
    margin-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    .form-login {
      margin-left: auto;
      margin-right: 20px;
    }
  }
</style>