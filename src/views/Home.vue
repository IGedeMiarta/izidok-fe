<template>
  <div class="app-content app-content-aside bg-white">
    <div class="app-content--inner p-0 d-flex flex-column">
      <HelloWorld msg="Hello World" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
