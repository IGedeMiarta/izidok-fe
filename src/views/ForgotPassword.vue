<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <router-link to="/login" class="btn btn-lg btn-success btn-go-back">
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="arrow-left" />
        </span>
        <span class="btn-wrapper--label">Kembali ke halaman Login</span>
      </router-link>
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div
                class="hero-wrapper bg-composed-wrapper bg-arielle-smile min-vh-100"
              >
                <div class="flex-grow-1 w-100 d-flex align-items-center">
                  <div
                    class="bg-composed-wrapper--image"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('@/assets/img/hero-bg/hero-3.jpg') +
                        ')'
                    }"
                  ></div>
                  <div
                    class="bg-composed-wrapper--bg bg-night-sky opacity-5"
                  ></div>
                  <component :is="currentStepComponent"></component>
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

library.add(faArrowLeft);

export default {
  props: ["email"],
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
      if (this.email) {
        this.currentStep++;
      }
    }
  }
};
</script>
