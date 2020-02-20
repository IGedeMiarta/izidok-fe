<template>
  <div class="flex-grow-1 w-100 d-flex align-items-center">
    <div class="bg-composed-wrapper--content">
      <div class="row no-gutters">
        <div class="col-sm-6 p-0 img-banner-left">
          <!-- <div class="hero-wrapper bg-composed-wrapper bg-plum-plate min-vh-100" style="height: 100%"> -->
          <div class="flex-grow-1 w-100  align-items-center">
            <VueSlickCarousel :dots="true" :adaptiveHeight="true" :arrows='false' :autoplay="true">
              <img src="@/assets/img/image_Register1.jpg" style="height: 100%" alt="Banner izidok">
              <img src="@/assets/img/image_Register2.jpg" style="height: 100%" alt="Banner izidok">
              <img src="@/assets/img/image_Register3.jpg" style="height: 100%" alt="Banner izidok">
            </VueSlickCarousel>
          </div>
          <!-- </div> -->
        </div>
        <div class="col-lg-6 d-flex align-items-center content-register-right">
          <div class="col-sm-10 mt-2" style="margin-left:auto;margin-right:auto">
            <h4 class="font-weight-bold text-capitalize">
              daftarkan {{ selectedTipeFaskes }} anda
            </h4>
            <b-form @submit.prevent="submitForm">
              <!-- <b-form-group label="Tipe Faskes">
                  <b-form-radio-group
                    class="text-capitalize"
                    v-model="selectedTipeFaskes"
                    name="tipe-faskes"
                    :options="optionsTipeFaskes"
                    :stacked="true"
                  />
                </b-form-group> -->
              <!-- <b-form-group>
                  <label for="">Pilih Spesialisasi *</label>
                  <b-form-select v-model="selected" :options="options" class="mt-3"></b-form-select>
                  <template v-if="selected == 'e'" >
                    <label for="" style="margin-top:8px;">Tulis Spesialisasi Anda</label>
                    <b-input-group class="input-group-seamless mt-1">
                      <b-form-input placeholder="Tulis Spesialis Anda"></b-form-input>
                    </b-input-group>
                  </template>
                </b-form-group> -->
              <template v-if="formBasicData && formBasicData.length">
                <b-form-group v-for="form in formBasicData" :key="form.tmpId"
                  :class="form.rawLabel == 'No. SIP' ? '' : 'text-capitalize'" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })" style="margin-top:-8px;" >
                  <!-- <b-form-input
                      :type="form.type || 'text'"
                      :value="form.value"
                      :state="renderError({ error: form.error })"
                      :placeholder="form.placeholder"
                      v-bind:maxlength="form.maxlength"
                      v-if="form.rawLabel === 'email'"
                    /> -->
                  <!-- <b-form-select v-if="form.type === 'select'" v-model="formData.pilih_spesialisasi" :options="options" class="mt-3"
                      @change="spesialisLainnya"></b-form-select> -->
                  <template v-if="form.isType === 'password' || form.isType == 'password' ">
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
              </template>
              <div class="form-group">
                Dengan menekan tombol <strong>Daftar</strong>,
                <span class="text-capitalize">Anda</span> setuju dengan semua
                <span class="text-capitalize"><strong>syarat {{ "&" }} ketentuan </strong></span>
                serta
                <span class="text-capitalize"><strong>kebijakan privasi</strong></span> yang
                berlaku
              </div>
              <button type="submit" class="btn btn-md btn-block text-capitalize"
                style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                daftar
              </button>
              <div class="text-center" style="margin-top:2px;">
                Anda Sudah Memiliki Akun ?
                <router-link to="/login">
                  <span class="btn-wrapper--label">Masuk</span>
                </router-link>
                disini
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import startCase from "lodash/startCase";
  import debounce from "lodash/debounce";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowLeft,
    faFileSignature,
    faComments,
    faEye,
    faEyeSlash,
    faEdit,
    faImage
  } from "@fortawesome/free-solid-svg-icons";
  import {
    required,
    minLength,
    maxLength,
    sameAs,
    email,
    numeric,
    helpers
  } from "vuelidate/lib/validators";

  library.add(faArrowLeft, faEye, faEyeSlash, faFileSignature, faImage, faComments, faEdit);

  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  // const verifyEmail = async function(val) {
  //   if (val === "") return true;
  //   else return false;

  //   try {
  //     const { required: re, email: em, maxLength: ml } = this.$v.formData.email;

  //     if (re && em && ml) {
  //       const res = await axios.get(`${this.url_api}/email/verify?email=${val}`);
  //       return false;
  //     } else {
  //       return false;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  export default {
    data: () => ({
      tipeFaskesData: ["klinik", "tempat praktik"],
      selectedTipeFaskes: null,
      formBasicData: null,
      formData: null,
      validateEmail: false,
      validateUsername: false,
      isClicked: false,
      selected: null,
      dataSpesialisasi: null,
      passwordVisible: false,
      passwordVisible1: false,
    }),
    components: {
      VueSlickCarousel
    },
    watch: {
      selectedTipeFaskes(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.formBasicData = this.setFormBasicData();
        }
      }
    },
    validations() {
      return {
        formData: {
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
          nama_dokter: {
            required,
            maxLength: maxLength(50)
          },
          nama_klinik: {
            required,
            maxLength: maxLength(50)
          },
          nama_pic: {
            required,
            maxLength: maxLength(50)
          },
          "no._handphone": {
            numeric,
            required,
            maxLength: maxLength(15),
            minLength: minLength(10),
            verifyPhone(val) {
              if(this.timeVerifyPhone) clearTimeout(this.timeVerifyPhone)

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
          // "no._izin_klinik": {
          //   maxLength: maxLength(50)
          // },
          // "no._sip": {
          //   maxLength: maxLength(30)
          // },
          // pilih_spesialisasi: {
          //   required,
          //   minLength: minLength(2)
          // },
          password: {
            required,
            maxLength: maxLength(15),
            verifyPassword(val) {
              if (val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
                return true
              } else {
                return false;
              }
              // const {
              //   required: re
              // } = this.$v.formData.password;
              // return new Promise((resolve, reject) => {
              //   const x = val;
              //   // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
              //   if (x.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
              //     // this.formData.password.verifyPassword = true;
              //     this.formBasicData[3].error = true
              //   }
              //   const z = 'password';
              //   this.triggerValidation({
              //     label: z,
              //     $v: this.$v,
              //     $vm: this,
              //     rawLabel: z
              //   });

              // });
            }
          },

          konfirmasi_password: {
            required,
            sameAsPassword: sameAs("password"),
            minLength: minLength(6),
            maxLength: maxLength(15),
          },
          // username: {
          //   required,
          //   maxLength: maxLength(20),
          //   minLength: minLength(3),
          //   verifyUsername(val) {
          //     const {
          //       required: re
          //     } = this.$v.formData.username;
          //     if (val === "" || !re) return true;

          //     return new Promise((resolve, reject) => {
          //       axios
          //         .get(`${this.url_api}/username/verify?username=${val}`)
          //         .then(res => {
          //           const {
          //             data: {
          //               status,
          //               message
          //             }
          //           } = res;

          //           resolve(status);
          //         })
          //         .catch(err => {
          //           if (err.response) {
          //             const x = err.response.data;
          //             if (x && x.username) {
          //               resolve(false);
          //             }
          //           } else {
          //             resolve(true);
          //           }
          //         })
          //         .finally(() => {
          //           const x = "username";
          //           this.triggerValidation({
          //             label: x,
          //             $v: this.$v,
          //             $vm: this,
          //             rawLabel: x
          //           });
          //         });
          //     });
          //   }
          // }
        }
      };
    },
    created() {
      const tipeFaskesDataLength = this.tipeFaskesData.length;
      this.selectedTipeFaskes = this.tipeFaskesData[tipeFaskesDataLength - 1];
    },
    mounted() {
      this.setFormData();
    },
    computed: {
      optionsTipeFaskes() {
        const tmp = this.tipeFaskesData.slice(0);
        return tmp.reverse().map(item => ({
          text: item === "klinik" ? `${item} (akan segera hadir)` : item,
          value: item,
          disabled: item === "klinik"
        }));
      },
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
      }
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
    methods: {

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
      spesialisLainnya() {
        if (this.formData.pilih_spesialisasi === 'e') {
          this.formBasicData = this.setFormBasicData({
            showHidden: true
          })
        } else {
          this.formBasicData = this.setFormBasicData({
            showHidden: false,
          })

        }
      },
      whitelistValidation({
        opts = "normalized"
      } = {}) {
        const tmp = ["no. izin klinik", "No. SIP"];

        return opts === "raw" ? tmp : tmp.map(item => item.split(" ").join("_"));
      },
      async addKlinik() {
        try {
          const {
            formData,
            formBasicData
          } = this;
          // const mapLabel = label => {
          //   switch (true) {
          //     case /(izin)/gi.test(label):
          //       return "no_ijin";

          //     case /(handphone)/gi.test(label):
          //       return "nomor_telp";

          //     case /(konfirmasi)/gi.test(label):
          //       const tmp = label.split("_").reverse();
          //       return tmp
          //         .map(
          //           (item, index) =>
          //             (index === tmp.length - 1 && "confirmation") || item
          //         )
          //         .join("_");

          //     default:
          //       return label;
          //   }
          // };
          const tmpPostData = formBasicData.reduce((obj, item) => {
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

          const res = await axios.post(`${this.url_api}/klinik`, postData);
          const {
            status,
            data,
            message
          } = res.data;

          console.log(res.data);

          // console.log();
          if (status) {
            this.$router.push({
              name: "verification-process",
              params: {
                email: postData.email,
                user_id: data.user_id,
                created_at : data.created_at
              }
            });
            
          } else {
            console.log(match);
            let match = message.match(/(email|nomor_telp) is already in used/);
            if (match) {
              this.$swal({
                title: `${startCase(match[1])} Tidak Dapat Digunakan`,
                text: `${startCase(match[1])} telah terdaftar. Silakan gunakan ${
                match[1]
              } lain untuk melakukan registrasi!`,
                type: "error"
              });
            }
          }
        } catch (err) {
          // console.log(err);
        }
      },
      submitForm() {
        const tmp = this.formBasicData.filter(
          item => !this.whitelistValidation().includes(item.label)
        );
        if (tmp.every(item => item.error !== null && !item.error)) {
          this.addKlinik();
        } else {
          tmp.map(item => {
            this.triggerValidation({
              label: item.label,
              $v: this.$v,
              $vm: this
            });
          });
        }
      },
      setFormData() {
        this.formData = this.setFormBasicData({
          noFilter: false
        }).reduce(
          (arr, val) => {
            arr[val.label.split(" ").join("_")] = "";
            return arr;
          }, {}
        );
      },
      setFormBasicData({
        noFilter = true,
        showHidden = false
      } = {}) {
        const tmp = [{
            label: "nama dokter",
            placeholder: "Masukkan nama dokter",
            parent: "tempat praktik",
            name: "nama_klinik",
            maxlength: 50
          },
          // {
          //   type: 'select',
          //   label: "pilih spesialisasi",
          //   name: "pilih_spesialisasi",
          //   maxlength: 50
          // },
          // {
          //   label: "lainnya",
          //   placeholder: "lainnya",
          //   parent: "pilih spesialisasi",
          //   name: "pilih_spesialisasi",
          //   maxlength: 30,
          //   hide: true
          // },
          // {
          //   label: "No. SIP",
          //   placeholder: "Masukkan nomor SIP",
          //   name: "nomor_ijin",
          //   maxlength: 30
          // },
          // {
          //   label: "nama klinik",
          //   placeholder: "Masukkan nama klinik Anda",
          //   parent: "klinik",
          //   name: "nama_klinik",
          //   maxlength: 50
          // },
          // {
          //   label: "no. izin klinik",
          //   placeholder: "Masukkan no. izin klinik Anda",
          //   parent: "klinik",
          //   name: "nomor_ijin"
          // },
          // {
          //   label: "nama pic",
          //   placeholder: "Masukkan nama pic Anda",
          //   parent: "klinik",
          //   name: "nama_pic",
          //   maxlength: 50
          // },
          {
            label: "no. handphone",
            placeholder: "Masukkan nomor handphone Anda",
            name: "nomor_telp",
            maxlength: 15
          },
          {
            label: "email",
            placeholder: "Masukkan email Anda",
            type: "email",
            name: "email",
            maxlength: 50
          },
          // {
          //   label: "username",
          //   placeholder: "Masukkan username Anda",
          //   name: "username",
          //   maxlength: 20
          // },
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
          placeholder: item.placeholder,
          rawLabel: item.label
        }));

        // return noFilter ?
        //   tmp.filter(
        //     item => !item.parent || item.parent === this.selectedTipeFaskes
        //   ) : !showHidden ? tmp.filter(item => !item.hide) :
        //   tmp;

        return showHidden ? tmp : tmp.filter(item => !item.hide)
      },
      async getDataSpesialisasi() {
        try {
          const response = await axios.get('/spesialisasi');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
      setValue({
        label,
        rawLabel,
        $event = null
      } = {}) {
        // const { target } = $event;
        // const { value } = target;
        const value = $event;
        this.formData[label] = value && value.trim();
        if (!this.whitelistValidation().includes(label)) {
          // this.formData['password'].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
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
          // const $v_object = this.$v.formData[label];
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
          //   }, 800);
          // }
        }
      }
    }
  };
</script>

<style lang="scss">
  .dot-icon {
    width: 30px;
    height: 28px;
    background-color: white;
    border-radius: 50%
  }

  .bg-composed-wrapper--bg,
  .bg-composed-wrapper--image {
    opacity: 0.35;
  }

  .slick-dots li.slick-active button {
    width: 20px;
    background: #cac0c0;
    // margin-top : -50px;
  }

  .slick-dots {
    margin-bottom: 150px;
  }

  .img-banner-left {
    position: fixed;
  }

  .content-register-right {
    position: absolute;
    right: 0px;
  }

  // @media only screen and (max-width: 1084px) {
  //   .img-banner-left { 
  //     height: 754px;;
  //   }
  // }
  @media only screen and (max-width: 600px) {
    .img-banner-left {
      position: relative;
      display: none;
    }

    .content-register-right {
      position: relative;
    }
  }
</style>