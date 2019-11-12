<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="divider border-2 border-primary bg-primary"></div>
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                    <img
                      src="@/assets/img/illustrations/login.svg"
                      class="w-75 mx-auto d-block img-fluid"
                      alt
                    />
                  </div>
                  <div class="col-lg-6 pr-0 d-flex align-items-center">
                    <div class="pl-5 w-100">
                      <div class="text-black mt-3">
                        <h1 class="display-3 mb-3 font-weight-bold">Login</h1>
                        <div>
                          <b-form v-on:submit.prevent="submitForm">
                            <div class="form-group">
                              <label>Email address</label>
                              <input
                                type="email"
                                class="form-control"
                                :class="{ 'is-invalid': $v.email_address.$error }"
                                placeholder="yourname@yourmail.com"
                                v-model.trim="$v.email_address.$model"
                              />
                            </div>
                            <div class="form-group mb-4">
                              <div class="d-flex justify-content-between">
                                <label>Password</label>
                                <a href="javascript:void(0);">Forgot password?</a>
                              </div>
                              <input
                                type="password"
                                class="form-control"
                                :class="{ 'is-invalid': $v.password.$error }"
                                placeholder="Enter your password"
                                v-model.trim="$v.password.$model"
                              />
                            </div>

                            <button class="btn btn-lg btn-second btn-block">Login</button>
                          </b-form>
                        </div>
                        <div class="text-center pt-4 text-black-50">
                          Tempat praktik anda belum terdaftar?
                          <router-link
                            tag="a"
                            to="/register"
                            exact
                            title="Daftar disini"
                          >Daftar disini</router-link>
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
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email_address: "",
    password: ""
  }),
  validations: {
    email_address: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submitForm($event) {
      this.$v.$touch();
      // console.log($event);
    }
  }
};
</script>
