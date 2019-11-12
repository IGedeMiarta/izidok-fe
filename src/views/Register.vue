<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
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
                          persyaratan & ketentuan
                          <span class="text-lowercase">serta</span> kebijakan privasi
                          <span class="text-lowercase">yang berlaku</span>
                        </span>
                      </div>

                      <button class="btn btn-primary btn-lg btn-block text-capitalize">daftar</button>
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
import Vue from "vue";
import startCase from "lodash/startCase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

library.add(faArrowLeft);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    tipeFaskesData: ["klinik", "tempat praktik"],
    selectedTipeFaskes: null,
    formBasicData: null,
    formData: null
  }),
  watch: {
    selectedTipeFaskes(newVal, oldVal) {
      newVal !== oldVal && (this.formBasicData = this.setFormBasicData());
    }
  },
  validations: {
    formData: {
      email: {
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
        minLength: minLength(6),
        maxLength: maxLength(6)
      },
      konfirmasi_password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(6)
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
    setFormData() {
      this.formData = this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = "";
        return arr;
      }, {});
    },
    setFormBasicData() {
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

      return tmp.filter(
        item => !item.parent || item.parent === this.selectedTipeFaskes
      );
    },
    setValue({ label, tmpId, $event = null }) {
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
      }
    }
  }
};
</script>