<template>
  <div
    class="app-wrapper"
    v-bind:class="{
      'sidebar-collapsed': sidebarCollapsed,
      'sidebar-open-mobile': sidebarCollapsedMobile
    }"
  >
    <Sidebar sidebarbg="bg-night-sky" />
    <div
      class="sidebar-mobile-overlay"
      v-on:click="toggleSidebarMobile"
      v-show="sidebarCollapsedMobile"
    ></div>
    <div class="app-main">
      <transition name="fade" mode="out-in" appear>
        <Header />
      </transition>
      <div class="app-content bg-white">
        <div class="app-content--inner">
          <slot></slot>
        </div>
        <transition name="fade" mode="out-in" appear>
          <Footer />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Header: () => import("../Components/Header"),
    Sidebar: () => import("../Components/Sidebar"),
    Footer: () => import("../Components/Footer")
  },
  computed: {
    sidebarCollapsed: {
      get() {
        return this.$store.state.sidebar.sidebarCollapsed;
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
    toggleSidebarMobile() {
      this.sidebarCollapsedMobile = !this.sidebarCollapsedMobile;
    }
  }
};
</script>
