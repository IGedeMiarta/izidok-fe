<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <register-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "register-form": () => import("./Register/RegisterForm.vue")
  }
};
</script>