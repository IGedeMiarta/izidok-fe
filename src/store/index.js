import Vuex from 'vuex';
import Vue from 'vue';
import rekamMedis from './modules/rekamMedis';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    URL_API: 'http://localhost:9001/api/v1',
    BEARER_TOKEN: null
  },
  modules: {
    rekamMedis
  }
});