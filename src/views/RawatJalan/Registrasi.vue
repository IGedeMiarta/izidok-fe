<template>
  <div>
    <page-title
      heading="Registrasi Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan'
        },
        { label: 'registrasi', active: true }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-header">
          <h4 class="text-capitalize my-2">form registrasi rawat jalan</h4>
        </div>
        <div class="card-body">
          <b-form v-on:submit.prevent="submitForm">
            <template v-if="formBasicData && formBasicData.length">
              <b-row>
                <b-col
                  :cols="form.col"
                  v-for="form in formBasicData"
                  :key="form.tmpId"
                >
                  <b-form-group
                    :label="renderLabel({ label: form.rawLabel })"
                    class="text-capitalize"
                    :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    "
                    style="position: relative"
                    :state="renderError({ error: form.error })"
                  >
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
                      v-if="form.type === 'text'"
                    />
                    <vue-select
                      :class="{ error: form.error }"
                      :options="options"
                      v-if="form.type === 'select'"
                    ></vue-select>
                    <template v-if="form.type === 'radio'">
                      <b-form-radio-group
                        id="radio-group-1"
                        v-model="formData[form.label]"
                        @change="
                          setValue({
                            label: form.label,
                            rawLabel: form.rawLabel,
                            $event
                          })
                        "
                        :options="
                          form.data.map((item, index) => ({
                            text: item,
                            value: index
                          }))
                        "
                        name="radio-options"
                      ></b-form-radio-group>
                    </template>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button
                type="submit"
                variant="primary"
                class="text-capitalize my-2 float-right"
                >simpan</b-button
              >
            </template>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import {
  required,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators";

const tmp = [
  {
    label: "no. rekam medis",
    type: "text",
    col: 3,
    validations: {
      required,
      minLength: minLength(6)
    }
  },
  {
    label: "no. ktp",
    type: "text",
    col: 3,
    validations: {}
  },
  {
    label: "nama lengkap",
    type: "select",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "jenis kelamin",
    type: "radio",
    col: 6,
    data: ["laki-laki", "perempuan"],
    validations: {
      required
    }
  },
  {
    label: "nomor handphone",
    type: "text",
    col: 6,
    validations: {
      required,
      numeric
    }
  },
  {
    label: "dokter",
    type: "select",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "waktu konsultasi",
    type: "text",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "tinggi badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "berat badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "suhu badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "tensi sistole",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "tinggi diastole",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "nadi",
    type: "text",
    col: 2,
    validations: {}
  }
];

export default {
  components: {
    "vue-select": () => import("@/components/VueSelect.vue")
  },
  data: () => ({
    formBasicData: null,
    formData: null,
    options: ["foo", "bar", "baz"],
    selected: null
  }),
  validations() {
    return {
      formData: {
        ...tmp.reduce((obj, item) => {
          obj[item.label.split(" ").join("_")] = item.validations;
          return obj;
        }, {})
      }
    };
  },
  mounted() {
    this.formBasicData = this.setFormBasicData();
    this.formData = this.setFormData();
  },
  methods: {
    overwriteAntrean() {
      this.$swal({
        title: "Pasien telah berada pada list antrean",
        text: `Apakah anda yakin untuk melanjutkan registrasi?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("tidak"),
        confirmButtonText: startCase("ya")
      }).then(res => {
        if (res.value) {
          console.log(res);
        }
      });
    },
    whitelistValidation() {
      return this.setFormBasicData().map(item => item.rawLabel);
    },
    submitForm() {
      const { formBasicData } = this;
      if (formBasicData.every(item => item.error !== null && !item.error)) {
        // console.log("good to go");
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
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = null;
        return arr;
      }, {});
    },
    setFormBasicData() {
      return tmp.map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        rawLabel: item.label
      }));
    },
    setValue({ label, rawLabel, $event = null } = {}) {
      let value = $event;
      if (typeof $event === "object") {
        const { target } = $event;
        value = target.value;
      }
      this.formData[label] = value;
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
