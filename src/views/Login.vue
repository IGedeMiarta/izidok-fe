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
                  <div
                    class="col-lg-6 pl-0 d-none d-lg-flex align-items-center"
                  >
                    <img
                      src="@/assets/img/illustrations/login.svg"
                      class="w-75 mx-auto d-block img-fluid"
                      alt
                    />
                  </div>
                  <div class="col-lg-6 pr-0 d-flex align-items-center">
                    <div class="pl-5 w-100">
                      <div class="text-black mt-3">
                        <h1 class="display-3 mb-3 font-weight-bold">Login to your account</h1>
                        <div>
                          <b-form v-on:submit.prevent="submitForm">
                            <template
                              v-if="formBasicData && formBasicData.length"
                            >
                              <b-form-group
                                :label="renderLabel({ label: form.rawLabel })"
                                v-for="form in formBasicData"
                                :key="form.tmpId"
                                class="text-capitalize"
                                :invalid-feedback="
                                  renderInvalidFeedback({
                                    validationDesc: form['validation-desc']
                                  })
                                "
                                style="position: relative"
                                :state="renderError({ error: form.error })"
                              >
                                <template v-if="form.rawLabel === 'password'">
                                  <router-link
                                    to="/forgot-password"
                                    style="position: absolute; right: 0; top: 0"
                                    >Forgot password?</router-link
                                  >
                                </template>
                                <b-form-input
                                  :type="form.type || 'text'"
                                  @keyup="
                                    setValue({
                                      rawLabel: form.rawLabel,
                                      label: form.label,
                                      $event,
                                      tmpId: form.tmpId
                                    })
                                  "
                                  :state="renderError({ error: form.error })"
                                  :placeholder="form.placeholder"
                                />
                              </b-form-group>
                            </template>
                            <button class="btn btn-lg btn-second btn-block">
                              Login
                            </button>
                          </b-form>
                        </div>
                        <div class="text-center pt-4 text-black-50">
                          Klinik/Tempat praktik anda belum terdaftar?
                          <router-link
                            tag="a"
                            to="/register"
                            exact
                            title="Daftar disini"
                            >Daftar disini</router-link
                          >
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
import startCase from "lodash/startCase";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    formBasicData: null,
    formData: null
  }),
  validations: {
    formData: {
      ["email_/_username"]: {
        required,
        maxLength: maxLength(50)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  mounted() {
    this.formBasicData = this.setFormBasicData();
    this.setFormData();
  },
  methods: {
    async login() {
      try {
        const { formData } = this;
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
        const { status, data } = res.data;
        alert((status && "Success") || "Gagal");
      } catch (err) {
        console.log(err);
      }
    },
    submitForm($event) {
      const { formBasicData } = this;
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
      this.formData = this.setFormBasicData({ noFilter: false }).reduce(
        (arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        },
        {}
      );
    },
    setFormBasicData({ noFilter = true } = {}) {
      const tmp = [
        {
          label: "email / username",
          placeholder: "name@mail.com",
          type: "text",
          ignoreTransform: true
        },
        {
          label: "password",
          placeholder: "Masukkan password Anda",
          type: "password",
          ignoreTransform: true
        }
      ].map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        placeholder: !item.ignoreTransform
          ? startCase(item.placeholder)
          : item.placeholder,
        rawLabel: item.label
      }));

      return noFilter
        ? tmp.filter(
            item => !item.parent || item.parent === this.selectedTipeFaskes
          )
        : tmp;
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
    }
  }
};
</script>
