<template>
  <div class="bg-composed-wrapper--content text-center p-5">
    <div class="col-lg-4 px-0 mx-auto text-center text-white">
      <h1 class="display-3 mb-3 px-2 font-weight-bold">
        Satu Langkah Lagi...
      </h1>
      <h3
        class="font-size-lg line-height-sm font-weight-light d-block px-3 mb-3 text-white-50"
      >
        Masukkan password baru Anda untuk dapat melanjutkan akses ke izidok.
      </h3>
      <div class="row no-gutters">
        <b-form @submit.prevent="submitForm" class="col-sm-12">
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
            />
          </b-form-group>
          <button
            class="btn d-block shadow-none w-100 btn-warning btn-lg"
            type="submit"
          >
            <span class="btn-wrapper--label text-capitalize">
              kirim
            </span>
          </button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import {
  required,
  minLength,
  // maxLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    formBasicData: null,
    formData: null
  }),
  validations: {
    formData: {
      password: {
        required
        // minLength: minLength(6)
      },
      konfirmasi_password: {
        required,
        sameAsPassword: sameAs("password")
        // minLength: minLength(6)
      }
    }
  },
  mounted() {
    this.formData = this.setFormData();
    this.formBasicData = this.setFormBasicData();
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
          label: "password",
          placeholder: "masukkan password baru",
          type: "password"
        },
        {
          label: "konfirmasi password",
          placeholder: "masukkan password baru sekali lagi",
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
    setValue({ label, rawLabel, $event = null } = {}) {
      const { target } = $event;
      const { value } = target;
      const $v_object = this.$v.formData[label];
      this.formData[label] = value && value.trim();
      this.triggerValidation({
        label,
        $v: this.$v,
        $vm: this,
        rawLabel
      });
      if (
        label === "password" &&
        this.formData.konfirmasi_password &&
        !$v_object.$error
      ) {
        setTimeout(() => {
          this.setValue({
            label: "konfirmasi_password",
            $event
          });
          this.$v.formData.konfirmasi_password.$touch();
        }, 500);
      }
    },
    async resetPassword() {
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
        console.log(postData);
        const res = await axios.post(`${this.url_api}/reset`, postData);
        const { status, data, message } = res.data;
        alert(message);
      } catch (err) {
        console.log(err);
      }
    },
    submitForm($event) {
      const { formBasicData } = this;
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
