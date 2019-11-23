<template>
  <div class="page-title">
    <div class="row">
      <div class="col-xl-7">
        <div>
          <template v-if="breadCrumb">
            <ol class="breadcrumb text-uppercase font-size-xs p-0">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Dashboard</a>
              </li>
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Examples</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ heading }}
              </li>
            </ol>
          </template>

          <h5 class="display-4 mt-1 mb-2 font-weight-bold">{{ heading }}</h5>
          <p class="text-black-50 mb-0">{{ subheading }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    heading: String,
    subheading: String,
    breadCrumb: Boolean
  }
};
</script>
