

<template>
  <div>
    <PageTitle class="text-left" heading="PILIH PAKET BERLANGGANAN ANDA"/>
    <div class="py-3">
      <b-row>
        <b-col sm="12">
            <div class="col-md-12">
              <div class="card border">
                <div class="card-body ml-0">
                    <b-row class="pl-1 pr-4">
                      <!-- [
                          { label: 'tetanus', value: 'tetanus.jpeg' },
                          { label: 'cancer', value: 'cancer.jpeg' }
                        ]" -->
                      <b-col sm="3" v-for="data in dataPaket" :key="data.id" >
                          <a href="javascript:void(0);" class="card card-box mb-6 card-box-border-bottom border-primary text-center">
                            <div class="card-body">
                              <div class="align-box-row align-content-center">
                                <div class="align-content-center text-center">
                                  <div class="font-weight-bold text-center">
                                  <template v-if="data.nama === 'Trial' ">
                                    <span class="font-size-xl  text-primary t">Free Trial</span>
                                      <p class="font-size-xl text-primary ">(Paket 1 Bulan)</p>
                                  </template>
                                    <template v-else>
                                      <p class="font-size-xl text-primary  ">{{data.nama}}</p>
                                    </template>
                                    <p class="font-size-xxl text-primary  ">{{data.harga}} rb</p>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                      </b-col>
                    </b-row>

                </div>
              </div>
            </div>

        </b-col>
      </b-row>
    </div>
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
     
    },
    data() {
      return {
        dataPaket: [],
        selectdataPaket: [],
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
      this.fetchPaket();
    },
    methods: {
      rerender(id) {
        this.$root.$emit("rerender",id);
      },
      fetchPaket() {
        axios.get(`${this.url_api}/paket`)
          .then(res => {
               this.dataPaket = res.data.data.paket
          });
      },
    }
  };

</script>