<template>
  <div class="app-wrapper bg-white">
    <div class="app-content p-0">
      <div class="app-content--inner d-flex align-items-center">
        <div class="flex-grow-1 w-100 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                <img src="@/assets/img/forgot.jpg" class="img-fluid mb-5" alt="lupa password izidok" />
              </div>
              <div class="col-md-6 mt-5">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-5 w-100">
                      <img src="/img/izidok.baaa69b4.png" alt="izidok" class="img-fluid w-100 d-block float-left"
                        style="width: 49% !important;">
                    </div>

                  </div>
                  <div class="col">
                    <br>
                    <p style="color:gray">
                      Selamat bergabung dengan izidok
                    </p>
                    <div>
                      <small>izidok siap membantu untuk memudahkan Anda dalam menangani pasien dan tempat praktik
                        anda</small>
                           <button class="btn btn-lg btn-block mt-5 "
                                style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                                Masuk
                              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faSearch,
    faEye,
    faInfo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faEye,
    faInfo
  );

  export default {
    methods: {

    }
  };
</script>