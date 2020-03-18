<template>
  <div>
    <PageTitle class="text-left" heading="Pilih Paket Berlangganan Anda"/>
    <div class="card card-box mb-2" style=" align-content: center; align-items: center;">
      <div class="app-content--inner p-0 d-flex flex-column">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <b-row class="mt-4">
              <b-col md="12">
                <div class="col-md-12 ">
                  <b-row class="pl-4 pr-4">
              <!-- [
                  { label: 'tetanus', value: 'tetanus.jpeg' },
                  { label: 'cancer', value: 'cancer.jpeg' }
                ]" -->
              <template v-if="dataPaket.length === 4">
                <b-col sm="3" v-for="data in dataPaket" :key="data.id" >
                  <div class="card">
                    <template v-if="data.id === 1">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary " style="background: #EEFFF7;
                               border-radius:10px;">
                        <div class="align-box-row ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-md  text-primary text-center ">Free Trial</div>
                              <p class="font-size-sm text-primary text-center">(Paket 1 Bulan)</p>
                              <p class="font-size-xxl text-primary text-center ">FREE</p>
                              <p class="font-size-sm text-primary border-2 text-center">
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>
                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Coba gratis 30 hari</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="data.id === 2">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #FEE9FF;
                              border-radius:10px;">
                        <div class="align-box-row ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center ">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary  text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center" >
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>
                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="data.id === 3">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #F9FFD1;
                               border-radius:10px;">
                        <div class="align-box-row ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center">
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>

                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="data.id === 4">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #F0ECFF;
                               border-radius:10px;">
                        <div class="align-box-row ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center">
                                {{data.limit}} Visit Pasien/bulan</p>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>
                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </b-col>
                <b-col md="12" class="mt-4 " style="text-align: center;">
                  <span><strong>METODE PEMBAYARAN</strong></span>
                </b-col>
              </template>
              <template v-if="dataPaket.length === 3">
                <b-col sm="4" v-for="data in dataPaket" :key="data.id" >
                  <div class="card">
                    <template v-if="data.id === 2">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #FEE9FF;
                              border-radius:10px;">
                        <div class="align-content-center ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center ">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary  text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center" >
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>
                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="data.id === 3">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #F9FFD1;
                               border-radius:10px;">
                        <div class="align-content-center ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center">
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>

                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="data.id === 4">
                      <div class="card-body card-box mb-6 card-box-border-bottom border-primary" style="background: #F0ECFF;
                               border-radius:10px;">
                        <div class="align-content-center ">
                          <div class="align-content-center ">
                            <div class="font-weight-bold ">
                              <div class="font-size-xl  text-primary text-center">{{data.nama}}</div>
                              <br>
                              <p class="font-size-xxl text-primary text-center">{{data.harga/1000}}rb</p>
                              <p class="font-size-sm text-primary border-2 text-center">
                                {{data.limit}} Visit Pasien/bulan</p>
                              <br>
                              <p class="font-size-sm"  v-for="datadesc in data.desc" :key="datadesc" >
                                <font-awesome-layers class="fa-lg mr-1 btn-actions">
                                  <font-awesome-icon icon="check" transform="shrink-3" class="text-primary" />
                                </font-awesome-layers>{{datadesc}}<br>
                              </p>
                              <b-button
                                @click="
                                  detailPaket({
                                    id: data.id
                                  })
                                  "
                                variant="primary"
                                size="sm"
                                class="text-capitalize mr-2 btn-antrean btn-block "
                              >Beli Paket</b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>

                  </div>

                </b-col>
                <b-col md="12" class="mt-4 " style="text-align: center;">
                  <span><strong>METODE PEMBAYARAN</strong></span>
                </b-col>
              </template>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <div class=" mb-4">
        <img style=""  :src="dataPaygate[0].logo" height="40" width="120"
             class="mt-2  " :alt="dataPaygate[0].nama">
        <img style=""  :src="dataPaygate[1].logo" height="40" width="120"
             class="mt-2 ml-2 " :alt="dataPaygate[1].nama">
      </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import moment from "moment";
  import axios from 'axios';
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faHome,
    faUser,
    faSearch,
    faArrowRight,
    faArrowUp,
    faCheck,
    faCheckCircle
  } from "@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeLayers
  } from "@fortawesome/vue-fontawesome";
  import {mapMutations} from "vuex";

  library.add(
    faHome,
    faArrowRight,
    faArrowUp,
    faUser,
    faSearch,
    faCheck,
    faCheckCircle
  );
  export default {
    components: {
      FontAwesomeLayers,
    },
    data() {
      return {
        dataPaket: [],
        selectdataPaket: [],
        selected: null,
        currentPage: 1,
        rows: 0,
        perPage: 4,
      }
    },
    watch: {
      currentPage() {
        this.showleftRekamMedis();
      }
    },
    computed: {
      isLoadMore() {
        return this.rows > this.currentPage * this.perPage;
      }
    },
    mounted() {
      this.fetchPaket();
    },
    methods: {
      ...mapMutations({
        collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
        setInitPage: "sidebar/SET_INITIALIZATION_PAGE",
        setUserFirstLogin: "SET_USER_FIRST_LOGIN"
      }),
      detailPaket({ id } = {}) {
        if (id !== 1) {
          this.$router.push({
            name: "subskripsi-detail",
            params: {
              id: id
            }
          });
        }else {
          axios.get(`${this.url_api}/paket/${id}`)
            .then(res => {
              this.$router.push({
                name: "home",
              });
            });
        }
      },
      rerender(id) {
        this.$root.$emit("rerender",id);
      },
      fetchPaket() {
        axios.get(`${this.url_api}/paket`)
          .then(res => {
            this.dataPaket = res.data.data.paket
            this.dataPaygate = res.data.data.paygate
          });
      },
    }
  };

</script>
