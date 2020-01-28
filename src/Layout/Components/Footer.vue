<template>
  <div class="app-footer font-size-sm text-black-50">
    <div>
      <!-- © 2019 - Bamburgh Vue.js Admin Dashboard PRO - created by <a href="https://uifort.com" title="UiFort.com" target="_blank">UiFort.com</a> -->
      © {{ fullYear }} - iziDok
    </div>
    <div>
      <ul class="nav nav-justified">
        <!-- <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);">License</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0);">Changelog</a>
                </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    fullYear() {
      const x = new Date();
      return (
        x &&
        x.getFullYear &&
        typeof x.getFullYear === "function" &&
        x.getFullYear()
      );
    }
  }
};
</script>
