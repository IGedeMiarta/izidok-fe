<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content py-5">
              <div class="container">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
