import Vue from "vue";
import startCase from "lodash/startCase";

const validations = {
  renderError({ error }) {
    return error === null ? null : !error;
  },
  renderInvalidFeedback({ validationDesc }) {
    if (validationDesc && validationDesc.length > 0) {
      return validationDesc[validationDesc.length - validationDesc.length];
    }
  },
  renderValidationError({ formLabel, key, params, ignoreTransform }) {
    const label = !ignoreTransform
      ? startCase(formLabel)
      : !formLabel
      ? "Field ini"
      : formLabel;
    switch (key) {
      case "required":
        return `${label} harus diisi`;

      case "maxLength":
        const { max } = params;
        return `${label} maksimal ${max} karakter`;

      case "minLength":
        const { min } = params;
        return `${label} minimal ${min} karakter`;

      case "sameAsPassword":
        // return `${label} harus sama dengan ${eq}`;
        return `password tidak cocok`;

      case "numeric":
        return `${label} hanya boleh angka`;

      case "email":
        return `format ${label} tidak sesuai`;

      case "verifyPassword":
        return `Gunakan min 6 karakter dengan campuran huruf besar, huruf kecil dan angka`;

      case "verifyPasswordNoUppercase":
        return `Gunakan min 6 karakter dengan kombinasi huruf dan angka`;

      case "verifyEmail":
        return "Alamat email telah terdaftar";

      case "verifyPhone":
        return "Nomor Telepon sudah digunakan";

      case "verifyUsername":
        return "Username tidak dapat digunakan";

      default:
        return "";
    }
  },
  getValidationRules({ validationLabel }) {
    return Object.keys(validationLabel)
      .filter(item => !item.includes("$"))
      .reduce((obj, key) => {
        obj[key] = validationLabel[key];
        return obj;
      }, {});
  },
  validationDesc({ formLabel, validationLabel, ignoreTransform }) {
    const _validationRules = this.getValidationRules({ validationLabel });
    const tmp = Object.keys(_validationRules).filter(
      item => !_validationRules[item]
    );
    const res = tmp.map(item =>
      this.renderValidationError({
        formLabel,
        key: item,
        params: validationLabel["$params"][item],
        ignoreTransform
      })
    );
    return res;
  },
  triggerValidation({ label, $v, $vm, rawLabel }) {
    const { formBasicData } = $vm;
    if (!label) return false
    const _label = label.split(" ").join("_");
    const $v_object = $v.formData[_label];
    const tmpIndex = formBasicData.findIndex(item => item.label === label);
    if($v_object && $v_object.$touch && typeof $v_object.$touch == 'function') $v_object.$touch();
    if($v_object && $v_object.$error) Vue.set($vm.formBasicData[tmpIndex], "error", $v_object.$error);
    Vue.set(
      $vm.formBasicData[tmpIndex],
      "validation-desc",
      this.validationDesc({
        ignoreTransform: formBasicData[tmpIndex].ignoreTransform,
        formLabel: formBasicData[tmpIndex].ignoreTransform ? rawLabel : label,
        validationLabel: $v_object
      })
    );
    // todo: merge this func
    this.triggerNewValidation({ $vm, $v: $v_object, tmpIndex });
  },
  triggerNewValidation({ $vm, $v, tmpIndex }) {
    Vue.set(
      $vm.formBasicData[tmpIndex],
      "error",
      Object.keys($v)
        .filter(val => !/(\$)/gi.test(val))
        .some(val => !$v[val])
    );
  },
  renderLabel({ label }) {
    const importantLabel = `${label}`;
    
    return (
      (this.whitelistValidation &&
        typeof this.whitelistValidation === "function" &&
        this.whitelistValidation({ opts: "raw" }).includes(label) &&
        label) ||
      importantLabel
    );
  },

  itemFormBasicData({ rawLabel }) {
    if (
      this.formBasicData &&
      this.formBasicData.length &&
      this.formBasicData.length > 0
    ) {
      return this.formBasicData.find(item => item.rawLabel === rawLabel);
    } else {
      return null;
    }
  },
  blindlyGetData({ rawLabel, opts = null }) {
    switch (opts) {
      case "error":
        return this.getDataError({ rawLabel });

      default:
        return this.getValidationDesc({ rawLabel });
    }
  },
  getValidationDesc({ rawLabel }) {
    const item = this.itemFormBasicData({ rawLabel });
    if (item) {
      const { "validation-desc": validationDesc } = item;
      return validationDesc;
    } else {
      return null;
    }
  },
  getDataError({ rawLabel }) {
    const item = this.itemFormBasicData({ rawLabel });
    if (item) {
      const { error } = item;
      return this.renderError({ error });
    } else {
      return null;
    }
  },
  getValue(label, formData = this.formData) {
    if (label && formData) {
      const x = Object.keys(formData);
      const tmp = x.find(item => item === label.split(" ").join("_"));
      return tmp && formData[tmp];
    }
  },
  verifyEmailAvailibilty() {
    const { required: re, email: em } = this.$v.formData.email;
    if (val === "" || !re || !em) return true;

    return new Promise((resolve, reject) => {
      axios
        .get(`${this.url_api}/email/verify?email=${val}`)
        .then(res => {
          const {
            data: { status, message }
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
};

export default validations;
