import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

// Load Vuex
Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "izidok",
  storage: window.localStorage
});

// Create store
export default new Vuex.Store({
  state: {
    URL_API: process.env.VUE_APP_API_URL,
    BEARER_TOKEN: null,
    user: null,
    loading: false
  },
  modules: {
    sidebar: () => import("./modules/sidebar"),
    rekamMedis: () => import("./modules/rekamMedis"),
    struk: () => import("./modules/struk")
  },
  getters: {
    isLoading(state) {
      return state.loading;
    }
  },
  mutations: {
    SET_BEARER_TOKEN(state, value) {
      state.BEARER_TOKEN = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
    SET_LOADING(state, value) {
      state.loading = value || false;
    }
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [vuexPersist.plugin]
});
