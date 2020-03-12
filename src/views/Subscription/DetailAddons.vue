<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-md-8 ">
                    <div class="card card-box">
                      <div class="card-header text-uppercase justify-content-center">
                        <h3 class="text-center">Detail pembelian add-on</h3>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-4">
                            <strong>Pilih Pembayaran</strong>
                          </div>
                          <div class="col-md-8" style="font-size:11px;">
                            <vue-select class="col-md-8 float-right" :options="
                    ['BCA Virtual Account', 'Permata Virtual Account']
                  " v-model="selected" />

                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Jenis Add-on</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <label class="float-right mr-3">WhatsApp</label>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Masa Aktif</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <label class="float-right mr-3">Selama Paket Berlangganan Aktif</label>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Harga</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <strong class="float-right mr-3">Rp. 900.000,-</strong>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Pilih Kouta</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-form-radio-group class="float-right" :options="[
                    { text: '50 kuota', value: 50 },
                    { text: '100 kuota', value: 100 },
                    { text: '200 kuota', value: 200 }
                  ]">
                            </b-form-radio-group>
                            <small class="float-right mr-3" style="font-size:8px;">
                              Kuota Whatsapp tidak memiliki masa berlaku, dapat digunakan selama <br> paket berlangganan
                              aktif
                            </small>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Harga Add-on</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <strong class="float-right mr-3">Rp. 22.000,-</strong>
                          </div>
                          <div class="col-md-12 mt-2">
                            <div class="card card-box">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-4">
                                    <strong>Biaya Admin</strong>
                                  </div>
                                  <div class="col-md-8 ">
                                    <strong class="float-right">Rp. 3.000,-</strong>
                                  </div>
                                  <div class="col-md-4">
                                    <strong>Total Pembayaran</strong>
                                  </div>
                                  <div class="col-md-8 float-right">
                                    <strong class="float-right">Rp. 1.0023.000,-</strong> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-3">
                            <b-button @click="$router.push('/subscription/cara-bayar')" variant="success" class="float-right">Bayar Sekarang</b-button>
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
      </div>
    </div>
  </div>
</template>

<script>
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {faCalendar, faInfoCircle
  } from "@fortawesome/free-solid-svg-icons";
  library.add(faCalendar,faInfoCircle);
  export default {
    components: {
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data: () => {
      return {
        selected: null
      }
    }
  }
</script>