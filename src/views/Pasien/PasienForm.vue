<template>
  <div>
    <!-- <div class="text-center col-md-12 foto-upload mb-4" v-if="formType !== 'detail' && formType !== 'edit'"> -->
    <!-- <template v-if="this.hasImage == true">
        <div class="overlay-upload" :style="{ height: 250 +'px', position : 'absolute' }" >
            
        </div>
      </template> -->

    <!-- <image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment" :debug="1" :maxSize="5000" doNotResize="gif" :autoRotate="true" outputFormat="verbose"
        @input="setImage">
        <label for="fileInput" class="text-foto" slot="upload-label">
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z">
              </path>
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Ganti Gambar KTP" : "Klik untuk upload KTP"
          }}</span>
        </label>
      </image-uploader>
    </div> -->
    <h4 class="text-capitalize mb-3">
      data pasien
      <span v-if="idPasien && formData">
        (no. rekam medis: {{ formData.nomor_rekam_medis }})
      </span>
    </h4>
    <b-form>
      <b-container fluid>
        <b-row>
          <b-col sm="6">
            <b-form-group class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'nama lengkap' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'nama lengkap'
              })
            })
          ">
              <label for="">{{ renderLabel({ label: 'nama lengkap' }) }}</label>
              <label for="" style="color:red"> *</label>
              <b-form-input @keyup="
              setValue({
                rawLabel: 'nama lengkap',
                $event
              })
            " :state="getDataError({ rawLabel: 'nama lengkap' })" :disabled="disabledForm()"
                :value="getValue('nama lengkap')" :maxlength="60" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'no. handphone' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'no. handphone'
              })
            })
          ">
              <label for="">{{ renderLabel({ label: 'no. handphone' }) }}</label>
              <label for="" style="color:red"> *</label>
              <b-form-input @keypress="
              onKeyInputNumber({
                rawLabel: 'no. handphone',
                $event
              })
            " @keyup="
              setValue({
                rawLabel: 'no. handphone',
                $event
              })
            " :state="getDataError({ rawLabel: 'no. handphone' })" :disabled="disabledForm()"
                :value="getValue('no. handphone')" :maxlength="15" />
            </b-form-group>
          </b-col>
          <b-col sm="2">
            <b-form-group class="text-capitalize"
              style="position: relative;" :state="getDataError({ rawLabel: 'jenis identitas' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'jenis identitas'
                    })
                  })
                ">
              <label>Jenis Identitas</label>
              <template v-if="this.formData['jenis_identitas'] || this.formData['nik']">
                <label style="color:red"> *</label>
              </template>
              <vue-select :options="
                    ['KTP', 'SIM', 'Paspor']
                  " @input="
                    setValue({
                      rawLabel: 'jenis identitas',
                      $event
                    })
                  " :disabled="disabledForm()" :value="getValue('jenis identitas')" />
            </b-form-group>
          </b-col>
          <b-col sm="4">
            <b-form-group  class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'nik' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'nik'
              })
            })
          ">
              <label>No. identitas</label>
              <template v-if="this.formData['jenis_identitas'] || this.formData['nik']">
                <label for="" style="color:red"> *</label>
              </template>
              <template v-if="this.formData['jenis_identitas'] !== '' && this.formData['jenis_identitas'] !== null">
                <b-form-input v-if="this.formData['jenis_identitas'] !== 'Paspor'" @keypress="
              onKeyInputNumber({
                rawLabel: 'nik',
                $event
              })
            " @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" required />
                <b-form-input v-else @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" required />
                <template v-if="this.formBasicData[2].error == true && this.formData.nik !== ''">
                  <label style="color:red">No. Identitas telah terdaftar</label>
                </template>
              </template>
              <template v-else-if="this.formData['jenis_identitas'] == null">
                <b-form-input v-if="this.formData['jenis_identitas'] !== 'Paspor'" @keypress="
              onKeyInputNumber({
                rawLabel: 'nik',
                $event
              })
            " @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" />
                <b-form-input v-else @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" />
                <template v-if="this.formBasicData[2].error == true && this.formData.nik !== ''">
                  <label style="color:red">No. Identitas telah terdaftar</label>
                </template>
              </template>
              <template v-else>
                <b-form-input v-if="this.formData['jenis_identitas'] !== 'Paspor'" @keypress="
              onKeyInputNumber({
                rawLabel: 'nik',
                $event
              })
            " @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" />
                <b-form-input v-else @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              },);
              checkNIK()
            " :disabled="disabledForm()" :state="getDataError({ rawLabel: 'nik' })" :value="getValue('nik')"
                  :maxlength="25" />
                <template v-if="this.formBasicData[2].error == true && this.formData.nik !== ''">
                  <label style="color:red">No. Identitas telah terdaftar</label>
                </template>
              </template>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group :label="renderLabel({ label: 'email' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'email'
              })
            })
          " :state="getDataError({ rawLabel: 'email' })" class="text-capitalize" style="position: relative;">
              <b-form-input @keyup="
              setValue({
                rawLabel: 'email',
                $event
              })
            " :disabled="disabledForm()" :value="getValue('email')" :maxlength="30" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'email'
              })
            })
          " />
            </b-form-group>
          </b-col>
          <b-col sm="2">
            <b-form-group :state="getDataError({ rawLabel: 'jenis kelamin' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'jenis kelamin'
                    })
                  })
                ">
              <label for="">{{ renderLabel({label: 'Jenis kelamin'  }) }}</label>
              <label for="" style="color:red"> *</label>
              <b-form-radio-group stacked @change="
                    setValue({
                      rawLabel: 'jenis kelamin',
                      $event
                    })
                  " class="text-capitalize" :options="[
                    { text: 'laki-laki', value: 1 },
                    { text: 'perempuan', value: 0 }
                  ]" :disabled="disabledForm()" :checked="getValue('jenis kelamin')">
              </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col sm="4">
            <b-form-group class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'tanggal lahir' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'tanggal lahir'
                    })
                  })
                ">
              <label for="">{{ renderLabel({ label: 'tanggal lahir'  }) }}</label>
              <label for="" style="color:red"> *</label>
              <!-- <b-input-group>
                <b-input-group-text slot="append">
                  <font-awesome-icon class="mx-auto" icon="calendar" />
                </b-input-group-text> -->
              <Datetime input-class="form-control" class="d-flex input-group" zone="Asia/Jakarta"
                value-zone="Asia/Jakarta" format="d LLL yyyy" @input="tanggalLahirSelected"
                :value="getValue('tanggal lahir')" :disabled="disabledForm()" :input-style="
                    getDataError({ rawLabel: 'tanggal lahir' }) === null
                      ? null
                      : getDataError({ rawLabel: 'tanggal lahir' })
                      ? null
                      : 'border-color: red'
                  " :max-datetime="maximumDatetime" ref="dob">
                <template v-slot:after>
                  <b-input-group-text @click="triggerDob" slot="append" style="
                    border-top-left-radius:0; border-left-width: 0; border-bottom-left-radius: 0; cursor: pointer
                    ">
                    <font-awesome-icon class="mx-auto" icon="calendar" />
                  </b-input-group-text>
                </template>
              </Datetime>
              <!-- </b-input-group> -->
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group :label="renderLabel({ label: 'nama penanggung jawab' })" class="text-capitalize"
              style="position: relative" :state="getDataError({ rawLabel: 'nama penanggung jawab' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'nama penanggung jawab'
              })
            })
          ">
              <b-form-input @keyup="
              setValue({
                rawLabel: 'nama penanggung jawab',
                $event
              })
            " :disabled="disabledForm()" :value="getValue('nama penanggung jawab')" :maxlength="30" />
            </b-form-group>
          </b-col>
          <b-col sm="2">

          </b-col>
          <b-col sm="4">
            <b-form-group :label="renderLabel({ label: 'gol. darah' })" class="text-capitalize"
              style="position: relative;" :state="getDataError({ rawLabel: 'gol. darah' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'gol. darah'
                    })
                  })
                ">
              <vue-select :options="
                    ['A', 'B', 'AB', 'O']
                  " @input="
                    setValue({
                      rawLabel: 'gol. darah',
                      $event
                    })
                  " :disabled="disabledForm()" :value="getValue('gol. darah')" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group :label="renderLabel({ label: 'no. hp penanggung jawab' })" class="text-capitalize"
              style="position: relative" :state="getDataError({ rawLabel: 'no. hp penanggung jawab' })"
              :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'no. hp penanggung jawab'
                })
              })
            ">
              <b-form-input @keypress="
                onKeyInputNumber({
                  rawLabel: 'no. hp penanggung jawab',
                  $event
                })
              " @keyup="
                setValue({
                  rawLabel: 'no. hp penanggung jawab',
                  $event
                })
              " :disabled="disabledForm()" :value="getValue('no. hp penanggung jawab')" :maxlength="15" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'alamat rumah' })" :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'alamat rumah'
              })
            })
          ">
              <label for="">{{renderLabel({ label: 'alamat rumah' })}}</label>
              <label for="" style="color:red"> *</label>
              <b-form-input @keyup="
              setValue({
                rawLabel: 'alamat rumah',
                $event
              })
            " :state="getDataError({ rawLabel: 'alamat rumah' })" :disabled="disabledForm()"
                :value="getValue('alamat rumah')" :maxlength="100" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group :label="renderLabel({ label: 'hubungan dengan pasien' })" class="text-capitalize"
              style="position: relative">
              <vue-select :options="
                ['Suami/Istri', 'Orangtua', 'Kakak/Adik', 'Anak', 'Lainnya']
              " @input="
                setValue({
                  rawLabel: 'hubungan pasien',
                  $event
                })
              " :disabled="disabledForm()" :value="getValue('hubungan pasien')" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group lass="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'provinsi' })" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'provinsi'
                })
              })
            ">
              <label>Provinsi</label>
              <template v-if="tempat.provinsi">
                <label style="color:red"> *</label>
              </template>
              <vue-select :options="provinces" @input="getCity" :disabled="disabledForm()" v-model="tempat.provinsi" />
            </b-form-group>
          </b-col>
          <b-col sm="6"> </b-col>
          <b-col sm="6">
            <b-form-group  class="text-capitalize" style="position: relative"
              :state="getDataError({ rawLabel: 'kota' })" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'kota'
                })
              })
            ">
              <label>Kota</label>
              <template v-if="tempat.provinsi">
                <label style="color:red"> *</label>
              </template>
              <vue-select :options="cities" v-model="tempat.kota" @input="setDataTempat" :disabled="disabledForm()" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
          </b-col>
          <b-col sm="6">
            <b-form-group :label="renderLabel({ label: 'status perkawinan' })" class="text-capitalize"
              style="position: relative">
              <vue-select :options="
                ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati']
              " @input="
                setValue({
                  rawLabel: 'status perkawinan',
                  $event
                })
              " :disabled="disabledForm()" :value="getValue('status perkawinan')" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
          </b-col>
          <b-col sm="6">
          </b-col>
          <b-col sm="6">
            <template v-if="formType !== 'detail'">
              <b-button class="ml-3 text-uppercase" variant="primary" style="font-size:17.5px;float:right "
                 @click="submitForm">simpan
                <!-- <font-awesome-icon class="mx-auto" icon="caret-down" /> -->
              </b-button>
              <b-button @click="$emit('keluar', true)" class="text-uppercase" :variant="btnVariant()"
                style="font-size:17.5px;float:right">{{ btnText() }}</b-button>
            </template>
            <template v-else>
              <b-button @click="$emit('keluar', true)" class="text-uppercase" :variant="btnVariant()"
                style="font-size:17.5px; float:right">{{ btnText() }}</b-button>
              <b-button class="mr-4 text-uppercase float-right" variant="success" style="font-size:17.5px;" @click="
                $router.push({
                  name: 'pasien-edit',
                  params: { idPasien }
                })
              ">edit</b-button>
            </template>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
  import Vue from "vue";

  import axios from "axios";
  import startCase from "lodash/startCase";
  import ImageUploader from "vue-image-upload-resize";
  Vue.use(ImageUploader);
  import {
    required,
    minLength,
    maxLength,
    numeric,
    email
  } from "vuelidate/lib/validators";
  import "vue-datetime/dist/vue-datetime.css";
  import {
    Datetime
  } from "vue-datetime";
  import "vue2-dropzone/dist/vue2Dropzone.min.css";
  import moment from "moment";
  moment.locale('id');
  import
  {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faCamera,
    faCaretDown,
    faCalendar
  } from "@fortawesome/free-solid-svg-icons";
  library.add(faCamera, faCaretDown, faCalendar);

  const tmp = [{
      label: "nama lengkap",
      alias: "nama",
      validations: {
        required
      }
    },
    {
      label: "no. handphone",
      alias: "nomor_hp",
      validations: {
        required,
        numeric,
        minLength: minLength(10)
      }
    },
    {
      label: "nik",
      alias: "nik",
      error: false,
      validations: {}
    },
    {
      label: "email",
      alias: "email",
      error: false,
      validations: {
        email
      }
    },
    {
      label: "tanggal lahir",
      alias: "tanggal_lahir",
      validations: {
        required
      }
    },
    // {
    //   label: "nama penjamin/asuransi",
    //   alias: "nama_penjamin",
    //   validations: {}
    // },
    {
      label: "jenis kelamin",
      alias: "jenis_kelamin",
      validations: {
        required
      }
    },
    {
      label: "gol. darah",
      alias: "golongan_darah",
      error: false,
      validations: {}
    },
    // {
    //   label: "no. member/polis asuransi",
    //   alias: "nomor_polis",
    //   validations: {}
    // },
    // {
    //   label: "no. member asuransi",
    //   alias: "nomor_member",
    //   validations: {}
    // },
    // {
    //   label: "no. polis asuransi",
    //   alias: "nomor_polis",
    //   validations: {}
    // },
    {
      label: "nama penanggung jawab",
      alias: "nama_penanggung_jawab",
      error: false,
      validations: {}
    },
    {
      label: "no. hp penanggung jawab",
      alias: "nomor_hp_penanggung_jawab",
      error: false,
      validations: {
        // numeric,
        // minLength: minLength(10)
      }
    },
    {
      label: "hubungan pasien",
      alias: "hubungan_pasien",
      error: false,
      validations: {}
    },
    {
      label: "alamat rumah",
      alias: "alamat_rumah",
      validations: {
        required
      }
    },
    // {
    //   label: "rt",
    //   alias: "rt",
    //   validations: {}
    // },
    // {
    //   label: "rw",
    //   alias: "rw",
    //   validations: {}
    // },
    // {
    //   label: "kel/desa",
    //   alias: "kelurahan",
    //   validations: {}
    // },
    // {
    //   label: "kecamatan",
    //   alias: "kecamatan",
    //   validations: {}
    // },
    {
      label: "status perkawinan",
      alias: "status_perkawinan",
      error: false,
      validations: {}
    },
    {
      label: "jenis identitas",
      alias: "jenis_identitas",
      error: false,
      validations: {}
    },
    // {
    //   label: "pekerjaan",
    //   alias: "pekerjaan",
    //   validations: {}
    // },
    {
      label: "nomor rekam medis",
      alias: "nomor_rekam_medis",
      error: false,
      validations: {}
    },
    {
      label: "provinsi",
      alias: "provinsi",
      error: false,
      validations: {}
    },
    {
      label: "kota",
      alias: "kota",
      error: false,
      validations: {}
    },
  ];

  moment.locale('id');

  export default {
    components: {
      Datetime,
      "vue-select": () => import("@/components/VueSelectClearable.vue")
    },
    props: {
      formType: {
        default: "add",
        type: String
      },
      idPasien: {
        type: [String, Number]
      }
    },
    data: () => ({
      beingSubmit: false,
      formBasicData: null,
      formData: null,
      options: ["foo", "bar", "baz"],
      selected: null,
      hasImage: false,
      heightFoto: "",
      image: null,
      selectTempat: null,
      checkValueNik: null,
      provinces: [],
      cities: [],
      tempat: {
        provinsi: null,
        kota: null,
      }
    }),
    watch: {
      'tempat.provinsi': {
        handler: function(newVal, oldVal) {
          if (newVal === oldVal) {
            const { provinsi_name: pnl } = newVal
            const { provinsi_name: pnb } = oldVal
            if (pnl.toLowerCase() !== pnb.toLowerCase()) {
              this.provinsi.kota = null
            }
          }
        },
        nested: true
      }
    },
    computed: {
      maximumDatetime() {
        return moment().format("YYYY-MM-DD");
      },
    },
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
    async mounted() {
      // if (this.formType !== "detail") {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
      // }

      this.getProvince();
      this.getPasienData();

    },
    methods: {
      triggerDob() {
        const x = this.$refs.dob
        const {
          $el: {
            firstElementChild
          }
        } = x
        firstElementChild && firstElementChild.click()
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
      checkNIK() {
        clearTimeout(this.timeVerifyNIK)
        this.timeVerifyNIK = setTimeout(async () => {
          const res = await axios.get(
            `${this.url_api}/identity/verify?jenis_pengenal=${this.formData['jenis_identitas']}&nik=${this.formData['nik']}`
          );
          console.log(res)
          if (res.data.status == false) {
            this.formBasicData[2].error = true;
          } else {
            this.formBasicData[2].error = false;
          }
        }, 550);
      },
      async getCity() {
        console.log(this.formData['provinsi'] ,this.formData['kota'] )
        try {
          var val;
          if (this.tempat.provinsi == '' || this.tempat.provinsi == null) {
            val = '';
          } 
           else {
            val = this.tempat.provinsi.id;
            const res = await axios.get(`${this.url_api}/getcitybyprovince/${val}`)
            // handle success
            this.cities = res.data.data.kota.map(val => ({
              ...val,
              label: `${val.nama}`,
            }));
          }
           ;
          if (this.$router.currentRoute.params.idPasien){
            if(this.formType == 'edit'){
              if(this.tempat.kota.provinsi_id !== this.tempat.provinsi.id){
                this.tempat.kota = null;
              }
            }
          }
          else if(this.cities[0].provinsi_id !== this.tempat.provinsi){
            this.tempat.kota = null;
          }
        } catch (error) {
          console.error(error);
        }
      },
      setDataTempat() {
        this.formData['provinsi'] = this.tempat.provinsi.id
        this.formData['kota'] = this.tempat.kota.id
      },
      startCase: startCase,
      // ocrCompleted(res) {
      //   const {
      //     assignValuePasien
      //   } = this;
      //   assignValuePasien(res);
      // },
      // setImage: function (output) {
      //   const tmp = (dataURI, mimetype) => {
      //     var byteString = atob(dataURI.split(",")[1]);
      //     var ab = new ArrayBuffer(byteString.length);
      //     var ia = new Uint8Array(ab);

      //     for (var i = 0; i < byteString.length; i++) {
      //       ia[i] = byteString.charCodeAt(i);
      //     }
      //     return new Blob([ab], {
      //       type: mimetype
      //     });
      //   };
      //   const {
      //     dataUrl
      //   } = output;
      //   const [mimeRaw] = output && dataUrl.split(";");
      //   const [mime] = mimeRaw.split(":");
      //   const blob = tmp(dataUrl, mime);
      //   const formData = new FormData();
      //   this.hasImage = true;
      //   this.image = output;
      //   // var heightFoto;
      //   // this.output.info.newHeight = heightFoto;
      //   // console.log(heightFoto);
      //   this.heightFoto = output.info.newHeight;

      //   formData.append("file", blob);

      //   axios
      //     .post(`${this.url_api}/pasien/ocr`, formData)
      //     .then(response => {
      //       const {
      //         data: {
      //           data: {
      //             result: res
      //           }
      //         }
      //       } = response;
      //       this.ocrCompleted(res);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // },
      stupidOcrHelper({
        alias,
        val
      }) {
        const mapGender = val => {
          const x = 1;
          return /empu|wan/gi.test(val) ? x * 0 : x;
        };

        switch (alias.toLowerCase()) {
          case "gender":
            return mapGender(val);

          default:
            return val;
        }
      },
      assignValuePasien(data) {
        if (data) {
          Object.keys(data).map(item => {
            const y = this.formBasicData.find(x => x.alias === item);
            if (y) {
              const {
                stupidOcrHelper
              } = this;
              Vue.set(
                this.formData,
                y.label,
                stupidOcrHelper({
                  alias: y.alias,
                  val: (() => {
                    return (
                      (typeof data[item] === "string" && data[item].trim()) ||
                      data[item]
                    );
                  })()
                })
              );
            }
          });
        }
      },
      btnText() {
        switch (this.formType) {
          case "detail":
            return "tutup";

          case "edit":
            return "batal";

          default:
            return "keluar";
        }
      },
      btnVariant() {
        switch (this.formType) {
          case "detail":
            return "primary";

          default:
            return "danger";
        }
      },
      disabledForm() {
        return this.formType === "detail";
      },
      tanggalLahirSelected($event) {

        if (!$event) return;
        this.setValue({
          rawLabel: "tanggal lahir",
          $event: moment($event).format("YYYY-MM-DD")
        });
      },
      async getPasienData() {
         this.idPasien = this.$router.currentRoute.params.idPasien;
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
              const {
                assignValuePasien
              } = this;
              assignValuePasien(data);
              this.tempat.provinsi = {
                ...data.provinsi,
                label: data.provinsi.provinsi_nama
              }
              this.getCity()
              this.tempat.kota = {
                ...data.kota,
                label: data.kota.nama
              }
            }
          } catch (err) {
            console.log(err);
            // alert(err)
          }
      },
      whitelistValidation() {
        return this.setFormBasicData()
          .filter(item => item.validations && !item.validations.required)
          .map(item => item.rawLabel);
      },
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          let key = val.label.split(" ").join("_");
          arr[key] = "";
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
      onKeyInputNumber({
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
            rawLabel,
            $event
          });
        }
      },
      setValue({
        rawLabel,
        $event = null
      } = {}) {
        let value = $event;
        const label = rawLabel.split(" ").join("_");
        if (typeof $event === "object") {
          if ($event) {
            const {
              target: {
                value
              }
            } = $event;
            this.formData[label] = value;
          } else {
            this.formData[label] = null;
          }
        } else {
          this.formData[label] = value;
        }
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
      },
      submitForm() {
        if  (!this.formData['jenis_identitas']  && !this.formData['nik']  ) {
        } else if(this.formData['jenis_identitas']  && this.formData['nik']){
        } else if(this.formData['jenis_identitas'] !== null && !this.formData['nik']  ) {
          return this.$swal({
            text: `Nomor Identitas harus diisi !`,
            type: "error",
            showCancelButton: false,
            confirmButtonText: startCase("ya")
          }).then(res => {
            const {
              value
            } = res;
            if (value) {
              return;
            }
          });
        } else if(!this.formData['jenis_identitas'] && this.formData['nik']  !== null ) {
          return this.$swal({
            text: `Jenis Identitas harus diisi !`,
            type: "error",
            showCancelButton: false,
            confirmButtonText: startCase("ya")
          }).then(res => {
            const {
              value
            } = res;
            if (value) {
              return;
            }
          });
        }
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
          if (this.formData.provinsi) {
            this.formData.provinsi = this.tempat.provinsi.id;
            this.formData.kota = this.tempat.kota.id;
          }
          this.$emit("submitForm", this.formData);
        }
      }
    }
  };
</script>

<style>
  #fileInput {
    display: none;
    position: absolute;
  }

  .text-foto {
    width: 100%;
    background-color: #f2f3f4;
    padding: 15px;
    border-radius: 15px;
    margin-top: 30px;
    z-index: 999;
    /* height: auto; */
  }

  .text-foto:hover {
    background-color: #d5d8dc;
  }

  /* .img-preview {
    opacity: 0.7;
    margin-right: 40px;
  } */

  .overlay-upload {
    top: 0px;
    left: 0px;
    background-image: linear-gradient(rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.5) 83%,
        rgba(0, 0, 0, 0.8));
    width: 100%;
    height: auto;
    /* z-index: 998 */
    position: absolute;
  }
</style>

<style lang="scss">
  .foto-upload {
    & .text-foto {
      cursor: pointer;
    }
  }
</style>