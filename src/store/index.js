import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./modules/sidebar";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL_API: "http://149.129.239.15/api/v1"
  },
  mutations: {},
  actions: {},
  modules: {
    sidebar
  },
  strict: process.env.NODE_ENV !== "production"
});
