<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title heading="Tambah Tarif" subheading="Masukkan tarif berikut untuk dapat melakukan penggunaan izidok."
        :breadcrumb="[
          {
            label: 'Manajemen Tarif',
            link : '/tarif'
          },
          {
            label: 'Tambah Tarif',
            active: true
          }
        ]" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-header" style="background-color : #d3e8eb">
                <h4>Tambah Tarif</h4>
              </div>
              <div class="card-body">
                <b-form @submit.prevent="submitInputTarif">
                  <b-row class="d-flex align-items-center">
                    <b-col sm="12">
                      <b-row class="d-flex align-items-center mb-4">
                        <b-col lg="5" sm="4" class="text-capitalize">nama layanan</b-col>
                        <b-col sm="3" class="text-capitalize">kode layanan</b-col>
                        <b-col lg="3" sm="4" class="text-capitalize">tarif layanan</b-col>
                      </b-row>
                      <b-row class="d-flex align-items-center mb-3" v-for="(inputTarif, index) in tmpInputTarifData"
                        :key="inputTarif.id">
                        <b-col lg="5" sm="4">
                          <div role="group">
                            <b-form-input :value="inputTarif.nama_layanan" @change="
                                onChangeValue({
                                  label: 'nama_layanan',
                                  index,
                                  $event
                                })
                              " @input="
                                onInputNamaLayanan(
                                  $event,
                                  index,
                                  inputTarif,
                                  'nama_layanan'
                                )
                              " :state="errorState({ label: 'nama_layanan', index })"
                              :placeholder="placeholderInput('nama_layanan')" maxlength="50">
                            </b-form-input>
                            <b-form-invalid-feedback class="text-capitalize">
                              {{
                                inputTarif.error &&
                                  inputTarif.error.nama_layanan.desc
                              }}
                            </b-form-invalid-feedback>
                          </div>
                        </b-col>
                        <b-col sm="3">
                          <div role="group">
                            <b-form-input :value="inputTarif.kode_layanan" @change="
                                onChangeValue({
                                  label: 'kode_layanan',
                                  index,
                                  $event
                                })
                              " @input="
                                onInputKode(
                                  $event,
                                  index,
                                  inputTarif,
                                  'kode_layanan'
                                )
                              " :state="errorState({ label: 'kode_layanan', index })"
                              :placeholder="placeholderInput('kode_layanan')" maxlength="5"></b-form-input>
                            <b-form-invalid-feedback class="text-capitalize">
                              {{
                                inputTarif.error &&
                                  inputTarif.error.kode_layanan.desc
                              }}
                            </b-form-invalid-feedback>
                          </div>
                        </b-col>
                        <b-col lg="3" sm="4">
                          <div role="group">
                            <b-form-input v-model.lazy="inputTarif.tarif_layanan" v-money="money"
                              :state="errorState({ label: 'tarif_layanan', index })"
                              :placeholder="placeholderInput('tarif_layanan')" maxlength="19" class="text-right">
                            </b-form-input>
                            <b-form-invalid-feedback class="text-capitalize">
                              {{
                                inputTarif.error &&
                                  inputTarif.error.tarif_layanan.desc
                              }}
                            </b-form-invalid-feedback>
                          </div>
                        </b-col>
                        <b-col sm="1" v-if="index > 0" style="height: 62px">
                          <b-button variant="danger" :style="btnRemoveMobileStyle"
                            @click="removeInputTarifData(index)">
                            <font-awesome-icon icon="minus" />
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <b-row class="d-flex align-items-center">
                    <b-col lg="8" md="7" sm="6">
                      <div class="d-flex justify-content-center">
                        <b-button variant="first" style="padding: .5rem .8rem; border-radius: 100%"
                          @click="addInputTarifData">
                          <font-awesome-icon icon="plus" />
                        </b-button>
                      </div>
                    </b-col>
                    <b-col lg="4" md="5" sm="6" align="right">
                      <b-button class="text-capitalize mr-2" variant="danger" :to="{name: 'tarif-list'}">keluar</b-button>
                      <b-button class="text-capitalize" type="submit" variant="primary">simpan</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import startCase from "lodash/startCase";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faPlus,
    faMinus
  } from "@fortawesome/free-solid-svg-icons";

  import axios from "axios";
  import {
    VMoney
  } from 'v-money';
  library.add(faPlus, faMinus);

  export default {
    directives: {
      money: VMoney
    },
    data: () => ({
      money: {
        decimal: "",
        thousands: ",",
        prefix: "Rp. ",
        suffix: "",
        precision: 0
      },
      errorKodeLayanan: null,
      errorsKodeLayanan: [],
      tmpInputTarifData: [{
        id: 1,
        nama_layanan: null,
        kode_layanan: null,
        tarif_layanan: null
      }, ],
      kodeContainer: [],
      namaContainer: [],
      beingSubmit: false,
      namaLayananContainer: [],
      kodeLayananContainer: [],
      errorKodeLayanan: null,
      errorsKodeLayanan: [],
      kodeLayananExistsInDb: [],
      namaLayananExistsInDb: [],
    }),
    computed: {
      btnRemoveMobileStyle() {
        if(this.isMobile()) {
          return {
            "padding": ".4rem .7rem",
            "border-radius": "100%",
            "margin-left": "-22px"
          }
        }

        return {
          "padding": ".5rem .8rem",
          "border-radius": "100%",
            "margin-left": "-8px"
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      if (!this.beingSubmit) {
        this.$swal({
          title: startCase("keluar"),
          text: `Apakah Anda yakin untuk keluar dari halaman tarif?`,
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
      const valItems = ['kode_layanan', 'nama_layanan', 'tarif_layanan'];
      this.tmpInputTarifData.forEach(item => {
        valItems.forEach(valItem => {
          if(item.error[valItem].error == false) return;

          if(!item[valItem]) {
            item.error[valItem].error = false;
            item.error[valItem].desc = valItem.replace("_", " ") + " harus diisi";
          }
          else {
            item.error[valItem].error = true;
            item.error[valItem].desc = "";
          }
        })
      })
    },
    submitInputTarif() {
      const { tmpInputTarifData, validateAll } = this;
      this.$nextTick(() => {
        validateAll();
        // const z = tmpInputTarifData.map(item => item.error);
        // const y = z.map(x => {
        //   const v = Object.keys(x).slice(1);
        //   const o = v.every(z => x[z].error);
        //   return o;
        // });
        // const p = y.every(h => h);
        // if (p !== false) {
        //   this.doSubmitInputTarif();
        // }

        let isError = false;
        let isErrorRequired = false;
        let isErrorDuplicate = false;
        let isErrorExists = false;

        tmpInputTarifData.forEach(tarifData => {
          for(let errIndex in tarifData.error) {
            if(tarifData.error[errIndex].error == false) {
              isError = true;

              if(/(harus diisi)/i.test(tarifData.error[errIndex].desc)) {
                isErrorRequired = true;
              }
              else if(/(tidak boleh sama)/i.test(tarifData.error[errIndex].desc)) {
                isErrorDuplicate = true;
              }
              else if(/(sudah ada)/i.test(tarifData.error[errIndex].desc)) {
                isErrorExists = true;
              }
            }
          }
        })
        
        if (isError == false) {
          this.doSubmitInputTarif();
        } else {
          let errorMessage = {
            required: "Silakan lengkapi seluruh kolom",
            duplicate: "Kode atau Nama Layanan tidak boleh sama",
            exists:  "Kode atau Layanan sudah ada"
          }
          let jenisError = '';
          if(isErrorRequired) jenisError = 'required';
          else if(isErrorDuplicate) jenisError = 'duplicate';
          else if(isErrorExists) jenisError = 'exists';
          console.log('ss',errorMessage);
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase(errorMessage[jenisError])
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
        this.$router.push({path: "/tarif"});
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
        z.klinik_id = this.getKlinikId;
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
    onInputNamaLayanan(valRaw, index, o, p) {
      if(this._timeoutNamaLayanan) clearTimeout(this._timeoutNamaLayanan);
      let val = valRaw.toLowerCase().trim()
      Vue.set(o, p, valRaw);
      Vue.set(this.namaLayananContainer, index, val);

      if(!val) {
        this.tmpInputTarifData[index].error['nama_layanan'].error = false;
        this.tmpInputTarifData[index].error['nama_layanan'].desc = 'Nama Layanan harus diisi';
        return;
      }

      if(val.match(/[^a-zA-Z0-9\-\ \(\)\/\.]+/) !== null) {
        this.tmpInputTarifData[index].error['nama_layanan'].error = false;
        this.tmpInputTarifData[index].error['nama_layanan'].desc = 'Hanya bisa huruf, spasi, angka, -, (), /, dan .';
        return;
      }
      
      let isDuplicate = false;
      let needDbChecks = [];
      this.namaLayananContainer.forEach((item, i) => {
        this.namaLayananContainer.forEach((item2, i2) => {
          if(i != i2) {
            if(item == item2) {
              this.tmpInputTarifData[i].error['nama_layanan'].error = false
              this.tmpInputTarifData[i].error['nama_layanan'].desc = 'Nama layanan tidak boleh sama'

              isDuplicate = true;
            }
          }
        })
        if(isDuplicate == false) {
          this.tmpInputTarifData[i].error['nama_layanan'].error = true
          this.tmpInputTarifData[i].error['nama_layanan'].desc = ''

          needDbChecks.push(i)
        }
      })

      if(needDbChecks.length > 0) {
        let newNeedDbChecks = [];
        needDbChecks.forEach(item => {
          let valDb = this.tmpInputTarifData[item].nama_layanan;
          if(this.namaLayananExistsInDb.indexOf(valDb) > -1) {
            this.tmpInputTarifData[item].error["nama_layanan"].error = false;
            this.tmpInputTarifData[item].error["nama_layanan"].desc = "Nama layanan Sudah Ada";
          }
          else newNeedDbChecks.push(item);
        });
        needDbChecks = newNeedDbChecks;
        this._timeoutNamaLayanan = setTimeout(() => {
          needDbChecks.forEach(item => {
            axios
            .get(`${this.url_api}/layanan/nama/${this.tmpInputTarifData[item].nama_layanan}`)
            .then(response => {
              if (response.data.success == true) {
                this.tmpInputTarifData[item].error["nama_layanan"].error = false;
                this.tmpInputTarifData[item].error["nama_layanan"].desc = "nama layanan Sudah Ada";
                this.namaLayananExistsInDb.push(this.tmpInputTarifData[item].nama_layanan);
              }
            })
            .catch(error => {})
            .finally(() => {
              clearTimeout(this._timeoutNamaLayanan);
            });
          })
        }, 600)
      }
    },
    onInputKode(val, index, o, p) {
      if(this._timeoutKodeLayanan) clearTimeout(this._timeoutKodeLayanan);
      val = val.toUpperCase();
      Vue.set(o, p, val);
      Vue.set(this.kodeLayananContainer, index, val);

      if(val.match(/[^a-zA-Z0-9\-]+/) !== null) {
        this.tmpInputTarifData[index].error['kode_layanan'].error = false
        this.tmpInputTarifData[index].error['kode_layanan'].desc = 'Hanya bisa huruf, angka, dan -'
        return;
      } 

      if(val.length < 3) {
        this.tmpInputTarifData[index].error['kode_layanan'].error = false
        this.tmpInputTarifData[index].error['kode_layanan'].desc = 'Kode layanan minimal 3 karakter'
        return;
      }
      
      let isDuplicate = false;
      let needDbChecks = [];
      this.kodeLayananContainer.forEach((item, i) => {
        isDuplicate = false;
        this.kodeLayananContainer.forEach((item2, i2) => {
          if(i != i2) {
            if(item == item2) {
              this.tmpInputTarifData[i].error['kode_layanan'].error = false
              this.tmpInputTarifData[i].error['kode_layanan'].desc = 'Kode layanan tidak boleh sama'

              isDuplicate = true;
            }
          }
        })
        if(isDuplicate == false) {
          this.tmpInputTarifData[i].error['kode_layanan'].error = true
          this.tmpInputTarifData[i].error['kode_layanan'].desc = ''

          needDbChecks.push(i)
        }
      })

      if(needDbChecks.length > 0) {
        let newNeedDbChecks = [];
        needDbChecks.forEach(item => {
          let valDb = this.tmpInputTarifData[item].kode_layanan;
          if(this.kodeLayananExistsInDb.indexOf(valDb) > -1) {
            this.tmpInputTarifData[item].error["kode_layanan"].error = false;
            this.tmpInputTarifData[item].error["kode_layanan"].desc = "Kode layanan Sudah Ada";
          }
          else newNeedDbChecks.push(item);
        });
        needDbChecks = newNeedDbChecks;

        this._timeoutKodeLayanan = setTimeout(() => {
          needDbChecks.forEach(item => {
            axios
            .get(`${this.url_api}/layanan/kode/${this.tmpInputTarifData[item].kode_layanan}`)
            .then(response => {
              if (response.data.success == true) {
                this.tmpInputTarifData[item].error["kode_layanan"].error = false;
                this.tmpInputTarifData[item].error["kode_layanan"].desc = "Kode layanan Sudah Ada";
                this.kodeLayananExistsInDb.push(this.tmpInputTarifData[item].kode_layanan);
              }
            })
            .catch(error => {})
            .finally(() => {
              clearTimeout(this._timeoutKodeLayanan);
            });
          })
        }, 600)
      }
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
      if (tmpInputTarifData.length > 1) {
        const tmp = tmpInputTarifData
          .slice(0, index)
          .concat(tmpInputTarifData.slice(index + 1, tmpInputTarifData.length));
        this.tmpInputTarifData = tmp;
        // remap kodeLayananContainer
        this.kodeLayananContainer = tmp.map(item => {
          return item.kode_layanan;
        });
        this.namaLayananContainer = tmp.map(item => {
          return item.nama_layanan;
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