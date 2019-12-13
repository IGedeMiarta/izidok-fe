<template>
  <div>
    <page-title
      heading="Registrasi Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan'
        },
        { label: 'registrasi', active: true }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-header">
          <h4 class="text-capitalize my-2">form registrasi rawat jalan</h4>
        </div>
        <div class="card-body">
          <b-form v-on:submit.prevent="submitForm">
            <template v-if="formBasicData && formBasicData.length">
              <b-row>
                <b-col
                  :cols="form.col"
                  v-for="form in formBasicData"
                  :key="form.tmpId"
                >
                  <b-form-group
                    :label="renderLabel({ label: form.rawLabel })"
                    class="text-capitalize"
                    :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    "
                    style="position: relative"
                    :state="renderError({ error: form.error })"
                  >
                    <Datetime
                      input-class="form-control"
                      zone="Asia/Jakarta"
                      format="yyyy-LL-dd"
                      v-if="form.label == 'waktu_konsultasi'"
                      @input="waktuKonsultasiSelected"
                    />
                    <b-form-input
                      :type="form.type || 'text'"
                      v-model="formData[form.label]"
                      @keyup="
                        setValue({
                          rawLabel: form.rawLabel,
                          label: form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      "
                      :state="renderError({ error: form.error })"
                      v-if="form.type === 'text' && form.label != 'waktu_konsultasi'"
                    />
                    <vue-select
                      :class="{ error: form.error }"
                      :options="options[form.label]"
                      @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label: form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      "
                      v-if="form.type === 'select'"
                    >
                    </vue-select>
                    <template v-if="form.type === 'radio'">
                      <b-form-radio-group
                        id="radio-group-1"
                        v-model="formData[form.label]"
                        @change="
                          setValue({
                            label: form.label,
                            rawLabel: form.rawLabel,
                            $event
                          })
                        "
                        :options="
                          form.data.map((item, index) => ({
                            text: item,
                            value: index
                          }))
                        "
                        name="radio-options"
                      ></b-form-radio-group>
                    </template>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button
                type="submit"
                variant="primary"
                class="text-capitalize my-2 float-right"
                >simpan</b-button
              >
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
import axios from 'axios';
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import moment from 'moment'

const tmp = [
  {
    label: "no. rekam medis",
    type: "text",
    col: 3,
    validations: {
      required,
      minLength: minLength(6)
    }
  },
  {
    label: "no. ktp",
    type: "text",
    col: 3,
    validations: {}
  },
  {
    label: "nama lengkap",
    type: "select",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "jenis kelamin",
    type: "radio",
    col: 6,
    data: ["perempuan", "laki-laki"],
    validations: {
      required
    }
  },
  {
    label: "nomor handphone",
    type: "text",
    col: 6,
    validations: {
      required,
      numeric
    }
  },
  {
    label: "dokter",
    type: "select",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "waktu konsultasi",
    type: "text",
    col: 6,
    validations: {
      required
    }
  },
  {
    label: "tinggi badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "berat badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "suhu badan",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "tensi sistole",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "tinggi diastole",
    type: "text",
    col: 2,
    validations: {}
  },
  {
    label: "nadi",
    type: "text",
    col: 2,
    validations: {}
  }
];

export default {
  components: {
    "vue-select": () => import("vue-select"),
    Datetime
  },
  data: () => ({
    formBasicData: null,
    formData: null,
    options: {
      dokter: [],
      nama_lengkap: []
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
    this.fetchDokter()
    this.fetchPasien()
  },
  methods: {
    waktuKonsultasiSelected($event) {
      this.setValue({
        label: 'waktu_konsultasi',
        rawLabel: 'waktu konsultasi',
        $event: moment($event).format('YYYY-MM-DD')
      })
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
    whitelistValidation() {
      return this.setFormBasicData().map(item => item.rawLabel);
    },
    submitForm() {
      const { formBasicData } = this;

      formBasicData.map(item => {
        this.triggerValidation({
          label: item.label,
          $v: this.$v,
          $vm: this,
          rawLabel: item.rawLabel
        });
      });

      if (formBasicData.every(item => item.error !== null && !item.error)) {
        this.saveRegister()
      }
    },
    setFormData() {
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = null;
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
    setValue({ label, rawLabel, $event = null } = {}) {
      let value = $event;
      if (typeof $event === "object" && $event.target && $event.target.value) {
        const { target } = $event;
        value = target.value;
      }
      // console.log($event);
      this.formData[label] = value;
      if(label == 'jenis_kelamin') this.formData[label] = '' + value;
      this.triggerValidation({
        label,
        $v: this.$v,
        $vm: this,
        rawLabel
      });

      if(label == 'nama_lengkap') {
        const pasien = find(this.pasiens, {id: $event.value})
        if(pasien) {
          this.autoFill(pasien, 'nama_lengkap')
        }
      }
    },
    autoFill(pasien, filler) {
      let autoFillForm = {
        'nomor_rekam_medis': 'no._rekam_medis',
        'nik': 'no._ktp',
        'nama_lengkap': 'nama_lengkap',
        'jenis_kelamin': 'jenis_kelamin',
        'nomor_hp': 'nomor_handphone'
      }
      for(let prop in pasien) {
        if(prop == filler || !autoFillForm[prop]) continue;
        if(prop != 'jenis_kelamin' && !pasien[prop]) continue;

        if(prop == 'nomor_rekam_medis') pasien[prop] = '' + pasien[prop]

        this.setValue({
          label: autoFillForm[prop], 
          rawLabel: autoFillForm[prop].split('_').join(' '), 
          $event: pasien[prop]
        })
      }
    },
    async saveRegister() {
      let postData = {
        pasien_id: this.formData.nama_lengkap.value || '',
        klinik_id: this.$store.state.user.klinik_id || '',
        examination_by: this.formData.dokter.value || '',
        nomor_rekam_medis: this.formData['no._rekam_medis'] || '',
        nama_lengkap: this.formData.nama_lengkap.label || '',
        nik: this.formData['no._ktp'] || '123',
        jenis_kelamin: this.formData.jenis_kelamin || '',
        nomor_telp: this.formData.nomor_handphone || '',
        waktu_konsultasi: this.formData.waktu_konsultasi || '',
        tinggi_badan: this.formData.tinggi_badan || 0,
        berat_badan:  this.formData.berat_badan || 0,
        suhu:  this.formData.suhu_badan || 0,
        tensi_sistole:  this.formData.tensi_sistole || 0,
        tensi_diastole: this.formData.tensi_diastole || 0,
        nadi: this.formData.nadi || 0,
        respirasi: 0
      }

      try {
        const res = await axios.post(`${this.url_api}/transaksi`, postData)
        if(res.data.status === true) {
          this.$swal({
            text: `Data Berhasil di simpan`,
            type: "success"
          });

          this.$router.push('/rawat-jalan/antrean')
        }
      } catch(err) {
        alert(err)
      }
    },
    async fetchDokter() {
      try {
        const res = await axios.get(`${this.url_api}/dokter`)
        if(res.data.data.dokter.data.map) {
          this.options.dokter = res.data.data.dokter.data.map(item => {
            return {
              label: item.dokter.nama,
              value: item.dokter.id,
            }
          })
        }
      } catch(err) {
        alert(err)
      }
    },
    async fetchPasien() {
      try {
        const res = await axios.get(`${this.url_api}/pasien`)
        if(res.data.data.pasien.data.map) {
          this.pasiens = res.data.data.pasien.data
          this.options.nama_lengkap = res.data.data.pasien.data.map(item => {
            return {
              label: item.nama,
              value: item.id,
            }
          })
        }
      } catch(err) {
        alert(err)
      }
    }
  }
};
</script>

<style lang="scss">
.v-select {
  & > .vs__dropdown-toggle {
    height: 41.75px !important;
  }

  &.error {
    & > .vs__dropdown-toggle {
      border-color: red;
    }
  }
}
</style>