const sidebar = {
  namespaced: true,
  state: {
    sidebarCollapsed: true,
    sidebarCollapsedMobile: true
  },
  mutations: {
    SET_SIDEBAR_COLLAPSED(state, value) {
      state.sidebarCollapsed = value;
    },
    SET_SIDEBAR_COLLAPSED_MOBILE(state, value) {
      state.sidebarCollapsedMobile = value;
    }
  }
};

export default sidebar;
