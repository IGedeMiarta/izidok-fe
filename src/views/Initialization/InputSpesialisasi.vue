<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title heading="Pilih Spesialisasi Anda" />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <template v-if="formBasicData && formBasicData.length">
              <b-form @submit.prevent="submitInputDataOperator">
                <div v-for="form in formBasicData" :key="form.tmpId">
                  <template v-if="form.type !== 'toggle'">
                    <b-form-group
                      :label="renderLabel(form)"
                      class="text-capitalize w-50"
                      :invalid-feedback="
                        renderInvalidFeedback({
                          validationDesc: form['validation-desc']
                        })
                      "
                      style="position: relative"
                      :state="renderError({ error: form.error })"
                    >
                      <template v-if="form.type === 'select'">
                        <p class="text-capitalize">
                          pilih spesialisasi <span style="color: red">*</span>
                        </p>
                        <vue-select
                          :options="spesialisasi"
                          @input="
                            setValue({
                              rawLabel: 'pekerjaan',
                              $event
                            })
                          "
                          :value="getValue('pekerjaan')"
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
                        <b-form-checkbox class="m-0" name="check-button" switch>
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
      nama_operator: {
        required,
        maxLength: maxLength(50)
      },
      email: {
        required,
        maxLength: maxLength(50),
        email
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
    async addOperator() {
      // const { constructPostData } = this;
      // try {
      //   const res = await axios.post(
      //     `${this.url_api}/operator`,
      //     constructPostData()
      //   );
      //   const { status, data } = res.data;
      //   if (status) {
      //     this.$router.push("/");
      //   }
      // } catch (err) {
      //   // console.log(err);
      // }
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
    submitInputDataOperator() {
      const { formBasicData } = this;
      if (formBasicData.every(item => item.error !== null && !item.error)) {
        this.addOperator();
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
          label: "pilih spesialisasi",
          placeholder: "Pilih Spesialisasi",
          type: "select",
          customLabel: true
        },
        {
          label: "no. SIP",
          placeholder: "Masukkan No. SIP",
          type: "email"
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
