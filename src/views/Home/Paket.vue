<template>
  <div class="p-2 text-center paket-wrapper text-white">
    <p class="mb-2 text-capitalize headline font-weight-bold">paket anda</p>
    <p class="mb-2 smaller letter-spacing--03">
      (7 hari tersisa hingga 14-01-2020, 03:00:00)
    </p>
    <div
      class="d-flex px-2 pb-3 pt-1 align-items-center justify-content-center flex-column bg-white text-black paket-inner"
    >
      <h4 class="text-capitalize tipe-paket font-weight-bold">starter</h4>
      <p class="small mb-0">(1-month-subscription)</p>
      <p
        class="highlight-text text-red font-weight-bold align-self-center my-0"
      >
        10
      </p>
      <p class="small text-capitalize">visite pasien tersisa</p>
      <b-button class="text-capitalize">lebih lanjut</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.paket-wrapper {
  background-color: #789dc3;
  border-radius: 10px;

  .smaller {
    font-size: 75%;
  }

  .letter-spacing {
    &--03 {
      letter-spacing: -0.3px;
    }
  }

  .headline {
    font-size: 1.6rem;
    color: #e2ecf6;
    letter-spacing: -0.2px;
  }

  .paket-inner {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #4a7fa4;

    .tipe-paket {
      color: #58a7e2;
      font-size: 1.7rem;
    }

    .highlight-text {
      font-size: 5rem;
      line-height: 5.4rem;

      &.--with-spacing {
        letter-spacing: 12px;
        margin-left: calc(50vh - 100%);
      }
    }

    .text-red {
      color: red;
    }

    button {
      background-color: #347b8b;
      color: #fff;
      border: none;
      border-radius: 12px;
    }
  }
}
</style>
