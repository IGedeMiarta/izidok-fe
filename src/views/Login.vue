<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <template v-if="!loggedIn">
        <div class="divider border-2 border-primary bg-primary"></div>
        <div class="app-content p-0">
          <div class="app-content--inner d-flex align-items-center">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
              <div class="bg-composed-wrapper--content -5py">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                      <img src="@/assets/login.jpg" class="img-fluid mb-5" alt="login izidok" />
                    </div>
                    <div class="col-lg-6 pr-0 d-flex align-items-center">
                      <div class="pl-5 mb-5 w-100">
                        <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                          style="width: 49% !important;">
                        <div class="mt-3">
                          <label class="mb-3 mt-4" style="color:gray">
                            Masukan Username Beserta Password Anda
                          </label>
                          <div>
                            <b-form v-on:submit.prevent="submitForm">
                              <template v-if="formBasicData && formBasicData.length">
                                <b-form-group :label="renderLabel({ label: form.rawLabel })"
                                  v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize"
                                  :invalid-feedback="
                                    renderInvalidFeedback({
                                      validationDesc: form['validation-desc']
                                    })
                                  " style="position: relative" :state="renderError({ error: form.error })">
                                <template v-if="form.type === 'password'">
                                  <b-input-group-text slot="append">
                                      <font-awesome-icon class="mx-auto" icon="eye" type="password"
                                        @click="switchVisibility" />
                                    </b-input-group-text>
                                </template>
                                <b-form-input :type="form.type || 'text'" @keyup="
                                      setValue({
                                        rawLabel: form.rawLabel,
                                        label: form.label,
                                        $event,
                                        tmpId: form.tmpId
                                      })
                                    " :state="renderError({ error: form.error })" :placeholder="form.placeholder" />

                                </b-form-group>
                                <!-- <b-form-group>
                                  <b-input-group class="input-group-seamless">
                                    <b-form-input placeholder="Username"></b-form-input>
                                  </b-input-group>
                                  <b-input-group class="input-group-seamless mt-4">
                                    <b-input-group-text slot="append">
                                      <font-awesome-icon class="mx-auto" icon="eye" type="password"
                                        @click="switchVisibility" />
                                    </b-input-group-text>
                                    <b-form-input placeholder="Password" v-model="password" :type="passwordFieldType">
                                    </b-form-input>
                                  </b-input-group>
                                </b-form-group> -->
                              </template>
                              <b-alert :show="isTooMuchFailed()" variant="danger">Anda telah gagal login terlalu banyak.
                              </b-alert>
                              <template>
                                <router-link to="/forgot-password" style="margin-top : 15px;color:">Lupa
                                  password?</router-link>
                              </template>
                              <button class="btn btn-lg btn-block mt-2 " :disabled="isTooMuchFailed()"
                                style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                                Masuk
                              </button>
                            </b-form>
                          </div>
                          <div class="text-left pt-4 text-black">
                            Tempat praktik anda belum terdaftar?
                            <router-link tag="a" to="/register" exact title="Daftar disini">Daftar disini</router-link>
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
      <template v-if="firstJoin && loggedIn">
        <first-join-component :modalShow="firstJoin" :klinik_id="klinik_id" />
      </template>
    </div>
  </div>
</template>

<script>
  import startCase from "lodash/startCase";
  import {
    required,
    minLength,
    maxLength
  } from "vuelidate/lib/validators";
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import {
    faSearch,
    faEye,
    faInfo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faEye,
    faInfo
  );

  const maxFailed = 3;
  const maxFailedCounter = 10;

  export default {
    data: () => ({
      formBasicData: null,
      formData: null,
      loggedIn: false,
      firstJoin: false,
      failedCounter: 0,
      klinik_id: null,
      password: '',
      passwordFieldType: 'password'
    }),
    components: {
      "first-join-component": () => import("@/components/FirstJoin")
    },
    validations: {
      formData: {
        ["email_/_username"]: {
          required,
          maxLength: maxLength(50)
        },
        password: {
          required,
          minLength: minLength(6),
        }
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      async login() {
        this.loggedIn = false;
        try {
          const {
            formData
          } = this;
          const mapLabel = label => {
            switch (true) {
              case /(email|username)/gi.test(label):
                return "username";

              default:
                return label;
            }
          };
          const postData = Object.keys(formData)
            .map(item => ({
              label: mapLabel(item),
              value: formData[item]
            }))
            .reduce((obj, key) => {
              obj[key.label] = key.value;
              return obj;
            }, {});
          const res = await axios.post(`${this.url_api}/login`, postData);
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.$store.commit('SET_BEARER_TOKEN', data.token);
            this.loggedIn = true;
            this.firstJoin = data.first_login;

            this.klinik_id = null
            if (data.kliniks && data.kliniks[0]) {
              this.klinik_id = data.kliniks[0].id
            }
            if (data.user.klinik_id) {
              this.klinik_id = data.user.klinik_id
            }

            this.$store.commit('SET_USER', data.user);

            // not first join
            if (!this.firstJoin) {
              this.$router.push('/');
            }
          } else {
            this.$swal({
              title: 'Login gagal',
              text: `Email/username dengan Password yang anda masukkan tidak cocok!`,
              type: "error"
            });

            this.failedCounter++;

            if (this.isTooMuchFailed()) {
              this.disablingLogin()
            }
          }
        } catch (err) {
          this.loggedIn = false;
          console.log(err);
        }
      },
      submitForm($event) {
        const {
          formBasicData
        } = this;
        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.login();
        } else {
          formBasicData.map(item => {
            this.triggerValidation({
              label: item.label,
              $v: this.$v,
              $vm: this,
              rawLabel: item.rawLabel
            });
          });
        }
      },
      setFormData() {
        return this.setFormBasicData({
          noFilter: false
        }).reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setFormBasicData({
        noFilter = true
      } = {}) {
        const tmp = [{
            label: "email / username",
            placeholder: "name@mail.com",
            type: "text",
            ignoreTransform: true
          },
          {
            label: "password",
            placeholder: "Masukkan password Anda",
            type: "password",
            ignoreTransform: true,
          }
        ].map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          placeholder: !item.ignoreTransform ?
            startCase(item.placeholder) : item.placeholder,
          rawLabel: item.label
        }));

        return noFilter ?
          tmp.filter(
            item => !item.parent || item.parent === this.selectedTipeFaskes
          ) :
          tmp;
      },
      setValue({
        label,
        rawLabel,
        $event = null
      } = {}) {
        const {
          target
        } = $event;
        const {
          value
        } = target;
        this.formData[label] = value && value.trim();
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
      },
      isTooMuchFailed() {
        return this.failedCounter >= maxFailed
      },
      disablingLogin() {
        setTimeout(() => {
          this.failedCounter = 0;
        }, maxFailedCounter * 1000)
      }
    }
  };
</script>


<style lang="stylus" scoped>

</style>