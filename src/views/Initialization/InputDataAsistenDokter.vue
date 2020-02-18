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
                  :invalid-feedback="
                    renderInvalidFeedback({
                      validationDesc: form['validation-desc']
                    })
                  "
                  style="position: relative"
                  :state="renderError({ error: form.error })"
                >
                  <template v-slot:label>
                    <p class="mb-1">
                      {{ form.rawLabel }}
                      <span style="color: red" v-if="form.mandatory">*</span>
                    </p>
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
                    maxlength="50"
                  />
                  <template v-if="form.label === 'password'">
                    <p class="my-2" style="font-size: .8rem">*Password merupakan kombinasi huruf &amp; angka, maks. 15 karakter</p>
                  </template>
                </b-form-group>

                <div class="float-right">
                  <router-link
                    to="/input-tarif"
                    variant="secondary"
                    class="text-capitalize mr-2"
                    >lewati</router-link
                  >
                  <b-button
                    class="text-capitalize ml-2"
                    type="submit"
                    variant="primary"
                    >simpan</b-button
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
  sameAs
} from "vuelidate/lib/validators";

export default {
  beforeRouteEnter(to, from, next) {
    const { name } = from;
    if (name === "input-spesialisasi") {
      next();
    } else {
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
        minLength: minLength(10),
        maxLength: maxLength(50)
      },
      email: {
        required,
        maxLength: maxLength(50),
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15)
      },
      konfirmasi_password: {
        required,
        sameAsPassword: sameAs("password"),
        minLength: minLength(6),
        maxLength: maxLength(15)
      }
    }
  },
  computed: {
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
    async addOperator() {
      const { constructPostData } = this;
      try {
        const res = await axios.post(
          `${this.url_api}/operator`,
          constructPostData()
        );
        const { status, data } = res.data;
        if (status) {
          this.$router.push("/input-tarif");
        }
      } catch (err) {
        // console.log(err);
      }
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
