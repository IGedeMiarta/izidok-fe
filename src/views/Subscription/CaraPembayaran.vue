<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-md-7">
                    <div class="card card-box mb-5">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12"><strong>SEGERA LAKUKAN PEMBAYARAN SEBELUM</strong></div>
                          <div class="col-md-12" style="background-color : #f1e6e6">
                            <strong style="font-size:12px;">{{this.dataPaygetDetail.detail.transactionExpire}}</strong>
                          </div>
                          <div class="col-md-12 mt-2">
                            <label>Transfer Pembayaran ke Nomor Virtual Account</label>
                          </div>
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-3">
                                <img fluid
                                  :src="this.dataPaygetDetail.paygate.logo"
                                  height="40" width="120" class="mt-4" :alt="this.dataPaygetDetail.paygate.nama">
                              </div>
                              <div class="col-md-6">
                                <b-form-input disabled class="mt-4 text-center"
                                  style="color:blue" :value="this.dataPaygetDetail.detail.customerAccount"></b-form-input>
                              </div>
                              <div class="col-md-3">
                                <label style="margin-top: 31px;"><u>salin</u> </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <label for="">Jumlah yang harus dibayar :</label>
                          </div>
                          <div class="col-md-12">
                            <strong>Rp.{{this.dataPaygetDetail.detail.transactionAmount}},-</strong> <small>salin</small>
                          </div>
                          <div class="col-md-12">
                            <div role="tablist">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block href="#" v-b-toggle.accordion-1 class="text-left"><strong>
                                  {{this.dataPaygetDetail.tutorial[0].tipe }}</strong> </b-button>
                              </b-card-header>
                              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <ol v-for="(item,index) in this.dataPaygetDetail.tutorial[0].desc" :key="index">
                                      {{index}}. {{item}}
                                    </ol>
                                    
                                  </b-card-text>
                                  <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </div>
                            <div role="tablist">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block href="#" v-b-toggle.accordion-2 class=" text-left"><strong>
                                  {{this.dataPaygetDetail.tutorial[1].tipe }}
                                </strong>
                                </b-button>
                              </b-card-header>
                              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                     <ol v-for="(item,index) in this.dataPaygetDetail.tutorial[1].desc" :key="index">
                                      {{index}}. {{item}}
                                    </ol>
                                  </b-card-text>
                                  <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </div>
                            <div role="tablist">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block href="#" v-b-toggle.accordion-3 class=" text-left"><strong>
                                  {{this.dataPaygetDetail.tutorial[2].tipe}}
                                </strong>
                                </b-button>
                              </b-card-header>
                              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <ol v-for="(item,index) in this.dataPaygetDetail.tutorial[2].desc" :key="index">
                                      {{index}}. {{item}}
                                    </ol>
                                  </b-card-text>
                                  <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </div>
                            <div role="tablist">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block href="#" v-b-toggle.accordion-4 class=" text-left"><strong>
                                  {{this.dataPaygetDetail.tutorial[3].tipe}}
                                </strong>
                                </b-button>
                              </b-card-header>
                              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <ol v-for="(item,index) in this.dataPaygetDetail.tutorial[3].desc" :key="index">
                                      {{index}}. {{item}}
                                    </ol>
                                  </b-card-text>
                                  <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </div>

                            <b-button @click="$router.push('/subskripsi')" variant="success"
                              style="width:100%; margin-top:15px;">Kembali ke halaman Billing</b-button>
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
  import axios from 'axios';
  export default {
    data() {
      return {
        dataPaygetDetail: null,
      }
    },
    mounted() {
      this.getPaygetDetail();
    },
    methods: {
      // copy_text() {
      //   this.$refs['salin'].select()
      //   this.execCommand("copy");
      //   alert("Text berhasil dicopy");
      // },
      async getPaygetDetail() {
        try {
          var isRoute = this.$router.currentRoute.params.bill_id;
          console.log('route',isRoute);
          const res = await axios.get(`${this.url_api}/detailpembayaran/${isRoute}`)
          this.dataPaygetDetail = res.data.data
          console.log(this.dataPaygetDetail)
        } catch {
        }
      },
    }
  }
</script>