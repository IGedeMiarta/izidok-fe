<template>
  <div>
    <h4 class="text-capitalize mb-3">data pasien</h4>
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
            @keyup="
              setValue({
                rawLabel: 'no. handphone',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'no. handphone' })"
            :disabled="disabledForm()"
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
            @keyup="
              setValue({
                rawLabel: 'nik',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'nik' })"
            :disabled="disabledForm()"
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
            :state="getDataError({ rawLabel: 'email' })"
            :disabled="disabledForm()"
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
                <b-form-input
                  @keyup="
                    setValue({
                      rawLabel: 'tanggal lahir',
                      $event
                    })
                  "
                  :state="getDataError({ rawLabel: 'tanggal lahir' })"
                  :disabled="disabledForm()"
                />
                <!-- <Datetime
                  v-model.lazy="formData['tanggal_lahir']"
                  :input-class="[
                    getDataError({ rawLabel: 'tanggal lahir' }) === null
                      ? ''
                      : getDataError({ rawLabel: 'tanggal lahir' })
                      ? 'is-valid'
                      : 'is-invalid',
                    'form-control'
                  ]"
                  :state="getDataError({ rawLabel: 'tanggal lahir' })"
                  :disabled="disabledForm()"
                  zone="Asia/Jakarta"
                  format="dd-LL-yyyy"
                /> -->
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
              :state="getDataError({ rawLabel: 'nama penjamin/asuransi' })"
              :disabled="disabledForm()"
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
                  :state="getDataError({ rawLabel: 'gol. darah' })"
                  :disabled="disabledForm()"
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
              :state="getDataError({ rawLabel: 'no. member/polis asuransi' })"
              :disabled="disabledForm()"
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
              :state="getDataError({ rawLabel: 'nama penanggung jawab' })"
              :disabled="disabledForm()"
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
            @keyup="
              setValue({
                rawLabel: 'no. hp penanggung jawab',
                $event
              })
            "
            :state="getDataError({ rawLabel: 'no. hp penanggung jawab' })"
            :disabled="disabledForm()"
          />
        </b-form-group>
      </div>
      <b-row class="mb-3">
        <b-col cols="6">
          <b-row>
            <b-col cols="3">
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
                  @keyup="
                    setValue({
                      rawLabel: 'rt',
                      $event
                    })
                  "
                  :state="getDataError({ rawLabel: 'rt' })"
                  :disabled="disabledForm()"
                />
              </b-form-group>
            </b-col>
            <b-col cols="3">
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
                  @keyup="
                    setValue({
                      rawLabel: 'rw',
                      $event
                    })
                  "
                  :state="getDataError({ rawLabel: 'rw' })"
                  :disabled="disabledForm()"
                />
              </b-form-group>
            </b-col>
            <b-col cols="3">
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
                  :state="getDataError({ rawLabel: 'kel/desa' })"
                  :disabled="disabledForm()"
                />
              </b-form-group>
            </b-col>
            <b-col cols="3">
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
                  :state="getDataError({ rawLabel: 'kecamatan' })"
                  :disabled="disabledForm()"
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
            <b-form-select
              :options="
                [
                  'Belum/Tidak Bekerja',
                  'Pelajar/Mahasiswa',
                  'PNS',
                  'Mengurus Rumah Tangga',
                  'Karyawan BUMN',
                  'Karyawan Swasta',
                  'Wiraswasta',
                  'Dokter',
                  'Lainnya'
                ].map(item => ({
                  value: item,
                  text: item
                }))
              "
              @change="
                setValue({
                  rawLabel: 'pekerjaan',
                  $event
                })
              "
              :state="getDataError({ rawLabel: 'pekerjaan' })"
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
// import { Datetime } from "vue-datetime";
import axios from "axios";
import startCase from "lodash/startCase";
import {
  required,
  minLength,
  maxLength,
  numeric,
  email
} from "vuelidate/lib/validators";

// import "vue-datetime/dist/vue-datetime.css";

const tmp = [
  {
    label: "nama lengkap",
    validations: {
      required
    }
  },
  {
    label: "no. handphone",
    validations: {
      required,
      numeric,
      minLength: minLength(10)
    }
  },
  {
    label: "nik",
    validations: {}
  },
  {
    label: "email",
    validations: {
      email
    }
  },
  {
    label: "tempat lahir",
    validations: {
      required
    }
  },
  {
    label: "tanggal lahir",
    validations: {
      required
    }
  },
  {
    label: "nama penjamin/asuransi",
    validations: {}
  },
  {
    label: "jenis kelamin",
    validations: {
      required
    }
  },
  {
    label: "gol. darah",
    validations: {}
  },
  {
    label: "no. member/polis asuransi",
    validations: {}
  },
  {
    label: "nama penanggung jawab",
    validations: {}
  },
  {
    label: "no. hp penanggung jawab",
    validations: {}
  },
  {
    label: "alamat rumah",
    validations: { required }
  },
  {
    label: "rt",
    validations: {}
  },
  {
    label: "rw",
    validations: {}
  },
  {
    label: "kel/desa",
    validations: {}
  },
  {
    label: "kecamatan",
    validations: {}
  },
  {
    label: "status perkawinan",
    validations: { required }
  },
  {
    label: "pekerjaan",
    validations: {}
  }
];

export default {
  // components: {
  //   Datetime
  // },
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
    formBasicData: null,
    formData: null,
    options: ["foo", "bar", "baz"],
    selected: null
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
    if (this.formType !== "detail") {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
    }
    await this.getPasienData();
  },
  methods: {
    startCase: startCase,
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
    async getPasienData() {
      if (this.idPasien) {
        try {
          const res = await axios.get(`${this.url_api}/pasien`, this.idPasien);
          const { status, data } = res.data;
          if (status) {
            const {
              nama,
              nik,
              tempat_lahir,
              tanggal_lahir,
              jenis_kelamin,
              golongan_darah,
              alamat_rumah,
              rt,
              rw,
              kelurahan,
              kecamatan,
              status_perkawinan,
              pekerjaan,
              nomor_hp,
              nama_penjamin,
              nomor_polis,
              email,
              nama_penanggung_jawab
            } = data;
            // todo assign data
          }
        } catch (err) {
          // console.log(err);
        }
      }
    },
    whitelistValidation() {
      return this.setFormBasicData().map(item => item.rawLabel);
    },
    setFormData() {
      return this.setFormBasicData().reduce((arr, val) => {
        arr[val.label.split(" ").join("_")] = '';
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
    setValue({ rawLabel, $event = null } = {}) {
      let value = $event;
      const label = rawLabel.split(" ").join("_");
      if (typeof $event === "object") {
        const { target } = $event;
        value = target.value;
      }
      this.formData[label] = value;
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
