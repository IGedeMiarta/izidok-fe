<template>
  <div>
    <page-title heading="Manajemen Pasien" :breadcrumb="[
        {
          label: 'Manajemen Pasien',
          link: '/pasien'
        },
        {
          label: 'List Pasien',
          active: true
        }
      ]" />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h3>Manajemen Pasien</h3>
            <!--  <small>Custom</small>
              <b>Example widget with table inside.</b> -->
          </div>
        </div>
        <div class="card-body">
          <!-- <div class="row no-padding mb-3">
            <div class="col-md-9 ">
              <b-row>
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Nama Pasien</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    v-model.lazy="namaPasien"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputNoRekamMedisCari">No. Rekam Medis</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputNoRekamMedisCari"
                    v-model.lazy="noRekamMedis"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label>Tanggal Lahir</label>
                  <Datetime
                    input-class="form-control"
                    zone="Asia/Jakarta"
                    format="d LLL yyyy"
                    v-model="tanggalLahir"
                  />
                </div>
              </b-row>
            </div>
            <div class="col-md-3 d-flex align-items-end justify-content-center">
              <b-row>
                <b-col>
                  <div class="form-group">
                    <b-button variant="primary" @click="fetchListPasien"
                      >CARI</b-button
                    >
                  </div>
                </b-col>
                <b-col>
                  <div class="form-group">
                    <b-button
                      variant="first"
                      :to="{
                        name: 'pasien-tambah'
                      }"
                      >TAMBAH</b-button
                    >
                  </div>
                </b-col>
              </b-row>
            </div>
          </div> -->
          <div class="col-md-12 no-padding">
            <!-- <table class="table table-bordered table-hover table-hover mb-5">
              <thead>
                <tr class="text-capitalize">
                  <th>no</th>
                  <th>nama pasien</th>
                  <th>no. rekam medis</th>
                  <th>jenis kelamin</th>
                  <th>tanggal lahir</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in pasienList" :key="data.id">
                  <td>{{ (currentPage - 1) * perPage + index + 1 }}</td>
                  <td>{{ data.nama }}</td>
                  <td>{{ data.nomor_rekam_medis }}</td>
                  <td>{{ jenisKelamin(data.jenis_kelamin) }}</td>
                  <td>{{ formatedDate(data.tanggal_lahir) }}</td>
                  <td class="text-center">
                    <b-link
                      @click.prevent="
                        editPasien({
                          id: data.id
                        })
                      "
                      class="btn bg-kuning font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="pencil-alt" />
                    </b-link>
                    <b-link
                      @click.prevent="
                        removePasien({
                          id: data.id,
                          nama: data.nama
                        })
                      "
                      class="btn bg-danger font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                    <b-link
                      @click.prevent="
                        detailPasien({
                          id: data.id
                        })
                      "
                      class="btn bg-first font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="search" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table> -->
            <!-- <CustomDataTable :items="pasienList" :fields="fieldList">
              <template v-slot:cell(jenis_kelamin)="data">
                {{ jenisKelamin(data.value) }}
              </template>
            </CustomDataTable> -->
            <b-container class="mb-4">
              <b-row>
                <b-col class="pl-0">
                  <div class="d-flex text-capitalize align-items-center">
                    <span>show</span>
                    <b-form-select :options="entriesOptions" class="w-25 mx-2" v-model="perPage"></b-form-select>
                    <span>entries</span>
                  </div>
                </b-col>
                <b-col class="pr-0">
                  <div class="d-flex justify-content-end">
                    <b-button variant="primary" class="text-uppercase align-self-end" :to="{
                        name: 'pasien-tambah'
                      }">tambah pasien</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            <b-table :items="pasienList" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
              thead-tr-class="kntl" :no-local-sorting="true">
              <template v-slot:head()="data">
                {{ data.label }}
                <b-input size="sm" class="mt-2 w-95" v-if="data.field.searchable"
                  @input="searchValueChanged($event, data.field.key)" />
              </template>

              <template v-slot:cell(jenis_kelamin)="data">
                {{ jenisKelamin(data.value) }}
              </template>

              <template v-slot:cell(actions)="data">
                <span>
                  <b-dropdown id="dropdown-1" class="m-md-2 text-capitalize" variant="primary" size="sm" right>
                    <template v-slot:button-content>
                      <font-awesome-icon icon="copy" />
                    </template>
                    <b-dropdown-item @click="
                        editPasien({
                          id: data.item.id
                        })
                      ">edit data pasien</b-dropdown-item>

                    <b-dropdown-item @click="
                        detailPasien({
                          id: data.item.id
                        })
                      ">view detail pasien</b-dropdown-item>
                    <template v-if="isOperator == false">
                      <b-dropdown-item @click="
                        rekamMedis({
                          pasien_id: data.item.id,
                          klinik_id: data.item.klinik_id
                        })
                      ">lihat riwayat rekam medis</b-dropdown-item>
                      </template>
                    <b-dropdown-item @click="
                        removePasien({
                          id: data.item.id,
                          nama: data.item.nama
                        })
                      ">hapus data pasien</b-dropdown-item>
                  </b-dropdown>
                </span>
              </template>
            </b-table>
            <div class="d-flex align-items-center">
              <span class="px-2">Display {{ fromPage }} to {{ toPage }} of
                {{ totalEntries }} entries</span>
              <b-pagination class="mt-4 d-flex justify-content-center" v-model="currentPage" :total-rows="rows"
                :per-page="perPage" style="margin-left: 10rem"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import startCase from "lodash/startCase";
  import debounce from "lodash/debounce";
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowRight,
    faArrowUp,
    faTrashAlt,
    faSearch,
    faPencilAlt,
    faCopy
  } from "@fortawesome/free-solid-svg-icons";
  import moment from "moment";
  // import { Datetime } from "vue-datetime";
  import "vue-datetime/dist/vue-datetime.css";

  import {
    DateTime as LuxonDateTime
  } from "luxon";

  library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt, faCopy);

  export default {
    components: {
      // CustomDataTable: () => import("../../components/CustomDataTable")
      // Datetime
    },
    data() {
      return {
        sortBy: "",
        sortDesc: false,
        currentPage: 1,
        rows: 0,
        fromPage: 0,
        toPage: 0,
        perPage: 10,
        pasienList: [],
        namaPasien: "",
        isOperator : '',
        noRekamMedis: "",
        tanggalLahir: "",
        searchValue: [],
        totalEntries: 0
        // items: [
        //   {
        //     isActive: true,
        //     age: 40,
        //     first_name: "Dickerson",
        //     last_name: "Macdonald"
        //   },
        //   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        //   { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        //   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
        // ]
      };
    },
    mounted() {
      this.fetchListPasien();
      if(!this.isDoctor){
        this.isOperator = true;
      } else {
        this.isOperator = false;
      }
    },
    watch: {
      currentPage() {
        this.fetchListPasien();
      },
      perPage() {
        this.fetchListPasien();
      },
      sortBy() {
        this.fetchListPasien();
      },
      sortDesc() {
        this.fetchListPasien();
      },
      searchValue: {
        handler: "fetchListPasien",
        deep: true
      }
    },
    computed: {
      ...mapGetters({
        isDoctor: "doctorRole"
      }),
      entriesOptions() {
        return [5, 10, 25, 50, 100].map(item => ({
          value: item,
          text: item
        }));
      },
      fieldList() {
        const r = val => Boolean(/(no|actions)\b/gi.test(val) ? !1 : 1);
        const l = val => (val.label ? val.label : val.key.split("_").join(" "));
        const t = [{
            key: "no"
          },
          {
            key: "nomor_rekam_medis"
          },
          {
            key: "nama",
            label: "nama_pasien"
          },
          {
            key: "jenis_kelamin"
          },
          {
            key: "nomor_hp"
          },
          {
            key: "actions"
          }
        ];
        
        return t.map(item => ({
          key: (item.key && item.key) || item,
          label: startCase(l(item)),
          sortable: r(item.key),
          searchable: r(item.key)
        }));
        // return (
        //   (!this.isDoctor && t.filter(item => item.key !== "actions")) ||
        //   t
        // ).map(item => ({
        //   key: (item.key && item.key) || item,
        //   label: startCase(l(item)),
        //   sortable: r(item.key),
        //   searchable: r(item.key)
        // }));
      }
    },
    methods: {
      searchValueChanged: debounce(function (val, key) {
        const {
          searchValue
        } = this;

        const z = searchValue.filter(item => item.key !== key);
        this.searchValue = [
          ...z,
          {
            key,
            value: val
          }
        ];
      }, 500),
      rekamMedis({
        klinik_id,
        pasien_id
      }) {
        this.$router.push(`/rekam-medis/${klinik_id}/${pasien_id}`);
      },
      removePasien({
        id,
        nama = null
      } = {}) {
        this.$swal({
          text: `Apakah anda yakin ingin menghapus data pasien ${nama}?`,
          type: "question",
          showCancelButton: true,
          cancelButtonText: startCase("batal"),
          confirmButtonText: startCase("ya")
        }).then(async res => {
          if (res.value) {
            // console.log(res);
            await this.deletePasien(id);
          }
        });
      },
      editPasien({
        id
      } = {}) {
        if (id) {
          this.$router.push({
            name: "pasien-edit",
            params: {
              idPasien: id
            }
          });
        }
      },
      detailPasien({
        id
      } = {}) {
        if (id) {
          this.$router.push({
            name: "pasien-detail",
            params: {
              idPasien: id
            }
          });
        }
      },
      async deletePasien(id) {
        try {
          const res = await axios.delete(`${this.url_api}/pasien/${id}`);
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.$swal({
              type: "success",
              title: startCase("deleted"),
              text: startCase("pasien berhasil di hapus")
            });
            this.fetchListPasien();
          } else {
            this.$swal({
              type: "error",
              title: startCase("gagal"),
              text: startCase("pasien gagal di hapus")
            });
          }
        } catch (err) {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("pasien gagal di hapus")
          });
        }
      },
      determineParameter() {
        const {
          searchValue,
          sortBy,
          sortDesc
        } = this;
        let v = "";
        searchValue.map(item => {
          const x = item.key === 'nama' && 'nama_pasien' || item.key
          v += `&${x}=${item.value}`;
        });

        if (sortBy) {
          v += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
        }

        return v;
      },
      async fetchListPasien() {
        try {
          const tanggalLahir =
            this.tanggalLahir && moment(this.tanggalLahir).format("YYYY-MM-DD");
          const res = await axios.get(
            `${this.url_api}/pasien?limit=${this.perPage}&page=${
            this.currentPage
          }${this.determineParameter()}`
            /* &nama_pasien=${this.namaPasien}&no_rekam_medis=${this.noRekamMedis}&tanggal_lahir=${tanggalLahir} */
          );
          const {
            success,
            data
          } = res.data;
          if (success) {
            const {
              pasien: pasienData,
              total
            } = data;
            const {
              data: listPasien,
              total: totalEntries,
              to: toPage,
              from: fromPage
            } = pasienData;
            this.totalEntries = totalEntries;
            this.toPage = toPage;
            this.fromPage = fromPage;
            this.pasienList = [
              ...listPasien.map((item, index) => {
                return {
                  ...item,
                  no: (this.currentPage - 1) * this.perPage + index + 1
                };
              })
            ];
            this.rows = pasienData.total;
          }
        } catch (err) {
          // console.log(err);
        }
      },
      formatedDate(d) {
        return moment(d).format("D MMM YYYY");
      }
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

  .ninja-shadow {
    box-shadow: 0px 8px 15px 0px lightgrey;
  }

  /* @media screen and (max-width: 1275px; min-width: 1116px;) {
    #btn-tambah {
      margin-left :         
    }
} */
</style>