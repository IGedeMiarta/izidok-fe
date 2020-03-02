import validations from "./validations";
import getAuthorizationToken from "../authToken";
import startCase from "lodash/startCase";
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
  entriesOpt({ f = null, arr = [] } = {}) {
    const o = [5, 10, 25, 50, 100];
    return (
      ((f, x) =>
        (f &&
          (isArray(f)
            ? x.filter(item => !f.includes(item))
            : x.filter(item => item !== f))) ||
        x)(
        f,
        (isArray(arr) &&
          [...new Set([...o, ...arr].flat())].sort((a, b) => a - b)) ||
          o
      )
      |> (_ =>
        _.map(item => ({
          value: item,
          text: item
        })))
    );
  },
  getLabelTable: val =>
    (val &&
      (val.label || val.key) &&
      (val.label ? val.label : val.key.split("_").join(" "))) ||
    val,
  generateFieldList({ field = null }) {
    const { getLabelTable } = this;
    return (
      (field &&
        isArray(field) &&
        field.map(item => ({
          key: (item.key && item.key) || item,
          label: startCase(getLabelTable(item)),
          sortable: item.sortable || false,
          searchable: item.searchable || false,
          ...item
        }))) ||
      []
    );
  },
  setSearchableAndSortableFieldList({
    field = null,
    customFunc = val => Boolean(/(actions)\b/gi.test(val) ? !1 : 1)
  }) {
    return (
      (field &&
        isArray(field) &&
        (field
          |> (_ =>
            _.map(item => ({
              ...item,
              searchable: customFunc(item.key || item),
              sortable: customFunc(item.key || item)
            }))))) ||
      []
    );
  }
};

export default GLOBAL_METHODS;
