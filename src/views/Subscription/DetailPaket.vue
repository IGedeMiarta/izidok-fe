<template>
  <div>
      <div class="container">
        <div class="row justify-content-center">
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
                          <div class="col-md-8" >
                            <vue-select class="align-content-right" :options="dataPaygate"  v-model="selectedPaygate" @input="getPaygetDetail" />

                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Jenis Paket</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <label class="float-right mr-3">{{dataDetail.nama}}</label>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Lama Berlangganan</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-form-radio-group v-model="lama_langganan"  class="float-right" :options="optionLangganan" >
                            </b-form-radio-group>
                          </div>
                          <div class="col-md-4 mt-2">
                            <strong>Harga</strong>
                          </div>
                          <div class="col-md-8 mt-2">
                            <strong class="float-right mr-3">Rp. {{dataDetail.harga*lama_langganan}}</strong>
                          </div>
<!--                          <div class="col-md-4 mt-2">-->
<!--                            <strong>Add-on Email</strong>-->
<!--                            <label class="ml-1">-->
<!--                              <font-awesome-icon v-tooltip.bottom-start="'Adds-on Whatsapp dapat digunakan untuk mengirimkan reminder konsultasi selanjutnya pada pasien'" class="mx-auto"  icon="info-circle"/>-->
<!--                            </label>-->
<!--                          </div>-->
<!--                          <div class="col-md-8 mt-2">-->
<!--                            <b-form-radio-group class="float-right" :options="[-->
<!--                    { text: 'Ya', value: 1 },-->
<!--                    { text: 'Tidak', value: 12 }-->
<!--                  ]">-->
<!--                            </b-form-radio-group>-->
<!--                          </div>-->
<!--                          <div class="col-md-4 mt-2">-->
<!--                            <strong>Pilih Kouta Add-on</strong>-->
<!--                          </div>-->
<!--                          <div class="col-md-8 mt-2">-->
<!--                            <b-form-radio-group class="float-right" :options="[-->
<!--                    { text: '50 kuota', value: 50 },-->
<!--                    { text: '100 kuota', value: 100 },-->
<!--                    { text: '200 kuota', value: 200 }-->
<!--                  ]">-->
<!--                            </b-form-radio-group>-->
<!--                            <small class="float-right mr-3" style="font-size:8px;">-->
<!--                              Kuota Whatsapp tidak memiliki masa berlaku, dapat digunakan selama <br> paket berlangganan-->
<!--                              aktif-->
<!--                            </small>-->
<!--                          </div>-->
<!--                          <div class="col-md-4 mt-2">-->
<!--                            <strong>Harga Add-on</strong>-->
<!--                          </div>-->
<!--                          <div class="col-md-8 mt-2">-->
<!--                            <strong class="float-right mr-3">Rp. 22.000,-</strong>-->
<!--                          </div>-->
                          <div class="col-md-4 mt-2">
                            <strong>Kode Promo</strong>
                            <medium class="ml-2">( jika ada )</medium>
                          </div>
                          <div class="col-md-8 mt-2">
                            <b-button variant="primary" class="float-right" size="md">Gunakan</b-button>
                            <b-form-input class="col-md-4 float-right mr-2"></b-form-input>
                          </div>
<!--                          <div class="col-md-12 text-center mt-2" style="background-color : yellow">-->
<!--                            <strong>Selamat, Anda mendapatkan potongan Rp. 50.000,-!</strong>-->
<!--                          </div>-->
                          <div class="col-md-12 mt-2">
                            <div class="card card-box">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-4">
                                    <strong>Biaya Admin</strong>
                                  </div>
                                  <div class="col-md-8 ">
                                    <strong class="float-right">Rp. {{dataPaygetDetail.biaya_admin}}</strong>
                                  </div>
                                  <div class="col-md-4">
                                    <strong>Potongan</strong>
                                  </div>
                                  <div class="col-md-8 float-right">
                                    <strong class="float-right">Rp. {{potongan}}</strong>
                                  </div>
                                  <div class="col-md-4">
                                    <strong>Total Pembayaran</strong>
                                  </div>

                                  <div class="col-md-8 float-right">
                                    <strong class="float-right">Rp. {{( dataDetail.harga*lama_langganan)+dataPaygetDetail.biaya_admin-potongan}}</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-3">
                            <b-button  @click="$router.push('/subscription/cara-bayar')" variant="success" class="float-right">Bayar Sekarang</b-button>
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
  import moment from "moment";
  import axios from 'axios';
  import {
    faHome,
    faUser,
    faSearch,
    faArrowRight,
    faArrowUp,
  } from "@fortawesome/free-solid-svg-icons";
  library.add(
    faHome,
    faArrowRight,
    faArrowUp,
    faUser,
    faSearch
  );
  export default {
    components: {
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data() {
      return {
        lama_langganan : 1,
        total_harga:0,
        kode_promo:0,
        potongan:0,
        total_bayar:0,
        dataDetail: [],
        dataPaygate:[],
        dataPaygetDetail:[],
        selectedPaygate: null,
        currentPage: 1,
        rows: 0,
        perPage: 4,
        optionLangganan: [
          { text: '1 Bulan', value: '1'  },
          { text: '12 Bulan', value: '12' },
        ]
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
      this.fetchDetailPaket();
    },
    methods: {
      rerender(id) {
        this.$root.$emit("rerender",id);
      },
      getPaygetDetail($event) {
       var getdet = $event.value
        axios.get(`${this.url_api}/paygate/${getdet}`)
          .then(res => {
            this.dataPaygetDetail = res.data.data
            console.log(this.dataPaygetDetail)
          });
      },
      fetchDetailPaket() {
        var id = this.$router.currentRoute.params.id;
        axios.get(`${this.url_api}/paket/${id}`)
          .then(res => {
            this.dataDetail = res.data.data
            console.log(this.dataDetail)
          });

        axios.get(`${this.url_api}/paygate`)
          .then(res => {
            res.data.data.paygate.forEach(item => {
              this.dataPaygate.push({
                label: `${item.nama}`,
                value: item.id
              })
            })
          });
      },

    }
  };
</script>