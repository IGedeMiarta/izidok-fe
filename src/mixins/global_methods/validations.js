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
    const { max, min, eq, type } = params;
    const label = !ignoreTransform
      ? startCase(formLabel)
      : !formLabel
      ? "Field ini"
      : formLabel;
    switch (key) {
      case "required":
        return `${label} harus diisi`;

      case "maxLength":
        return `${label} maksimal ${max} karakter`;

      case "minLength":
        return `${label} minimal ${min} karakter`;

      case "sameAsPassword":
        return `${label} password harus sama dengan ${eq}`;

      case "numeric":
        return `${label} hanya boleh angka`;

      case "email":
        return `${label} tidak valid`;

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
    const _label = label.split(" ").join("_");
    const $v_object = $v.formData[_label];
    const tmpIndex = formBasicData.findIndex(item => item.label === label);
    $v_object.$touch();
    Vue.set($vm.formBasicData[tmpIndex], "error", $v_object.$error);
    Vue.set(
      $vm.formBasicData[tmpIndex],
      "validation-desc",
      this.validationDesc({
        ignoreTransform: formBasicData[tmpIndex].ignoreTransform,
        formLabel: formBasicData[tmpIndex].ignoreTransform ? rawLabel : label,
        validationLabel: $v_object
      })
    );
  },
  renderLabel({ label }) {
    const importantLabel = `${label}*`;
    return (
      (this.whitelistValidation &&
        typeof this.whitelistValidation === "function" &&
        this.whitelistValidation({ opts: "raw" }).includes(label) &&
        label) ||
      importantLabel
    );
  }
};

export default validations;
