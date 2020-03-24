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
                                 value-zone="Asia/Jakarta" format="d LLL yyyy" @input="tanggalSelected"
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
                                value-zone="Asia/Jakarta" :value="hasil" format="d LLL yyyy" disabled>
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
                          <b-input type="text" class="form-control mt-1" :state="pasienEmailError.state" :placeholder="phEmailReminder" v-model="pasienEmail" @input="pasienEmailInput" />
                          <div class="invalid-feedback d-block" v-if="pasienEmailError.state == false">{{ pasienEmailError.message }}</div>

                        </template>
                      </label>

                    </b-col>
                    <b-col class="col-md-1">
                      <toggle-button
                        v-model="pengingatvalue"
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
    mapActions, mapGetters
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
  import axios from "axios";
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
        valueEmail:"",
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
        pengingatvalue:false,
        test : null,
        checkbox: true,
        pasienEmail: null,
        pasienEmailError: {
          state: null,
          message: ""
        }
      };
    },
    computed: {
      minimumDatetime() {
        return moment().format("YYYY-MM-DD");
      },
      hasil() {
        return moment().add(this.hari, 'days').format("YYYY-MM-DD");
      }
    },
    mounted() {
      this.getEmail();
      this.selectedRadio = {
        label: 'Tidak perlu konsul lanjutan',
        value: 99
      };
      this.selectedPengingat = {
          label: 'Email',
          value: 1
      };
      this.updateSavingParams({
        key: 'is_next_konsul',
        value: true
      });
      this.updatePostData({
        key: 'next_konsultasi',
        value: 99
      });
      this.updatePostData({
        key: 'tgl_next_konsultasi',
        value: false
      });

    },
    methods: {
      ...mapActions(["updatePostData", "updateSavingParams"]),
      customFormatter(date) {
        return moment(date).format('dd MMM yyyy');

      },
      async getEmail() {
        this.idPasien = this.$router.currentRoute.params.pasien_id;
        try {
          const res = await axios.get(
            `${this.url_api}/pasien/${this.idPasien}`,
            this.idPasien
          );
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.pasienEmail = res.data.data.email
          }
        } catch (err) {
          console.log(err);
          // alert(err)
        }
      },
      tanggalSelected($event) {
        if ($event) {
          this.tgl_next_konsultasi = $event
          console.log(this.tgl_next_konsultasi)
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: this.tgl_next_konsultasi
          });

          this.updatePostData({
            key: 'next_konsultasi',
            value: '1'
          });

          this.updateSavingParams({
            key: 'is_next_konsul',
            value: true
          });
        }
        else {
          this.updateSavingParams({
            key: 'is_next_konsul',
            value: false
          });
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: false
          });
          this.updatePostData({
            key: 'next_konsultasi',
            value: false
          });

        }
      },
      handleError(message) {
        return this.$swal({
          type: "error",
          title: "Oops...",
          text: message
        });
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
        if (this.hari !== 1) {
          this.tgl_next_konsultasi =  this.hasil
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: this.hasil
          });
        }else{
          this.updatePostData({
            key: 'tgl_next_konsultasi',
            value: false
          });
        }
      },
      pasienEmailInput($event) {
        this.validateEmail($event);
        this.updatePostData({
          key: 'email_konsultasi',
          value: $event
        });
      },
      validateEmail(email) {

          if(email == '' || email == null || email == undefined && this.pengingatvalue === true) {

            this.pasienEmailError.state = false;
            this.pasienEmailError.message = 'Email Tidak Boleh Kosong';
            this.updateSavingParams({
              key: 'is_email',
              value: false
            });

            this.updateSavingParams({
              key: 'is_email_format',
              value: false
            });
          }
        else if(email == '' || email == null || email == undefined && this.pengingatvalue === false) {

          // this.pasienEmailError.state = false;
          // this.pasienEmailError.message = 'Email Tidak Boleh Kosong';
          this.updateSavingParams({
            key: 'is_email',
            value: true
          });

          this.updateSavingParams({
            key: 'is_email_format',
            value: true
          });
        }
        else if(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          this.pasienEmailError.state = null;
          this.pasienEmailError.message = '';
          
          this.updateSavingParams({
            key: 'is_email',
            value: true
          });

          this.updateSavingParams({
            key: 'is_email_format',
            value: true
          });
        }
        else {
          this.pasienEmailError.state = false;
          this.pasienEmailError.message = 'Format Email Tidak Sesuai';

          this.updateSavingParams({
            key: 'is_email',
            value: false
          });

          this.updateSavingParams({
            key: 'is_email_format',
            value: false
          });
        }
      }
    },
    watch: {
      selectedRadio: function(newVal) {

        if(newVal.value === 1) {
          this.updateSavingParams({
            key: 'is_next_konsul',
            value: false
          });
          this.tgl_next_konsultasi = false
          this.updateSavingParams({
            key: 'tgl_next_konsultasi',
            value: this.tgl_next_konsultasi
          });
        }
        else {
          this.updateSavingParams({
            key: 'is_next_konsul',
            value: true
          });
          this.updatePostData({
            key: 'next_konsultasi',
            value: newVal.value
          });
        }


        if(newVal.value == 99) {
          this.pengingatvalue = false;
        } 
      },
      // checkbox: () => {
      //   // this.selectingWaktu();
      //   this.updatePostData({
      //     key: 'agreement',
      //     value: true
      //   }
      //   );
        
      //   this.updateSavingParams({
      //     key: 'is_agree',
      //     value: false
      //   });
      // },
      pengingatvalue(newVal) {
        if(newVal === false) {
          this.updateSavingParams({
            key: 'is_email',
            value: true
          });
          this.updateSavingParams({
            key: 'is_email_format',
            value: true
          });
        }
        else {
          this.validateEmail(this.pasienEmail)
          // if(this.pasienEmail != '') {
          //   this.updateSavingParams({
          //     key: 'is_email',
          //     value: true
          //   });
          // }
          // if(this.pasienEmail == '') {
          //   this.updateSavingParams({
          //     key: 'is_email',
          //     value: false
          //   });
          // }
        }
      }
    }
  };
</script>

<style scoped>
  .card {
    background-color: #f8f9ff;
  }
</style>


