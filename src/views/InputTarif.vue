<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title
        heading="Input Tarif"
        subheading="Masukkan tarif berikut untuk dapat melakukan penggunaan iziDok."
      />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <b-form @submit.prevent="submitInputTarif">
              <b-row class="d-flex align-items-center">
                <b-col cols="12">
                  <b-row class="d-flex align-items-center mb-4">
                    <b-col cols="4" class="text-capitalize">nama layanan</b-col>
                    <b-col cols="3" class="text-capitalize">kode layanan</b-col>
                    <b-col cols="3" class="text-capitalize"
                      >tarif layanan</b-col
                    >
                  </b-row>
                  <b-row
                    class="d-flex align-items-center mb-3"
                    v-for="(inputTarif, index) in tmpInputTarifData"
                    :key="index"
                  >
                    <b-col cols="4">
                      <div role="group">
                        <b-form-input
                          :value="inputTarif.nama_layanan"
                          @change="
                            onChangeValue({
                              label: 'nama_layanan',
                              index,
                              $event
                            })
                          "
                          :state="errorState({ label: 'nama_layanan', index })"
                          :placeholder="placeholderInput('nama_layanan')"
                          :disabled="index <= 1"
                          maxlength="30"
                        ></b-form-input>
                        <b-form-invalid-feedback class="text-capitalize">
                          {{
                            inputTarif.error &&
                              inputTarif.error.nama_layanan.desc
                          }}
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                    <b-col cols="3">
                      <div role="group">
                        <b-form-input
                          :value="inputTarif.kode_layanan"
                          @change="
                            onChangeValue({
                              label: 'kode_layanan',
                              index,
                              $event
                            })
                          "
                          @keyup="onKeyupKode($event, index)"
                          :state="errorState({ label: 'kode_layanan', index })"
                          :placeholder="placeholderInput('kode_layanan')"
                          maxlength="5"
                        ></b-form-input>
                        <b-form-invalid-feedback class="text-capitalize">
                          {{
                            inputTarif.error &&
                              inputTarif.error.kode_layanan.desc
                          }}
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                    <b-col cols="3">
                      <div role="group">
                        <b-form-input
                          :value="inputTarif.tarif_layanan"
                          @change="
                            onChangeValue({
                              label: 'tarif_layanan',
                              index,
                              $event
                            })
                          "
                          @keyup="onKeyupTarif($event, index)"
                          :state="errorState({ label: 'tarif_layanan', index })"
                          :placeholder="placeholderInput('tarif_layanan')"
                          maxlength="12"
                        ></b-form-input>
                        <b-form-invalid-feedback class="text-capitalize">
                          {{
                            inputTarif.error &&
                              inputTarif.error.tarif_layanan.desc
                          }}
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                    <b-col cols="2" v-if="index > 1">
                      <b-button
                        variant="danger"
                        style="padding: .5rem .8rem; border-radius: 100%"
                        @click="removeInputTarifData(index)"
                      >
                        <font-awesome-icon icon="minus"
                      /></b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center">
                <b-col cols="10">
                  <div class="d-flex justify-content-center">
                    <b-button
                      variant="first"
                      style="padding: .5rem .8rem; border-radius: 100%"
                      @click="addInputTarifData"
                    >
                      <font-awesome-icon icon="plus"
                    /></b-button>
                  </div>
                </b-col>
                <b-col cols="2">
                  <b-button
                    class="text-capitalize"
                    type="submit"
                    variant="primary"
                    >lanjutkan</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import startCase from "lodash/startCase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faPlus, faMinus);

export default {
  props: ["klinik_id"],
  data: () => ({
    money: {
      decimal: "",
      thousands: ",",
      prefix: "",
      suffix: "",
      precision: 0
    },
    tmpInputTarifData: [
      {
        nama_layanan: startCase("registrasi awal"),
        kode_layanan: null,
        tarif_layanan: null
      },
      {
        nama_layanan: startCase("konsultasi dokter"),
        kode_layanan: null,
        tarif_layanan: null
      }
    ],
    kodeContainer: []
  }),
  mounted() {
    this.tmpInputTarifData = this.setTmpInputTarifData();
  },
  methods: {
    setTmpInputTarifData() {
      return this.tmpInputTarifData.map(item => {
        const tmp = Object.keys(item).reduce((obj, key) => {
          if (key !== "error") {
            obj[key] = this.generateErrorObj();
          }
          return obj;
        }, {});
        return {
          ...item,
          error: tmp
        };
      });
    },
    generateErrorObj() {
      return {
        error: null,
        desc: null
      };
    },
    errorState({ label, index }) {
      const { tmpInputTarifData } = this;
      if (
        tmpInputTarifData[index].error &&
        tmpInputTarifData[index].error[label]
      ) {
        return tmpInputTarifData[index].error[label].error;
      } else {
        return null;
      }
    },
    errorDesc({ label, index }) {
      const { tmpInputTarifData } = this;
      if (
        tmpInputTarifData[index].error &&
        tmpInputTarifData[index].error[label]
      ) {
        return tmpInputTarifData[index].error[label].desc;
      }
    },
    onKeyupTarif($event, index) {
      const { tmpInputTarifData } = this;

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

        // memberikan separator ribuan
        const tmp = tmpInputTarifData[index];
        const newResult = $event.target.value.replace(/\D/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        tmp['tarif_layanan'] = newResult;
        Vue.set(this.tmpInputTarifData, index, tmp);

        return true;
      }
    },
    placeholderInput(label = "") {
      return startCase(`input ${label}`);
    },
    validateInput({ label, $event }) {
      return {
        error: ($event && true) || false,
        desc: (!$event && "kolom harus diisi") || ""
      };
    },
    validateAll() {
      const { tmpInputTarifData, validateInput } = this;
      const all = tmpInputTarifData.map(item => {
        const x = Object.keys(item).filter(z => z !== "error");
        x.map(y => {
          item.error[y] = validateInput({
            label: y,
            $event: item[y]
          });
        });
      });
    },
    submitInputTarif() {
      const { tmpInputTarifData, validateAll } = this;
      validateAll();
      this.$nextTick(() => {
        const z = tmpInputTarifData.map(item => item.error);
        const y = z.map(x => {
          const v = Object.keys(x);
          const o = v.every(z => x[z].error);
          return o;
        });
        const p = y.every(h => h);
        if (p) {
          this.doSubmitInputTarif();
        }
      });
    },
    async doSubmitInputTarif() {
      const { constructPostData } = this;
      try {
        const res = await axios.post(`${this.url_api}/layanan`, {
          arr: constructPostData()
        });
        const { status, data } = res.data;

        this.$router.push({
          path: "/input-data-operator"
        });
      } catch (err) {
        // console.log(err);
      }
    },
    constructPostData() {
      const { tmpInputTarifData } = this;
      const tmp = tmpInputTarifData.map(item => {
        const x = Object.keys(item).filter(y => !["error"].includes(y));
        const z = x.reduce((obj, key) => {
          let q = key
          if (key == 'tarif_layanan') {
            q = 'tarif';

            // hapus separator ribuan dan jadikan int
            item[key] = parseInt(item[key].replace(/\D/g, ""))
          }
          obj[q] = item[key];
          return obj;
        }, {});
        z.klinik_id = this.klinik_id;
        return z;
      });
      return tmp;
    },
    onChangeValue({ index, label, $event }) {
      const { tmpInputTarifData, validateInput } = this;
      const tmp = tmpInputTarifData[index];
      if(tmp.error[label].error !== false) {
        tmp.error[label] = validateInput({
          label,
          $event
        });
      }

      if (label !== "tarif_layanan") {
        tmp[label] = $event;
        Vue.set(this.tmpInputTarifData, index, tmp);
      }
    },
    onKeyupKode($event, index) {
      Vue.set(this.kodeContainer, index, $event.target.value)
      this.kodeContainer.forEach((item, i) => {
        if(index == i) return;
        if(item == $event.target.value) {
          this.tmpInputTarifData[index].error['kode_layanan'].error = false
          this.tmpInputTarifData[index].error['kode_layanan'].desc = 'Kode layanan tidak boleh sama'

          this.tmpInputTarifData[i].error['kode_layanan'].error = false
          this.tmpInputTarifData[i].error['kode_layanan'].desc = 'Kode layanan tidak boleh sama'
        }
        else {
          this.tmpInputTarifData[index].error['kode_layanan'].error = true
          this.tmpInputTarifData[index].error['kode_layanan'].desc = ''

          this.tmpInputTarifData[i].error['kode_layanan'].error = true
          this.tmpInputTarifData[i].error['kode_layanan'].desc = ''
        }
      })
    },
    addInputTarifData() {
      const { tmpInputTarifData, validateAll, generateErrorObj } = this;
      const lastIndex = tmpInputTarifData[tmpInputTarifData.length - 1];
      const x = Object.keys(lastIndex);
      const tmp = x.reduce((obj, key) => {
        if (key === "error") {
          obj[key] = x
            .filter(item => item !== "error")
            .reduce((obj, keyChild) => {
              obj[keyChild] = generateErrorObj();
              return obj;
            }, {});
        } else {
          obj[key] = null;
        }
        return obj;
      }, {});
      validateAll();
      this.tmpInputTarifData = [...tmpInputTarifData, tmp];
    },
    removeInputTarifData(index) {
      const { tmpInputTarifData } = this;
      if (tmpInputTarifData.length > 2) {
        const tmp = tmpInputTarifData
          .slice(0, index)
          .concat(tmpInputTarifData.slice(index + 1, tmpInputTarifData.length));
        this.tmpInputTarifData = tmp;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.invalid-feedback {
  min-height: 18px;
  display: block;
}
</style>
