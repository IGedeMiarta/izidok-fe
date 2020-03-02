import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./modules/sidebar";
import rekamMedis from "./modules/rekamMedis";
import struk from "./modules/struk";
import createPersistedState from "vuex-persistedstate";
import SecureLS from 'secure-ls';

// Load Vuex
Vue.use(Vuex);

const ls = new SecureLS({ isCompression: false });

const getRoles = state => state && state.user && state.user.roles;

// Create store
export default new Vuex.Store({
  state: {
    URL_API: process.env.VUE_APP_API_URL,
    BEARER_TOKEN: null,
    user: null,
    loading: false,
    autherror: null,
    initPosition: null
  },
  modules: {
    sidebar,
    rekamMedis,
    struk
  },
  getters: {
    isLoading: (state) => state.loading,
    userRole: getRoles,
    doctorRole: state =>
      getRoles(state).some(val => /(dokter|doktor)/gi.test(val.name)),
    assistantRole: state =>
      getRoles(state).some(val => /(asisten|operator)/gi.test(val.name)),
    getInitiationPosition: (state) => state.initPosition,
    isFirstLogin: (state) => (state.user && state.user.is_first_login) == 1,
    getKlinikId: (state) => state.user.klinik_id
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
    },
    SET_AUTHERROR(state, value) {
      state.autherror = value || null;
    },
    SET_USER_FIRST_LOGIN(state, value) {
      state.user.is_first_login = value;
    },
    SET_INIT_POSITION(state, value) {
      state.initPosition = value;
    }
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    createPersistedState({
      key: "_izd_",
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })]
});
