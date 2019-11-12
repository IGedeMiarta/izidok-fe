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
                :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-9.jpg') + ')' }"
              ></div>
              <div class="bg-composed-wrapper--bg bg-premium-dark opacity-5"></div>
              <div class="bg-composed-wrapper--content p-5">
                <div class="text-white mt-3">
                  <h1 class="display-4 my-3 font-weight-bold">Kenapa harus mendaftar iziDok?</h1>
                  <p
                    class="font-size-md mb-0 text-white-50"
                  >Kemudahan dalam mengelola aktivitas klinik/tempat praktik Anda hanya dalam genggaman. Mendaftar hanya butuh waktu 1 menit saja.</p>
                  <div class="divider border-2 my-4 border-light opacity-2 rounded w-25"></div>
                  <div>
                    <router-link to="/login" exact class="btn btn-lg btn-warning">
                      <span class="btn-wrapper--icon">
                        <font-awesome-icon icon="arrow-left" />
                      </span>
                      <span class="btn-wrapper--label">Kembali ke halaman Login</span>
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
              <h4
                class="mb-2 font-weight-bold text-capitalize"
              >daftarkan {{ selectedTipeFaskes }} anda</h4>
              <b-form @submit.prevent="submitForm">
                <b-form-group label="Tipe Faskes">
                  <b-form-radio
                    class="my-1 text-capitalize"
                    v-model="selectedTipeFaskes"
                    name="some-radios"
                    :value="tipeFaskes"
                    v-for="(tipeFaskes, index) in tipeFaskesData"
                    :key="index"
                  >{{ tipeFaskes }}</b-form-radio>
                </b-form-group>
                <template v-if="formBasicData && formBasicData.length">
                  <b-form-group
                    :label="form.label.split('_').join(' ')"
                    v-for="form in formBasicData"
                    :key="form.tmpId"
                    class="text-capitalize"
                    :invalid-feedback="renderInvalidFeedback({validationDesc: form['validation-desc']})"
                    :state="renderError({error: form.error})"
                  >
                    <b-form-input
                      :type="form.type || 'text'"
                      :value="form.value"
                      @keyup="setValue({
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                            })"
                      :state="renderError({error: form.error})"
                      :placeholder="form.placeholder"
                    />
                  </b-form-group>
                </template>
                <div class="form-group mb-5">
                  Dengan menekan tombol
                  <strong>Daftar</strong> anda setuju dengan semua
                  <span class="text-capitalize">
                    persyaratan {{"&"}} ketentuan
                    <span class="text-lowercase">serta</span> kebijakan privasi
                    <span class="text-lowercase">yang berlaku</span>
                  </span>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block text-capitalize"
                >daftar</button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
      "no._sip": {
        maxLength: maxLength(30)
      },
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
        maxLength: maxLength(20)
      }
    }
  },
  created() {
    this.selectedTipeFaskes = this.tipeFaskesData[0];
  },
  mounted() {
    this.setFormData();
  },
  methods: {
    async addKlinik() {
      try {
        const { formData, formBasicData } = this;
        const mapLabel = label => {
          switch (true) {
            case /(izin)/gi.test(label):
              return "no_ijin";

            case /(handphone)/gi.test(label):
              return "nomor_telp";

            case /(konfirmasi)/gi.test(label):
              const tmp = label.split("_").reverse();
              return tmp
                .map(
                  (item, index) =>
                    (index === tmp.length - 1 && "confirmation") || item
                )
                .join("_");

            default:
              return label;
          }
        };
        const postData = formBasicData.reduce((obj, item) => {
          const { label } = item;
          obj[mapLabel(label)] = formData[label];
          return obj;
        }, {});
        console.log(postData);

        const res = await axios.post(`${this.url_api}/klinik`, {
          tipe_faskes:
            this.tipeFaskesData.findIndex(
              item => item === this.selectedTipeFaskes
            ) + 1,
          ...postData
        });
        const { status, data } = res.data;
        alert((status && "Success") || "Gagal");
      } catch (err) {
        console.log(err);
      }
    },
    submitForm() {
      this.addKlinik();
      if (
        this.formBasicData
          .filter(item => !["no._izin_klinik", "no._sip"].includes(item.label))
          .every(item => item.error !== null && !item.error)
      ) {
      } else {
        this.formBasicData;
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
          placeholder: "masukkan nama anda",
          parent: "tempat praktik"
        },
        {
          label: "no. sip",
          placeholder: "masukkan nomor sip anda",
          parent: "tempat praktik"
        },
        {
          label: "nama klinik",
          placeholder: "masukkan nama klinik anda",
          parent: "klinik"
        },
        {
          label: "no. izin klinik",
          placeholder: "masukkan no. izin klinik anda",
          parent: "klinik"
        },
        {
          label: "nama pic",
          placeholder: "masukkan nama pic anda",
          parent: "klinik"
        },
        {
          label: "no. handphone",
          placeholder: "masukkan nomor handphone anda"
        },
        {
          label: "email",
          placeholder: "masukkan email",
          type: "email"
        },
        {
          label: "username",
          placeholder: "username"
        },
        {
          label: "password",
          placeholder: "password",
          type: "password"
        },
        {
          label: "konfirmasi password",
          placeholder: "konfirmasi password",
          type: "password"
        }
      ].map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        placeholder: startCase(item.placeholder)
      }));

      return noFilter
        ? tmp.filter(
            item => !item.parent || item.parent === this.selectedTipeFaskes
          )
        : tmp;
    },
    setValue({ label, $event = null }) {
      const { target } = $event;
      const { value } = target;
      const _label = label.split(" ").join("_");
      this.formData[_label] = value && value.trim();
      if (!/(izin_klinik)/gi.test(_label)) {
        const $v_object = this.$v.formData[_label];
        const tmpIndex = this.formBasicData.findIndex(
          item => item.label === label
        );
        $v_object.$touch();
        Vue.set(this.formBasicData[tmpIndex], "error", $v_object.$error);
        Vue.set(
          this.formBasicData[tmpIndex],
          "validation-desc",
          this.validationDesc({
            formLabel: label,
            validationLabel: $v_object
          })
        );
        if (
          label === "password" &&
          this.formData.konfirmasi_password &&
          $v_object.$error
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