<template>
  <b-form @submit.prevent="submitForm" class="col-sm-12 forgot-form">
    <b-row>
      <div class="col-sm-12">
        <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: form['validation-desc']
                  })
                " :state="renderError({ error: form.error })">
          <b-form-input :type="form.type || 'text'" :value="form.value" @keyup="
                    setValue({
                      rawLabel: form.rawLabel,
                      label: form.label,
                      $event,
                      tmpId: form.tmpId
                    })
                  " size="lg" :state="renderError({ error: form.error })" :placeholder="form.placeholder"
            class="forgot-field" />
        </b-form-group>
      </div>
      <div class="col-sm-12">
        <button class="btn d-block w-100 btn-lg" style="background-color :#3F7EA7; color:white; border-radius : 10px;"
          type="submit">
          <span class="btn-wrapper--label text-capitalize">
            Kirim Permintaan Ubah Password
          </span>
        </button>
        <b-button class="btn d-block w-100 btn-lg mt-3" to="/login" style="border-color: #6c757d;background-color :#fff; color:#000; border-radius : 10px;" >Kembali ke Halaman Login</b-button>
      </div>
    </b-row>
  </b-form>
</template>

<script>
  import axios from "axios";
  import startCase from "lodash/startCase";
  import {
    required,
    email
  } from "vuelidate/lib/validators";

  export default {
    data: () => ({
      formBasicData: null,
      formData: {
        email: null
      }
    }),
    validations: {
      formData: {
        email: {
          required,
          email
        }
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
    },
    methods: {
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setFormBasicData() {
        const tmp = [{
          label: "email",
          placeholder: "Email"
        }];

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
        this.formData[label] = value && value.trim();
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
      },
      async forgotPassword() {
        try {
          const {
            formData
          } = this;
          const postData = Object.keys(formData)
            .map(item => ({
              label: item,
              value: formData[item]
            }))
            .reduce((obj, key) => {
              obj[key.label] = key.value;
              return obj;
            }, {});
          // console.log(postData);
          const res = await axios.post(`${this.url_api}/forgot`, postData);
          const {
            status,
            data,
            message
          } = res.data;
          if (status) {
            this.$swal({
              title: 'Link reset password telah terkirim',
              text: `Silakan cek email Anda!`,
              type: "success"
            });
          } else {
            if (message == 'User tidak ditemukan' || message == 'User not found') {
              this.$swal({
                title: 'Email tidak terdaftar',
                text: `Silakan cek ulang penulisan email Anda!`,
                type: "error"
              });
            } else {
              this.$swal({
                title: 'Email tidak terdaftar',
                text: `Silakan cek ulang penulisan email Anda!`,
                type: "error"
              });
            }
          }
          // alert(message);
        } catch (err) {
          console.log(err);
        }
      },
      submitForm($event) {
        const {
          formBasicData
        } = this;
        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.forgotPassword();
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