<template>
  <div>
    <page-title heading="Subskripsi" :breadcrumb="[
        {
          label: 'Subskripsi',
          link: '/subskripsi',
        },
        {
          label: 'List Subskripsi',
          active: true
        }
      ]" />
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 text-center">
                    <h3>PAKET ANDA SAAT INI</h3>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-box borders-0" style="background-color:#d5f5d6;border-radius:0px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <label class>Paket</label>
                          </div>
                          <div class="col-md-2">
                          <label>: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-2">
                            <label >Status</label>
                          </div>
                          <div class="col-md-2">
                            <label
                              >: <label class="btn-success" style="padding-left: 5px; padding-right: 5px;">Aktif</label></label>
                          </div>
                          <div class="col-md-2">
                            <label >Sisa Kuota</label>
                          </div>
                          <div class="col-md-2">
                            <label
                            >: <label class="btn-success" style="padding-left: 5px; padding-right: 5px;">50</label></label>
                          </div>
                          <div class="col-md-2">
                            <label class>Pembelian</label>
                          </div>
                          <div class="col-md-2">
                            <label >: 15 JAN 2020 10:09</label>
                          </div>
                          <div class="col-md-2">
                            <label class>Mulai Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <label >: 15 JAN 2020 10:09</label>
                          </div>
                          <div class="col-md-2">
                            <label class>Habis Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <label >: 15 JAN 2020 10:09</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-box borders-0" style="background-color:#cef2f5;border-radius:0px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <label >Add-ON</label>
                          </div>
                          <div class="col-md-2">
                            <label >: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-2">
                            <label >Status</label>
                          </div>
                          <div class="col-md-2">
                            <label
                            >: <label class="btn-success" style="padding-left: 5px; padding-right: 5px;">Aktif</label></label>
                          </div>
                          <div class="col-md-2">
                            <label >Sisa Kuota</label>
                          </div>
                          <div class="col-md-2">
                            <label
                            >: <label class="btn-success" style="padding-left: 5px; padding-right: 5px;">50</label></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                       <button @click="$router.push('/subskripsi/pilih-paket')" class="btn btn-primary float-right mt-3">Beli Paket Berlangganan</button>
                  </div>
<!--                    <div class="col-md-6">-->
<!--                       <button @click="$router.push('/subskripsi/addons')" class="btn btn-danger float-left mt-3">Beli Kuota ADD-ON</button>-->
<!--                  </div>-->
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

  }
</script>