<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="flex-grow-1 w-100 d-flex align-items-center">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                <img src="@/assets/img/forgot.jpg" class="img-fluid" alt="lupa password izidok" />
              </div>
              <div class="col-md-6 pr-0 d-flex align-items-center">
                <div class="pl-5">
                  <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                    style="width: 39% !important;">
                  <div class="mt-3 col-md-10" style="margin-left:-25px;">
                    <template v-if="this.currentStep == 1">
                      <label class="mb-3 mt-4" style="margin-top:35px; margin-left:20px ;color:gray">
                        Masukan email yang terintegrasi dengan akun
                      </label>
                    </template>
                    <template v-if="this.currentStep == 2">
                      <label class="mb-3 mt-4" style="margin-top:35px; margin-left:20px ;color:gray">
                        Masukan password baru Anda untuk dapat melanjutkan akses ke izidok
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
        currentStep: 1
      };
    },
    components: {
      Step1: () => import("./ForgotPassword/Step1.vue"),
      Step2: () => import("./ForgotPassword/Step2.vue")
    },
    computed: {
      currentStepComponent() {
        return `Step${this.currentStep}`;
      }
    },
    mounted() {
      this.redirectResetPassword();
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