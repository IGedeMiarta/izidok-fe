import axios from "axios";
import getAuthorizationToken from "../authToken";
import store from "../../store";

const loading = "SET_LOADING";

export default () => {
  axios.defaults.headers.common["Authorization"] = getAuthorizationToken();
  axios.interceptors.request.use(
    config => {
      store.commit(loading, true);
      return config;
    },
    err => {
      store.commit(loading, !true);
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    response => {
      store.commit(loading, !true);
      store.commit('SET_AUTHERROR', null);
      return response;
    },
    err => {
      store.commit(loading, !true);
      if(err.response.status == 469) {
        store.commit('SET_AUTHERROR', err.response.data.message);
      }
      else if(err.response.status == 440) {
        store.commit('SET_AUTHERROR', 'Sesi login anda telah berakhir!');
      }
      return Promise.reject(err);
    }
  );
};
