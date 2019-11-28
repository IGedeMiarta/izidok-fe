import Vuex from 'vuex';
import Vue from 'vue';
import rekamMedis from './modules/rekamMedis';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    URL_API: 'http://localhost:9000/api/v1',
    BEARER_TOKEN: 'VkFFZm1oME91bG8xWnVZdmllRmhPMzhwMnZJWVA1TkZiMnVMSGQ1Ng==' 
  },
  modules: {
    rekamMedis
  }
});