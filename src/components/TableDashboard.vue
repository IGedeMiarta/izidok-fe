<template>
  <div class="card card-box mb-5">
    <div class="card-header pr-2">
      <div class="card-header--title">
        <h4 style="display:inline-block">Antrean Hari Ini</h4>
        <b-button :to="{ name: 'registrasi-rawat-jalan' }" class="float-right text-capitalize" pill variant="success">
          registrasi baru</b-button>
      </div>
    </div>
    <div class="card-body p-0">
      <div>
        <div class="table-responsive-xs">
          <table class="table table-striped table-hover mb-0">
            <thead class="thead-light">
              <tr class="text-capitalize">
                <th scope="col">no</th>
                <th scope="col">nama pasien</th>
                <th scope="col" class="text-center">
                  no. rekam medis
                </th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="(data, index) in dataRawatJalan" :key="data.id">
                <td class="text-wrap">
                  <div class="align-box-row">
                    <div class="d-flex align-items-center">
                      <span>{{ (currentPage - 1) * perPage + index + 1 }} </span>
                    </div>
                  </div>
                </td>
                <td class="text-wrap">
                  <div class="align-box-row">
                    <span class="d-block">
                      {{ data.pasien.nama }}
                    </span>
                  </div>
                </td>
                <td>
                  <div class="text-center d-flex align-items-center justify-content-between">
                    <span class="flex-grow-1">{{data.pasien['nomor_rekam_medis']}}</span>
                    <span>
                      <b-button variant="dark" size="sm" @click="rekamMedis(data)">
                        <span class="btn-wrapper--icon">
                          <font-awesome-icon icon="sign-in-alt" /> </span></b-button>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <b-pagination
            class="d-flex justify-content-center mt-4"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faSignInAlt);
import axios from "axios";
import moment from "moment";

export default {
  data: () => ({
    dataRawatJalan: [],
    currentPage: 1,
    perPage: 5,
    rows: 0
  }),
  mounted() {
    this.getRawatJalanData();
  },
  computed: {
    now() {
      return moment().format("YYYY-MM-DD");
    }
  },
  methods: {
    rekamMedis(data) {
      const { id, pasien_id } = data;
      this.$router.push(`/rekam-medis/${id}/${pasien_id}`);
    },
    async getRawatJalanData() {
      try {
        const res = await axios.get(
          `${this.url_api}/transaksi?limit=10&status=MENUNGGU&from=${this.now}&to=${this.now}`
        );
        const {
          status,
          data: {
            data: { data: rawatJalanData }
          }
        } = res;
        if (status) {
          this.dataRawatJalan = rawatJalanData;
        }
      } catch (err) {
        console.log(err);
      }
    }
    // async getAntrian() {
    //   try {
    //     const res2 = await axios.get(
    //       `${this.url_api}/transaksi?limit=10&status=MENUNGGU&from=${this.now}&to=${this.now}`);
    //     const {
    //       status,
    //       data
    //     } = res2.data;

    //     if (status) {
    //       this.DataAnteranToday = res2.data.data.data;
    //     }
    //   }
    //   catch (err) {
    //     console.log(err);
    //   }
    // }
  }
};
</script>
