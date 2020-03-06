<template>
  <div class="card card-box mb-5">
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-12">
            <b-container class="bv-example-row">
              <b-form-group>
              <b-row>
                <b-col class="col-md-4">
                  <strong>Konsultasi Selanjutnya</strong>
                  <vue-select class="text-capitalize bg-white"  :options="
                 waktuKonsul
                  " v-model="selectedRadio" @input="selectingWaktu($event)" />
                </b-col>
                <b-col class="col-md-3">
                  <template v-if="selectedRadio.label === 'Pilih Tanggal...' ">
                    <strong>Tanggal Konsultasi</strong>
                    <Datetime input-class="form-control" class="d-flex input-group" zone="Asia/Jakarta"
                              value-zone="Asia/Jakarta" v-model="hasil" format="d LLL yyyy" />
                  </template>
                  <template v-if="selectedRadio.label === 'Tidak perlu konsul lanjutan'">

                  </template>
                  <template v-if="selectedRadio.label !== 'Tidak perlu konsul lanjutan'
                    && selectedRadio.label !== 'Pilih Tanggal...' && selectedRadio.label !==''  ">
                      <strong>Tanggal Konsultasi</strong>
                      <Datetime input-class="form-control" class="d-flex input-group" zone="Asia/Jakarta"
                                value-zone="Asia/Jakarta" v-model="hasil" format="d LLL yyyy" disabled/>
                  </template>
                </b-col>
              </b-row>
              </b-form-group>
            </b-container>

            <!-- <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="14">2 Minggu</b-form-radio>
              <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="30">1 Bulan</b-form-radio>
              <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="99">
                <b-input-group class="input-group-seamless" size="sm">
                  <b-form-input v-model="hari" type="number" min="0" placeholder="..." class="col-md-3"></b-form-input>
                  <span style="margin-left:10px;">hari kemudian</span>
                </b-input-group>
              </b-form-radio> -->
            <!-- <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="0">Tidak Membutuhkan
                Konsultasi</b-form-radio> -->



          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-10">
            <b-form-checkbox v-model="checkbox" class="my-3">
              Dengan ini, saya menyatakan bahwa saya telah mengisi data rekam medis dengan lengkap dan benar.
              Saya juga memberikan keterangan yang sejujur - jujurnya mengenai riwayat penyakit dan/atau cidera tubuh
              lain yang dialami oleh pasien. Salinan deklarasi ini berlaku sama kuatnya dan sah seperti aslinya.
            </b-form-checkbox>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import {
        mapActions
    } from "vuex";
    import "vue-datetime/dist/vue-datetime.css";
    import {
        Datetime
    } from "vue-datetime";
    import moment from "moment";

    export default {
        components: {
            Datetime,
            "vue-select": () => import("@/components/VueSelect.vue")
        },
        data() {
            return {
                selectedRadio: {},
                waktuKonsul: [
                    {
                         label: 'Tidak perlu konsul lanjutan',
                        value: 1
                     },
                    {
                        label: '1 minggu',
                        value: 7
                    },
                    {
                        label: '2 minggu',
                        value: 14
                    },
                    {
                        label: '1 bulan',
                        value: 30
                    },
                    {
                        label: 'Pilih Tanggal...',
                        value: 88
                    }
                ],
                hari: 0,
                test : null,
                checkbox: false,
            };
        },
        computed: {
            hasil() {
                return moment().add(this.hari, 'days').format("YYYY-MM-DD");
                // var today = new Date();
                // var tomorrow = new Date();
                // hasil = tomorrow.setDate(today.getDate()+this.selectedRadio.value);
                // return hari;
            }
        },
        methods: {
            ...mapActions(["updatePostData", "updateSavingParams"]),
            selectingWaktu($event) {
                this.hari = $event.value
                this.tgl_next_konsultasi =  this.hasil

                if (this.hari == 1) {
                    this.updatePostData({
                        key: 'tgl_next_konsultasi',
                        value: null
                    },);
                }

                if (this.hari != 1) {
                    this.updatePostData({
                        key: 'tgl_next_konsultasi',
                        value: this.hasil
                    },);
                }

                console.log(this.tgl_next_konsultasi)
            }

        },
        watch: {
            selectedRadio: function () {
                // console.log('this', this)
                if (this.selectedRadio.value != 99)
                    this.selectingWaktu();
                this.updatePostData({
                    key: 'next_konsultasi',
                    value: this.selectedRadio.value
                },
               );
                this.updateSavingParams({
                    key: 'is_next_konsul',
                    value: true
                });
            },
            hari: function () {
                if (this.selectedRadio.value == 99)
                    this.selectingWaktu();
                this.updatePostData({
                    key: 'next_konsultasi',
                    value: this.hari
                },);
                this.updateSavingParams({
                    key: 'is_next_konsul',
                    value: true
                });
                if (this.selectedRadio.value == 99)
                    this.selectingWaktu();

                console.log(this.hasil)
                this.updateSavingParams({
                    key: 'is_next_konsul',
                    value: true
                });
            },


            checkbox: function () {
                // this.selectingWaktu();
                this.updatePostData({
                    key: 'agreement',
                    value: this.checkbox
                });
                this.updateSavingParams({
                    key: 'is_agree',
                    value: true
                });
            }
        }
    };
</script>

<style scoped>
  .card {
    background-color: #f8f9ff;
  }
</style>


