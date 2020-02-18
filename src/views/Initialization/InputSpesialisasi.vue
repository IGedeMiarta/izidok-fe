<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title heading="Pilih Spesialisasi Anda" />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <template v-if="formBasicData && formBasicData.length">
              <b-form @submit.prevent="submitForm">
                <div v-for="form in formBasicData" :key="form.tmpId">
                  <template v-if="form.type !== 'toggle'">
                    <b-form-group
                      :label="renderLabel(form)"
                      class="text-capitalize"
                      :invalid-feedback="customRenderInvalidFeedback(form)"
                      style="position: relative"
                      :state="renderError({ error: form.error })"
                    >
                      <template v-if="form.type === 'select'">
                        <p class="text-capitalize">
                          pilih spesialisasi <span style="color: red">*</span>
                        </p>
                        <vue-select
                          :class="{ error: form.error }"
                          :options="spesialisasi"
                          @input="
                            setValue({
                              rawLabel: 'pilih spesialisasi',
                              $event
                            })
                          "
                          :value="getValue('pilih_spesialisasi')"
                          :placeholder="form.placeholder"
                          label="title"
                          class="custom-v-select"
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
                          @keypress="
                            customInputEvent({
                              rawLabel: form.rawLabel,
                              $event
                            })
                          "
                          :state="renderError({ error: form.error })"
                          :placeholder="form.placeholder"
                          maxlength="50"
                        />
                      </template>
                    </b-form-group>
                  </template>
                  <template v-else>
                    <b-form-group
                      class="text-capitalize w-50"
                      :invalid-feedback="
                        renderInvalidFeedback({
                          validationDesc: form['validation-desc']
                        })
                      "
                      :state="renderError({ error: form.error })"
                    >
                      <div class="d-flex justify-content-end">
                        <p class="mb-1 flex-grow-1">
                          Apakah Anda Memiliki Asisten?
                          <span style="color: red">*</span>
                        </p>
                        <b-form-checkbox
                          class="m-0"
                          name="check-button"
                          switch
                          v-model="formData[form.label]"
                        >
                        </b-form-checkbox>
                      </div>
                    </b-form-group>
                    <p
                      class="font-italic w-50 border border-dark p-2"
                      style="background-color: #eee"
                    >
                      *Asisten Dokter adalah staff yang dapat membantu anda
                      untuk melakukan Registrasi, Administrasi, Pembayaran
                    </p>
                  </template>
                </div>

                <div class="float-right">
                  <b-button
                    class="text-uppercase"
                    type="submit"
                    variant="primary"
                    >lanjut</b-button
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
import { maxLength, email, required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  components: {
    "vue-select": () => import("@/components/VueSelect.vue")
  },
  data: () => ({
    formBasicData: null,
    formData: null,
    nama_operator: "",
    email_operator: "",
    spesialisasi: [
      "Umum",
      "Gigi",
      "Spesialis Penyakit Dalam",
      "Spesialis Anak",
      "Spesialis Obstetri & Ginekologi",
      "Spesialis Jantung & Pembuluh Darah",
      "Spesialis Kulit & Kelamin",
      "Spesialis Mata",
      "Spesialis Saraf",
      "Spesialis THT",
      "Spesialis Paru",
      "Spesialis Urologi",
      "Spesialis Geriatri",
      "Spesialis Gigi Anak",
      "Spesialis Konservatori GigI",
      "Spesialis Ortodonsia Gigi",
      "Spesialis Prostodonsia (Gigi)",
      "Spesialis Periodonsia (Gigi)",
      "Spesialis Bedah Mulut & Maksilofasial",
      "Spesialis Gizi Klinik",
      "Spesialis Akupunktur Medis",
      "Spesialis Kedokteran Jiwa",
      "Spesialis Ortopedi",
      "Spesialis Kedokteran Olahraga",
      "Spesialis Okupasi",
      "Spesialis Kedokteran Fisik & Rehabilitasi"
    ]
  }),
  validations: {
    formData: {
      pilih_spesialisasi: {
        required,
        maxLength: maxLength(50)
      },
      "no._SIP": {
        maxLength: maxLength(50)
        // verifyValue(val) {
        // }
      },
      "Apakah_Anda_memiliki_Asisten?": {
        required,
        maxLength: maxLength(50)
      }
    }
  },
  computed: {
    subheading() {
      return {
        text: `*Operator adalah staff yang dapat membantu Anda untuk melakukan aktivitas registrasi, administrasi, maupun pembayaran. <br/> Silahkan masukkan email dan nama untuk mendaftarkan Operator Anda (jika ada) atau lewati langkah ini.`
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

      if (rawLabel === "pilih spesialisasi" && valDesc) {
        const regex = new RegExp(/pilih/gi);
        const x = valDesc.findIndex(item => regex.test(item));
        return valDesc && valDesc[x] && valDesc[x].replace(regex, "");
      } else {
        this.renderInvalidFeedback({
          validationDesc: form["validation-desc"]
        });
      }
    },
    addSpesialisasi() {
      this.$router.push({
        name: "input-asisten-dokter"
      });
      // const { constructPostData } = this;
      // try {
      //   const res = await axios.post(
      //     `${this.url_api}/operator`,
      //     constructPostData()
      //   );
      //   const { status, data } = res.data;
      //   if (status) {
      //     this.$router.push({
      //       name: "input-asisten-dokter"
      //     });
      //   }
      // } catch (err) {
      //   // console.log(err);
      // }
    },
    customInputEvent({ label, rawLabel, $event }) {
      const { key } = $event;
      var evt = $event;
      evt = evt ? evt : window.event;
      if (/[^a-zA-Z0-9\/\-\.]/.test(key)) {
        evt.preventDefault();
      } else {
        void this.setValue({
          rawLabel,
          $event
        });
      }
    },
    renderLabel(form) {
      return form.customLabel ? null : (form.rawLabel && form.rawLabel) || null;
    },
    constructPostData() {
      const { formData } = this;
      const tmp = Object.keys(formData).reduce((obj, key) => {
        if (/(nama)/gi.test(key)) {
          obj["nama"] = formData[key];
        } else {
          obj[key] = formData[key];
        }
        return obj;
      }, {});
      return tmp;
    },
    submitForm() {
      const { formBasicData } = this;
      formBasicData.map(item => {
        this.triggerValidation({
          label: item.label,
          $v: this.$v,
          $vm: this,
          rawLabel: item.rawLabel
        });
      });

      if (formBasicData.every(item => item.error !== null && !item.error)) {
        this.addSpesialisasi();
      }
    },
    setFormData() {
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = /asisten/gi.test(val.label)
          ? false
          : null;
        return arr;
      }, {});
    },
    setFormBasicData() {
      const tmp = [
        {
          label: "pilih spesialisasi",
          placeholder: "Pilih Spesialisasi",
          type: "select",
          customLabel: true
        },
        {
          label: "no. SIP",
          placeholder: "Masukkan No. SIP",
          type: "text"
        },
        {
          label: "Apakah Anda memiliki Asisten?",
          placeholder: "",
          type: "toggle",
          customLabel: true
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
    setValue({ rawLabel, $event = null } = {}) {
      let value = $event;
      const label = rawLabel.split(" ").join("_");
      if (typeof $event === "object") {
        if ($event) {
          const {
            target: { value }
          } = $event;
          this.formData[label] = value;
        } else {
          this.formData[label] = null;
        }
      } else {
        this.formData[label] = value;
      }
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

<style lang="scss">
.custom-v-select {
  .vs__search {
    &::placeholder {
      color: #d1d2db !important;
    }

    &,
    &:focus {
      padding: 0.2rem 1.3rem;
    }
  }
}
</style>
