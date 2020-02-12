<template>
  <div class="app-wrapper bg-white">
    <div class="app-content p-0">
      <div class="app-content--inner d-flex align-items-center">
        <div class="flex-grow-1 w-100 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                <img src="@/assets/img/forgot.jpg" class="img-fluid mb-5" alt="lupa password izidok" />
              </div>
              <div class="col-md-6">
                <div class="pl-5 mb-5 w-100">
                  <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                    style="width: 49% !important;">
                  <div class="mt-3">
                    <label class="mb-3 mt-4" style="color:gray">
                      Masukan password baru Anda untuk dapat melanjutkan akses ke izidok
                    </label>
                    <div>
                      <b-form v-on:submit.prevent="submitForm">
                        
                          <b-form-group>
                            <b-input-group class="input-group-seamless">
                               <b-input-group-text slot="append">
                                <font-awesome-icon class="mx-auto" icon="eye" type="password"
                                  @click="switchVisibility" />
                              </b-input-group-text>
                              <b-form-input placeholder="Password baru" :type="passwordFieldType"></b-form-input>
                            </b-input-group>
                            <b-input-group class="input-group-seamless mt-4">
                              <b-input-group-text slot="append">
                                <font-awesome-icon class="mx-auto" icon="eye" type="password"
                                  @click="switchVisibility" />
                              </b-input-group-text>
                              <b-form-input placeholder="Konfirmasi Ulang Password" :type="passwordFieldType">
                              </b-form-input>
                            </b-input-group>
                          </b-form-group>
                        
                        <button class="btn btn-lg btn-block mt-2 " 
                          style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                         Kirim Permintaan Ubah Password
                        </button>
                      </b-form>
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
    required,
    minLength,
    maxLength,
    sameAs,
    email,
    numeric
  } from "vuelidate/lib/validators";

  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faSearch,
    faEye,
    faInfo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faEye,
    faInfo
  );

  export default {
    props: ["token"],
    data() {
      return {
        currentStep: 1,
        password: '',
        passwordFieldType: 'password'
      };
    },
    // components: {
    //   Step1: () => import("./ForgotPassword/Step1.vue"),
    //   Step2: () => import("./ForgotPassword/Step2.vue")
    // },
    computed: {
      currentStepComponent() {
        return `Step${this.currentStep}`;
      }
    },
    mounted() {
      this.redirectResetPassword();
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      redirectResetPassword() {
        if (this.token) {
          this.currentStep++;
        }
      }
    }
  };
</script>