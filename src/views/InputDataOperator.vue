<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title
        heading="Input Data Operator"
        subheading="Masukkan data operator untuk dapat melakukan penggunaan iziDok."
      />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <template v-if="formBasicData && formBasicData.length">
              <b-form @submit.prevent="submitInputDataOperator">
                <b-form-group
                  :label="form.rawLabel"
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
                  />
                </b-form-group>

                <div class="float-right">
                  <router-link
                    to="/"
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { maxLength, email, required } from "vuelidate/lib/validators";
library.add(faPlus, faMinus);

export default {
  data: () => ({
    formBasicData: null,
    formData: null,
    nama_operator: "",
    email_operator: ""
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
        alert((status && "Success") || "Gagal");
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
          label: "nama operator",
          placeholder: "Masukkan nama operator",
          type: "text"
        },
        {
          label: "email",
          placeholder: "Masukkan email operator",
          type: "email"
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
