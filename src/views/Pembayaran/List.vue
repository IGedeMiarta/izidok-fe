<template>
  <div>
    <page-title
      heading="Pembayaran"
      :breadcrumb="[
        {
          label: 'Pembayaran'
        },
        {
          label: 'List Pembayaran',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h3>Daftar Pembayaran</h3>
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
                />
              </div>
              <div class="form-group col-md-4" style="float:left;">
                <label for="inputPassword46">No. Rekam Medis</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword46"
                />
              </div>
              <div
                class="form-group col-md-3"
                style="float:left;padding-top:30px;padding-left:0;"
              >
                <b-button variant="primary"
                  >CARI</b-button
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
                  <th>no. rekam medik</th>
                  <th>jenis kelamin</th>
                  <th>nama dokter</th>
                  <th>status pembayaran</th>
                  <th>lihat struk</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>
                    <b-link
                      class="btn bg-info text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="search" />
                    </b-link>
                  </td>
                  <td class="text-center">
                    <b-link
                      class="btn bg-info text-light font-size-md pl-5 pr-5 btn-sm ml-1 mr-1"
                    >
                      Bayar
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
      perPage: 10
    };
  },
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
