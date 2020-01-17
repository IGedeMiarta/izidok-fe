<template>
  <div>
    <page-title heading="Manajemen Tarif" :breadcrumb="[
        {
          label : 'Manajemen Tarif',
          link : '/tarif'
        },
        {
          label: 'List Tarif',
          active: true
        }
      ]" class="layout-gantung ninja-shadow" />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-4" style="float:left;">
                <label for="kodetarif">Kode Tarif</label>
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
                <b-button variant="info" class="float-right">TAMBAH</b-button>
              </div>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-hover table-hover table-striped mb-5">
              <colgroup width="200px"></colgroup>
              <colgroup width="150px"></colgroup>
              <colgroup width="150px"></colgroup>
              <colgroup width="200px"></colgroup>
              <thead>
                <tr class="text-capitalize">
                  <th class="text-right pr-4">kode</th>
                  <th>nama layanan</th>
                  <th class="no-sort text-center">tarif layanan</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data) in tarifList" :key="data.id">
                  <td class="text-right pr-4">{{ data.kode_layanan }}</td>
                  <td>{{data.nama_layanan}}</td>
                  <td class="text-center">{{ data.tarif.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")  }}</td>
                  <td class="text-center">
                    <b-link class="btn bg-kuning text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                      @click="editModal(data)">
                      <font-awesome-icon icon="pencil-alt" />
                    </b-link>

                    <b-link class="btn bg-danger text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" @click.prevent="
                        removeTarif({
                          id: data.id,
                          tarif: data.tarif
                        })
                      ">
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- MODAL -->
            <b-modal ref='modal-edit' :hide-footer="true" :hide-header="true" size="lg" centered>
              <div class="card shadow-none border-0">
                <div class="card-header">
                  <div class="text-muted text-center">
                    <h3 style="color:#000;float:left">Edit Layanan</h3>
                  </div>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputNama">Nama Layanan</label>
                        <input type="text" class="form-control" v-model="editData.nama_layanan">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputKode">Kode Layanan</label>
                        <input type="text" class="form-control" v-model="editData.kode_layanan">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputLayanan">Tarif Layanan</label>
                        
                        <b-form-input
                          v-model.lazy="editData.tarif"
                          v-money="money"
                          maxlength="12"
                        ></b-form-input>
                      </div>
                      <div class="form-group col-md-2 " style="margin-top:30px;">
                        <b-button variant="primary" class="float-right" @click="updateTarif(editData)">Simpan
                        </b-button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
      <div class="col-md-12 bg-neutral-second ninja-shadow" style="border-radius:10px;">
        <div class="p-3">
          <b-pagination class="d-flex justify-content-center mt-4" v-model="currentPage" :total-rows="rows"
            :per-page="perPage"></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import startCase from "lodash/startCase";
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";

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
    faPencilAlt
  } from "@fortawesome/free-solid-svg-icons";

  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";

  import {
    VMoney
  } from 'v-money';

  library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

  export default {
    components: {
      "font-awesome-icon": FontAwesomeIcon
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
          suffix: "",
          precision: 0
        },
        currentPage: 1,
        rows: 100,
        perPage: 10,
        n: 0,
        tarifList: [],
        namaLayanan: "",
        kodeTarif: "",
        editmode: false,
        editData: {
          id: null,
          kode_layanan: null,
          nama_layanan: null,
          tarif: null
        },
        errors: [],
      };
    },
    mounted() {
      this.fetchListTarif();
    },
    watch: {
      currentPage() {
        this.fetchListTarif();
      }
    },
    validations: {
      formData: {
        kode_layanan: {
          required,
          maxLength: maxLength(5)
        },
        nama_layanan: {
          required,
          maxLength: maxLength(30)
        },
        tarif: {
          required,
          numeric,
          maxLength: maxLength(12)
        }
      }
    },
    methods: {
      removeTarif({
        id,
        tarif = null
      } = {}) {
        this.$swal({
          text: `Apakah anda yakin ingin menghapus data tarif ${tarif}?`,
          type: "question",
          showCancelButton: true,
          cancelButtonText: startCase("batal"),
          confirmButtonText: startCase("ya")
        }).then(async res => {
          if (res.value) {
            // console.log(res);
            await this.deleteTarif(id);
          }
        });
      },
      editModal(data) {
        this.$refs['modal-edit'].show();

        this.editData = {
          id: data.id,
          kode_layanan: data.kode_layanan,
          nama_layanan: data.nama_layanan,
          tarif: data.tarif
        }
        var sidata = this.tarifList;
        // Object.keys(sidata).forEach(function(key) {
        //   console.log(sidata[key]);
        // });

        // sidata.forEach(function (item) {
        //   console.log(item);
        // });

        // if(data.kode_layanan ==  )
      },

      async updateTarif(dataEdit) {
        try {
          dataEdit.tarif = parseInt(dataEdit.tarif.replace(/\D/g, ""));
          const res = await axios.put(
            `${this.url_api}/layanan/${dataEdit.id}`,
            dataEdit
          );
          const {
            status,
            data
          } = res.data;

          this.$swal({
            title: 'Edit Tarif Berhasil',
            text: 'Data berhasil tersimpan',
            icon: 'success',
            confirmButtonText: startCase("ya")
          });

          this.$refs['modal-edit'].hide();

          this.fetchListTarif();

        } catch (err) {
          alert(err);
        } finally {}
      },
      async deleteTarif(id) {
        try {
          const res = await axios.delete(`${this.url_api}/layanan/${id}`);
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.$swal({
              type: "success",
              title: startCase("deleted"),
              text: startCase("Tarif berhasil di hapus")
            });
            this.$router.push('tarif/list');
          } else {
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
      async fetchListTarif() {
        try {
          const res = await axios.get(
            `${this.url_api}/layanan?limit=10&page=${this.currentPage}&nama_layanan=${this.namaLayanan}&kode_layanan=${this.kodeTarif}`
          );

          const {
            success,
            data
          } = res.data;

          if (success) {
            const {
              layanan: tarifData,
              total
            } = data;
            const {
              data: listTarif
            } = tarifData;
            this.tarifList = [...listTarif];
            this.rows = tarifData.total;
          }
        } catch (err) {
          // console.log(err);
        }
      },
    }
  };
</script>

<style scoped lang="css">
  .bg-kuning {
    background: #f7fc6b;
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
    background: #DCECEC;
  }

  table tbody tr.ganjil td {
    background: #F2F5F5;
  }

  table tbody tr.genap td {
    background: #E5EBEA;
  }
</style>