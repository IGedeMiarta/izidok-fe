<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien'
        },
        {
          label: 'List Pasien',
          active: true
        }
      ]"
    />

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
          <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-5" style="float:left;">
                <label for="inputEmail4">Nama Pasien</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  v-model.lazy="namaPasien"
                />
              </div>
              <div class="form-group col-md-4" style="float:left;">
                <label for="inputPassword46">No. Rekam Medis</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword46"
                  v-model.lazy="noRekamMedis"
                />
              </div>
              <div
                class="form-group col-md-3"
                style="float:left;padding-top:30px;padding-left:0;"
              >
                <b-button variant="primary" @click="fetchListPasien"
                  >CARI</b-button
                >
              </div>
            </div>
            <div class="col-md-3 no-padding">
              <div
                class="form-group col-md-12"
                style="padding-top:30px;padding-left:0;"
              >
                <b-button
                  variant="first"
                  :to="{
                    name: 'pasien-tambah'
                  }"
                  style="float:right;"
                  >TAMBAH</b-button
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-bordered table-hover table-hover mb-5">
              <thead>
                <tr class="text-capitalize">
                  <th>no</th>
                  <th>nama pasien</th>
                  <th>no. rekam medis</th>
                  <th>jenis kelamin</th>
                  <th>tanggal lahir</th>
                  <th>nama dokter</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in pasienList" :key="data.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.nama }}</td>
                  <td>{{ data.nomor_polis }}</td>
                  <td>{{ data.jenis_kelamin }}</td>
                  <td>{{ data.tanggal_lahir }}</td>
                  <td>{{ data.nama_dokter }}</td>
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
            </table>
          </div>
        </div>
      </div>
      <div
        class="col-md-12 bg-neutral-second ninja-shadow"
        style="border-radius:10px;"
      >
        <div class="p-3">
          <b-pagination
            class="d-flex justify-content-center mt-4"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowUp,
  faTrashAlt,
  faSearch,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowRight, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  data() {
    return {
      currentPage: 1,
      rows: 100,
      perPage: 10,
      pasienList: [
        {
          id: 1,
          nama: "relep",
          nomor_polis: "asd",
          jenis_kelamin: "perempuan",
          tanggal_lahir: "20-10-2014",
          nama_dokter: "meki"
        }
      ],
      namaPasien: "",
      noRekamMedis: ""
    };
  },
  mounted() {
    this.fetchListPasien();
  },
  methods: {
    removePasien({ id, nama = null } = {}) {
      this.$swal({
        text: `Apakah anda yakin ingin menghapus data pasien ${nama}?`,
        type: "question",
        showCancelButton: true,
        cancelButtonText: startCase("batal"),
        confirmButtonText: startCase("ya")
      }).then(async res => {
        if (res.value) {
          console.log(res);
          await this.deletePasien();
        }
      });
    },
    editPasien({ id } = {}) {
      if (id) {
        this.$router.push({
          name: "pasien-edit",
          params: { idPasien: id }
        });
      }
    },
    detailPasien({ id } = {}) {
      if (id) {
        this.$router.push({
          name: "pasien-detail",
          params: { idPasien: id }
        });
      }
    },
    async deletePasien(id) {
      try {
        const res = await axios.delete(`${this.url_api}/pasien/${id}`);
        const { status, data } = res.data;
        if (status) {
          this.$swal({
            type: "success",
            title: startCase("deleted"),
            text: startCase("pasien berhasil di hapus")
          });
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
    async fetchListPasien() {
      try {
        const res = await axios.get(
          `${this.url_api}/pasien?limit=10&page=${this.currentPage}`
        );
        const { status, data } = res.data;
        if (success) {
          const { data: pasienData, total } = data;
          this.rows = total;
          this.pasienList = [...pasienData];
        }
      } catch (err) {
        console.log(err);
      }
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
</style>
