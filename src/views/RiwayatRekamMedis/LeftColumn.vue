<template>
  <div class="py-3">
    <b-row>
      <b-col sm="12">
        <b-row style="padding:15px;">
          <div class="col-md-12">
            <!-- <b-card class="border">
              <b-card-text>
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>
              <a href="#" class="card-link">Card link</a>
              <b-link href="#" class="card-link">Another link</b-link>
            </b-card> -->
            <div class="card border">
              <div class="card-body">
                <vue-select :options="selectDataRiwayat" :filterable="false" v-model="selected" @input="searchByDiagnosis"
                  style="font-size:13.4px;">
                  <template slot="no-options">
                    Cari berdasarkan diagnosis
                  </template>
                  <template slot="option" slot-scope="option">
                    {{ option.label}}
                  </template>
                  <template slot="selected-option" slot-scope="option">
                    {{ option.label }}
                  </template>
                </vue-select>
              </div>
            </div>
          </div>
        </b-row>
      </b-col>
      <b-col cols="12" class="mt-4">
        <h5 class="text-uppercase font-weight-bold">riwayat rekam medis</h5>
        <b-row class="pl-1 pr-4">
          <!-- [
              { label: 'tetanus', value: 'tetanus.jpeg' },
              { label: 'cancer', value: 'cancer.jpeg' }
            ]" -->
          <b-col sm="6" v-for="data in dataRiwayat" :key="data.id" class="mb-4">
            <div class="my-4 mx-0 p-0 position-relative h-100" :rekam_medis="data.id">
              <img :src="data.pemeriksaan_fisik.draw_path" class="img-fluid" />
              <div class="card card-box position-absolute w-100 rounded-0 border-0"
                style="bottom: 0; background-color: #214179; color: #fff; cursor: pointer" @click="rerender(data.id)" >
                <div class="card-body text-capitalize text-center py-1">
                  <b-row>
                    <b-col sm="12"> {{ datetimeFormat(data.created_at) }}</b-col>
                    <b-col sm="12">{{ data.diagnosa_result.kode_penyakit }}</b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
          <div class="col-sm-12 mt-5" v-if="isLoadMore">
            <div class="d-flex justify-content-center p-2">
              <button class="btn btn-primary" @click="loadMore">
                Load More
              </button>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import moment from "moment";
  import axios from 'axios';
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faHome,
    faUser,
    faSearch,
    faArrowRight,
    faArrowUp,
  } from "@fortawesome/free-solid-svg-icons";

  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";

  library.add(
    faHome,
    faArrowRight,
    faArrowUp,
    faUser,
    faSearch
  );
  export default {
    components: {
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data() {
      return {
        dataRiwayat: [],
        selectDataRiwayat: [],
        selected: null,
        currentPage: 1,
        rows: 0,
        perPage: 4,
      }
    },
    watch: {
      currentPage() {
        this.showleftRekamMedis();
      }
    },
    computed: {
      isLoadMore() {
        return this.rows > this.currentPage * this.perPage;
      }
    },
    mounted() {
      this.fetchKodePenyakit();
      this.showleftRekamMedis();
    },
    methods: {
      rerender(id) {
        this.$root.$emit("rerender",id);
      },
      loadMore() {
        this.currentPage++;
        showleftRekamMedis();
      },
      fetchKodePenyakit() {
        var pasien_id = this.$router.currentRoute.params.pasien_id;
        axios.get(`${this.url_api}/rekam_medis/pasien/kode_penyakit/${pasien_id}`)
          .then(res => {
            res.data.data.forEach(item => {
              this.selectDataRiwayat.push({
                label: `${item.kode} - ${item.description}`,
                value: item.id
              })
            })
          });
      },
      async showleftRekamMedis(overwriteLeft = false) {
        try {
          var pasien_id = this.$router.currentRoute.params.pasien_id;

          let search = '';
          if(this.selected) {
            search = `&kode_penyakit_id=${this.selected.value}`
          }

          const responsePage = await axios.get(
            `${this.url_api}/rekam_medis/pasien/${pasien_id}?page=${this.currentPage}${search}`);
          
          if(overwriteLeft) {
            this.dataRiwayat = [];
            responsePage.data.data.rekam_medis.data.forEach(item => {
              this.dataRiwayat.push(item);
            })
          }
          else {
            responsePage.data.data.rekam_medis.data.forEach(item => {
              this.$set(this.dataRiwayat, this.dataRiwayat.length, item);
            })
          }
         
          this.rows = responsePage.data.data.rekam_medis.total;

          // this.selectDataRiwayat = this.dataRiwayat.map(item => {
          //   return {
          //     label: `${item.diagnosa_result.kode_penyakit}`,
          //     value: item.id
          //   };
          // });
          // let eventVal = {
          //     label: this.dataRiwayat.nama,
          //     value: this.dataRiwayat.id
          // }
          // this.selectDataRiwayat = [eventVal]
          this.rerender(this.dataRiwayat[0].id);
        } catch (error) {
          console.error(error);
        }
      },
      me() {
        return Array.apply(0, Array(12)).map(function (_, i) {
          return moment()
            .month(i)
            .format("MMMM");
        });
      },
      datetimeFormat(d) {
        return moment(d).format("DD MMM YYYY HH:mm:ss")
      },
      searchByDiagnosis($event) {
        this.showleftRekamMedis(true)
      }
      // yearValues() {
      //   const dateStart = moment("1969-01-01");
      //   const dateEnd = moment("2019-12-31");
      //   const timeValues = [];
      //   while (
      //     dateEnd > dateStart ||
      //     dateStart.format("M") === dateEnd.format("M")
      //   ) {
      //     timeValues.push(dateStart.format("YYYY"));
      //     dateStart.add(1, "year");
      //   }
      //   return timeValues;
      // }
    }
  };
</script>