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
  renderValidationError({ formLabel, key, params }) {
    const label = startCase(formLabel);
    switch (key) {
      case "required":
        return `${label} harus di isi`;

      case "maxLength":
        const { max } = params;
        return `${label} maksimal ${max} karakter`;

      case "minLength":
        const { min } = params;
        return `${label} minimal ${min} karakter`;

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
  validationDesc({ formLabel, validationLabel }) {
    const _validationRules = this.getValidationRules({ validationLabel });
    const tmp = Object.keys(_validationRules).filter(
      item => !_validationRules[item]
    );
    const res = tmp.map(item =>
      this.renderValidationError({
        formLabel,
        key: item,
        params: validationLabel["$params"][item]
      })
    );
    return res;
  }
};

export default validations;
