<template>
  <div>
    <page-title heading="Billing" :breadcrumb="[
        {
          label: 'Billing',
          link: '/billing',
        },
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
                          <div class="col-md-4">
                            <label for="">Paket</label> <label style="float:right">: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-4">
                            <label for="">Status</label> :<label
                              style="background-color:#12e85a;padding:3px;float:right"> Aktif</label>
                          </div>
                          <div class="col-md-4">
                            <label for="">Sisa Kuota :</label> <label
                              style="background-color:#12e85a;padding:3px;float:right">50</label>
                          </div>
                          <div class="col-md-4">
                            <label for="">Pembelian</label> <label style="float:right">: 15 JAN 2020 10:09</label>
                          </div>
                              <div class="col-md-4">
                            <label for="">Mulai Berlaku</label> <label style="float:right">: 15 JAN 2020 10:09</label>
                          </div>
                             <div class="col-md-4">
                            <label for="">Habis Berlaku</label> <label style="float:right">: 15 JAN 2020 10:09</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-box borders-0" style="background-color:#cef2f5;border-radius:0px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label for="">Add-ON</label> <label style="float:right">: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-4">
                            <label for="">Status</label> :<label
                              style="background-color:#12e85a;padding:3px;float:right"> Aktif</label>
                          </div>
                          <div class="col-md-4">
                            <label for="">Sisa Kuota :</label> <label
                              style="background-color:#12e85a;padding:3px;float:right">50</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                       <b-button variant="primary" style="width:50%" class="float-right mt-3">Beli Paket Berlangganan</b-button>
                  </div>
                    <div class="col-md-6">
                       <b-button style="width:50%;background-color:#de51d9;color:white" class="mt-3">Beli Kouta ADD-ON</b-button>
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

  }
</script>