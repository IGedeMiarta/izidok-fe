<template>
  <div>
    <div class="mb-4" v-if="formType !== 'detail'">
      <vue-dropzone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions()"
        useCustomSlot
        class="custom-dropzone border-0"
        @vdropzone-complete="ocrCompleted"
      >
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title text-capitalize">
            <font-awesome-icon icon="camera" class="mr-2" /> ambil foto
            <span class="text-uppercase">ktp</span>
          </h3>
        </div></vue-dropzone
      >
    </div>
    <h4 class="text-capitalize mb-3">
      data pasien
      <span v-if="idPasien">
        (no. rekam medis: {{ formData.nomor_rekam_medis }})
      </span>
    </h4>
    <b-form v-on:submit.prevent="submitForm">
      <div class="form-row">
        <b-form-group
          label="Nama Lengkap"
          class="text-capitalize col-md-6 pr-3"
          style="position: relative"
          :state="getDataError({ rawLabel: 'nama lengkap' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'nama lengkap'
              })
            })
          "
        >
          <b-form-input
            @keyup="
              setValue({
                rawLabel: 'nama lengkap',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'nama lengkap' })"
            :disabled="disabledForm()"
            :value="getValue('nama lengkap')"
            :maxlength="60"
          />
        </b-form-group>
        <b-form-group
          label="No. Handphone"
          class="text-capitalize col-md-6 pr-3"
          style="position: relative"
          :state="getDataError({ rawLabel: 'no. handphone' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'no. handphone'
              })
            })
          "
        >
          <b-form-input
            @keypress="
              onKeyInputNumber({
                rawLabel: 'no. handphone',
                $event
              })
            "
            @keyup="
              setValue({
                rawLabel: 'no. handphone',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'no. handphone' })"
            :disabled="disabledForm()"
            :value="getValue('no. handphone')"
            :maxlength="30"
          />
        </b-form-group>
      </div>
      <div class="form-row">
        <b-form-group
          label="No. KTP"
          class="text-capitalize col-md-6 pr-3"
          style="position: relative"
          :state="getDataError({ rawLabel: 'nik' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'nik'
              })
            })
          "
        >
          <b-form-input
            @keypress="
              onKeyInputNumber({
                rawLabel: 'nik',
                $event
              })
            "
            :disabled="disabledForm()"
            :value="getValue('nik')"
            :maxlength="25"
          />
        </b-form-group>
        <b-form-group
          label="Email"
          class="text-capitalize col-md-6 pr-3"
          style="position: relative"
          :state="getDataError({ rawLabel: 'email' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'email'
              })
            })
          "
        >
          <b-form-input
            @keyup="
              setValue({
                rawLabel: 'email',
                $event
              })
            "
            type="email"
            :disabled="disabledForm()"
            :value="getValue('email')"
            :maxlength="30"
          />
        </b-form-group>
      </div>
      <div class="form-row">
        <b-col cols="6">
          <b-row>
            <b-col cols="6"
              ><b-form-group
                label="Tempat Lahir"
                class="text-capitalize"
                style="position: relative"
                :state="getDataError({ rawLabel: 'tempat lahir' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'tempat lahir'
                    })
                  })
                "
              >
                <b-form-input
                  @keyup="
                    setValue({
                      rawLabel: 'tempat lahir',
                      $event
                    })
                  "
                  :state="getDataError({ rawLabel: 'tempat lahir' })"
                  :disabled="disabledForm()"
                  :value="getValue('tempat lahir')"
                  :maxlength="30"
                /> </b-form-group
            ></b-col>
            <b-col cols="6">
              <b-form-group
                label="Tanggal Lahir"
                class="text-capitalize mr-2"
                style="position: relative"
                :state="getDataError({ rawLabel: 'tanggal lahir' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'tanggal lahir'
                    })
                  })
                "
              >
                <Datetime
                  input-class="form-control"
                  zone="Asia/Jakarta"
                  format="d LLL yyyy"
                  @input="tanggalLahirSelected"
                  :value="getValue('tanggal lahir')"
                  :disabled="disabledForm()"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Nama Penjamin/Asuransi"
            class="text-capitalize"
            style="position: relative"
            :state="getDataError({ rawLabel: 'nama penjamin/asuransi' })"
            :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'nama penjamin/asuransi'
                })
              })
            "
          >
            <b-form-input
              @keyup="
                setValue({
                  rawLabel: 'nama penjamin/asuransi',
                  $event
                })
              "
              :disabled="disabledForm()"
              :value="getValue('nama penjamin/asuransi')"
              :maxlength="30"
            />
          </b-form-group>
        </b-col>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <b-row>
            <b-col>
              <b-form-group
                label="Jenis Kelamin"
                :state="getDataError({ rawLabel: 'jenis kelamin' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'jenis kelamin'
                    })
                  })
                "
              >
                <b-form-radio-group
                  stacked
                  @change="
                    setValue({
                      rawLabel: 'jenis kelamin',
                      $event
                    })
                  "
                  class="text-capitalize"
                  :options="[
                    { text: 'laki-laki', value: 1 },
                    { text: 'perempuan', value: 0 }
                  ]"
                  :disabled="disabledForm()"
                  :checked="getValue('jenis kelamin')"
                >
                </b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Gol. Darah"
                class="text-capitalize col-md-6 p-0 float-left"
                style="position: relative"
                :state="getDataError({ rawLabel: 'gol. darah' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'gol. darah'
                    })
                  })
                "
              >
                <b-form-select
                  :options="
                    ['a', 'b', 'ab', 'o'].map(item => ({
                      value: item,
                      text: item.toUpperCase()
                    }))
                  "
                  @change="
                    setValue({
                      rawLabel: 'gol. darah',
                      $event
                    })
                  "
                  :disabled="disabledForm()"
                  :value="getValue('gol. darah')"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <div class="col-md-6">
          <b-form-group
            label="No. Member/Polis Asuransi"
            class="text-capitalize"
            style="position: relative"
            :state="getDataError({ rawLabel: 'no. member/polis asuransi' })"
            :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'no. member/polis asuransi'
                })
              })
            "
          >
            <b-form-input
              @keyup="
                setValue({
                  rawLabel: 'no. member/polis asuransi',
                  $event
                })
              "
              :disabled="disabledForm()"
              :value="getValue('no. member/polis asuransi')"
              :maxlength="30"
            />
          </b-form-group>
          <b-form-group
            label="Nama Penanggung Jawab"
            class="text-capitalize"
            style="position: relative"
            :state="getDataError({ rawLabel: 'nama penanggung jawab' })"
            :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'nama penanggung jawab'
                })
              })
            "
          >
            <b-form-input
              @keyup="
                setValue({
                  rawLabel: 'nama penanggung jawab',
                  $event
                })
              "
              :disabled="disabledForm()"
              :value="getValue('nama penanggung jawab')"
              :maxlength="30"
            />
          </b-form-group>
        </div>
      </div>
      <div class="form-row">
        <b-form-group
          label="Alamat Rumah"
          class="text-capitalize col-md-6 pr-3"
          style="position: relative"
          :state="getDataError({ rawLabel: 'alamat rumah' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'alamat rumah'
              })
            })
          "
        >
          <b-form-input
            @keyup="
              setValue({
                rawLabel: 'alamat rumah',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'alamat rumah' })"
            :disabled="disabledForm()"
            :value="getValue('alamat rumah')"
            :maxlength="100"
          />
        </b-form-group>
        <b-form-group
          label="No. Hp Penanggung Jawab"
          class="text-capitalize col-md-6"
          style="position: relative"
          :state="getDataError({ rawLabel: 'no. hp penanggung jawab' })"
          :invalid-feedback="
            renderInvalidFeedback({
              validationDesc: blindlyGetData({
                rawLabel: 'no. hp penanggung jawab'
              })
            })
          "
        >
          <b-form-input
            @keypress="
              onKeyInputNumber({
                rawLabel: 'no. hp penanggung jawab',
                $event
              })
            "
            :disabled="disabledForm()"
            :value="getValue('no. hp penanggung jawab')"
            :maxlength="15"
          />
        </b-form-group>
      </div>
      <b-row class="mb-3">
        <b-col cols="6">
          <b-row>
            <b-col cols="6">
              <b-form-group
                label="RT"
                class="text-capitalize"
                style="position: relative"
                :state="getDataError({ rawLabel: 'rt' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'rt'
                    })
                  })
                "
              >
                <b-form-input
                  @keypress="
                    onKeyInputNumber({
                      rawLabel: 'rt',
                      $event
                    })
                  "
                  @keyup="
                    setValue({
                      rawLabel: 'rt',
                      $event
                    })
                  "
                  :disabled="disabledForm()"
                  :value="getValue('rt')"
                  :maxlength="10"
                />
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label="RW"
                class="text-capitalize"
                style="position: relative"
                :state="getDataError({ rawLabel: 'rw' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'rw'
                    })
                  })
                "
              >
                <b-form-input
                  @keypress="
                    onKeyInputNumber({
                      rawLabel: 'rw',
                      $event
                    })
                  "
                  @keyup="
                    setValue({
                      rawLabel: 'rw',
                      $event
                    })
                  "
                  :disabled="disabledForm()"
                  :value="getValue('rw')"
                  :maxlength="10"
                />
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label="Kel/Desa"
                class="text-capitalize"
                style="position: relative"
                :state="getDataError({ rawLabel: 'kel/desa' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'kel/desa'
                    })
                  })
                "
              >
                <b-form-input
                  @keyup="
                    setValue({
                      rawLabel: 'kel/desa',
                      $event
                    })
                  "
                  :disabled="disabledForm()"
                  :value="getValue('kel/desa')"
                  :maxlength="20"
                />
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label="Kecamatan"
                class="text-capitalize"
                style="position: relative"
                :state="getDataError({ rawLabel: 'kecamatan' })"
                :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'kecamatan'
                    })
                  })
                "
              >
                <b-form-input
                  @keyup="
                    setValue({
                      rawLabel: 'kecamatan',
                      $event
                    })
                  "
                  :disabled="disabledForm()"
                  :value="getValue('kecamatan')"
                  :maxlength="20"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6"></b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="6">
          <b-form-group
            label="Status Perkawinan"
            class="text-capitalize"
            style="position: relative"
            :state="getDataError({ rawLabel: 'status perkawinan' })"
            :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'status perkawinan'
                })
              })
            "
          >
            <b-form-select
              :options="
                ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'].map(
                  (item, index) => ({
                    value: item,
                    text: item
                  })
                )
              "
              @change="
                setValue({
                  rawLabel: 'status perkawinan',
                  $event
                })
              "
              :state="getDataError({ rawLabel: 'status perkawinan' })"
              :disabled="disabledForm()"
              :value="getValue('status perkawinan')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="6"></b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group
            label="Pekerjaan"
            class="text-capitalize"
            style="position: relative"
            :state="getDataError({ rawLabel: 'pekerjaan' })"
            :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'pekerjaan'
                })
              })
            "
          >
            <vue-select
              taggable
              :options="jobs"
              @input="
                setValue({
                  rawLabel: 'pekerjaan',
                  $event
                })
              "
              :value="getValue('pekerjaan')"
              :disabled="disabledForm()"
            />
          </b-form-group>
        </b-col>
        <b-col cols="6" class="d-flex align-items-center justify-content-end">
          <b-button
            @click="$emit('keluar', true)"
            class="ml-3 text-uppercase"
            :variant="btnVariant()"
            style="font-size:17.5px;"
            >{{ btnText() }}</b-button
          >
          <template v-if="formType !== 'detail'">
            <b-button
              class="ml-3 text-uppercase"
              variant="primary"
              style="font-size:17.5px;"
              type="submit"
              >simpan</b-button
            >
          </template>
          <template v-else>
            <b-button
              class="ml-3 text-uppercase float-left"
              variant="success"
              style="font-size:17.5px;"
              @click="
                $router.push({
                  name: 'pasien-edit',
                  params: { idPasien }
                })
              "
              >edit</b-button
            >
          </template>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Datetime } from "vue-datetime";
import axios from "axios";
import startCase from "lodash/startCase";
import {
  required,
  minLength,
  maxLength,
  numeric,
  email
} from "vuelidate/lib/validators";
import "vue-datetime/dist/vue-datetime.css";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
library.add(faCamera);

const tmp = [
  {
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
    validations: {}
  },
  {
    label: "email",
    alias: "email",
    validations: {}
  },
  {
    label: "tempat lahir",
    alias: "tempat_lahir",
    validations: {
      required
    }
  },
  {
    label: "tanggal lahir",
    alias: "tanggal_lahir",
    validations: {
      required
    }
  },
  {
    label: "nama penjamin/asuransi",
    alias: "nama_penjamin",
    validations: {}
  },
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
    validations: {}
  },
  {
    label: "no. member/polis asuransi",
    alias: "nomor_polis",
    validations: {}
  },
  {
    label: "nama penanggung jawab",
    alias: "nama_penanggung_jawab",
    validations: {}
  },
  {
    label: "no. hp penanggung jawab",
    alias: "nomor_hp_penanggung_jawab",
    validations: {
      // numeric,
      // minLength: minLength(10)
    }
  },
  {
    label: "alamat rumah",
    alias: "alamat_rumah",
    validations: { required }
  },
  {
    label: "rt",
    alias: "rt",
    validations: {}
  },
  {
    label: "rw",
    alias: "rw",
    validations: {}
  },
  {
    label: "kel/desa",
    alias: "kelurahan",
    validations: {}
  },
  {
    label: "kecamatan",
    alias: "kecamatan",
    validations: {}
  },
  {
    label: "status perkawinan",
    alias: "status_perkawinan",
    validations: { required }
  },
  {
    label: "pekerjaan",
    alias: "pekerjaan",
    validations: {}
  },
  {
    label: "nomor rekam medis",
    alias: "nomor_rekam_medis",
    validations: {}
  }
];

const jobs = [
  "Belum/Tidak Bekerja",
  "Mengurus Rumah Tangga",
  "Pelajar/Mahasiswa",
  "Pensiunan",
  "Pegawai Negeri Sipil",
  "Tentara Nasional Indonesia",
  "Kepolisian RI",
  "Perdagangan",
  "Petani/Pekebun",
  "Peternak",
  "Nelayan/Perikanan",
  "Industri",
  "Konstruksi",
  "Transportasi",
  "Karyawan Swasta",
  "Karyawan BUMN",
  "Karyawan BUMD",
  "Karyawan Honorer",
  "Buruh Harian Lepas",
  "Buruh Tani/Perkebunan",
  "Buruh Nelayan/Perikanan",
  "Buruh Peternakan",
  "Pembantu Rumah Tangga",
  "Tukang Cukur",
  "Tukang Listrik",
  "Tukang Batu",
  "Tukang Kayu",
  "Tukang Sol Sepatu",
  "Tukang Las/Pandai Besi",
  "Tukang Jahit",
  "Penata Rambut",
  "Penata Rias",
  "Penata Busana",
  "Mekanik",
  "Tukang Gigi",
  "Seniman",
  "Tabib",
  "Paraji",
  "Perancang Busana",
  "Penterjemah",
  "Imam Masjid",
  "Pendeta",
  "Pastur",
  "Wartawan",
  "Ustadz/Mubaligh",
  "Juru Masak",
  "Promotor Acara",
  "Anggota DPR-RI",
  "Anggota DPD",
  "Anggota BPK",
  "Presiden",
  "Wakil Presiden",
  "Anggota Mahkamah",
  "Konstitusi",
  "Anggota Kabinet/Kementrian",
  "Duta Besar",
  "Gubernur",
  "Wakil Gubernur",
  "Bupati",
  "Wakil Bupati",
  "Walikota",
  "Wakil Walikota",
  "Anggota DPRD Propinsi",
  "Anggota DPRD Kabupten/Kota",
  "Dosen",
  "Guru",
  "Pilot",
  "Pengacara",
  "Notaris",
  "Arsitek",
  "Akuntan",
  "Konsultan",
  "Dokter",
  "Bidan",
  "Perawat",
  "Apoteker",
  "Psikiater/Psikolog",
  "Penyiar Televisi",
  "Penyiar Radio",
  "Pelaut",
  "Peneliti",
  "Sopir",
  "Pialang",
  "Paranormal",
  "Pedagang",
  "Perangkat Desa",
  "Kepala Desa",
  "Biarawati",
  "Wiraswasta"
];

export default {
  components: {
    Datetime,
    vueDropzone: () => import("vue2-dropzone"),
    "vue-select": () => import("@/components/VueSelect.vue")
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
    jobs: jobs
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
  async mounted() {
    // if (this.formType !== "detail") {
    this.formBasicData = this.setFormBasicData();
    this.formData = this.setFormData();
    // }
    await this.getPasienData();
  },
  methods: {
    startCase: startCase,
    ocrCompleted(res) {
      const { assignValuePasien } = this;
      assignValuePasien(res);
    },
    dropzoneOptions() {
      const { klinik: { nama_klinik = null } = {} } = this.$store.state.user;

      return {
        url: `${this.url_api}/pasien/ocr`,
        maxFilesize: 5000,
        headers: this.rawAuthHeader(),
        maxFiles: 1,
        params: {
          nama_klinik
        },
        acceptedFiles: "image/*",
        capture: "image/*",
        thumbnailMethod: "contain",
        uploadMultiple: false
      };
    },
    assignValuePasien(data) {
      if (data) {
        Object.keys(data).map(item => {
          const y = this.formBasicData.find(x => x.alias === item);
          if (y) {
            Vue.set(this.formData, y.label, data[item]);
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
      if (this.idPasien) {
        try {
          const res = await axios.get(
            `${this.url_api}/pasien/${this.idPasien}`,
            this.idPasien
          );
          const { status, data } = res.data;
          if (status) {
            const { assignValuePasien } = this;
            assignValuePasien(data);
          }
        } catch (err) {
          console.log(err);
          // alert(err)
        }
      }
    },
    whitelistValidation() {
      return this.setFormBasicData().map(item => item.rawLabel);
    },
    setFormData() {
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = "";
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
    onKeyInputNumber({ rawLabel, $event }) {
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
        void this.setValue({ rawLabel, $event });
      }
    },
    setValue({ rawLabel, $event = null } = {}) {
      let value = $event;
      const label = rawLabel.split(" ").join("_");
      if (typeof $event === "object") {
        if ($event) {
          const {
            target: { value }
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
      const { formBasicData } = this;
      if (formBasicData.every(item => item.error !== null && !item.error)) {
        this.$emit("submitForm", this.formData);
      } else {
        formBasicData.map(item => {
          this.triggerValidation({
            label: item.label,
            $v: this.$v,
            $vm: this,
            rawLabel: item.rawLabel
          });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
