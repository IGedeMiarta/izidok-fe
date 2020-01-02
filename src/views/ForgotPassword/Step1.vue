<template>
  <div class="bg-composed-wrapper--content text-center p-5">
    <div class="col-lg-4 px-0 mx-auto text-center text-white">
      <h1 class="display-2 mb-3 px-2 font-weight-bold">
        Lupa Password?
      </h1>
      <h3
        class="font-size-lg line-height-sm font-weight-light d-block px-3 mb-3 text-white-50"
      >
        Masukkan email Anda dan kami akan mengirimkan instruksi melalui email
        untuk mengatur ulang password Anda.
      </h3>
      <div class="row no-gutters">
        <b-form @submit.prevent="submitForm" class="col-sm-12 forgot-form">
          <b-row>
            <div class="col-sm-12 col-md-8 mt-0 mt-sm-4 px-2">
              <b-form-group
                v-for="form in formBasicData"
                :key="form.tmpId"
                class="text-capitalize"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: form['validation-desc']
                  })
                "
                :state="renderError({ error: form.error })"
              >
                <b-form-input
                  :type="form.type || 'text'"
                  :value="form.value"
                  @keyup="
                    setValue({
                      rawLabel: form.rawLabel,
                      label: form.label,
                      $event,
                      tmpId: form.tmpId
                    })
                  "
                  size="lg"
                  :state="renderError({ error: form.error })"
                  :placeholder="form.placeholder"
                  class="forgot-field"
                />
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4 mt-0 mt-sm-4 px-2">
              <button
                class="btn d-block shadow-none w-100 btn-warning btn-lg"
                type="submit"
              >
                <span class="btn-wrapper--label text-capitalize">
                  kirim
                </span>
              </button>
            </div>
          </b-row>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import startCase from "lodash/startCase";
import { required, email } from "vuelidate/lib/validators";

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
      const tmp = [
        {
          label: "email",
          placeholder: "email"
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
    setValue({ label, rawLabel, $event = null } = {}) {
      const { target } = $event;
      const { value } = target;
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
        const { formData } = this;
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
        const { status, data, message } = res.data;
        if (status) {
          this.$swal({
            title: 'Link reset password telah terkirim',
            text: `Silakan cek email anda!`,
            type: "success"
          });
        }
        // alert(message);
      } catch (err) {
        // console.log(err);
      }
    },
    submitForm($event) {
      const { formBasicData } = this;
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
  color: #fff !important;
}
</style>
