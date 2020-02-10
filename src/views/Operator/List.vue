<template>
  <div>
    <page-title
      heading="Manajemen Operator"
      :breadcrumb="[
        {
          label: 'Manajemen Operator'
        },
        {
          label: 'List Operator',
          active: true
        }
      ]"
      class="layout-gantung ninja-shadow"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-6" style="float:left;">
                <label for="inputEmail4">Nama Operator</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
              <div
                class="form-group col-md-6"
                style="float:left;padding-top:30px;padding-left:0;"
              >
                <b-button variant="first"
                  >CARI</b-button
                >
              </div>
            </div>
            <div class="col-md-3 no-padding">
              <div class="form-group col-md-12" style="padding-top: 30px; padding-left: 0px;">
                <b-button variant="primary" class="float-right"
                  >TAMBAH OPERATOR</b-button
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-hover table-hover mb-5">
              <thead >
                <tr class="text-capitalize">
                  <th>no</th>
                  <th>nama operator</th>
                  <th>jenis kelamin</th>
                  <th>nomer hp</th>
                  <th>email</th>
                  <th>email</th>
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
                  <td class="text-center">
                    <b-link
                      class="btn bg-info text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="search" />
                    </b-link>
                    <b-link
                      class="btn bg-danger text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                    >
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        class="col-md-12"
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
.layout-gantung{
  border-radius: 0px 0px 10px 10px;
  max-height: 250px;
}
.ninja-shadow {
  box-shadow: 0px 8px 15px 0px lightgrey;
}
table thead tr.text-capitalize th{
  background: #DCE6F1;
}
</style>
