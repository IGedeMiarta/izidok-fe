<template>
  <div class="bg-composed-wrapper--content text-center p-5">
    <div class="col-lg-4 px-0 mx-auto text-center text-white">
      <h1 class="display-2 mb-3 px-2 font-weight-bold">
        Lupa Password?
      </h1>
      <h3
        class="font-size-lg line-height-sm font-weight-light d-block px-3 mb-3 text-white-50"
      >
        Masukkan email Anda dan kami akan mengirimkan instruksi melalui email
        untuk mengatur ulang password Anda.
      </h3>
      <div class="row no-gutters">
        <!-- <b-form @submit.prevent="submitForm" class="col-sm-12"> -->
          <div class="col-sm-12 col-md-8 mt-0 mt-sm-4 px-2">
            <b-form-group
              v-for="form in formBasicData"
              :key="form.tmpId"
              class="text-capitalize"
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
                size="lg"
                :state="renderError({ error: form.error })"
                :placeholder="form.placeholder"
              />
            </b-form-group>
          </div>
          <div class="col-sm-12 col-md-4 mt-0 mt-sm-4 px-2">
            <button
              class="btn d-block shadow-none w-100 btn-warning btn-lg"
              type="submit"
            >
              <span class="btn-wrapper--label text-capitalize">
                kirim
              </span>
            </button>
          </div>
        <!-- </b-form> -->
        <!-- <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Email"
          /> -->
        <!-- <div class="col-sm-12 col-md-4 mt-0 mt-sm-4 px-2">
          <button class="btn d-block shadow-none w-100 btn-warning btn-lg">
            <span class="btn-wrapper--label text-capitalize">
              kirim
            </span>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import { required, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    formBasicData: null,
    formData: {
      email: null
    }
  }),
  validations: {
    formData: {
      email: {
        required,
        email
      }
    }
  },
  mounted() {
    this.formBasicData = this.setFormBasicData();
  },
  methods: {
    setFormBasicData() {
      const tmp = [
        {
          label: "email",
          placeholder: "email"
        }
      ];

      return tmp.map((item, index) => ({
        ...item,
        label: item.label.split(" ").join("_"),
        tmpId: index,
        error: null,
        placeholder: startCase(item.placeholder),
        rawLabel: item.label
      }));
    },
    setValue() {},
    submitForm() {
      // const tmp = this.formBasicData.filter(
      //   item => !this.whitelistValidation().includes(item.label)
      // );
      // if (tmp.every(item => item.error !== null && !item.error)) {
      //   this.addKlinik();
      // } else {
      //   tmp.map(item => {
      //     this.triggerValidation({ label: item.label, $v: this.$v, $vm: this });
      //   });
      // }
    }
  }
};
</script>
