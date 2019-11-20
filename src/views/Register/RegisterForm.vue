<template>
  <div class="flex-grow-1 w-100 d-flex align-items-center">
    <div class="bg-composed-wrapper--content">
      <div class="row no-gutters">
        <div class="col-lg-5">
          <div
            class="hero-wrapper bg-composed-wrapper bg-plum-plate min-vh-100"
            style="height: 100%"
          >
            <div class="flex-grow-1 w-100 d-flex align-items-center">
              <div
                class="bg-composed-wrapper--image"
                :style="{
                  backgroundImage:
                    'url(' + require('@/assets/img/hero-bg/hero-9.jpg') + ')'
                }"
              ></div>
              <div
                class="bg-composed-wrapper--bg bg-premium-dark opacity-5"
              ></div>
              <div class="bg-composed-wrapper--content p-5">
                <div class="text-white mt-3">
                  <h1 class="display-4 my-3 font-weight-bold">
                    Mengapa harus mendaftar iziDok?
                  </h1>
                  <p class="font-size-md mb-0 text-white-50">
                    Kemudahan dalam mengelola klinik/tempat praktik dokter hanya dalam genggaman. 
                    Anda hanya perlu menyisihkan waktu kurang dari sepuluh menit untuk dapat bergabung dengan IziDok.
                  </p>
                  <div
                    class="divider border-2 my-4 border-light opacity-2 rounded w-25"
                  ></div>
                  <div>
                    <router-link
                      to="/login"
                      exact
                      class="btn btn-lg btn-warning"
                    >
                      <span class="btn-wrapper--icon">
                        <font-awesome-icon icon="arrow-left" />
                      </span>
                      <span class="btn-wrapper--label"
                        >Kembali ke halaman Login</span
                      >
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 d-flex align-items-center">
          <div class="col-lg-6 mx-auto px-0">
            <div class="py-2">
              <h4 class="mb-2 font-weight-bold text-capitalize">
                daftarkan {{ selectedTipeFaskes }} anda
              </h4>
              <b-form @submit.prevent="submitForm">
                <b-form-group label="Tipe Faskes">
                  <b-form-radio-group
                    class="text-capitalize"
                    v-model="selectedTipeFaskes"
                    name="tipe-faskes"
                    :options="optionsTipeFaskes"
                    :stacked="true"
                  />
                </b-form-group>
                <template v-if="formBasicData && formBasicData.length">
                  <b-form-group
                    :label="renderLabel({ label: form.rawLabel })"
                    v-for="form in formBasicData"
                    :key="form.tmpId"
                    :class="form.rawLabel == 'No. SIP' ? '' : 'text-capitalize'"
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
                      :state="renderError({ error: form.error })"
                      :placeholder="form.placeholder"
                      v-bind:maxlength="form.maxlength"
                    />
                  </b-form-group>
                </template>
                <div class="form-group mb-5">
                  Dengan menekan tombol <strong>Daftar</strong>, 
                  <span class="text-capitalize">Anda</span> setuju dengan semua
                  <span class="text-capitalize">syarat {{ "&" }} ketentuan</span> serta
                  <span class="text-capitalize">kebijakan privasi</span> yang berlaku
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block text-capitalize"
                >
                  daftar
                </button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import startCase from "lodash/startCase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email,
  numeric
} from "vuelidate/lib/validators";

library.add(faArrowLeft);

export default {
  data: () => ({
    tipeFaskesData: ["klinik", "tempat praktik"],
    selectedTipeFaskes: null,
    formBasicData: null,
    formData: null
  }),
  watch: {
    selectedTipeFaskes(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.formBasicData = this.setFormBasicData();
      }
    }
  },
  validations: {
    formData: {
      email: {
        email,
        required,
        maxLength: maxLength(50)
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
        maxLength: maxLength(15)
      },
      // "no._izin_klinik": {
      //   maxLength: maxLength(50)
      // },
      // "no._sip": {
      //   maxLength: maxLength(30)
      // },
      password: {
        required,
        minLength: minLength(6)
      },
      konfirmasi_password: {
        required,
        sameAsPassword: sameAs("password"),
        minLength: minLength(6)
      },
      username: {
        required,
        maxLength: maxLength(20),
        minLength: minLength(3)
      }
    }
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
    }
  },
  methods: {
    whitelistValidation({ opts = "normalized" } = {}) {
      const tmp = ["no. izin klinik", "No. SIP"];

      return opts === "raw" ? tmp : tmp.map(item => item.split(" ").join("_"));
    },
    async addKlinik() {
      try {
        const { formData, formBasicData } = this;
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
          const { label, name } = item;
          obj[name] = formData[label];
          return obj;
        }, {});
        const postData = {
          tipe_faskes:
            this.tipeFaskesData.findIndex(
              item => item === this.selectedTipeFaskes
            ) + 1,
          ...tmpPostData
        };
        // console.log(postData);

        const res = await axios.post(`${this.url_api}/klinik`, postData);
        const { status, data } = res.data;
        if(status) {
          this.$router.push('verification');
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
          this.triggerValidation({ label: item.label, $v: this.$v, $vm: this });
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
          label: "nama dokter",
          placeholder: "Masukkan nama dokter",
          parent: "tempat praktik",
          name: "nama_klinik",
          maxlength: 50
        },
        {
          label: "No. SIP",
          placeholder: "Masukkan nomor SIP",
          parent: "tempat praktik",
          name: "nomor_ijin"
        },
        {
          label: "nama klinik",
          placeholder: "Masukkan nama klinik Anda",
          parent: "klinik",
          name: "nama_klinik",
          maxlength: 50
        },
        {
          label: "no. izin klinik",
          placeholder: "Masukkan no. izin klinik Anda",
          parent: "klinik",
          name: "nomor_ijin"
        },
        {
          label: "nama pic",
          placeholder: "Masukkan nama pic Anda",
          parent: "klinik",
          name: "nama_pic",
          maxlength: 50
        },
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
        {
          label: "username",
          placeholder: "Masukkan username Anda",
          name: "username",
          maxlength: 50
        },
        {
          label: "password",
          placeholder: "Masukkan password Anda",
          type: "password",
          name: "password"
        },
        {
          label: "konfirmasi password",
          placeholder: "Masukkan password Anda sekali lagi",
          type: "password",
          name: "password_confirmation"
        }
      ].map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        placeholder: item.placeholder,
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
      if (!this.whitelistValidation().includes(label)) {
        this.triggerValidation({ label, $v: this.$v, $vm: this, rawLabel });
        const $v_object = this.$v.formData[label];
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
          }, 800);
        }
      }
    }
  }
};
</script>
