<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title
        heading="Input Data Asisten Dokter"
        :subheading="subheading"
      />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <template v-if="formBasicData && formBasicData.length">
              <b-form @submit.prevent="submitInputDataOperator">
                <b-form-group
                  v-for="form in formBasicData"
                  :key="form.tmpId"
                  class="text-capitalize"
                  :invalid-feedback="customRenderInvalidFeedback(form)"
                  style="position: relative"
                  :state="renderError({ error: form.error })"
                >
                  <template v-slot:label>
                    <p class="mb-1">
                      {{ form.rawLabel }}
                      <span style="color: red" v-if="form.mandatory">*</span>
                    </p>
                  </template>
                  <template v-if="/(handphone)/gi.test(form.label)">
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
                      @keypress="
                        onKeyInputNumber({
                          label: form.label,
                          rawLabel: form.rawLabel,
                          $event
                        })
                      "
                      :state="renderError({ error: form.error })"
                      :placeholder="form.placeholder"
                      maxlength="50"
                    />
                  </template>
                  <template v-else>
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
                      maxlength="50"
                    />
                  </template>
                  <template v-if="form.label === 'password'">
                    <p class="my-2" style="font-size: .8rem">
                      *Password merupakan kombinasi huruf &amp; angka, maks. 15
                      karakter
                    </p>
                  </template>
                </b-form-group>

                <div class="float-right">
                  <b-button
                    class="text-capitalize"
                    variant="danger"
                    @click="lewati"
                    >Lewati</b-button
                  >
                  <b-button
                    class="text-capitalize ml-4"
                    type="submit"
                    variant="primary"
                    >Lanjut</b-button
                  >
                </div>
              </b-form>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  maxLength,
  email,
  required,
  minLength,
  sameAs,
  numeric
} from "vuelidate/lib/validators";
import axios from "axios";
import store from '@/store'
import { mapGetters } from "vuex";

const verifyPassword = val => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/gi.test(val);

export default {
  beforeRouteEnter(to, from, next) {
    if(store.getters.isFirstLogin) {
      next();
    }
    else {
      next("/");
    }
  },
  data: () => ({
    formBasicData: null,
    formData: null,
    nama_operator: "",
    email_operator: ""
  }),
  validations: {
    formData: {
      nama_asisten_dokter: {
        required,
        maxLength: maxLength(50)
      },
      "no._handphone": {
        required,
        numeric,
        verifyPhone(val) {
          const { required: re, numeric: nc, minLength: ml } = this.$v.formData[
            "no._handphone"
          ];
          if (val === "" || !re || !nc || !ml) return true;
          return new Promise((resolve, reject) => {
            axios
              .get(`${this.url_api}/phone/verify?nomor_telp=${val}`)
              .then(res => {
                const {
                  data: { status, message }
                } = res;
                resolve(status);
              })
              .catch(err => {
                if (err.response) {
                  const x = err.response.data;
                  if (x && x.nomor_telp) {
                    resolve(false);
                  }
                } else {
                  resolve(true);
                }
              })
              .finally(() => {
                const x = "no._handphone";
                this.triggerValidation({
                  label: x,
                  $v: this.$v,
                  $vm: this,
                  rawLabel: x
                });
              });
          });
        },
        minLength: minLength(10),
        maxLength: maxLength(15)
      },
      email: {
        required,
        email,
        verifyEmail(val) {
          const { required: re, email: em } = this.$v.formData.email;
          if (val === "" || !re || !em) return true;

          return new Promise((resolve, reject) => {
            axios
              .get(`${this.url_api}/email/verify?email=${val}`)
              .then(res => {
                const {
                  data: { status, message }
                } = res;

                resolve(status);
              })
              .catch(err => {
                if (err.response) {
                  const x = err.response.data;
                  if (x && x.email) {
                    resolve(false);
                  }
                } else {
                  resolve(true);
                }
              })
              .finally(() => {
                const x = "email";
                this.triggerValidation({
                  label: x,
                  $v: this.$v,
                  $vm: this,
                  rawLabel: x
                });
              });
          });
        },
        maxLength: maxLength(50)
      },
      password: {
        required,
        verifyPasswordNoUppercase(val, vm) {
          const {
            required: re,
            minLength: ml,
            maxLength: mal
          } = this.$v.formData.password;
          if (val === "" || !re || !ml || !mal) return true;
          return verifyPassword(val);
        },
        minLength: minLength(6),
        maxLength: maxLength(15)
      },
      konfirmasi_password: {
        required,
        verifyPasswordNoUppercase(val, vm) {
          const {
            required: re,
            minLength: ml,
            maxLength: mal
          } = this.$v.formData.password;
          if (val === "" || !re || !ml || !mal) return true;
          return verifyPassword(val);
        },
        sameAsPassword: sameAs("password"),
        minLength: minLength(6),
        maxLength: maxLength(15)
      }
    }
  },
  computed: {
    ...mapGetters(["getKlinikId"]),
    subheading() {
      return {
        text: `*Silakan masukkan data pada kolom berikut untuk mendaftarkan Asisten Anda (jika ada), atau lewati langkah ini.`
      };
    }
  },
  mounted() {
    this.formBasicData = this.setFormBasicData();
    this.formData = this.setFormData();
  },
  methods: {
    customRenderInvalidFeedback(form) {
      const { rawLabel, "validation-desc": valDesc } = form;

      if (/(handphone)/gi.test(rawLabel) && valDesc) {
        const regex = new RegExp(/telepon/gi);
        const x = valDesc.findIndex(item => regex.test(item));

        if (x === 0) {
          return (
            valDesc && valDesc[x] && valDesc[x].replace(regex, "handphone")
          );
        } else {
          return this.renderInvalidFeedback({
            validationDesc: form["validation-desc"]
          });
        }
      } else {
        return this.renderInvalidFeedback({
          validationDesc: form["validation-desc"]
        });
      }
    },
    onKeyInputNumber({ label, rawLabel, $event }) {
      var evt = $event;
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        void this.setValue({ label, rawLabel, $event });
      }
    },
    async addAsistenDokter() {
      const { constructPostData } = this;
      try {
        const res = await axios.post(
          `${this.url_api}/operator`,
          constructPostData()
        );
        const { status, data, message } = res.data;
        if (!status) {
          this.$swal({
            text: `${message || "something went wrong"}`,
            type: "error"
          });

          return false;
        }

        this.$router.push({
          name: "input-tarif"
        });
      } catch (err) {
        console.log(err);
      }
    },
    constructPostData() {
      const { formData } = this;
      const tmp = Object.keys(formData).reduce((obj, key) => {
        if (/(nama)/gi.test(key)) {
          obj["nama"] = formData[key];
        } else if (/(handphone)/gi.test(key)) {
          obj["nomor_telp"] = formData[key];
        } else if (/(konfirmasi)/gi.test(key)) {
          obj["password_confirmation"] = formData[key];
        } else {
          obj[key] = formData[key];
        }
        return obj;
      }, {});
      return tmp;
    },
    submitInputDataOperator() {
      const { formBasicData } = this;
      if (formBasicData.every(item => item.error !== null && !item.error)) {
        this.addAsistenDokter();
      } else {
        formBasicData.map(item => {
          this.triggerValidation({ label: item.label, $v: this.$v, $vm: this });
        });
      }
    },
    setFormData() {
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = null;
        return arr;
      }, {});
    },
    setFormBasicData() {
      const tmp = [
        {
          label: "nama asisten dokter",
          placeholder: "Masukkan Nama Asisten Dokter",
          type: "text",
          mandatory: true
        },
        {
          label: "email",
          placeholder: "Masukkan Email",
          type: "email",
          mandatory: true
        },
        {
          label: "no. handphone",
          placeholder: "Masukkan No. Handphone",
          type: "text",
          mandatory: true
        },
        {
          label: "password",
          placeholder: "Masukkan password",
          type: "password",
          mandatory: true
        },
        {
          label: "konfirmasi password",
          placeholder: "Konfirmasi password ulang",
          type: "password",
          mandatory: true
        }
      ].map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        placeholder: item.placeholder,
        rawLabel: item.label
      }));

      return tmp;
    },
    setValue({ label, rawLabel, $event = null } = {}) {
      const { target } = $event;
      const { value } = target;
      this.formData[label] = value && value.trim();
      const confirms = ["password", "konfirmasi_password"];
      if (confirms.includes(label)) {
        confirms.forEach(item => {
          this.triggerValidation({
            label: item,
            $v: this.$v,
            $vm: this,
            rawLabel: item.split("_").join(" ")
          });
        });
      } else {
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
      }
    },
    lewati() {
      axios.post(`${this.url_api}/user/skip_asisten`)
        .then(res => {
          if(res.data.status == false) {
            this.$swal({
              text: `${res.data.message || "something went wrong"}`,
              type: "error"
            });
            return;
          }

          this.$router.push({name: 'input-tarif'})
        })
        .catch(err => {
            this.$swal({
              text: "something went wrong",
              type: "error"
            });
            return;
        })
    }
  }
};
</script>
