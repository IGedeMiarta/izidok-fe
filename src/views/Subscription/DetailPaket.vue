<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card card-box mb-5">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-8">
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
                          <vue-select class="align-content-right" :options="dataPaygate" v-model="selectedPaygate"
                            @input="getPaygetDetail" />

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
                          <b-form-radio-group v-model="lama_langganan" class="float-right" :options="optionLangganan">
                          </b-form-radio-group>
                        </div>
                        <div class="col-md-4 mt-2">
                          <strong>Harga</strong>
                        </div>
                        <div class="col-md-8 mt-2">
                          <template v-if="lama_langganan === '12' ">
                            <strong class="float-right mr-3 ml-2">Rp
                              {{(dataDetail.harga*(lama_langganan-2)).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                            </strong><label style="text-decoration: line-through;" class="float-right text-danger">Rp
                              {{(dataDetail.harga*12).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</label>
                          </template>
                          <template v-else>
                            <strong class="float-right mr-3">Rp
                              {{(dataDetail.harga*lama_langganan).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</strong>
                          </template>
                        </div>
                        <template v-if="lama_langganan === '12' ">
                          <div class="col-md-12">
                            <label class="float-right text-success small mr-3"><strong>Hemat 16,6%</strong></label>
                          </div>
                        </template>
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
                          <small class="ml-2">( jika ada )</small>
                        </div>
                        <div class="col-md-8 mt-2">
                          <b-button variant="primary" @click="checkKodePromo" class="float-right" size="md">Gunakan
                          </b-button>
                          <b-form-input v-model="kode_promo" class="col-md-4 float-right mr-2"></b-form-input>
                        </div>
                        <div class="col-md-12 text-center mt-2" style="background-color : yellow"
                          v-if="this.statusPromo">
                          <strong>{{this.statusPromo}}</strong>
                        </div>
                        <div class="col-md-12 mt-2">
                          <div class="card card-box">
                            <div class="card-body">
                              <div class="row">
                                <template v-if="dataPaygetDetail.biaya_admin > 0">
                                  <div class="col-md-4">
                                    <strong>Biaya Admin</strong>
                                  </div>
                                  <div class="col-md-8 ">
                                    <strong class="float-right">Rp
                                      {{(dataPaygetDetail.biaya_admin).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</strong>
                                  </div>
                                </template>
                                <template v-if="potongan > 0">
                                  <div class="col-md-4">
                                    <strong>Potongan</strong>
                                  </div>
                                  <div class="col-md-8 float-right">
                                    <strong class="float-right">
                                      <template v-if="this.statusPotongan === 'rupiah'">
                                        Rp {{potongan.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                                      </template>
                                      <template v-else>
                                        {{potongan}} %
                                      </template>
                                    </strong>
                                  </div>
                                </template>
                                <div class="col-md-4">
                                  <strong>Total Pembayaran</strong>
                                </div>
                                <div class="col-md-8 float-right">
                                  <template v-if="lama_langganan === '12' ">
                                    <strong class="float-right">Rp
                                      <template v-if="this.statusPotongan === 'rupiah'">
                                        {{(( dataDetail.harga * (lama_langganan-2)) + (dataPaygetDetail.biaya_admin-potongan)).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                                      </template>
                                      <template v-else-if="this.statusPotongan === 'percent' ">
                                        {{
                                         (((dataDetail.harga * (lama_langganan-2)) + (dataPaygetDetail.biaya_admin))   - (((dataDetail.harga * (lama_langganan-2)) + (dataPaygetDetail.biaya_admin)) * (potongan/100))).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                        }}
                                      </template>
                                      <template v-else>
                                        {{((dataDetail.harga * (lama_langganan-2)) + (dataPaygetDetail.biaya_admin)).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                                      </template>
                                    </strong>
                                  </template>
                                  <template v-else>
                                    <strong class="float-right">Rp
                                      <template v-if="this.statusPotongan === 'rupiah'">
                                        {{( dataDetail.harga * lama_langganan) + (dataPaygetDetail.biaya_admin-potongan).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                                      </template>
                                      <template v-else-if="this.statusPotongan === 'percent' ">
                                        {{
                                          ((dataDetail.harga * lama_langganan + dataPaygetDetail.biaya_admin) -(dataDetail.harga * lama_langganan + dataPaygetDetail.biaya_admin)*(potongan/100)).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                          }}
                                      </template>
                                      <template v-else>
                                        {{(dataDetail.harga * lama_langganan + dataPaygetDetail.biaya_admin).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}
                                      </template>
                                    </strong>
                                  </template>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 mt-3">
                          <b-button @click="prosesBayar" variant="success" class="float-right">Bayar Sekarang</b-button>
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
  import {
    faCalendar,
    faInfoCircle
  } from "@fortawesome/free-solid-svg-icons";
  library.add(faCalendar, faInfoCircle);
  import moment from "moment";
  import axios from 'axios';
  import {
    Money
  } from 'v-money';
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
        money: {
          decimal: "",
          thousands: ",",
          prefix: "Rp ",
          suffix: "",
          precision: 0,
          masked: false
        },
        lama_langganan: 1,
        total_harga: 0,
        kode_promo: null,
        statusPromo: null,
        statusPotongan: null,
        hasilPromo: null,
        potongan: 0,
        billing_id: null,
        total_bayar: 0,
        dataDetail: [],
        dataPaygate: [],
        dataPaygetDetail: [],
        selectedPaygate: null,
        currentPage: 1,
        rows: 0,
        perPage: 4,
        optionLangganan: [{
            text: '1 Bulan',
            value: '1'
          },
          {
            text: '12 Bulan',
            value: '12'
          },
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

      let ss = {
        label: 'BCA Virtual Account',
        value: 2
      };
      this.selectedPaygate = ss;
      this.getPaygetDetail(ss);
    },
    methods: {
      rerender(id) {
        this.$root.$emit("rerender", id);
      },
      async checkKodePromo() {
        try {
          const res = await axios.post(`${this.url_api}/promo?kode=${this.kode_promo}`);
          this.statusPromo = res.data.message;
          this.potongan = res.data.data.value;
          this.statusPotongan = res.data.data.satuan;
        } catch {

        }
      },
      async prosesBayar() {
        try {

          if (this.lama_langganan === "12") {
            if (this.statusPotongan === 'rupiah') {
              this.total_bayar = (this.dataDetail.harga * (this.lama_langganan - 2)) + (this.dataPaygetDetail
                .biaya_admin -
                this.potongan);
              // this.hasilPromo =
            } else if (this.statusPotongan === 'percent') {
              this.total_bayar = 
              ( (this.dataDetail.harga * (this.lama_langganan - 2)) + (this.dataPaygetDetail.biaya_admin))-
              (((this.dataDetail.harga * (this.lama_langganan - 2)) + (this.dataPaygetDetail.biaya_admin)) * (
                this.potongan / 100))
                console.log('total',this.total_bayar)
            } else {
              this.total_bayar = (this.dataDetail.harga * (this.lama_langganan - 2) + this.dataPaygetDetail
                .biaya_admin)
            }
          } else {
            if (this.statusPotongan === 'rupiah') {
              this.total_bayar = (this.dataDetail.harga * this.lama_langganan) + (this.dataPaygetDetail.biaya_admin -
                this.potongan);
              // this.hasilPromo =
            } else if (this.statusPotongan === 'percent') {
              this.total_bayar = ((this.dataDetail.harga * this.lama_langganan + this.dataPaygetDetail.biaya_admin) - (this.dataDetail.harga * this.lama_langganan + this.dataPaygetDetail.biaya_admin) * (
                this.potongan / 100))
            } else {
              this.total_bayar = (this.dataDetail.harga * this.lama_langganan + this.dataPaygetDetail.biaya_admin)
            }
          }


          const res = await axios.post(`${this.url_api}/subscribe`, {
            pg_id: this.dataPaygetDetail.id,
            promo_id: this.promo,
            paket_id: this.dataDetail.id,
            amount_disc: this.total_bayar,
            amount_real: this.total_bayar,
            paket_bln: this.lama_langganan,
          })
          console.log(res);
          if (res.data.status) {
            this.billing_id = res.data.billing_id;
            console.log('bill', this.billing_id);
            this.$router.push({
              name: 'subskripsi-bayar',
              params: {
                bill_id: this.billing_id
              }
            });
          } else {
            this.$swal({
              title: startCase("Pembayaran Gagal"),
              text: `Pembayaran gagal dibuat`,
              type: "failed"
            });
          }
        } catch {

        }
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