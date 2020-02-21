<template>
  <div>
    <page-title heading="Registrasi Antrean" :breadcrumb="[
        {
          label: 'rawat jalan',
          link: '/antrean'
        },
        { label: 'registrasi', active: true }
      ]" />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-header">
          <h4 class="text-capitalize my-2 ">form registrasi antrean</h4>
          <div class="col-md-6">

          </div>
            <b-button class="text-uppercase" 
                style="font-size:14.5px;" to="/pasien/tambah" variant="first">Registrasi Pasien Baru</b-button>
        </div>
        <div class="card-body">
          <b-form v-on:submit.prevent="submitForm">
            <template v-if="formBasicData && formBasicData.length">
              <b-row>
                <b-col v-for="form in formBasicData" :sm="form.col" :key="form.tmpId">
                  <b-form-group class="text-capitalize" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " style="position: relative" :state="renderError({ error: form.error })">
                    <label for="" style="font-size : 13px">{{form.rawLabel}} {{form.satuan}}</label>
                    <label for="" style="color:red">{{form.isImportant}}</label>
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
                        " :state="renderError({ error: form.error })" />
                      <b-form-input v-else-if="/(ktp|identitas)/gi.test(form.rawLabel)" :type="form.type || 'text'"
                        v-model="formData[form.label]" @keyup="
                          setValue({
                            rawLabel: form.rawLabel,
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                          })
                        " />
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
                      " :filterable="false" @search="searchPasien" style="font-size:13.4px;">
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
                        " name="radio-options"></b-form-radio-group>
                    </template>
                    <template v-if="form.type == 'textarea'">
                      <b-form-textarea id="textarea" 
                         v-model="formData[form.label]" @keyup="
                          setValue({
                            rawLabel: form.rawLabel,
                            label: form.label,
                            $event,
                            tmpId: form.tmpId
                          })
                        " 
                       placeholder="Tuliskan keluhan utama secara singkat, mis. sakit kepala, demam 3 hari, dll" rows="3"
                        max-rows="6"></b-form-textarea>
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
    </div>
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
  // import {
  //   Datetime
  // } from "vue-datetime";
  // import "vue-datetime/dist/vue-datetime.css";
  import moment from "moment";

  const tmp = [{
      label: "nama pasien",
      type: "select",
      isImportant: "*",
      col: 4,
      validations: {
        required
      }
    },
    {
      label: "no. rekam medis",
      type: "text",
      col: 4,
      validations: {
        required,
        minLength: minLength(6)
      }
    },
    {
      label: "nomor handphone",
      type: "text",
      col: 4,

      validations: {
        required,
        numeric
      }
    },
    {
      label: "jenis kelamin",
      type: "radio",
      col: 6,
      data: ["perempuan", "laki-laki"],
      isImportant: "*",
      validations: {
        required
      }
    },

    {
      label: "dokter",
      type: "select",
      isImportant: "*",
      col: 6,
      validations: {
        required
      }
    },
    // {
    //   label: "waktu konsultasi",
    //   type: "text",
    //   col: 6,
    //   validations: {
    //     required
    //   }
    // },
    {
      label: "tinggi badan",
      type: "text",
      col: 2,
      satuan: '(cm)',
      validations: {}
    },
    {
      label: "berat badan",
      type: "text",
      col: 2,
      satuan: '(kg)',
      validations: {}
    },
    {
      label: "suhu",
      type: "text",
      col: 2,
      satuan: '(celcius)',
      validations: {}
    },
    {
      label: "sistole",
      type: "text",
      col: 2,
      validations: {}
    },
    {
      label: "diastole",
      type: "text",
      col: 2,
      validations: {}
    },
    {
      label: "nadi",
      type: "text",
      col: 2,
      validations: {}
    },
    {
      label: "anamnesis",
      type: "textarea",
      col: 12,
      validations: {}
    }
  ];

  export default {
    components: {
      "vue-select": () => import("vue-select"),
      // Datetime
    },
    data: () => ({
      formBasicData: null,
      formData: null,
      options: {
        dokter: [],
        nama_pasien: []
      },
      selected: null,
      pasiens: []
    }),
    validations() {
      return {
        formData: {
          ...tmp.reduce((obj, item) => {
            obj[item.label.split(" ").join("_")] = item.validations;
            return obj;
          }, {})
        }
      };
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
      Promise.all([this.fetchDokter()]);
    },
    computed: {
      minimumDatetime() {
        return moment().format("YYYY-MM-DD");
      }
    },
    methods: {
      waktuKonsultasiSelected($event) {
        if ($event) {
          this.setValue({
            label: "waktu_konsultasi",
            rawLabel: "waktu konsultasi",
            $event: moment($event).format("YYYY-MM-DD")
          });
        }
      },
      overwriteAntrean() {
        this.$swal({
          title: "Pasien telah berada pada list antrean",
          text: `Apakah anda yakin untuk melanjutkan registrasi?`,
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

          if (prop == "nomor_rekam_medis") pasien[prop] = "" + pasien[prop];

          this.setValue({
            label: autoFillForm[prop],
            rawLabel: autoFillForm[prop].split("_").join(" "),
            $event: pasien[prop]
          });
        }
      },
      async saveRegister() {
        const waktu_konsultasi = this.formData.waktu_konsultasi;
        let postData = {
          pasien_id: this.formData.nama_pasien.value || "",
          klinik_id: this.$store.state.user.klinik_id || "",
          examination_by: this.formData.dokter.value || "",
          nomor_rekam_medis: this.formData["no._rekam_medis"] || "",
          nama_pasien: this.formData.nama_pasien.label || "",
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
          suhu: this.formData.suhu_badan || 0,
          tensi_sistole: this.formData.tensi_sistole || 0,
          tensi_diastole: this.formData.tensi_diastole || 0,
          nadi: this.formData.nadi || 0,
          respirasi: 0
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
              nama_pasien
            } = postData;
            this.$swal({
              title: `Data Berhasil di simpan`,
              text: `Antrean atas nama ${nama_pasien} tersimpan pada urutan ${nomor_antrian}`,
              type: "success",
              onOpen: () => {
                this.$router.push("/rawat-jalan/antrean");
              }
            });
          }
        } catch (err) {
          // alert(err);
        }
      },
      async fetchDokter() {
        try {
          const res = await axios.get(`${this.url_api}/dokter`);
          if (res.data.data.dokter.data.map) {
            this.options.dokter = res.data.data.dokter.data.map(item => {
              return {
                label: item.nama,
                value: item.user_id
              };
            });
          }
        } catch (err) {
          // alert(err);
        }
      },
      async searchPasien(val) {
        try {
          const res = await axios.get(
            `${this.url_api}/pasien?nama_pasien=${val}`
          );
          const {
            data: {
              data: {
                pasien: {
                  data: pasienData
                }
              }
            }
          } = res;
          if (pasienData) {
            this.pasiens = pasienData;
            this.options.nama_pasien = pasienData.map(item => {
              return {
                label: `${item.nama} ~ ${moment(item.tanggal_lahir).format(
                "DD-MM-YYYY"
              )}`,
                value: item.id
              };
            });
          }
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