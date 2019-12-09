import axios from "axios";

const getAuthorizationToken = () =>
  JSON.stringify(localStorage.getItem("__tkn__")) || null;

export default () => {
  axios.defaults.headers.common["Authorization"] = getAuthorizationToken();
};
