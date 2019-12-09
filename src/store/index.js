import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./modules/sidebar";
import rekamMedis from './modules/rekamMedis';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    URL_API: "http://localhost:9001/api/v1",
    BEARER_TOKEN: 'OGdyWGFCb3NBRWhDblEwWmVUc0d5R28wa0tMQXh0dWFLd1VCdVFwcw==',
  },
  modules: {
    sidebar,
    rekamMedis,
  },
  strict: process.env.NODE_ENV !== "production"
});
