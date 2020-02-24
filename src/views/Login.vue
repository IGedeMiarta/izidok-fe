<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <template v-if="!loggedIn">

        <div class="app-content p-0">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 pl-0 d-none d-lg-flex align-items-center">
                    <div class="wrap" :style="wrapStyle">
                      <img src="@/assets/login.jpg" alt="login izidok" :style="wrapImgStyle" />
                    </div>
                  </div>
                  <div class="col-md-6 pr-0 d-flex align-items-center">
                    <div>
                      <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                        style="width: 49% !important;height:100%;">
                      <div class="mt-3 form-login">
                        <label class="mb-3 mt-4" style="color:gray">
                          Masukan Email/No. Handphone beserta password Anda
                        </label>
                        <div>
                          <b-form @submit.prevent="submitForm">
                            <template v-if="formBasicData && formBasicData.length">
                              <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize"
                                :invalid-feedback="
                                    renderInvalidFeedback({
                                      validationDesc: form['validation-desc']
                                    })
                                  " style="position: relative" :state="renderError({ error: form.error })">
                                <template v-if="form.type === 'password' || form.isType == 'password' ">
                                  <b-input-group>
                                    <b-input-group-text slot="append" class="border-left-0" @click="switchVisibility">
                                      <font-awesome-icon v-if="passwordVisible == false" icon="eye" />
                                      <font-awesome-icon v-else icon="eye-slash" />
                                    </b-input-group-text>
                                    <b-form-input :type="form.type || 'text'" class="border-right-0" @keyup="
                                      setValue({
                                        rawLabel: form.rawLabel,
                                        label: form.label,
                                        $event,
                                        tmpId: form.tmpId
                                      })
                                    " :state="renderError({ error: form.error })" :maxlength="form.maxLength"
                                      :placeholder="form.placeholder" />
                                  </b-input-group>
                                </template>
                                <template v-else>
                                  <b-form-input :type="form.type || 'text'" @keyup="
                                        setValue({
                                          rawLabel: form.rawLabel,
                                          label: form.label,
                                          $event,
                                          tmpId: form.tmpId
                                        })
                                      " :state="renderError({ error: form.error })" :maxlength="form.maxLength"
                                    :placeholder="form.placeholder" />
                                </template>
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
                          Tempat Praktik Anda belum terdaftar?
                          <router-link tag="a" to="/register" exact title="Daftar disini">Daftar Disini</router-link>
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
  import {
    mapMutations,
    mapState
  } from "vuex";
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
    faEyeSlash,
    faInfo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faEye,
    faInfo,
    faEyeSlash
  );

  const maxFailed = 3;
  const maxFailedCounter = 10;

  export default {
    data: () => ({
      formBasicData: null,
      formData: null,
      loggedIn: false,
      firstJoin: false,
      passwordVisible: false,
      failedCounter: 0,
      klinik_id: null,
      windowHeight: 0
    }),
    components: {
      "first-join-component": () => import("@/components/FirstJoin")
    },
    computed: {
      ...mapState(["sidebarCollapsed, 'initializationPage"]),
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
    validations: {
      formData: {
        ["email/No.Handphone"]: {
          required,
          maxLength: maxLength(50)
        },
        password: {
          required,
          minLength: minLength(6)
          // verifyPassword(val) {
          //   if (val || val != null) {
          //     if (val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
          //       return true;
          //     } else {
          //       return false;
          //     }
          //   } else {
          //     return false;
          //   }
          // }
        }
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();

      this.windowHeight = window.innerHeight;
      this.$nextTick(() => {
        window.addEventListener('resize', (e) => {
          this.windowHeight = window.innerHeight;
        })
      })
    },
    methods: {
      ...mapMutations({
        collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
        setInitPage: 'sidebar/SET_INITIALIZATION_PAGE'
      }),
      switchVisibility() {
        this.formBasicData[1].type == 'password' ? this.formBasicData[1].type = 'text' : this.formBasicData[1].type =
          'password';
        if (this.formBasicData[1].type == 'text') {
          this.passwordVisible = true;
        } else if (this.formBasicData[1].type == 'password') {
          this.passwordVisible = false;
        }
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
            message,
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
              this.setInitPage(false)
              this.$router.push('/');
            }
          } else if (status == false && message == 'Please check your email to activate user...') {
            this.$router.push({
              name: "verification-login",
              params: {
                email: postData.username,
                user_id: res.data.user_id,
              }
            });
          // } else if (status == false && message == 'Activation email was expired...') {
          //   this.$router.push({
          //     name: "verification-result",
          //     params: {
          //       state: "expired"
          //     }
          //   });
          } else {
            this.$swal({
              title: 'Login gagal',
              text: `Email/No. Handphone dengan Password yang anda masukkan tidak cocok!`,
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
            label: "email/No.Handphone",
            placeholder: "Email/No. Handphone",
            type: "text",
            ignoreTransform: true,
            maxLength: 50
          },
          {
            label: "password",
            placeholder: "Password",
            type: "password",
            isType: "password",
            ignoreTransform: true,
            maxLength: 15
          }
        ].map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          placeholder: !item.ignoreTransform ?
            startCase(item.placeholder) : item.placeholder,
          rawLabel: item.label.split(".").join(". "),
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


<style scoped>
  .form-login {
    margin-left: 15px;
  }

  @media only screen and (max-width: 990px) and (min-width: 660px) {
    .form-login {
      margin-left: auto;
      margin-right: auto;
    }
  }

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

  @media only screen and (max-width: 600px) {
    .form-login {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>