<template>
  <div class="app-header">
    <div class="d-flex">
      <button
        class="navbar-toggler hamburger hamburger--elastic toggle-sidebar"
        v-bind:class="{ 'is-active': sidebarCollapsed }"
        type="button"
        v-on:click="toggleSidebar"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <button
        class="navbar-toggler hamburger hamburger--elastic toggle-sidebar-mobile"
        v-bind:class="{ 'is-active': sidebarCollapsedMobile }"
        type="button"
        v-on:click="toggleSidebarMobile"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="d-flex align-items-center">
      <UserBox />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
    UserBox: () => import("./Header/UserBox")
  },

  data() {
    return {};
  },
  computed: {
    sidebarCollapsed: {
      get() {
        return this.$store.state.sidebar.sidebarCollapsed;
      },
      set(value) {
        this.$store.commit("sidebar/SET_SIDEBAR_COLLAPSED", value);
      }
    },
    sidebarCollapsedMobile: {
      get() {
        return this.$store.state.sidebar.sidebarCollapsedMobile;
      },
      set(value) {
        this.$store.commit("sidebar/SET_SIDEBAR_COLLAPSED_MOBILE", value);
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
    toggleSidebarMobile() {
      this.sidebarCollapsedMobile = !this.sidebarCollapsedMobile;
    }
  }
};
</script>
