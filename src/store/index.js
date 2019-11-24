import Vuex from 'vuex';
import Vue from 'vue';
import rekamMedis from './modules/rekamMedis';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    URL_API: 'http://149.129.239.15/api/v1'
  },
  modules: {
    rekamMedis
  }
});