import validations from "./validations";
import getAuthorizationToken from "../authToken";
import isArray from "lodash/isArray";

const GLOBAL_METHODS = {
  ...validations,
  jenisKelamin(v) {
    const jk = ["Perempuan", "Laki-laki"];
    return jk[v] || null;
  },
  rawAuthHeader: () => ({
    Authorization: getAuthorizationToken()
  }),
  testX() {
    function double(x) {
      return x + x;
    }
    function add(x, y) {
      return x + y;
    }

    function boundScore(min, max, score) {
      return Math.max(min, Math.min(max, score));
    }
    let person = { score: 25 };

    let newScore =
      person.score
      |> double  //50
      |> (_ => add(7, _))  //14 + 0
      |> (_ => boundScore(0, 100, _));

    return newScore;
  },
  entriesOpt({ f = null, arr = [] } = {}) {
    return (
      ((f, x) => {
        if (f) {
          if (isArray(f)) {
            return x.filter(item => !f.includes(item));
          } else {
            return x.filter(item => item !== f);
          }
        } else {
          return x;
        }
      })(
        f,
        [...new Set([5, 10, 25, 50, 100, ...arr].flat())].sort((a, b) => a - b)
      )
      |> (_ =>
        _.map(item => ({
          value: item,
          text: item
        })))
    );
  }
};

export default GLOBAL_METHODS;
