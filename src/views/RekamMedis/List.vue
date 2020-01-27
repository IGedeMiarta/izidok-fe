<template>
  <div>
    <page-title heading="Rekam Medis Pasien" :breadcrumb="[
        {
          label : 'Rekam Medis Pasien',
          link : '/rekam-medis'
        },
        {
          label: 'List Pasien',
          active: true
        }
      ]" class="layout-gantung ninja-shadow" />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-4" style="float:left;">
                <label for="no">Nama Pasien </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group col-md-3" style="float:left;">
                <label for="no">No Rekam Medik </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group col-md-2" style="float:left;padding-top:30px;padding-left:0;">
                <b-button variant="primary" @click="fetchListMedis">
                  <font-awesome-icon icon="search" /> CARI</b-button>
              </div>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-hover table-hover table-striped mb-5">
              <colgroup width="10px"></colgroup>
              <colgroup width="70px"></colgroup>
              <colgroup width="10px"></colgroup>
              <colgroup width="10px"></colgroup>
              <colgroup width="10px"></colgroup>
              <colgroup width="10px"></colgroup>
              <colgroup width="10px"></colgroup>
              <thead>
                <tr class="text-capitalize">
                  <th class="text-left">No</th>
                  <th class="no-sort text-center">Nama Pasien</th>
                  <th class="no-sort text-center">No Rekam Medik</th>
                  <th class="no-sort text-center">Jenis Kelamin</th>
                  <th class="no-sort text-center">Tanggal Lahir</th>
                  <th class="no-sort text-center">Nama Dokter</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">1</td>
                  <td class="no-sort text-center">Ilham</td>
                  <td class="no-sort text-center"><strong>110221</strong></td>
                  <td class="no-sort text-center">L</td>
                  <td class="no-sort text-center">27 Feb 2019</td>
                  <td class="no-sort text-center">Dr Sung</td>
                  <td class="text-center">
                    <b-link class="btn bg-kuning text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1">
                      <font-awesome-icon icon="pencil-alt" />
                    </b-link>

                    <b-link class="btn bg-primary text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1">
                      <font-awesome-icon icon="eye" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12 bg-neutral-second ninja-shadow" style="border-radius:10px;">
            <div class="p-3">
              <b-pagination class="d-flex justify-content-center mt-4" v-model="currentPage" :total-rows="rows"
                :per-page="perPage"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import {
    faArrowRight,
    faArrowUp,
    faTrashAlt,
    faSearch,
    faEye,
    faPencilAlt
  } from "@fortawesome/free-solid-svg-icons";
  import "vue-datetime/dist/vue-datetime.css";
  library.add(faArrowRight, faArrowUp, faTrashAlt, faEye, faSearch, faPencilAlt);
  import moment from "moment";

  export default {
    components: {
      "font-awesome-icon": FontAwesomeIcon
    },
    data() {
      return {
        currentPage: 1,
        rows: 100,
        perPage: 10,
        n: 0,
        rekamMedisList: [],
      }
    },
    methods: {
      tanggalLahirSelected($event) {
        if (!$event) return;
        this.setValue({
          rawLabel: "tanggal lahir",
          $event: moment($event).format("YYYY-MM-DD")
        });
      },
      fetchListMedis() {

      }
    },
  }
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