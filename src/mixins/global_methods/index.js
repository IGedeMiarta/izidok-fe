import validations from "./validations";

const GLOBAL_METHODS = {
  ...validations,
  jenisKelamin(v) {
    const jk = ['Perempuan', 'Laki-laki']
    return jk[v] || null
  }
};

export default GLOBAL_METHODS;
