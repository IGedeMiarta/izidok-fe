<template>
  <div>
    <page-title heading="Registrasi Antrean" :breadcrumb="[
        {
          label: 'rawat jalan',
          link: '/antrean'
        },
        { label: 'registrasi', active: true }
      ]" />

    <b-container fluid>
      <div class="card card-box mb-5">
        <div class="card-header">
          <div class="col-sm-7 float-left">
            <h4 class="text-capitalize my-2 ">form registrasi antrean</h4>
          </div>
          <div class="col-sm-5">
            <b-button class="text-uppercase" style="font-size:14.5px;float:right" v-b-modal.modal-1 variant="primary">
              Tambah Pasien Baru</b-button>
          </div>
        </div>
        <div class="card-body">
          <b-form v-on:submit.prevent="submitForm">
            <template v-if="formBasicData && formBasicData.length">
              <b-row>
                <b-col v-for="form in formBasicData" :sm="form.col" :lg="form.colLg" :key="form.tmpId">
                  <b-form-group class="text-capitalize" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " style="position: relative" :state="renderError({ error: form.error })">
                    <label  style="font-size : 13px">{{form.rawLabel}} {{form.satuan}}</label>
                    <label  style="color:red">{{form.isImportant}}</label>
                    <!-- <Datetime input-class="form-control" zone="Asia/Jakarta" format="d LLL yyyy"
                        v-if="form.label == 'waktu_konsultasi'" @input="waktuKonsultasiSelected"
                        :min-datetime="minimumDatetime" :input-style="
                        renderError({ error: form.error }) === null
                          ? null
                          : renderError({ error: form.error })
                          ? null
                          : 'border-color: red'
                      " /> -->
                    <template v-if="
                        form.type === 'text' &&
                          form.label !== 'waktu_konsultasi'
                      ">
                      <b-form-input v-if="
                          !/(badan)/gi.test(form.label) &&
                            ![
                              'tensi sistole',
                              'tensi diastole',
                              'nadi'
                            ].includes(form.rawLabel.toLowerCase()) &&
                            whitelistValidation &&
                            !whitelistValidation().includes(
                              form.rawLabel.toLowerCase()
                            )
                        " :type="form.type || 'text'" v-model="formData[form.label]" @keyup="
                          setValue({
                            rawLabel: form.rawLabel,
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                          })
                        " :state="renderError({ error: form.error })" disabled />
                      <b-form-input v-else :type="form.type || 'text'" v-model.lazy="formData[form.label]" @keyup="
                          setValue({
                            rawLabel: form.rawLabel,
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                          })
                        " @keypress="
                          onKeyInputNumber({
                            label: form.label,
                            rawLabel: form.rawLabel,
                            $event
                          })
                        " />
                    </template>

                    <vue-select :class="{ error: form.error }" :options="options[form.label]" @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label: form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      " v-if="
                        form.type === 'select' &&
                          form.rawLabel === 'nama pasien'
                      " :filterable="false"
                      @search="searchPasien"
                      style="font-size:13.4px;"
                      v-model="selectedPasien"
                    >
                      <template slot="no-options" v-if="form.rawLabel === 'nama pasien'">
                        tulis nama lengkap pasien
                      </template>
                      <template slot="option" slot-scope="option">
                        {{ option.label }}
                      </template>
                      <template slot="selected-option" slot-scope="option">
                        {{ option.label }}
                      </template>
                    </vue-select>
                    <vue-select :class="{ error: form.error }" :options="options[form.label]" @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label: form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      " v-else-if="form.type === 'select'" />
                    <template v-if="form.type === 'radio'">
                      <b-form-radio-group id="radio-group-1" v-model="formData[form.label]" @change="
                          setValue({
                            label: form.label,
                            rawLabel: form.rawLabel,
                            $event
                          })
                        " :options="
                          form.data.map((item, index) => ({
                            text: item,
                            value: index
                          }))
                        " name="radio-options" disabled></b-form-radio-group>
                    </template>
                    <template v-if="form.type == 'textarea'">
                      <b-form-textarea id="textarea" v-model="formData[form.label]" @keyup="
                          setValue({
                            rawLabel: form.rawLabel,
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                          })
                        " placeholder="Tuliskan keluhan utama secara singkat, mis. sakit kepala, demam 3 hari, dll"
                        rows="3" max-rows="6"></b-form-textarea>
                    </template>
                  </b-form-group>

                </b-col>
              </b-row>
              <b-button type="submit" variant="primary" class="text-capitalize my-2 float-right">simpan</b-button>
              <b-button :to="{ name: 'antrean-rawat-jalan' }" variant="danger"
                class="text-capitalize my-2 mr-4 float-right">keluar</b-button>
            </template>
          </b-form>
        </div>
      </div>
      <b-modal :no-close-on-backdrop="true" @close="closeModall" :no-close-on-esc="true"  :cancel-disabled="true"  ref='modal-pasien' id="modal-1" style="color:#d3e8eb;" title="Registrasi Pasien Baru" hide-footer>
        <b-form row v-on:submit.prevent="addPasien">
          <div class="col-sm-12">
            <b-form-group abel-for="input-1">
              <label >Nama Lengkap</label>
              <label  style="color:red">*</label>
              <b-form-input type="text" v-model.lazy="formDataRegister.nama" required>
              </b-form-input>
              <!-- <div class="error" v-if="!$v.nama.required">Name is required</div>
              <div class="error" v-if="!$v.nama.minLength">Name must have at lea</div> -->
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-4">
                <b-form-group label="jenis identitas" class="text-capitalize" style="position: relative;">
                  <vue-select :options="
                    ['KTP', 'SIM', 'Paspor']
                  " v-model="formDataRegister['jenis_identitas']" />
                </b-form-group>
              </div>
              <div class="col-md-8">
                <template v-if="this.formDataRegister['jenis_identitas'] !== '' && this.formDataRegister['jenis_identitas'] !== null">
                <b-form-group label="No. identitas" class="text-capitalize" style="position: relative">
                  <b-form-input v-if="this.formDataRegister['jenis_identitas'] !== 'Paspor'"
                    v-model.trim="formDataRegister['nik']"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')" :maxlength="25"
                    @keyup="checkNIK" required />
                  <b-form-input v-else :maxlength="25" type="text" v-model.trim="formDataRegister['nik']"
                    @keyup="checkNIK"  required/>
                  <template v-if="this.$v.formDataRegister['nik'].error == true">
                    <label style="color:red">No. Identitas telah terdaftar</label>
                  </template>
                </b-form-group>
                </template>
                 <template v-else-if="this.formDataRegister['jenis_identitas'] == null || this.formDataRegister['jenis_identitas'] == ''">
                    <b-form-group label="No. identitas" class="text-capitalize" style="position: relative">
                    <b-form-input v-if="this.formDataRegister['jenis_identitas'] !== 'Paspor'"
                      v-model.trim="formDataRegister['nik']"
                      oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')" :maxlength="25"
                      @keyup="checkNIK" />
                    <b-form-input v-else :maxlength="25" type="text" v-model.trim="formDataRegister['nik']"
                      @keyup="checkNIK"  />
                    <template v-if="this.$v.formDataRegister['nik'].error == true">
                      <label style="color:red">No. Identitas telah terdaftar</label>
                    </template>
                  </b-form-group>
                 </template>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <b-form-group label-for="input-1">
              <label >No. Handphone</label>
              <label  style="color:red">*</label>
              <b-form-input id="input-1" type="text" pattern=".{10,15}" :maxlength="15"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                v-model.trim="formDataRegister.nomor_hp" required>
              </b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-6">
                <b-form-group>
                  <label >Jenis kelamin</label>
                  <label  style="color:red"> *</label>
                  <b-form-radio-group required stacked class="text-capitalize" :options="[
                    { text: 'laki-laki', value: 1 },
                    { text: 'perempuan', value: 0 }
                  ]" v-model="formDataRegister.jenis_kelamin">
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group>
                  <label >Tanggal Lahir</label>
                  <label style="color:red"> *</label>
                  <Datetime required input-class="form-control"  class="input-group" zone="Asia/Jakarta"
                    value-zone="Asia/Jakarta" format="d LLL yyyy" @input="tanggalLahirSelected"
                    :max-datetime="maximumDatetime" :input-style="
                    getDataError({ rawLabel: 'tanggal lahir' }) === null
                      ? null
                      : getDataError({ rawLabel: 'tanggal lahir' })
                      ? null
                      : 'border-color: red'
                  " ref="dob" v-model="formDataRegister.tanggal_lahir">
                    <template v-slot:after>
                      <b-input-group-text @click="triggerDob" slot="append" style="
                    border-top-left-radius:0; border-left-width: 0; border-bottom-left-radius: 0; cursor: pointer
                    ">
                        <font-awesome-icon class="mx-auto" icon="calendar" />
                      </b-input-group-text>
                    </template>
                  </Datetime>
                </b-form-group>
              </div>
              <div class="col-sm-6">

              </div>
              <div class="col-sm-6">
                <b-form-group label="gol. darah" class="text-capitalize" style="position: relative;">
                  <vue-select :options="
                    ['A', 'B', 'AB', 'O']
                  " v-model="formDataRegister.golongan_darah" />
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <b-form-group id="input-group-1" label-for="input-1">
              <label >Alamat</label>
              <label style="color:red">*</label>
              <b-form-textarea id="input-1" rows="3" max-rows="6" type="text" v-model="formDataRegister.alamat_rumah"
                required>
              </b-form-textarea>
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="provinsi" class="text-capitalize">
              <vue-select :options="provinces" @input="getCity" v-model="tempat.provinsi" />
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="kota" class="text-capitalize">
              <vue-select :options="cities" v-model="tempat.kota" @input="setDataTempat" />
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="status perkawinan" class="text-capitalize">
              <vue-select :options="
                ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati']
              " v-model="formDataRegister.status_perkawinan" />
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="email" class="text-capitalize">
              <b-form-input type="email" v-model="formDataRegister.email" />
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="nama penanggung jawab" class="text-capitalize">
              <b-form-input type="text" v-model.lazy="formDataRegister.nama_penanggung_jawab" />
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group  label-for="input-1">
              <label >No. HP penanggung Jawab</label>
              <b-form-input id="input-1" type="text" pattern=".{10,15}" :maxlength="15"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                v-model.trim="formDataRegister.nomor_hp_penanggung_jawab">
              </b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-12">
            <b-form-group label="hubungan dengan pasien" class="text-capitalize">
            <vue-select :options="
                ['Suami/Istri', 'Orangtua', 'Kakak/Adik', 'Anak', 'Lainnya']
              "  v-model="formDataRegister.hubungan_pasien" />
          </b-form-group>
          </div>
          <div class="col-sm-12">
          <b-button class="ml-3 text-uppercase" variant="success" style="font-size:17.5px;float:right " type="submit">
            simpan
          </b-button>
          <b-button class="ml-3 text-uppercase" to="{ name: 'antrean-rawat-jalan' }" variant="danger" style="font-size:17.5px;float:right "
            @click='closeModal'>
            Batal
          </b-button>
          </div>
        </b-form>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
  import startCase from "lodash/startCase";
  import find from "lodash/find";
  import {
    required,
    minLength,
    maxLength,
    numeric
  } from "vuelidate/lib/validators";
  import axios from "axios";
  import "vue-datetime/dist/vue-datetime.css";
  import {
    Datetime
  } from "vue-datetime";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faCamera,
    faCaretDown,
    faCalendar
  } from "@fortawesome/free-solid-svg-icons";
  library.add(faCamera, faCaretDown, faCalendar);

  import moment from "moment";

  const tmp = [{
      label: "nama pasien",
      type: "select",
      isImportant: "*",
      col: 12,
      colLg: 5,
      validations: {
        required
      }
    },
    {
      label: "no. rekam medis",
      type: "text",
      col: 6,
      colLg: 4,
      validations: {
        required,
        minLength: minLength(6)
      }
    },
    {
      label: "nomor handphone",
      type: "text",
      col: 6,
      colLg: 3,
      validations: {
        required,
        numeric,
        maxLength: maxLength(15)
      }
    },
    {
      label: "jenis kelamin",
      type: "radio",
      col: 12,
      colLg: 12,
      data: ["perempuan", "laki-laki"],
      isImportant: "*",
      validations: {
        required
      }
    },

    // {
    //   label: "dokter",
    //   type: "select",
    //   isImportant: "*",
    //   colLg: 6,
    //   validations: {
    //     required
    //   }
    // },

    {
      label: "tinggi badan",
      type: "text",
      col: 4,
      colLg: 2,
      satuan: '(cm)',
      validations: {}
    },
    {
      label: "berat badan",
      type: "text",
      col: 4,
      colLg: 2,
      satuan: '(kg)',
      validations: {}
    },
    {
      label: "suhu",
      type: "text",
      col: 4,
      colLg: 2,
      satuan: '(celcius)',
      validations: {}
    },
    {
      label: "sistole",
      type: "text",
      col: 4,
      colLg: 2,
      validations: {}
    },
    {
      label: "diastole",
      type: "text",
      col: 4,
      colLg: 2,
      validations: {}
    },
    {
      label: "nadi",
      type: "text",
      col: 4,
      colLg: 2,
      validations: {}
    },
    {
      label: "anamnesis",
      type: "textarea",
      colLg: 12,
      validations: {}
    }

  ];

  export default {
    components: {
      "vue-select": () => import("vue-select"),
      Datetime
    },
    // validations: {
    //   nama: {
    //     required,
    //     maxLength: maxLength(50),
    //   },
    //   alamat_rumah: {
    //     required,
    //     minLength: minLength(2),
    //     maxLength: maxLength(30)
    //   },
    //   nomor_hp: {
    //     required,
    //     numeric,
    //     maxLength: maxLength(15)
    //   },
    //   jenis_kelamin: {
    //     required
    //   },
    //   tanggal_lahir: {
    //     required
    //   }
    // },
    data: () => ({
      formBasicData: null,
      formData: null,
      options: {
        dokter: [],
        nama_pasien: []
      },
      selectedPasien: null,
      pasiens: [],
      beingSubmit: false,
      formDataRegister: {
        nama: null,
        nomor_hp: null,
        tanggal_lahir: null,
        jenis_kelamin: null,
        alamat_rumah: null,
        provinsi: null,
        kota: null,
        email: null,
        nama_penanggung_jawab: null,
        nomor_hp_penanggung_jawab: null,
        status_perkawinan: null,
        golongan_darah: null,
        jenis_identitas: null,
        nik: null,
        hubungan_pasien : null
      },
      provinces: [],
      checkPaketData :null,
      cities: [],
      tempat: {
        provinsi: null,
        kota: null,
      }
    }),

    beforeRouteLeave(to, from, next) {
      if (!this.beingSubmit) {
        this.$swal({
          title: startCase("keluar"),
          text: `Apakah Anda yakin untuk keluar dari halaman ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            next();
          } else {
            next(false);
          }
        });
      } else {
        next();
      }
    },
    validations() {
      return {
        formData: {
          ...tmp.reduce((obj, item) => {
            obj[item.label.split(" ").join("_")] = item.validations;
            return obj;
          }, {})
        },
        formDataRegister: {
          nik: {}
        }
      };
    },
    async mounted() {
          await this.cekPaket();
          this.formBasicData = this.setFormBasicData();
          this.formData = this.setFormData();
          this.getProvince();
      // Promise.all([this.fetchDokter()]);
    },
    computed: {
      minimumDatetime() {
        return moment().format("YYYY-MM-DD");
      },
      maximumDatetime() {
        return moment().format("YYYY-MM-DD");
      },
    },
    methods: {
      async cekPaket() {
        try {
          const res = await axios.get(
            `${this.url_api}/cekPaket`
          );

          //Kuota habis, masa berlaku masih ada, belum beli paket.
          if (res.data.message === 'Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Kuota habis, masa berlaku habis, belum beli paket
          if (res.data.message === 'Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Kuota masih ada, masa berlaku habis (kuota hangus), belum beli paket.
          if (res.data.message === 'Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //Saat inisiasi, memilih ‘beli paket’, lalu ketika statusnya sedang menunggu pembayaran, dia ingin akses menu lain.
          if (res.data.message === 'Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.') {
            return this.$swal({
              text: "Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
                this.$router.push(`/subskripsi`);
              }
            });
          }
          //saat blum ada paket satupun
          if (res.data.message === 'Anda belum melakukan pembelian paket apapun') {
            return this.$swal({
              text: "Anda tidak memiliki paket apapun, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
                this.$router.push(`/subskripsi`);
              }
            });
          }

          if(res.data !== null) {
            if(res.data.data.paket_id === 1) {
              var nm_paket = "Trial"
            }else if (res.data.data.paket_id === 2) {
              var nm_paket = "Starter"
            }else if (res.data.data.paket_id === 3) {
              var nm_paket = "Essential"
            }else {
              var nm_paket = "Premium"
            }
          }
          //Kuota habis, masa berlaku masih ada/tidakada, sudah beli paket.
          if (res.data.message === 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!') {
            return this.$swal({
              text: 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!',
              showCancelButton: false,
              confirmButtonText: "OK",
              type: "warning",
              allowOutsideClick : false,
              allowEscapeKey: false,
            }).then(res => {
              console.log(res.value)
              if (res.value) {
                this.beingSubmit = true;
              }
            });
          }
        } catch (err) {
          // console.log(err);
        }
      },
      checkNIK() {
        clearTimeout(this.timeVerifyNIK)
        this.timeVerifyNIK = setTimeout(async () => {
          if (this.formDataRegister['jenis_identitas'] == null || this.formDataRegister['jenis_identitas'] == "") {
            this.$v.formDataRegister['nik'].error = false;
          } else {
            const res = await axios.get(
              `${this.url_api}/identity/verify?jenis_pengenal=${this.formDataRegister['jenis_identitas']}&nik=${this.formDataRegister['nik']}`
            );
            console.log(res)
            if (res.data.status == false) {
              this.$v.formDataRegister['nik'].error = true;
            } else {
              this.$v.formDataRegister['nik'].error = false;
            }
          }
        }, 550);
      },
      setDataTempat() {
        this.formDataRegister['provinsi'] = this.tempat.provinsi.id
        this.formDataRegister['kota'] = this.tempat.kota.id
      },
      getProvince() {
        axios.get(`${this.url_api}/province`)
          .then((response) => {
            // handle success
            this.provinces = response.data.data.provinsi.map(val => ({
              ...val,
              label: `${val.provinsi_nama}`,
            }));
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
      },
      async getCity() {
        try {
          var val;
          if (this.tempat.provinsi == '' || this.tempat.provinsi == null) {
            val = '';
          } else {
            val = this.tempat.provinsi.id;
            const res = await axios.get(`${this.url_api}/getcitybyprovince/${val}`)
            // handle success
            this.cities = res.data.data.kota.map(val => ({
              ...val,
              label: `${val.nama}`,
            }));
          }
          if(this.cities[0].provinsi_id !== this.tempat.provinsi){
            this.tempat.kota = null;
          }
        } catch (error) {
          console.error(error);
        }
      },
      closeModal() {
        this.$swal({
          title: startCase("keluar"),
          text: `Apakah Anda yakin untuk keluar dari halaman ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            this.formDataRegister = {
                nama: "",
                nomor_hp: "",
                tanggal_lahir: "",
                jenis_kelamin: "",
                alamat_rumah: "",
                provinsi: "",
                kota: "",
                email: "",
                nama_penanggung_jawab: "",
                nomor_hp_penanggung_jawab: "",
                status_perkawinan: "",
                golongan_darah: "",
                jenis_identitas: "",
                nik: "",
                hubungan_pasien: ""
              }
            this.$refs['modal-pasien'].hide()
          } else {
            next(false);
          }
        });
      },
      closeModall() {
        this.$swal({
          title: startCase("keluar"),
          text: `Apakah Anda yakin untuk keluar dari halaman ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            this.formDataRegister = {
              nama: "",
              nomor_hp: "",
              tanggal_lahir: "",
              jenis_kelamin: "",
              alamat_rumah: "",
              provinsi: "",
              kota: "",
              email: "",
              nama_penanggung_jawab: "",
              nomor_hp_penanggung_jawab: "",
              status_perkawinan: "",
              golongan_darah: "",
              jenis_identitas: "",
              nik: "",
              hubungan_pasien: ""
            }
            this.$refs['modal-pasien'].hide()
          } else {
            this.$refs['modal-pasien'].show()
          }
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
      overwriteAntrean() {
        this.$swal({
          title: "Pasien telah berada pada list antrean",
          text: `Apakah Anda yakin untuk melanjutkan registrasi?`,
          type: "question",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            // console.log(res);
          }
        });
      },
      onKeyInputNumber({
        label,
        rawLabel,
        $event
      }) {
        var evt = $event;
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        } else {
          void this.setValue({
            label,
            rawLabel,
            $event
          });
        }
      },
      whitelistValidation() {
        return this.setFormBasicData()
          .filter(item => item.validations && !item.validations.required)
          .map(item => item.rawLabel);
      },
      async addPasien(formDataRegister) {
        try {
          this.formDataRegister.tanggal_lahir = moment(this.formDataRegister.tanggal_lahir).format("YYYY-MM-DD")
          const res = await axios.post(
            `${this.url_api}/pasien`,
            this.formDataRegister
          );
          const {
            success,
            data: {
              nama,
              nomor_rekam_medis
            }
          } = res.data;
          this.formDataRegister = {
          nama: "",
            nomor_hp: "",
            tanggal_lahir: "",
            jenis_kelamin: "",
            alamat_rumah: "",
            provinsi: "",
            kota: "",
            email: "",
            nama_penanggung_jawab: "",
            nomor_hp_penanggung_jawab: "",
            status_perkawinan: "",
            golongan_darah: "",
            jenis_identitas: "",
            nik: "",
            hubungan_pasien: ""
          }
          let pasien = {
            id: res.data.data.id,
            nama: `${res.data.data.nama} (${res.data.data.tanggal_lahir})`,
            tanggal_lahir: res.data.data.tanggal_lahir,
            nomor_hp: res.data.data.nomor_hp,
            alamat_rumah: res.data.data.alamat_rumah,
            jenis_kelamin: res.data.data.jenis_kelamin,
            nomor_rekam_medis: res.data.data.nomor_rekam_medis,
          }
          this.tempat = {
            kota : null,
            provinsi : null,
          }
          this.beingSubmit = true;
          if (success) {
            this.$swal({
              title: startCase("data berhasil disimpan"),
              text: `Pasien atas nama '${nama}' tersimpan dengan nomor rekam medis ${nomor_rekam_medis}`,
              type: "success"
            });
            let eventVal = {
              label: pasien.nama,
              value: pasien.id
            }
            this.options.nama_pasien = [eventVal]
            this.selectedPasien = eventVal;
            setTimeout(() => {
              this.searchPasien(pasien, "nama_pasien");
              this.autoFill(pasien, "nama_pasien");
              this.setValue({
                rawLabel: "nama pasien",
                label: "nama_pasien",
                $event: eventVal
              })
              this.formData['nama_pasien'] = eventVal
            }, 200)
            this.$refs['modal-pasien'].hide()
          }
        } catch (err) {
          if (err.response) {
            const {
              message
            } = err.response.data;
            this.$swal({
              text: `${message || "something went wrong"}`,
              type: "error"
            });
          }
          // console.log(err);
        } finally {
          this.beingSubmit = false;
        }
      },
      submitForm() {
        const {
          formBasicData
        } = this;
        formBasicData.map(item => {
          this.triggerValidation({
            label: item.label,
            $v: this.$v,
            $vm: this,
            rawLabel: item.rawLabel
          });
        });

        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.saveRegister();
        }
      },
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          const tmp = val.label.split(" ").join("_");
          arr[tmp] = "";
          return arr;
        }, {});
      },
      tanggalLahirSelected($event) {
        if (!$event) return;
        return moment($event).format("YYYY-MM-DD")
      },
      setFormBasicData() {
        return tmp.map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          rawLabel: item.label
        }));
      },
      setValue({
        label,
        rawLabel,
        $event = null
      } = {}) {
        let value = $event;
        if (typeof $event === "object") {
          if ($event) {
            if ($event && $event.target && $event.target.value) {
              const {
                target: {
                  value
                }
              } = $event;
              this.formData[label] = value;
            } else if ($event && $event.label && $event.value) {
              this.formData[label] = $event;
            }
          } else {
            this.formData[label] = "";
            this.formData['no._rekam_medis'] = "";
            this.formData['nomor_handphone'] = "";
            this.formData['jenis_kelamin'] = "";
            this.formBasicData[1]['error'] = null;
            this.formBasicData[2]['error'] = null;
            this.formBasicData[3]['error'] = null;
          }
        } else {
          this.formData[label] = value;
        }
        if (label == "jenis_kelamin") this.formData[label] = "" + value;
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
        if (label == "nama_pasien") {
          const pasien = find(this.pasiens, {
            id: $event.value
          });
          if (pasien) {
            this.autoFill(pasien, "nama_pasien");
          }
        }
      },
      autoFill(pasien, filler) {
        let autoFillForm = {
          nomor_rekam_medis: "no._rekam_medis",
          nik: "no._ktp",
          nama_pasien: "nama_pasien",
          jenis_kelamin: "jenis_kelamin",
          nomor_hp: "nomor_handphone"
        };
        for (let prop in pasien) {
          if (prop == filler || !autoFillForm[prop]) continue;
          if (prop != "jenis_kelamin" && !pasien[prop]) continue;

          // if (prop == "nomor_rekam_medis") pasien[prop] = "" + pasien[prop];
          this.setValue({
            label: autoFillForm[prop],
            rawLabel: autoFillForm[prop].split("_").join(" "),
            $event: pasien[prop]
          });
          // }
        }
      },
      async saveRegister() {
        const waktu_konsultasi = this.formData.waktu_konsultasi;
        let postData = {
          pasien_id: this.formData.nama_pasien.value || "",
          klinik_id: this.$store.state.user.klinik_id || "",
          // examination_by: this.formData.dokter.value || "",
          nomor_rekam_medis: this.formData["no._rekam_medis"] || "",
          nama_lengkap: this.formData.nama_pasien.label || "",
          nik: this.formData["no._ktp"] || "123",
          jenis_kelamin: this.formData.jenis_kelamin || "",
          nomor_telp: this.formData.nomor_handphone || "",
          waktu_konsultasi: (waktu_konsultasi &&
              waktu_konsultasi.toLowerCase() &&
              waktu_konsultasi === "invalid date" &&
              "") ||
            waktu_konsultasi,
          tinggi_badan: this.formData.tinggi_badan || 0,
          berat_badan: this.formData.berat_badan || 0,
          suhu: this.formData.suhu || 0,
          tensi_sistole: this.formData.sistole || 0,
          tensi_diastole: this.formData.diastole || 0,
          nadi: this.formData.nadi || 0,
          respirasi: 0,
          anamnesis: this.formData.anamnesis || ""
        };
        try {
          const res = await axios.post(`${this.url_api}/transaksi`, postData);
          const {
            status,
            data
          } = res.data;
          if (status === true) {
            const {
              nomor_antrian
            } = data;
            const {
              nama_lengkap
            } = postData;
            this.beingSubmit = true;
            this.$swal({
              title: `Data Berhasil disimpan`,
              text: `Antrean atas nama ${nama_lengkap} tersimpan pada urutan ${nomor_antrian}`,
              type: "success",
            });
            this.$router.push("/rawat-jalan/antrean");
          } else {
            this.$swal({
              type: "failed",
              text: `Pasien telah berada dalam list antrian`,
            });
          }
        } catch (err) {
          this.$swal({
            text: `Pasien telah berada dalam list antrian`,
            type: "failed",
          });
        }
      },
      // async fetchDokter() {
      //   try {
      //     const res = await axios.get(`${this.url_api}/dokter`);
      //     if (res.data.data.dokter.data.map) {
      //       this.options.dokter = res.data.data.dokter.data.map(item => {
      //         return {
      //           label: item.nama,
      //           value: item.user_id
      //         };
      //       });
      //     }
      //   } catch (err) {
      //     // alert(err);
      //   }
      // },
      async searchPasien(val) {
        try {
          const res = await axios.get(
            `${this.url_api}/pasien?nama_pasien=${val}&paginate=0`
          );
          this.pasiens = res.data.data.pasien;
          this.options.nama_pasien = res.data.data.pasien.map(item => {
            return {
              label: `${item.nama}`,
              value: item.id
            };
          });

        } catch (err) {
          // alert(err);
        }
      }
    }
  };
</script>

<style lang="scss">
  .v-select {
    &>.vs__dropdown-toggle {
      height: 41.75px !important;
    }

    &.error {
      &>.vs__dropdown-toggle {
        border-color: red;
      }
    }
  }
</style>