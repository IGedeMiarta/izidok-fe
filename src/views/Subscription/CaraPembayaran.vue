<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container-fluid">
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
                            <strong style="font-size:12px;">{{convertDate(this.dataPaygetDetail.detail.transactionExpire)}}</strong>
                          </div>
                          <div class="col-md-12 mt-2">
                            <label>Transfer Pembayaran ke Nomor Virtual Account</label>
                          </div>
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-3">
                                <img fluid :src="this.dataPaygetDetail.paygate.logo"
                                  class="mt-4 logo-bank" :alt="this.dataPaygetDetail.paygate.nama">
                              </div>
                              <div class="col-md-6">
                                <b-form-input disabled class="mt-4 text-center p-md-1" style="color:blue"
                                  :value="this.dataPaygetDetail.detail.customerAccount"></b-form-input>
                              </div>
                              <div class="col-md-3">
                                <button style="margin-top: 25px;" class="btn btn-default" @click="copy_text(dataPaygetDetail.detail.customerAccount)"><u>salin</u></button>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <label >Jumlah yang harus dibayar :</label>
                          </div>
                          <div class="col-md-12">
                            <strong>Rp {{parseInt(dataPaygetDetail.detail.transactionAmount).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}},-</strong>
                            <button class="btn btn-default" @click="copy_text_money(dataPaygetDetail.detail.transactionAmount)"><u>salin</u></button>
                          </div>
                          <div class="col-md-12">
                            <!-- <template v-if="this.dataPaygetDetail.tutorial[0]"> -->
                              <div role="tablist" v-for="tuts in this.dataPaygetDetail.tutorial" :key="tuts.id">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block href="#" v-b-toggle="'collapse-'+tuts.id"  class="text-left"><strong>
                                      {{tuts.tipe }}</strong> </b-button>
                                </b-card-header>
                                <b-collapse  :id="'collapse-'+tuts.id" role="tabpanel">
                                  <b-card-body>
                                    <b-card-text>
                                      <ol style="padding-inline-start:20px !important">
                                        <li v-for="(item,index) in tuts.desc" :key="index">
                                          {{item}}
                                        </li>
                                      </ol>
                                    </b-card-text>
                                  </b-card-body>
                                </b-collapse>
                              </div>
                            <!-- </template> -->
                            <!-- <template v-if="this.dataPaygetDetail.tutorial[1] !== null">
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
                                  </b-card-body>
                                </b-collapse>
                              </div>
                            </template>
                            <template v-if="this.dataPaygetDetail.tutorial[2] !== null">
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
                                  </b-card-body>
                                </b-collapse>
                              </div>
                            </template>
                            <template v-if="this.dataPaygetDetail.tutorial[3] !== null">
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
                                  </b-card-body>
                                </b-collapse>
                              </div>
                            </template> -->
                            <b-button  @click="
                                  goSubskripsi()
                                  "  variant="success"
                              style="width:100%; margin-top:15px;">Kembali ke halaman Subskripsi</b-button>
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
  import {mapMutations} from "vuex";
  import moment from "moment";
  moment.locale('id');

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
      convertDate(val){
        return moment(val).format('DD MMMM YYYY HH:mm:ss ') 
      },
      ...mapMutations({
        collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
        setInitPage: "sidebar/SET_INITIALIZATION_PAGE",
        setUserFirstLogin: "SET_USER_FIRST_LOGIN"
      }),
      goSubskripsi(){
        this.setInitPage(false);
        this.setUserFirstLogin(0);
        this.$router.push({
          name: "subskripsi",
        });
      },
      copy_text(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
      copy_text_money(str) {
        const elem = document.createElement('textarea');
        elem.value = str;
        elem.setAttribute('readonly', '');
        elem.style.position = 'absolute';
        elem.style.left = '-9998px';
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
      },
      async getPaygetDetail() {
        try {
          var isRoute = this.$router.currentRoute.params.bill_id;
          console.log('route', isRoute);
          const res = await axios.get(`${this.url_api}/detailpembayaran/${isRoute}`)
          this.dataPaygetDetail = res.data.data
          console.log(this.dataPaygetDetail)
        } catch {}
      },
    }
  }
</script>

<style scoped>
  .logo-bank {
    height: 40px;
    width: 120px;
  }
  @media only screen and (max-width: 1132px) and (min-width:768px) {
    .logo-bank {
      height: 28px;
      width: 85px;
    }
  }
</style>