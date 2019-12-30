import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import sidebar from "./modules/sidebar";
import rekamMedis from "./modules/rekamMedis";
import struk from "./modules/struk";

// Load Vuex
Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "izidok",
  storage: window.localStorage
});

// Create store
export default new Vuex.Store({
  state: {
    URL_API: "http://api.izidok.id/api/v1",
    BEARER_TOKEN: null,
    user: null
  },
  modules: {
    sidebar,
    rekamMedis,
    struk
  },
  mutations: {
    SET_BEARER_TOKEN(state, value) {
      state.BEARER_TOKEN = value;
    },
    SET_USER(state, value) {
      state.user = value;
    }
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [vuexPersist.plugin]
});
