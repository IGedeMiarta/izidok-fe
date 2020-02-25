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
  // entriesOptions({ filter = null }) {
  //   const x = [5, 10, 25, 50, 100];
  //   return (
  //     (() => {
  //       if (filter) {
  //         if (isArray(filter)) {
  //           return x.filter(item => !filter.includes(item));
  //         } else {
  //           return x.filter(item => item !== filter);
  //         }
  //       } else {
  //         return x;
  //       }
  //     })()
  //     |> map(item => ({
  //       value: item,
  //       text: item
  //     }))
  //   );
    // return (if (filter) {
    //   if (isArray(filter))
    // })
    // return (
    //   (filter && isArray(filter)
    //     ? x.filter(item => !filter.includes(item))
    //     : x.filter(item => item !== filter) || x)
    //   |> map(item => ({
    //     value: item,
    //     text: item
    //   }))
    // );
  // }
};

export default GLOBAL_METHODS;
