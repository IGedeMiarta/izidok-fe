import axios from "axios";
import store from "@/store";

const getAuthorizationToken = () =>
  `Bearer ${store.state.BEARER_TOKEN}` || null;

export default () => {
  axios.defaults.headers.common["Authorization"] = getAuthorizationToken();
};
