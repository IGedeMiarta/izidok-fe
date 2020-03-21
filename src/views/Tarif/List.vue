<template>
  <div>
    <page-title
      heading="Manajemen Tarif"
      :breadcrumb="[
        {
          label: 'Manajemen Tarif',
          link: '/tarif'
        },
        {
          label: 'List Tarif',
          active: true
        }
      ]"
      class="layout-gantung ninja-shadow"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <!-- <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-4" style="float:left;">
                <label for="kodetarif">Kode Layanan</label>
                <input type="text" class="form-control" id="kodetarif" v-model.lazy="kodeTarif" />
              </div>
              <div class="form-group col-md-6" style="float:left;">
                <label for="namalayanan">Nama Layanan</label>
                <input type="text" class="form-control" id="namalayanan" v-model.lazy="namaLayanan" />
              </div>
              <div class="form-group col-md-2" style="float:left;padding-top:30px;padding-left:0;">
                <b-button variant="primary" @click="fetchListTarif">CARI</b-button>
              </div>
            </div>
            <div class="col-md-3 no-padding">
              <div class="form-group col-md-12" style="padding-top: 30px; padding-left: 0px;">
                <b-button variant="info" class="float-right" :to="{
                        name: 'tarif-tambah'}">TAMBAH</b-button>
              </div>
            </div>
          </div> -->
          <div class="col-md-12 no-padding">
            <DataTableWrapper
              :perPage="perPage"
              :currentPage="currentPage"
              :callbackFunc="fetchListTarif"
              :customEntryOptions="{ f: 100 }"
              @valueChanged="handleValueChanged"
            >
              <template v-slot:right-header>
                <b-button
                  variant="primary"
                  class="text-uppercase align-self-end"
                  :to="{
                    name: 'tarif-tambah'
                  }"
                  >tambah tarif</b-button
                >
              </template>
              <b-table
                :items="tarifList"
                :fields="fieldList"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                thead-tr-class="izd-datatable"
                :no-local-sorting="true"
              >
                <template v-slot:head()="data">
                  {{ data.label }}
                  <b-input
                    size="sm"
                    class="mt-2 w-95"
                    v-if="data.field.searchable"
                    @input="searchValueChanged($event, data.field.key)"
                  />
                </template>

                <template v-slot:cell(tarif)="data">
                  {{ data.value }}
                </template>

                <template v-slot:cell(actions)="data">
                  <span
                    class="d-flex align-items-center justify-content-between"
                  >
                    <b-button
                      variant="success"
                      size="sm"
                      @click="editModal(data.item)"
                      ><font-awesome-icon icon="pencil-alt"
                    /></b-button>
                    <template v-if="data.item.priority !== 1">
                      <b-button
                        variant="danger"
                        size="sm"
                        @click="
                        removeTarif({
                          id: data.item.id,
                          nama_layanan: data.item.nama_layanan
                        })
                      "
                      ><font-awesome-icon icon="trash-alt"
                      /></b-button>
                    </template>
                  </span>
                </template>
              </b-table>
            </DataTableWrapper>
            <!-- <table class="table table-hover table-hover table-striped mb-5">
              <colgroup width="90px"></colgroup>
              <colgroup width="150px"></colgroup>
              <colgroup width="150px"></colgroup>
              <colgroup width="200px"></colgroup>
              <thead>
                <tr class="text-capitalize">
                  <th class="text-left pr-4">kode</th>
                  <th>nama layanan</th>
                  <th class="no-sort text-center">tarif layanan</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="rows == 0">
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <center>
                        <h4 class="text-center">Data Tidak Ada</h4>
                      </center>
                    </td>
                  </tr>
                </template>
                <tr v-for="data in tarifList" :key="data.id">
                  <td class="text-left pr-4">{{ data.kode_layanan }}</td>
                  <td id="dt_nm_layanan">{{ data.nama_layanan }}</td>
                  <td class="text-center">
                    {{
                      data.tarif
                        .toFixed()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                    }}
                  </td>
                  <td class="text-center">
                    <b-link
                      class="btn bg-kuning text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                      @click="editModal(data)"
                    >
                      <font-awesome-icon icon="pencil-alt" />
                    </b-link>

                    <b-link
                      class="btn bg-danger text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                      @click.prevent="
                        removeTarif({
                          id: data.id,
                          nama_layanan: data.nama_layanan
                        })
                      "
                    >
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL -->
    <b-modal
      ref="modal-edit"
      title="Edit Layanan"
      :hide-footer="true"
      size="lg"
      centered
      @hide="resetModal"
    >
      <div class="card shadow-none border-0">
        <div class="card-body">
          <form role="form">
            <div class="form-row">
              <template v-if="editData.priority !== 1">
                <div class="form-group col-md-4">
                  <label >Nama Layanan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nm_layanan"
                    v-model.trim="editData.nama_layanan"
                    @input="setNameLayanan($event.target.value)"
                    @keypress="onKeypressNamaLayanan"
                    :class="isError('nama_layanan')"
                  />
                  <template v-if="editData.nama_layanan === ''">
                    Nama layanan harus di isi
                  </template>
                  <template v-else-if="getErrorValidation('nama_layanan')">
                    <b-form-invalid-feedback
                      :force-show="true"
                      class="text-capitalize"
                    >
                      {{ getErrorValidation("nama_layanan") }}
                    </b-form-invalid-feedback>
                  </template>
                </div>
              </template>
              <template v-if="editData.priority === 1">
                <div class="form-group col-md-4">
                  <label >Nama Layanan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nm_layanan2"
                    v-model.trim="editData.nama_layanan"
                    @input="setNameLayanan($event.target.value)"
                    @keypress="onKeypressNamaLayanan"
                    disabled
                    :class="isError('nama_layanan')"
                  />
                  <template v-if="editData.nama_layanan === ''">
                    Nama layanan harus di isi
                  </template>
                  <template v-else-if="getErrorValidation('nama_layanan')">
                    <b-form-invalid-feedback
                      :force-show="true"
                      class="text-capitalize"
                    >
                      {{ getErrorValidation("nama_layanan") }}
                    </b-form-invalid-feedback>
                  </template>
                </div>
              </template>
              <div class="form-group col-md-3">
                <label >Kode Layanan</label>
                <input
                  type="text"
                  class="form-control"
                  maxlength="5"
                  v-model.trim="editData.kode_layanan"
                  @input="onInputCode($event)"
                  @keypress="onKeypressKodeLayanan"
                  :class="isError('kode_layanan')"
                />
                <template
                  v-if="
                    (editData.kode_layanan &&
                      editData.kode_layanan.trim() === '') ||
                      !editData.kode_layanan
                  "
                >
                  Kode layanan harus di isi
                </template>
                <template v-else-if="getErrorValidation('kode_layanan')">
                  <b-form-invalid-feedback
                    :force-show="true"
                    class="text-capitalize"
                  >
                    {{ getErrorValidation("kode_layanan") }}
                  </b-form-invalid-feedback>
                </template>
                <template v-if="this.checkDataKode == 1"> </template>
                <template
                  v-if="
                    this.checkDataKode == 2 &&
                      $v.kode_layanan.$params &&
                      $v.kode_layanan.$params.required
                  "
                >
                  <div class="error" style="font-size:13px;">
                    Kode Layanan Sudah Ada
                  </div>
                </template>
              </div>
              <div class="form-group col-md-3">
                <label >Tarif Layanan</label>
                <b-input-group append="Rp.">
                  <b-form-input
                    v-model.lazy="editData.tarif"
                    v-money="money"
                    validated="true"
                    maxlength="19"
                    class="text-right"
                  >
                  </b-form-input>
                </b-input-group>
              </div>
              <div class="form-group col-md-2" style="margin-top:30px;">
                <b-button
                  variant="primary"
                  class="float-right"
                  @click="updateTarif(editData)"
                  >Simpan
                </b-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import debounce from "lodash/debounce";
import { replace as rep, differenceWith as dw, isEqual as iE } from "lodash";

import {
  required,
  minLength,
  maxLength,
  sameAs,
  email,
  numeric
} from "vuelidate/lib/validators";

import {
  faArrowRight,
  faArrowUp,
  faTrashAlt,
  faSearch,
  faPencilAlt,
  faCopy
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { VMoney } from "v-money";
import accounting from "accounting";

library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    DataTableWrapper: () => import("../../components/DataTableWrapper")
  },
  directives: {
    money: VMoney
  },
  data() {
    return {
      money: {
        decimal: "",
        thousands: ",",
        prefix: "",
        suffix: " ",
        precision: 0
      },
      currentPage: 1,
      rows: 100,
      perPage: 10,
      n: 0,
      tarifList: [],
      namaLayanan: "",
      kodeList: [],
      nama_layanan: "",
      kode_layanan: "",
      tarif: "",
      kodeLayananBeforeEdit: "",
      kodeTarif: "",
      editmode: false,
      checkDataKode: 1,
      editData: {
        id: null,
        kode_layanan: null,
        nama_layanan: null,
        tarif: null,
        priority: null,
      },
      shallowCopyEditData: null,
      errors: [],
      fromPage: 0,
      toPage: 0,
      totalEntries: 0,
      sortBy: "",
      sortDesc: false,
      searchValue: [],
      validationError: Object()
    };
  },
  computed: {
    fieldList() {
      const {
        generateFieldList: g,
        setSearchableAndSortableFieldList: s
      } = this;
      return (
        [
          {
            key: "kode_layanan",
            label: "kode"
          },
          {
            key: "nama_layanan"
          },
          {
            key: "tarif",
            label: "tarif layanan",
            class: "tarif-pre-whitespace"
          },
          {
            key: "actions"
          }
        ]
        |> (v => s({ field: v }))
        |> (z => g({ field: z }))
      );
    }
  },
  watch: {
    currentPage() {
      this.fetchListTarif();
    },
    perPage() {
      this.fetchListTarif();
    },
    sortBy() {
      this.fetchListTarif();
    },
    sortDesc() {
      this.fetchListTarif();
    },
    searchValue: {
      handler: "fetchListTarif",
      deep: true
    }
  },
  validations: {
    editData: {
      kode_layanan: {
        required,
        maxLength: maxLength(5)
      },
      nama_layanan: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50)
      },
      tarif: {
        required,
        numeric,
        maxLength: maxLength(12)
      }
    }
  },
  mounted() {
    this.cekPaket();
  },
  methods: {
    async cekPaket() {
      try {
        const res = await axios.get(
          `${this.url_api}/cekPaket`
        );

        if(res.data.data.paket_id === 1) {
          var nm_paket = "Trial"
        }else if (res.data.data.paket_id === 2) {
          var nm_paket = "Starter"
        }else if (res.data.data.paket_id === 3) {
          var nm_paket = "Essential"
        }else {
          var nm_paket = "Premium"
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

            }
          });
        }
      } catch (err) {
        // console.log(err);
      }
    },
    resetModal() {
      const { validationError } = this;
      const x = Object.keys(validationError);
      x.map(item => {
        this.validationError[item] = null;
      });
    },
    isError(key) {
      if (key) {
        const { validationError } = this;
        const { [key]: tmp } = validationError;

        return (
          (tmp && (!tmp ? { "is-valid": true } : { "is-invalid": true })) ||
          null
        );
      } else {
        return null;
      }
    },
    getErrorValidation(key) {
      return this.validationError[key];
    },
    handleValueChanged({ perPage, currentPage }) {
      perPage && (perPage |> (_ => (this.perPage = _)));
      currentPage && (currentPage |> (_ => (this.currentPage = _)));
    },
    searchValueChanged: debounce(function(val, key) {
      const { searchValue } = this;

      const z = searchValue.filter(item => item.key !== key);
      this.searchValue = [
        ...z,
        {
          key,
          value: val
        }
      ];
    }, 500),
    onKeypressNamaLayanan($event) {
      const {
        key,
        target: { value }
      } = $event;
      var evt = $event;
      evt = evt ? evt : window.event;
      if (
        /[^a-zA-Z0-9\-\ \(\)\/\.]/.test(key) ||
        (value && value.trim().length >= 50)
      ) {
        evt.preventDefault();
      } else {
        return evt;
      }
    },
    onKeypressKodeLayanan($event) {
      const {
        key,
        target: { value }
      } = $event;
      var evt = $event;
      evt = evt ? evt : window.event;
      if (/[^a-zA-Z0-9\-]/.test(key) || (value && value.trim().length >= 20)) {
        evt.preventDefault();
      } else {
        return evt;
      }
    },
    resetValidationError(key) {
      if (key) {
        const x = (this.validationError[key] = null);
      }
    },
    async validateNamaLayanan(val) {
      const key = "nama_layanan";
      try {
        const res = await axios.get(`${this.url_api}/layanan/nama/${val}`);
        const { status, data } = res.data;
        if (data && data.length) {
          this.validationError = {
            ...this.validationError,
            [key]: "nama layanan tidak boleh sama"
          };
        } else {
          this.resetValidationError(key);
        }
      } catch (err) {
        console.log(err);
        this.resetValidationError(key);
      }
    },
    async validateKodeLayanan(val) {
      const key = "kode_layanan";
      try {
        const res = await axios.get(`${this.url_api}/layanan/kode/${val}`);
        const { status, data } = res.data;
        if (data && data.length) {
          this.validationError = {
            ...this.validationError,
            [key]: "kode layanan tidak boleh sama"
          };
        } else {
          this.resetValidationError(key);
        }
      } catch (err) {
        console.log(err);
        this.resetValidationError(key);
      }
    },
    onInputCode: debounce(function($event) {
      const {
        target: { value }
      } = $event;
      const key = "kode_layanan";
      const {
        shallowCopyEditData: { [key]: a }
      } = this;

      this.editData.kode_layanan = value.toUpperCase();
      // this.checkDataKode = 1;

      if (value && value !== a) {
        this.validateKodeLayanan(value);
      } else {
        this.resetValidationError(key);
      }
    }, 600),
    setNameLayanan: debounce(function(value) {
      const key = "nama_layanan";
      const {
        shallowCopyEditData: { [key]: a }
      } = this;
      this[key] = value;
      if (value && value !== a) {
        this.validateNamaLayanan(value);
      } else {
        this.resetValidationError(key);
      }
    }, 600),
    removeTarif({ id, nama_layanan = null } = {}) {
      this.$swal({
        text: `Apakah Anda yakin ingin menghapus data tarif ${nama_layanan}?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("batal"),
        confirmButtonText: startCase("ya")
      }).then(async res => {
        if (res.value) {
          await this.deleteTarif(id);
        }
      });
    },
    editModal(data) {
      const x = {
        id: data.id,
        priority: data.priority,
        kode_layanan: data.kode_layanan,
        nama_layanan: data.nama_layanan,
        tarif: data.tarif
      };
      this.shallowCopyEditData = Object.assign({}, x);
      this.editData = x;
      this.kodeLayananBeforeEdit = data.kode_layanan;
      this.checkDataKode = 1;
      this.$refs["modal-edit"].show();
    },
    async updateTarif(dataEdit) {
      const { shallowCopyEditData, validationError } = this;
      const { tarif: scTarif } = shallowCopyEditData;
      const { nama_layanan, tarif } = dataEdit;

      if (
        validationError &&
        Object.keys(validationError).every(val => !validationError[val])
      ) {
        const conv = val => rep(val && val.trim(), /[^0-9]/gi, "");
        const tmp = {
          ...dataEdit,
          tarif: conv(tarif)
        };
        const x = {
          ...shallowCopyEditData,
          tarif: conv(scTarif)
        };
        let z = [];
        const v = Object.keys(tmp).map(val => {
          if (x[val] !== tmp[val]) {
            z = [...z, val];
          }
        });
        if (z.length > 0) {
          this.$swal({
            type: "question",
            html: `<p>Apakah Anda yakin untuk mengubah ${z
              .map(val => startCase(val))
              .join(", ")}</p> <p>"${startCase(nama_layanan)}"</p>`,
            showCancelButton: true
          }).then(({ value }) => value && this.updateProsesTarif(dataEdit));
        } else {
          this.updateProsesTarif(dataEdit);
        }
      }
      // console.log(dw([tmp], [x], iE));
      // console.log(tmp);
      // var checkError = this.$v.nama_layanan.$error;
      // var checkErrorKodeLayanan = this.$v.kode_layanan.$error;
      // var { checkDataKode } = this;
      // // jika kode layanan ada yang sama
      // if (this.kodeLayananBeforeEdit == dataEdit.kode_layanan) {
      //   if (
      //     checkError == false &&
      //     dataEdit.namaLayanan !== " " &&
      //     dataEdit.namaLayanan !== ""
      //   ) {
      //     checkDataKode = 1;
      //     this.updateProsesTarif(dataEdit);
      //   }
      // } else {
      //   const { updateProsesTarif } = this;
      //   let listKode = axios
      //     .get(`${this.url_api}/layanan/${dataEdit.kode_layanan}/kode`)
      //     .then(response => {
      //       checkDataKode = 2;
      //     })
      //     .catch(error => {
      //       //kalo ada yang sama
      //       // kalo true layanan tidak ada maka di buat
      //       //kalo ada data
      //       if (error.response.data) {
      //         if (
      //           (error.response.data.success == false &&
      //             dataEdit.namaLayanan == " ") ||
      //           dataEdit.namaLayanan == ""
      //         ) {
      //           checkDataKode = 1;
      //         } else if (checkErrorKodeLayanan == false) {
      //           // checkErrorKodeLayanan = true;
      //           if (
      //             dataEdit.kode_layanan == "" ||
      //             dataEdit.kode_layanan == " "
      //           ) {
      //             this.$v.kode_layanan.required = true;
      //           } else {
      //             // kalau 2 kode layanan sudah ada
      //             checkDataKode = 1;
      //             this.updateProsesTarif(dataEdit);
      //           }
      //         } else if (
      //           error.response.data.success == false &&
      //           checkDataKode == 1
      //         ) {
      //           checkErrorKodeLayanan = true;
      //           checkDataKode = 1;
      //         } else {
      //           checkDataKode = 1;
      //           this.updateProsesTarif(dataEdit);
      //         }
      //       }
      //     })
      //     .finally(() => {
      //       this.checkDataKode = checkDataKode;
      //     });
      // }
    },
    async updateProsesTarif(dataEdit) {
      try {
        dataEdit.tarif = parseInt(dataEdit.tarif.replace(/\D/g, ""));
        const res = await axios.put(
          `${this.url_api}/layanan/${dataEdit.id}`,
          dataEdit
        );
        const { status, data } = res.data;
      } catch (err) {
        // alert(err);
      } finally {
        this.$refs["modal-edit"].hide();
        this.$swal({
          title: "Edit Tarif Berhasil",
          text: "Data berhasil tersimpan",
          icon: "success",
          confirmButtonText: startCase("ya")
        });
        this.fetchListTarif();
      }
    },
    async deleteTarif(id) {
      try {
        const res = await axios.delete(`${this.url_api}/layanan/${id}`);
        const { status, data } = res.data;
        console.log(res.data)
        if (status) {
          this.$swal({
            type: "success",
            title: startCase("deleted"),
            text: startCase("Tarif berhasil di hapus")
          });
          this.fetchListTarif();
        }
        else if(res.data.message === "Data tarif minimal 2"){
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("Tidak dapat menghapus tarif & layanan jika sudah mencapai batas minimal 2 layanan!")
          });
        }else {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("Tarif gagal di hapus")
          });
        }
      } catch (err) {
        this.$swal({
          type: "error",
          title: startCase("gagal"),
          text: startCase("Tarif gagal di hapus")
        });
      }
    },
    determineParameter() {
      const { searchValue, sortBy, sortDesc } = this;
      let v = "";
      searchValue.map(item => {
        const x =
          (false && item.key === "kode_layanan" && "nomor_layanan") || item.key;
        v += `&${x}=${item.value}`;
      });

      if (sortBy) {
        v += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
      }

      return v;
    },
    async fetchListTarif() {
      try {
        const res = await axios.get(
          `${this.url_api}/layanan?limit=${this.perPage}&page=${
            this.currentPage
          }${this.determineParameter()}`
        );

        const { success, data } = res.data;

        if (success) {
          const { layanan: tarifData, total } = data;
          const {
            data: listTarif,
            total: totalEntries,
            to: toPage,
            from: fromPage
          } = tarifData;
          const x =
            listTarif.map(item => item.tarif)
            |> (_ => accounting.formatColumn(_, "Rp. ", 0, "."));
          this.tarifList = listTarif.map((item, key) => ({
            ...item,
            tarif: x[key]
          }));
          this.rows = tarifData.total;
          return {
            ...this,
            totalEntries,
            toPage,
            fromPage
          };
        }
      } catch (err) {
        // console.log(err);
      }
    }
  }
};
</script>

<style scoped lang="css">
.bg-kuning {
  background: #f7fc6b;
}

#kodetarif {
  text-transform: uppercase;
}

#nm_layanan,
#dt_nm_layanan {
  text-transform: capitalize;
}

#nm_layanan2,
#dt_nm_layanan {
  text-transform: capitalize;
}

.modal fade show {
  opacity: 0.9;
}

.error {
  color: red;
}

.bg-kuning,
.bg-danger,
.bg-first {
  color: black !important;
}

.no-padding {
  padding: 0 !important;
}

.page-item.active a {
  background: #3b86ff;
  border: none !important;
}

.layout-gantung {
  border-radius: 0px 0px 10px 10px;
  max-height: 250px;
}

.ninja-shadow {
  box-shadow: 0px 8px 15px 0px lightgrey;
}

table thead tr.text-capitalize th {
  background: #dcecec;
}

table tbody tr.ganjil td {
  background: #f2f5f5;
}

table tbody tr.genap td {
  background: #e5ebea;
}
</style>
