<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title
        heading="Input Tarif"
        subheading="Masukkan tarif berikut untuk dapat melakukan penggunaan izidok."
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
                    :key="inputTarif.id"
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
                          @input="
                            onInputNamaLayanan(
                              $event,
                              index,
                              inputTarif,
                              'nama_layanan'
                            )
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
                          @input="
                            onInputKode(
                              $event,
                              index,
                              inputTarif,
                              'kode_layanan'
                            )
                          "
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
                          v-model.lazy="inputTarif.tarif_layanan"
                          v-money="money"
                          :state="errorState({ label: 'tarif_layanan', index })"
                          :placeholder="placeholderInput('tarif_layanan')"
                          maxlength="12"
                          class="text-right"
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
                    >simpan</b-button
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
import { mapMutations } from "vuex";
import Vue from "vue";
import startCase from "lodash/startCase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { VMoney } from "v-money";
import debounce from "lodash/debounce";
library.add(faPlus, faMinus);

export default {
  props: ["klinik_id"],
  directives: { money: VMoney },
  data: () => ({
    money: {
      decimal: "",
      thousands: ",",
      prefix: "Rp. ",
      suffix: "",
      precision: 0
    },
    tmpInputTarifData: [
      {
        id: 1,
        nama_layanan: startCase("registrasi awal"),
        kode_layanan: null,
        tarif_layanan: null
      },
      {
        id: 2,
        nama_layanan: startCase("konsultasi dokter"),
        kode_layanan: null,
        tarif_layanan: null
      }
    ],
    namaLayananContainer: ["Registrasi Awal", "Konsultasi Dokter"],
    kodeContainer: [],
    errorKodeLayanan: null,
    errorsKodeLayanan: [],
    namaContainer: []
  }),
  mounted() {
    this.tmpInputTarifData = this.setTmpInputTarifData();
  },
  methods: {
    ...mapMutations({
      collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
      setInitPage: "sidebar/SET_INITIALIZATION_PAGE"
    }),
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
        const d = item.error.kode_layanan.error;
        if (d == false) {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("Silakan Benarkan seluruh kolom")
          });
        } else {
          x.map(y => {
            item.error[y] = validateInput({
              label: y,
              $event: item[y]
            });
          });
        }
      });
    },
    submitInputTarif() {
      const { tmpInputTarifData, validateAll } = this;
      this.$nextTick(() => {
        const z = tmpInputTarifData.map(item => item.error);
        const y = z.map(x => {
          const v = Object.keys(x);
          const o = v.every(z => x[z].error);
          validateAll();
          return o;
        });
        const p = y.every(h => h);
        if (p !== false) {
          this.doSubmitInputTarif();
        } else {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("Silakan lengkapi seluruh kolom")
          });
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
        this.beingSubmit = true;
        this.$swal({
          title: "Tambah Data Berhasil",
          text: "Data berhasil tersimpan",
          icon: "success",
          confirmButtonText: startCase("ya")
        });
        this.setInitPage(true);
        this.$router.push({path: "/"});
      } catch (errror) {
        const x = errror.response.data;
        const y = Object.keys(x);
        console.log(y.length - 1);
        console.log(errror.response.data);
        y.map(item => {
          const z = item.split(".");
          this.tmpInputTarifData[z[1]].error.nama_layanan.desc =
            x[item][x[item].length - x[item].length];
        });
        var d = errror.response.data.length;
        console.log(d);
        // this.tmpInputTarifData[i].error['nama_layanan'].error = false;
        // this.tmpInputTarifData[i].error['nama_layanan'].desc = 'Kode Layanan Sudah Ada';
      }
    },
    constructPostData() {
      const { tmpInputTarifData } = this;
      const tmp = tmpInputTarifData.map(item => {
        const x = Object.keys(item).filter(y => !["error"].includes(y));
        const z = x.reduce((obj, key) => {
          let q = key;
          if (key == "tarif_layanan") {
            q = "tarif";

            // hapus separator ribuan dan jadikan int
            item[key] = parseInt(item[key].replace(/\D/g, ""));
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
      if (tmp.error[label].error !== false) {
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
    onInputNamaLayanan(val, index, o, p) {
      val = val.charAt(0).toUpperCase() + val.substring(1);
      Vue.set(o, p, val);
      Vue.set(this.namaContainer, index, val);
      let { tmpInputTarifData, validateAll, generateErrorObj } = this;
      const lastIndex = tmpInputTarifData[tmpInputTarifData.length - 1];
      const x = Object.keys(lastIndex);

      this.tmpInputTarifData[0].error["tarif_layanan"].error = true;
      this.tmpInputTarifData[0].error["tarif_layanan"].desc = "";

      this.tmpInputTarifData[0].error["id"].error = true;

      this.tmpInputTarifData[0].error["nama_layanan"].error = true;
      this.tmpInputTarifData[0].error["nama_layanan"].desc = "";

      this.namaContainer.forEach((item, i) => {
        this.namaContainer.forEach((item, i) => {
          if (index == i) return;
          if (item == val) {
            this.tmpInputTarifData[index].error["nama_layanan"].error = false;
            this.tmpInputTarifData[index].error["nama_layanan"].desc =
              "Nama layanan tidak boleh sama";

            this.tmpInputTarifData[i].error["nama_layanan"].error = false;
            this.tmpInputTarifData[i].error["nama_layanan"].desc =
              "Nama layanan tidak boleh sama";

            this.tmpInputTarifData[i].error["id"].error = true;
            this.tmpInputTarifData[index].error["id"].error = true;

            this.tmpInputTarifData[i].error["tarif_layanan"].error = true;
            this.tmpInputTarifData[i].error["tarif_layanan"].desc = "";
            this.tmpInputTarifData[index].error["tarif_layanan"].error = true;
            this.tmpInputTarifData[index].error["tarif_layanan"].desc = "";
          } else {
            this.tmpInputTarifData[index].error["nama_layanan"].error = true;
            this.tmpInputTarifData[index].error["nama_layanan"].desc = "";

            this.tmpInputTarifData[i].error["nama_layanan"].error = true;
            this.tmpInputTarifData[i].error["nama_layanan"].desc = "";

            this.tmpInputTarifData[i].error["id"].error = true;
            this.tmpInputTarifData[index].error["id"].error = true;

            this.tmpInputTarifData[i].error["tarif_layanan"].error = true;
            this.tmpInputTarifData[i].error["tarif_layanan"].desc = "";
            this.tmpInputTarifData[index].error["tarif_layanan"].error = true;
            this.tmpInputTarifData[index].error["tarif_layanan"].desc = "";
          }
        });
      });
    },
    onInputKode: debounce(function(val, index, o, p) {
      const vm = this
      val = val.toUpperCase();
      Vue.set(o, p, val);
      Vue.set(vm.kodeContainer, index, val);

      let { tmpInputTarifData, validateAll, generateErrorObj } = vm;

      const lastIndex = tmpInputTarifData[tmpInputTarifData.length - 1];
      var listKode = axios
        .get(`${vm.url_api}/layanan/${val}/kode`)
        .then(response => {
          if (response.data.success == true) {
            vm.tmpInputTarifData[index].error["kode_layanan"].error = false;
            vm.tmpInputTarifData[index].error["kode_layanan"].desc =
              "Kode layanan Sudah Ada";
          }
        })
        .catch(error => {
          if (error.response.data.success == false) {
            vm.tmpInputTarifData[index].error["kode_layanan"].error = true;
            vm.tmpInputTarifData[index].error["kode_layanan"].desc = "";
          }
        });
      // const x = Object.keys(lastIndex);
      vm.kodeContainer.forEach(function(item, i) {
        if (index == i) return;
        if (item == val) {
          let listKode = axios
            .get(`${vm.url_api}/layanan/${val}/kode`)
            .then(response => {
              // kalo ada yang sama dalam api
              if (response.data.success == true) {
                vm.tmpInputTarifData[index].error[
                  "kode_layanan"
                ].error = false;
                vm.tmpInputTarifData[index].error["kode_layanan"].desc =
                  "Kode layanan Sudah Ada";
              }
            })
            .catch(error => {
              //kalo tidak ada yang sama dari api
              if (error.response.data.success == false) {
                vm.tmpInputTarifData[index].error[
                  "kode_layanan"
                ].error = false;
                vm.tmpInputTarifData[index].error["kode_layanan"].desc =
                  "Kode Layanan Tidak Boleh Sama";
                //disini
              }
            });
        } else {
          let listKode = axios
            .get(`${vm.url_api}/layanan/${val}/kode`)
            .then(function(response) {
              if (response.data.success == true) {
                vm.tmpInputTarifData[index].error[
                  "kode_layanan"
                ].error = false;
                vm.tmpInputTarifData[index].error["kode_layanan"].desc =
                  "Kode layanan Sudah Ada";
              }
            })
            .catch((error) => {
              //kasus inputan setelahnya
              // console.log(error.response.data.success);
              console.log(error);

              if (
                error &&
                error.response &&
                error.response.data &&
                error.response.data.success == false
              ) {
                vm.tmpInputTarifData[index].error[
                  "kode_layanan"
                ].error = true;
                vm.tmpInputTarifData[index].error["kode_layanan"].desc = "";
              } else {
                vm.tmpInputTarifData[index].error[
                  "kode_layanan"
                ].error = false;
                vm.tmpInputTarifData[index].error["kode_layanan"].desc =
                  "Kode Layanan Harus Di Isi";
              }
            })
            .finally(() => {});
        }
      });
    }, 600),
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
        } else if (key === "id") {
          obj[key] = tmpInputTarifData.length + 1;
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
        // remap kodeContainer
        this.kodeContainer = tmp.map(item => {
          return item.kode_layanan;
        });
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
