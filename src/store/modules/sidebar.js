const sidebar = {
  namespaced: true,
  state: {
    sidebarCollapsed: true,
    sidebarCollapsedMobile: true,
    initializationPage: false
  },
  getters: {
    initPage: state => state.initializationPage
  },
  mutations: {
    SET_INITIALIZATION_PAGE(state, value) {
      state.initializationPage = value;
    },
    SET_SIDEBAR_COLLAPSED(state, value) {
      state.sidebarCollapsed = value;
    },
    SET_SIDEBAR_COLLAPSED_MOBILE(state, value) {
      state.sidebarCollapsedMobile = value;
    }
  }
};

export default sidebar;
