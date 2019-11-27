<template>
  <div>
    <page-title
      heading="Antrean Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan',
          active: true
        }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-body">
          <div class="accordion mb-5">
            <div class="card card-box">
              <div class="card-header">
                <b-button
                  class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none"
                  v-b-toggle.accordion-1
                >
                  <div class="d-block">
                    <h5 class="d-block">Filter Data</h5>
                    <h6 class="d-block text-capitalize">klik untuk filter</h6>
                  </div>
                  <font-awesome-icon icon="angle-up" class="font-size-xl" />
                </b-button>
              </div>
              <b-collapse
                id="accordion-1"
                :visible="false"
                accordion="accordion-example"
                role="tabpanel"
                class="m-2 p-2"
              >
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-group label="tanggal" class="text-capitalize">
                        <!-- <b-form-input /> -->
                        <Datetime
                          input-class="form-control"
                          zone="Asia/Jakarta"
                          format="dd-LL-yyyy"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        label="no rekam medis"
                        class="text-capitalize"
                      >
                        <b-form-input />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="nama pasien" class="text-capitalize">
                        <b-form-input />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-4">
            <b-button variant="first" class="text-capitalize mr-2"
              >cari</b-button
            >
            <b-button
              :to="{ name: 'registrasi-rawat-jalan' }"
              variant="primary"
              class="text-capitalize ml-2"
              >registrasi rawat jalan</b-button
            >
          </div>
          <b-table bordered striped hover :fields="fields" :items="items" />
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
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp);

export default {
  components: {
    Datetime
  },
  data: () => ({
    currentPage: 1,
    rows: 100,
    perPage: 10,
    fields: [
      "no",
      "nomor rekam medis",
      "nama pasien",
      "jenis kelamin",
      "nomor hp",
      "dokter tujuan",
      "actions"
    ],
    items: []
  })
};
</script>
