<template>
  <div>
    <page-title heading="Manajemen Asisten Dokter" />
    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h4>Tambah Asisten Dokter</h4>
            <!--  <small>Custom</small>
              <b>Example widget with table inside.</b> -->
          </div>
        </div>
        <div class="card-body">
          <div class="container">
            <div class="form-row justify-content-center">
              <div class="col-md-6">
                <template v-if="formBasicData && formBasicData.length">
                  <b-form @submit.prevent="submitInputDataOperator">
                    <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize"
                      :invalid-feedback="
                    renderInvalidFeedback({
                      validationDesc: form['validation-desc']
                    })
                  " style="position: relative" :state="renderError({ error: form.error })">

                      <template v-if="form.isType === 'password'">
                        <label for="">{{form.rawLabel}}</label>
                        <label for="" style="color:red"> *</label>
                        <b-input-group>
                          <b-input-group-text slot="append" class="border-left-0" v-if="form.name == 'password' "
                            @click="switchVisibilityPassword">
                            <font-awesome-icon v-if="passwordVisible == false" icon="eye" />
                            <font-awesome-icon v-else icon="eye-slash" />
                          </b-input-group-text>
                          <b-input-group-text slot="append" class="border-left-0"
                            v-if="form.name == 'password_confirmation' " @click="switchVisibilityPasswordConfirmation">
                            <font-awesome-icon v-if="passwordVisible1 == false" icon="eye" />
                            <font-awesome-icon v-else icon="eye-slash" />
                          </b-input-group-text>

                          <b-form-input :type="form.type || 'text'" class="border-right-0" @input="
                                      setValue({
                                        rawLabel: form.rawLabel,
                                        label: form.label,
                                        $event,
                                        tmpId: form.tmpId
                                      })
                                    " :state="renderError({ error: form.error })" :maxlength='form.maxlength'
                            :placeholder="form.placeholder" />
                        </b-input-group>
                      </template>
                      <template v-else :type="form.type || 'text'">

                        <label for="">{{form.rawLabel}}</label>
                        <label for="" style="color:red"> *</label>
                        <b-form-input @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label : form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      " :state="renderError({ error: form.error })" :placeholder="form.placeholder"
                          :maxlength="form.maxlength" />
                      </template>
                    </b-form-group>

                    <div class="float-right">
                      <router-link to="operator" variant="secondary" class="text-capitalize mr-2">Keluar</router-link>
                      <b-button class="text-capitalize ml-2" type="submit" variant="primary">simpan</b-button>
                    </div>
                  </b-form>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" style="border-radius:10px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faPlus,
    faMinus,
    faEye,
    faEyeSlash,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    maxLength,
    email,
    numeric,
    sameAs,
    minLength,
    required
  } from "vuelidate/lib/validators";
  import axios from "axios";
  library.add(faPlus, faEye,
    faEyeSlash, faMinus);

  export default {
    data: () => ({
      formBasicData: null,
      formData: null,
      nama_operator: "",
      passwordVisible: false,
      passwordVisible1: false,
      email_operator: "",
    }),
    validations: {
      formData: {
        nama_operator: {
          required,
          maxLength: maxLength(50)
        },
        email: {
          required,
          email,
          maxLength: maxLength(50),
          verifyEmail(val) {
            const {
              required: re,
              email: em
            } = this.$v.formData.email;
            if (val === "" || !re || !em) return true;
            return new Promise((resolve, reject) => {
              axios
                .get(`${this.url_api}/email/verify?email=${val}`)
                .then(res => {
                  const {
                    data: {
                      status,
                      message
                    }
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
          }
        },
        "no._handphone": {
          numeric,
          required,
          maxLength: maxLength(15),
          minLength: minLength(10),
          verifyPhone(val) {
            if (this.timeVerifyPhone) clearTimeout(this.timeVerifyPhone)

            return new Promise((resolve, reject) => {
              this.timeVerifyPhone = setTimeout(() => {
                const {
                  required: re,
                } = this.$v.formData['no._handphone'];
                if (val === "" || !re) resolve(true);
                axios
                  .get(`${this.url_api}/phone/verify?nomor_telp=${val}`)
                  .then(res => {
                    const {
                      data: {
                        status,
                        message
                      }
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
                    resolve(true);
                  });
              }, 450);
            });
          },
        },
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
          maxLength: maxLength(15),
        },
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
    },
    methods: {
      emailValidation() {
        const x = {
          email,
          required,
          maxLength: maxLength(50)
        };

        const {
          required: re,
          email: em,
          maxLength: ml
        } = this.$v.formData.email;

        return re && em && ml ? {
            ...x,
            verifyEmail
          } :
          x;
      },
      noTelpValidation() {
        const x = {
          email,
          required,
          maxLength: maxLength(15)
        };

        const {
          required: re,
          maxLength: ml
        } = this.$v.formData['no._handphone'];

        return re && ml ? {
            ...x,
            verifyPhone
          } :
          x;
      },
      switchVisibilityPassword() {
        this.formBasicData[3].type == 'password' ? this.formBasicData[3].type = 'text' : this.formBasicData[3].type =
          'password';
        if (this.formBasicData[3].type == 'text') {
          this.passwordVisible = true;
        } else if (this.formBasicData[3].type == 'password') {
          this.passwordVisible = false;
        }
      },
      switchVisibilityPasswordConfirmation() {
        this.formBasicData[4].type == 'password' ? this.formBasicData[4].type = 'text' : this.formBasicData[4].type =
          'password';
        if (this.formBasicData[4].type == 'text') {
          this.passwordVisible1 = true;
        } else if (this.formBasicData[4].type == 'password') {
          this.passwordVisible1 = false;
        }
      },
      async addOperator() {
          const {
            formData,
            formBasicData
          } = this;
        const tmpPostData = this.formBasicData.reduce((obj, item) => {
            const {
              label,
              name
            } = item;
            obj[name] = formData[label];
            return obj;
          }, {});
           const postData = {
            ...tmpPostData
          };
        try {
          const res = await axios.post(
            `${this.url_api}/operator`,
            postData
          );
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.$router.push("/operator");
          }
        } catch (err) {
          // console.log(err);
        }
      },
      constructPostData() {
        const {
          formData
        } = this;
        const tmp = Object.keys(formData).reduce((obj, key) => {
          if (/(nama)/gi.test(key)) {
            obj["nama"] = formData[key];
          } else {
            obj[key] = formData[key];
          }
          return obj;
        }, {});
        console.log(tmp);
        return tmp;
      },
      submitInputDataOperator() {
        const {
          formBasicData
        } = this;
        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.addOperator();
        } else {
          formBasicData.map(item => {
            this.triggerValidation({
              label: item.label,
              $v: this.$v,
              $vm: this
            });
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
        const tmp = [{
            label: "nama operator",
            placeholder: "Masukkan nama operator",
            type: "text",
            name: "nama",
          },
          {
            label: "email",
            placeholder: "Masukkan email operator",
            type: "email",
            name: "email",
          },
          {
            label: "no. handphone",
            placeholder: "Masukkan nomor handphone Anda",
            name: "nomor_telp",
            maxlength: 15
          },
          {
            label: "password",
            placeholder: "Masukkan password Anda",
            type: "password",
            isType: "password",
            name: "password",
            maxlength: 15
          },
          {
            label: "konfirmasi password",
            placeholder: "Masukkan password Anda sekali lagi",
            type: "password",
            isType: "password",
            name: "password_confirmation",
            maxlength: 15
          }
        ].map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          rawLabel: item.label
        }));
        return tmp;
      },
      setValue({
        label,
        rawLabel,
        $event = null
      } = {}) {
        const value = $event;
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
      }
    }
  };
</script>

<style scoped lang="css">
  .no-padding {
    padding: 0 !important;
  }
</style>