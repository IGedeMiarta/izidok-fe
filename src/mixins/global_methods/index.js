import validations from "./validations";
import getAuthorizationToken from "../authToken";

const GLOBAL_METHODS = {
  ...validations,
  jenisKelamin(v) {
    const jk = ["Perempuan", "Laki-laki"];
    return jk[v] || null;
  },
  rawAuthHeader: () => ({
    Authorization: getAuthorizationToken()
  })
};

export default GLOBAL_METHODS;
