<template>
  <b-form @submit.prevent="submitForm" class="col-sm-12 forgot-form">
    <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize mt-3" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })">
      <b-input-group>
        <b-input-group-text slot="append" v-if="form.label == 'password' " @click="switchVisibility">
          <font-awesome-icon v-if="passwordVisible == false" icon="eye"  />
          <font-awesome-icon v-else icon="eye-slash"  />
        </b-input-group-text>
        <b-input-group-text slot="append" v-else @click="switchVisibilityPassword">
           <font-awesome-icon v-if="passwordVisible1 == false" icon="eye"  />
          <font-awesome-icon v-else icon="eye-slash"  />
        </b-input-group-text>
        <b-form-input :type="form.type || 'text'" :value="form.value" @keyup="
                setValue({
                  rawLabel: form.rawLabel,
                  label: form.label,
                  $event,
                  tmpId: form.tmpId
                })
              " size="lg" v-bind:maxlength="form.maxlength" class="border-right-0"
          :state="renderError({ error: form.error })" :placeholder="form.placeholder" />
      </b-input-group>
    </b-form-group>
    <button class="btn d-block shadow-none w-100 btn-lg "
      style="background-color :#3F7EA7; color:white; border-radius : 10px;margin-top:20px" type="submit">
      <span class="btn-wrapper--label text-capitalize">
        Atur Ulang Password
      </span>
    </button>
  </b-form>

</template>

<script>
  import startCase from "lodash/startCase";
  import {
    required,
    minLength,
    maxLength,
    sameAs
  } from "vuelidate/lib/validators";
  import axios from 'axios';

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

  export default {
    props: ['token'],
    data: () => ({
      formBasicData: null,
      formData: null,
      passwordVisible: false,
      passwordVisible1: false,
    }),
    validations: {
      formData: {
        password: {
          required,
          maxLength: maxLength(15),
          verifyPassword(val) {
            if (val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
              return true
            } else {
              return false;
            }
          }
        },
        konfirmasi_password: {
          required,
          sameAsPassword: sameAs("password"),
          minLength: minLength(6),
          maxLength: maxLength(15)
        }
      }
    },
    mounted() {
      this.formData = this.setFormData();
      this.formBasicData = this.setFormBasicData();
    },
    methods: {
      switchVisibility() {
        this.formBasicData[0].type == 'password' ? this.formBasicData[0].type = 'text' : this.formBasicData[0]
          .type = 'password';
        if (this.formBasicData[0].type == 'text') {
          this.passwordVisible = true;
        } else if(this.formBasicData[0].type == 'password') {
          this.passwordVisible = false;
        }
      },
      switchVisibilityPassword() {
        this.formBasicData[1].type == 'password' ? this.formBasicData[1].type = 'text' : this.formBasicData[1]
          .type = 'password';
        if(this.formBasicData[1].type == 'text') {
          this.passwordVisible1 = true;
        } else if(this.formBasicData[1].type == 'password') {
          this.passwordVisible1 = false;
        }
      },
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setFormBasicData() {
        const tmp = [{
            label: "password",
            placeholder: "Password baru",
            type: "password",
            maxlength: 15
          },
          {
            label: "konfirmasi password",
            placeholder: "Konfirmasi ulang password",
            type: "password",
            maxlength: 15
          }
        ];

        return tmp.map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          placeholder: startCase(item.placeholder),
          rawLabel: item.label
        }));
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
        const $v_object = this.$v.formData[label];
        this.formData[label] = value && value.trim();

        this.formBasicData.forEach((item) => {
          this.triggerValidation({
            label: item.label,
            $v: this.$v,
            $vm: this,
            rawLabel: item.rawLabel
          });
        })
        // if (
        //   label === "password" &&
        //   this.formData.konfirmasi_password &&
        //   !$v_object.$error
        // ) {
        //   setTimeout(() => {
        //     this.setValue({
        //       label: "konfirmasi_password",
        //       $event
        //     });
        //     this.$v.formData.konfirmasi_password.$touch();
        //   }, 500);
        // }
      },
      async resetPassword() {
        try {
          const {
            formData
          } = this;
          let postData = {
            password: formData.password,
            konfirm_password: formData.konfirmasi_password,
            token: this.token
          }
          // console.log(postData);
          const res = await axios.post(`${this.url_api}/reset`, postData);
          const {
            status,
            message
          } = res.data;
          if (status && message == 'Password has ben updated') {
            this.$swal({
              type: "success",
              title: "Password berhasil diubah!",
              text: "Silakan kembali ke halaman Login untuk masuk!"
            }).then((e) => {
              if (e.value) {
                this.$router.push('/login')
              }
            });
          } else {
            this.$swal({
              type: "failed",
              title: "Token sudah kadaluarsa",
              text: "Silakan kembali ke halaman lupa password"
            }).then((e) => {
              this.$router.push('/login');
            });
          }
        } catch (err) {
          // console.log(err);
        }
      },
      submitForm($event) {
        const {
          formBasicData
        } = this;
        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.resetPassword();
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
      }
    }
  };
</script>

<style>
  .forgot-form .invalid-feedback {
    color: red !important;
  }
</style>