<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-md-8 ">
                    <div class="card card-box">
                      <div class="card-header text-uppercase justify-content-center">
                        <h3 class="text-center">Detail pembelian paket</h3>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-4">
                            <strong>Pilih Pembayaran</strong>
                          </div>
                          <div class="col-md-8">
                            <vue-select class="col-md-8 float-right" :options="
                    ['BCA Virtual Account', 'Permata Virtual Account']
                  " v-model="selected" />

                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Jenis Paket</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <label class="float-right mr-3">Starter</label>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Lama Berlangganan</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-form-radio-group class="float-right" :options="[
                    { text: '1 bulan', value: 1 },
                    { text: '12 bulan', value: 12 }
                  ]">
                            </b-form-radio-group>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Harga</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <strong class="float-right mr-3">Rp. 900.000,-</strong>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Add-on WhatsApp</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-form-radio-group class="float-right" :options="[
                    { text: 'Ya', value: 1 },
                    { text: 'Tidak', value: 12 }
                  ]">
                            </b-form-radio-group>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Pilih Kouta Add-on</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-form-radio-group class="float-right" :options="[
                    { text: '50 kuota', value: 50 },
                    { text: '100 kuota', value: 100 },
                    { text: '200 kuota', value: 200 }
                  ]">
                            </b-form-radio-group>
                            <small class="float-right" style="font-size:8px;">
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
                          <div class="col-md-4 mt-2">
                            <strong>Kode Promo</strong>
                            <small class="ml-2">(jika ada)</small>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-button variant="primary" class="float-right" size="md">Gunakan</b-button>
                            <b-form-input class="col-md-4 float-right mr-2"></b-form-input>
                          </div>
                          <div class="col-md-12 text-center mt-2" style="background-color : yellow">
                            <strong>Selamat, Anda mendapatkan potongan Rp. 50.000,-!</strong>
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