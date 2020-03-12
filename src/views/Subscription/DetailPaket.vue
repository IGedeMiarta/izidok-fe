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
                            <strong>Add-on Email</strong>
                            <label class="ml-1">
                              <font-awesome-icon v-tooltip.bottom-start="'Adds-on Whatsapp dapat digunakan untuk mengirimkan reminder konsultasi selanjutnya pada pasien'" class="mx-auto"  icon="info-circle"/>
                            </label>
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
                                    <strong>Potongan</strong>
                                  </div>
                                  <div class="col-md-8 float-right">
                                    <strong class="float-right">Rp. 50.000,-</strong>
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
        dataRiwayat: [],
        selectDataRiwayat: [],
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
      this.fetchKodePenyakit();
    },
    methods: {
      rerender(id) {
        this.$root.$emit("rerender",id);
      },
      fetchKodePenyakit() {
        var id = this.$router.currentRoute.params.id;
        axios.get(`${this.url_api}/paket/${id}`)
          .then(res => {
            res.data.data.forEach(item => {
              this.selectDataRiwayat.push({
                label: `${item.kode} - ${item.description}`,
                value: item.id
              })
            })
          });
      },
      async showleftRekamMedis(overwriteLeft = false) {
        try {
          var pasien_id = this.$router.currentRoute.params.pasien_id;

          let search = '';
          if(this.selected) {
            search = `&kode_penyakit_id=${this.selected.value}`
          }

          const responsePage = await axios.get(
            `${this.url_api}/rekam_medis/pasien/${pasien_id}?page=${this.currentPage}${search}`);

          if(overwriteLeft) {
            this.dataRiwayat = [];
            responsePage.data.data.rekam_medis.data.forEach(item => {
              this.dataRiwayat.push(item);
            })
          }
          else {
            responsePage.data.data.rekam_medis.data.forEach(item => {
              this.$set(this.dataRiwayat, this.dataRiwayat.length, item);
            })
          }

          this.rows = responsePage.data.data.rekam_medis.total;

          // this.selectDataRiwayat = this.dataRiwayat.map(item => {
          //   return {
          //     label: `${item.diagnosa_result.kode_penyakit}`,
          //     value: item.id
          //   };
          // });
          // let eventVal = {
          //     label: this.dataRiwayat.nama,
          //     value: this.dataRiwayat.id
          // }
          // this.selectDataRiwayat = [eventVal]
          this.rerender(this.dataRiwayat[0].id);
        } catch (error) {
          console.error(error);
        }
      },
      me() {
        return Array.apply(0, Array(12)).map(function (_, i) {
          return moment()
            .month(i)
            .format("MMMM");
        });
      },
      datetimeFormat(d) {
        return moment(d).format("DD MMM YYYY HH:mm:ss")
      },
      searchByDiagnosis($event) {
        this.showleftRekamMedis(true)
      }
      // yearValues() {
      //   const dateStart = moment("1969-01-01");
      //   const dateEnd = moment("2019-12-31");
      //   const timeValues = [];
      //   while (
      //     dateEnd > dateStart ||
      //     dateStart.format("M") === dateEnd.format("M")
      //   ) {
      //     timeValues.push(dateStart.format("YYYY"));
      //     dateStart.add(1, "year");
      //   }
      //   return timeValues;
      // }
    }
  };
</script>