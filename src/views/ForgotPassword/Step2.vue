<template>
  <b-form @submit.prevent="submitForm" class="col-sm-12 forgot-form">
    <b-input-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize mt-3" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: form['validation-desc']
              })
            " :state="renderError({ error: form.error })">
      <b-input-group-text slot="append" @click="switchVisibility">
        <font-awesome-icon icon="eye" />
      </b-input-group-text>
      <b-form-input :type="form.type || 'text'" :value="form.value" @keyup="
                setValue({
                  rawLabel: form.rawLabel,
                  label: form.label,
                  $event,
                  tmpId: form.tmpId
                })
              " size="lg" class="border-right-0" :state="renderError({ error: form.error })" :placeholder="form.placeholder" />
    </b-input-group>
    <button class="btn d-block shadow-none w-100 btn-lg "
      style="background-color :#3F7EA7; color:white; border-radius : 10px;margin-top:20px" type="submit">
      <span class="btn-wrapper--label text-capitalize">
        Kirim permintaan ubah password
      </span>
    </button>
  </b-form>

</template>

<script>
  import startCase from "lodash/startCase";
  import {
    required,
    minLength,
    // maxLength,
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
    faInfo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faEye,
    faInfo
  );

  export default {
    props: ['token'],
    data: () => ({
      formBasicData: null,
      formData: null
    }),
    validations: {
      formData: {
        password: {
          required,
          minLength: minLength(6),
        },
        konfirmasi_password: {
          required,
          sameAsPassword: sameAs("password"),
          minLength: minLength(6),
        }
      }
    },
    mounted() {
      this.formData = this.setFormData();
      this.formBasicData = this.setFormBasicData();
    },
    methods: {
      switchVisibility() {
        this.formBasicData.map((item, i) => {
          this.formBasicData[i].type == 'password' ? this.formBasicData[i].type = 'text' : this.formBasicData[i]
            .type = 'password'
        })
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
            placeholder: "Password Baru",
            type: "password"
          },
          {
            label: "konfirmasi password",
            placeholder: "Konfirmasi ulang password",
            type: "password"
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
                this.$router.go('login')
              }
            });
          } else {
            alert(message);
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
    color: #fff !important;
  }
</style>