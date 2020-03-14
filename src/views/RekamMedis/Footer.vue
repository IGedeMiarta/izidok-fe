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
                    <vue-select @click="triggerDob" class="text-capitalize bg-white mt-2"  :options="
                      waktuKonsul" v-model="selectedRadio" @input="selectingWaktu($event)" />
                  </b-col>
                  <b-col class="col-md-3">
                    <template  v-if="selectedRadio.label === 'Pilih Tanggal...' ">
                      <strong>Tanggal Konsultasi</strong>
                      <Datetime  type="date" required input-class="form-control mt-2" class="input-group" zone="Asia/Jakarta"
                                 value-zone="Asia/Jakarta" format="d LLL yyyy" @input="tanggalSelected($tgl = valuetglpilih)"
                                 :min-datetime="minimumDatetime"  :input-style="
                    getDataError({ rawLabel: 'valuetglpilih' }) === null
                      ? null
                      : getDataError({ rawLabel: 'valuetglpilih' })
                      ? null
                      : 'border-color: red'
                  " ref="dob" v-model="valuetglpilih">
                        <template v-slot:after>
                          <b-input-group-text @click="triggerDob" class="mt-2" slot="append" style="
                    border-top-left-radius:0; border-left-width: 0; border-bottom-left-radius: 0; cursor: pointer
                    ">
                            <font-awesome-icon class="mx-auto" icon="calendar" />
                          </b-input-group-text>
                        </template>
                      </Datetime>
                      <!--                    <datepicker input-class="form-control" class="d-flex input-group" v-model="valuetglpilih" @input="onChange($tgl = valuetglpilih)"  :format="customFormatter" :inline="true"/>-->
                    </template>
                    <template v-if="selectedRadio.label !== 'Tidak perlu konsul lanjutan'
                    && selectedRadio.label !== 'Pilih Tanggal...' && selectedRadio.label !==''  ">
                      <strong>Tanggal Konsultasi</strong>
                      <Datetime input-class="form-control" class="d-flex input-group mt-2" zone="Asia/Jakarta"
                                value-zone="Asia/Jakarta" v-model="hasil" format="d LLL yyyy" disabled>
                        <template v-slot:after>
                          <b-input-group-text @click="triggerDob" slot="append" style="
                    border-top-left-radius:0; border-left-width: 0; border-bottom-left-radius: 0; cursor: pointer
                    ">
                            <font-awesome-icon class="mx-auto " icon="calendar" />
                          </b-input-group-text>
                        </template>
                      </Datetime>
                    </template>
                  </b-col>

                  <template v-if="selectedRadio.label !== 'Tidak perlu konsul lanjutan'
                   && selectedRadio.label !==''  ">
                    <b-col class="col-md-4">
                      <label class="text-primary ">
                        <font-awesome-icon v-tooltip.bottom-start="'Pengingat akan dikirimkan kepada pasien 1 hari sebelum waktu kunjungan!'" class="mx-auto" icon="info-circle"/>
                        Aktifkan pengingat melalui Email?
                        <template v-if="pengingatvalue === true">
                          <vue-select  class="text-capitalize bg-white mt-2"  :options="PilihanPengingat"
                                      v-model="selectedPengingat" disabled="disabled"   />
                          <input type="text" class="form-control mt-1"  :placeholder="[[ phEmailReminder ]]"/>
                        </template>
                      </label>

                    </b-col>
                    <b-col class="col-md-1">
                      <toggle-button
                        @change="onToggleChange(slider.id, $event)"
                        :labels="{ checked: ' Ya', unchecked: ' Tidak' }"
                        :width="60"
                        :height="20"
                        :color="{
                            checked: '#3c44b1',
                            unchecked: '#f83245',
                            disabled: '#CCCCCC'
                          }"

                      />
                    </b-col>
                  </template>

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
        <!-- <div class="form-row">
          <div class="form-group col-md-10">
            <b-form-checkbox v-model="checkbox" class="my-3">
              Dengan ini, saya menyatakan bahwa saya telah mengisi data rekam medis dengan lengkap dan benar.
              Saya juga memberikan keterangan yang sejujur - jujurnya mengenai riwayat penyakit dan/atau cidera tubuh
              lain yang dialami oleh pasien. Salinan deklarasi ini berlaku sama kuatnya dan sah seperti aslinya.
            </b-form-checkbox>
          </div>
        </div> -->
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
  import Datepicker from 'vuejs-datepicker';
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {faCalendar, faInfoCircle
  } from "@fortawesome/free-solid-svg-icons";
  import { ToggleButton } from 'vue-js-toggle-button'
  library.add(faCalendar,faInfoCircle);
  export default {
    components: {
      "toggle-button": ToggleButton,
      Datetime,
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data() {
      return {
        slider: {
          status: true
        },
        phEmailReminder: "Inputkan Email...",
        selectedRadio: {},
        selectedPengingat:{},
        PilihanPengingat: [
          {
            label: 'Email',
            value: 1
          },
        ],
        waktuKonsul: [
          {
            label: 'Tidak perlu konsul lanjutan',
            value: 99
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
            value: 1
          }
        ],
        hari: 0,
        valuetglpilih : "",
        tglpilih: "",
        pengingatvalue:"",
        test : null,
        checkbox: false,
      };
    },
    computed: {
      minimumDatetime() {
        return moment().format("YYYY-MM-DD");
      },
      hasil() {
        return moment().add(this.hari, 'days').format("YYYY-MM-DD");

        // var today = new Date();
        // var tomorrow = new Date();
        // hasil = tomorrow.setDate(today.getDate()+this.selectedRadio.value);
        // return hari;
      }
    },
    mounted() {
      this.selectedRadio = {
        label: 'Tidak perlu konsul lanjutan',
        value: 1
      },
      this.selectedPengingat = {
          label: 'Email',
          value: 1
      },
      this.updateSavingParams({
        key: 'is_next_konsul',
        value: true
      });
      this.updatePostData({
        key: 'next_konsultasi',
        value: 1
      });
      this.updatePostData({
        key: 'tgl_next_konsultasi',
        value: null
      });
    },
    methods: {
      ...mapActions(["updatePostData", "updateSavingParams"]),
      customFormatter(date) {
        return moment(date).format('dd MMM yyyy');

      },
      onToggleChange(id, event) { // added event as second arg
        let value = event.value;  // changed from event.target.value to event.value
        this.pengingatvalue = value
        console.log(value);
      },
      tanggalSelected($tgl) {

        if (this.hari == 1) {
          this.tgl_next_konsultasi =  $tgl
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: this.tgl_next_konsultasi
          },);
        }


      },
      triggerDob() {
        const x = this.$refs.dob
        const {
          $el: {
            firstElementChild
          }
        } = x
        firstElementChild && firstElementChild.click()
      },
      selectingWaktu($event) {
        this.hari = $event.value

        if (this.hari != 1) {
          this.tgl_next_konsultasi =  this.hasil
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: this.hasil
          },);
        }

        // console.log(this.tgl_next_konsultasi)
      }

    },
    watch: {
      selectedRadio: function () {
        // console.log('this', this)
        if (this.selectedRadio.value != 99)
          this.selectingWaktu();
        this.tanggalSelected();
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
          this.selectingWaktu(); this.tanggalSelected();
        this.updatePostData({
          key: 'next_konsultasi',
          value: this.hari
        },);
        this.updateSavingParams({
          key: 'is_next_konsul',
          value: true
        });
        if (this.selectedRadio.value == 99)
          this.selectingWaktu();  this.tanggalSelected();

        // console.log(this.hasil)
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


