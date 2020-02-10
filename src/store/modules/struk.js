const struk = {
  namespaced: true,
  state: {
    strukVal: null
  },
  getters: {
    struk_values: state => state.strukVal
  },
  mutations: {
    SET_STRUK_VAL(state, value) {
      state.strukVal = value;
    }
  }
};

export default struk;
