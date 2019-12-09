<template>
  <div id="app" class="d-flex flex-fill">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
import axios from 'axios';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('__tkn__')

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "assets/bamburgh.scss";
</style>
