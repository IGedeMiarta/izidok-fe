<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title heading="Input Tarif" subheading="Masukkan tarif berikut untuk dapat melakukan penggunaan izidok." />
      <div class="container">
        <div class="card card-box mb-5">
          <div class="card-body">
            <b-row class="d-flex align-items-center">
              <b-col cols="12">
                <strong>Contoh :</strong>
                <b-row class="d-flex align-items-center mb-4">
                  <b-col cols="4" class="text-capitalize">nama layanan</b-col>
                  <b-col cols="3" class="text-capitalize">kode layanan</b-col>
                  <b-col cols="3" class="text-capitalize">tarif layanan</b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="d-flex align-items-center mb-3">
              <b-col sm="12">
                <b-row class="d-flex align-items-center mb-4" style="margin-top: -10px;">

                  <b-col cols="4" class="text-capitalize">
                    <b-form-input value="Pemeriksaan EKG" disabled>
                    </b-form-input>
                  </b-col>
                  <b-col cols="3" class="text-capitalize">
                    <b-form-input value="A001" disabled>
                    </b-form-input>
                  </b-col>
                  <b-col cols="3" class="text-capitalize">
                    <b-form-input value="Rp. 75,000" class=" text-right" disabled />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-form @submit.prevent="submitInputTarif">
              <b-row class="d-flex align-items-center">
                <b-col sm="12">
                  <b-row class="d-flex align-items-center mb-4">
                    <b-col sm="4" class="text-capitalize">nama layanan</b-col>
                    <b-col sm="3" class="text-capitalize">kode layanan</b-col>
                    <b-col sm="3" class="text-capitalize">tarif layanan</b-col>
                  </b-row>
                  <b-row class="d-flex align-items-center mb-3" v-for="(inputTarif, index) in tmpInputTarifData"
                    :key="inputTarif.id">
                    <b-col sm="4">
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
                          :placeholder="placeholderInput('nama_layanan')" :disabled="index <= 1" maxlength="50">
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
                    <b-col sm="3">
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
                    <b-col sm="2" v-if="index > 1">
                      <b-button variant="danger" style="padding: .5rem .8rem; border-radius: 100%"
                        @click="removeInputTarifData(index)">
                        <font-awesome-icon icon="minus" />
                      </b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center">
                <b-col sm="10">
                  <div class="d-flex justify-content-center">
                    <b-button variant="first" style="padding: .5rem .8rem; border-radius: 100%"
                      @click="addInputTarifData">
                      <font-awesome-icon icon="plus" />
                    </b-button>
                  </div>
                </b-col>
                <b-col sm="2">
                  <b-button class="text-capitalize" type="submit" variant="primary">simpan</b-button>
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
  import {
    mapMutations,
    mapGetters
  } from "vuex";
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
  } from "v-money";
  import debounce from "lodash/debounce";
  import store from '@/store'
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
      tmpInputTarifData: [{
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
      namaLayananContainer: ["registrasi awal", "konsultasi dokter"],
      kodeLayananContainer: [],
      errorKodeLayanan: null,
      errorsKodeLayanan: [],
      kodeLayananExistsInDb: [],
      namaLayananExistsInDb: [],
    }),
    // beforeRouteEnter(to, from, next) {
    //   if (store.getters.isFirstLogin) {
    //     next();
    //   } else {
    //     next("/");
    //   }
    // },
    computed: {
      ...mapGetters(["getKlinikId"])
    },
    mounted() {
      this.tmpInputTarifData = this.setTmpInputTarifData();
    },
    methods: {
      ...mapMutations({
        collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
        setInitPage: "sidebar/SET_INITIALIZATION_PAGE",
        setUserFirstLogin: "SET_USER_FIRST_LOGIN"
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
      errorState({
        label,
        index
      }) {
        const {
          tmpInputTarifData
        } = this;
        if (
          tmpInputTarifData[index].error &&
          tmpInputTarifData[index].error[label]
        ) {
          return tmpInputTarifData[index].error[label].error;
        } else {
          return null;
        }
      },
      errorDesc({
        label,
        index
      }) {
        const {
          tmpInputTarifData
        } = this;
        if (
          tmpInputTarifData[index].error &&
          tmpInputTarifData[index].error[label]
        ) {
          return tmpInputTarifData[index].error[label].desc;
        }
      },
      onKeyupTarif($event, index) {
        const {
          tmpInputTarifData
        } = this;

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
      validateInput({
        label,
        $event
      }) {
        return {
          error: ($event && true) || false,
          desc: (!$event && "kolom harus diisi") || ""
        };
      },
      validateAll() {
        const valItems = ['kode_layanan', 'nama_layanan', 'tarif_layanan'];
        this.tmpInputTarifData.forEach(item => {
          valItems.forEach(valItem => {
            if (item.error[valItem].error == false) return;

            if (!item[valItem]) {
              item.error[valItem].error = false;
              item.error[valItem].desc = valItem.replace("_", " ") + " harus diisi";
            } else {
              item.error[valItem].error = true;
              item.error[valItem].desc = "";
            }
          })
        })
      },
      submitInputTarif() {
        const {
          tmpInputTarifData,
          validateAll
        } = this;
        this.$nextTick(() => {
          validateAll();
          const z = tmpInputTarifData.map(item => item.error);
          const y = z.map(x => {
            const v = Object.keys(x).slice(1);
            const o = v.every(z => x[z].error);
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
        const {
          constructPostData
        } = this;
        try {
          const res = await axios.post(`${this.url_api}/layanan`, {
            arr: constructPostData()
          });
          const {
            status,
            data
          } = res.data;
          this.beingSubmit = true;
          this.$swal({
            title: "Tambah Data Berhasil",
            text: "Data berhasil tersimpan",
            icon: "success",
            confirmButtonText: startCase("ya")
          });
          this.setInitPage(false);
          this.setUserFirstLogin(0);
          this.$router.push({
            path: "/"
          });
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
        const {
          tmpInputTarifData
        } = this;
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
      onChangeValue({
        index,
        label,
        $event
      }) {
        const {
          tmpInputTarifData,
          validateInput
        } = this;
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
        let val = valRaw.toLowerCase().trim()
        Vue.set(o, p, valRaw);
        Vue.set(this.namaLayananContainer, index, val);

        if (!val) {
          this.tmpInputTarifData[index].error['nama_layanan'].error = false;
          this.tmpInputTarifData[index].error['nama_layanan'].desc = 'Nama Layanan harus diisi';
          return;
        }

        if (val.match(/[^a-zA-Z0-9\-\ \(\)\/\.]+/) !== null) {
          this.tmpInputTarifData[index].error['nama_layanan'].error = false;
          this.tmpInputTarifData[index].error['nama_layanan'].desc = 'Hanya bisa huruf, spasi, angka, -, (), /, dan .';
          return;
        }

        this.verifyExistsAndDuplicateLayanan("nama");
      },
      onInputKode(val, index, o, p) {
        val = val.toUpperCase();
        Vue.set(o, p, val);
        Vue.set(this.kodeLayananContainer, index, val);

        if (val.match(/[^a-zA-Z0-9\-]+/) !== null) {
          this.tmpInputTarifData[index].error['kode_layanan'].error = false
          this.tmpInputTarifData[index].error['kode_layanan'].desc = 'Hanya bisa huruf, angka, dan -'
          return;
        }

        if (val.length < 3) {
          this.tmpInputTarifData[index].error['kode_layanan'].error = false
          this.tmpInputTarifData[index].error['kode_layanan'].desc = 'Kode layanan minimal 3 karakter'
          return;
        }

        this.verifyExistsAndDuplicateLayanan("kode");
      },
      verifyExistsAndDuplicateLayanan(by = "kode") {
        let isDuplicate = false;
        let needDbChecks = [];
        this[`${by}LayananContainer`].forEach((item, i) => {
          if (by == "nama" && i <= 1) return;
          isDuplicate = false;
          this[`${by}LayananContainer`].forEach((item2, i2) => {
            if (i != i2) {
              if (item == item2) {
                this.tmpInputTarifData[i].error[`${by}_layanan`].error = false
                this.tmpInputTarifData[i].error[`${by}_layanan`].desc =
                  `${startCase(by)} layanan tidak boleh sama`

                isDuplicate = true;
              }
            }
          })
          if (isDuplicate == false) {
            this.tmpInputTarifData[i].error[`${by}_layanan`].error = true
            this.tmpInputTarifData[i].error[`${by}_layanan`].desc = ''

            needDbChecks.push(i)
          }
        })

        if (needDbChecks.length > 0) {
          let newNeedDbChecks = [];
          needDbChecks.forEach(item => {
            let valDb = this.tmpInputTarifData[item][`${by}_layanan`];
            if (this[`${by}LayananExistsInDb`].indexOf(valDb) > -1) {
              this.tmpInputTarifData[item].error[`${by}_layanan`].error = false;
              this.tmpInputTarifData[item].error[`${by}_layanan`].desc = `${startCase(by)} layanan Sudah Ada`;
            } else newNeedDbChecks.push(item);
          });
          needDbChecks = newNeedDbChecks;

          if (this[`_timeout${startCase(by)}Layanan`]) clearTimeout(this[`_timeout${startCase(by)}Layanan`]);
          this[`_timeout${startCase(by)}Layanan`] = setTimeout(() => {
            needDbChecks.forEach(item => {
              axios
                .get(`${this.url_api}/layanan/${by}/${this.tmpInputTarifData[item][`${by}_layanan`]}`)
                .then(response => {
                  if (response.data.success == true) {
                    this.tmpInputTarifData[item].error[`${by}_layanan`].error = false;
                    this.tmpInputTarifData[item].error[`${by}_layanan`].desc =
                      `${startCase(by)} layanan Sudah Ada`;
                    this[`${by}LayananExistsInDb`].push(this.tmpInputTarifData[item][`${by}_layanan`]);
                  }
                })
                .catch(error => {})
                .finally(() => {
                  clearTimeout(this[`_timeout${startCase(by)}Layanan`]);
                });
            })
          }, 600)
        }
      },
      addInputTarifData() {
        const {
          tmpInputTarifData,
          validateAll,
          generateErrorObj
        } = this;
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
        const {
          tmpInputTarifData
        } = this;
        if (tmpInputTarifData.length > 2) {
          const tmpExistsInDb = {
            kode_layanan: tmpInputTarifData[index].kode_layanan,
            nama_layanan: tmpInputTarifData[index].nama_layanan
          }
          const tmp = tmpInputTarifData
            .slice(0, index)
            .concat(tmpInputTarifData.slice(index + 1, tmpInputTarifData.length));
          this.tmpInputTarifData = tmp;
          // remap kodeLayananContainer
          this.kodeLayananContainer = tmp.map(item => item.kode_layanan);
          this.namaLayananContainer = tmp.map(item => item.nama_layanan);

          if (tmpExistsInDb.kode_layanan)
            this.kodeLayananExistsInDb
            .splice(this.kodeLayananExistsInDb.indexOf(tmpExistsInDb.kode_layanan), 1)

          if (tmpExistsInDb.nama_layanan)
            this.namaLayananExistsInDb
            .splice(this.namaLayananExistsInDb.indexOf(tmpExistsInDb.nama_layanan), 1)

          this.verifyExistsAndDuplicateLayanan("kode")
          this.verifyExistsAndDuplicateLayanan("nama")
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