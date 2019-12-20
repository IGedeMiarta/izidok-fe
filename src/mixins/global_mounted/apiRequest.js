import axios from "axios";
import getAuthorizationToken from "../authToken";

export default () => {
  axios.defaults.headers.common["Authorization"] = getAuthorizationToken();
};
