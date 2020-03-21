<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <span class="text-capitalize mx-2 text-center" style="width: 200px"
        >list pembayaran hari ini</span
      >
      <b-input-group prepend style="width: 40%" class="home-search-input">
        <b-input-group-prepend is-text>
          <font-awesome-icon icon="search" />
        </b-input-group-prepend>
        <b-input
          class="mr-2"
          size="sm"
          style="border-left-color: transparent"
          v-model="searchValue"
          debounce="500"
        />
      </b-input-group>
    </div>
    <b-table :items="data" class="table-tab-home" :fields="fieldList()">
      <template v-slot:cell(id)="data">{{ data.item.no }}</template>
      <template v-slot:cell(action)="data">
        <div class="d-flex flex-row justify-content-between">
          <template>
            <b-button
              size="sm"
              class="mx-1"
              variant="primary"
              :to="`pembayaran/struk/${data.item.id}`"
              v-tooltip="'Lihat Struk'"
              v-if="data.item.status.toLowerCase() === 'lunas'"
            >
              <font-awesome-icon icon="search" />
            </b-button>
            <b-button
              size="sm"
              class="mx-1"
              style="background-color: #333; border-color: #333; color: #fff"
              :to="{
                name: 'pasien-detail',
                params: {
                  idPasien: data.item.pasien_id
                }
              }"
              disabled
              v-tooltip="'Lihat Struk'"
              v-else
            >
              <font-awesome-icon icon="search" />
            </b-button>
          </template>
          <b-button
            size="sm"
            class="mx-1"
            variant="success"
            v-tooltip="'Bayar'"
            v-if="/(belum)/gi.test(data.item.status)"
            :to="`pembayaran/${data.item.id}`"
          >
            <font-awesome-icon icon="money-bill" />
          </b-button>
        </div>
      </template>
    </b-table>
    <b-pagination
      class="mt-4 d-flex justify-content-center pagination-home"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faMoneyBill);

export default {
  data() {
    return {
      currentPage: 1,
      rows: 1,
      perPage: 5,
      searchValue: "",
      data: [],
      counter: 60,
      intervalCounter: null
    };
  },
  mounted() {
    this.cekPaket();
  },
  watch: {
    currentPage() {
      this.fetchData();
    },
    perPage() {
      this.fetchData();
    },
    searchValue() {
      this.fetchData();
    }
  },
  computed: {
    ...mapGetters({ getKlinikId: "getKlinikId", isDoctor: "doctorRole" })
  },
  beforeMount() {
    this.counterFunc();
    this.fetchData();
  },
  beforeDestroy() {
    if (this.intervalCounter) clearInterval(this.intervalCounter);
  },
  methods: {
    async cekPaket() {
      try {
        const res = await axios.get(
          `${this.url_api}/cekPaket`
        );

        //Kuota habis, masa berlaku masih ada, belum beli paket.
        if (res.data.message === 'Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
          return this.$swal({
            text: "Kuota Anda telah habis, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {
              this.$router.push(`/subskripsi`);
            }
          });
        }
        //Kuota habis, masa berlaku habis, belum beli paket
        if (res.data.message === 'Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.') {
          return this.$swal({
            text: "Paket Anda telah berakhir, silahkan lakukan pembelian Paket untuk dapat melakukan aktivitas ini.",
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {
              this.$router.push(`/subskripsi`);
            }
          });
        }
        //Kuota masih ada, masa berlaku habis (kuota hangus), belum beli paket.
        if (res.data.message === 'Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.') {
          return this.$swal({
            text: "Masa Berlaku Paket Anda telah berakhir, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {
              this.$router.push(`/subskripsi`);
            }
          });
        }
        //Saat inisiasi, memilih ‘beli paket’, lalu ketika statusnya sedang menunggu pembayaran, dia ingin akses menu lain.
        if (res.data.message === 'Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.') {
          return this.$swal({
            text: "Silahkan selesaikan proses Pembayaran Paket Anda untuk dapat melakukan aktivitas ini.",
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {
              this.$router.push(`/subskripsi`);
            }
          });
        }
        //saat blum ada paket satupun
        if (res.data.message === 'Anda belum melakukan pembelian paket apapun') {
          return this.$swal({
            text: "Anda tidak memiliki paket apapun, silahkan lakukan pembelian untuk dapat melakukan aktivitas ini.",
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {
              this.$router.push(`/subskripsi`);
            }
          });
        }

        if(res.data !== null) {
          if(res.data.data.paket_id === 1) {
            var nm_paket = "Trial"
          }else if (res.data.data.paket_id === 2) {
            var nm_paket = "Starter"
          }else if (res.data.data.paket_id === 3) {
            var nm_paket = "Essential"
          }else {
            var nm_paket = "Premium"
          }
        }
        //Kuota habis, masa berlaku masih ada/tidakada, sudah beli paket.
        if (res.data.message === 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!') {
          return this.$swal({
            text: 'Paket Anda '+nm_paket+' telah OTOMATIS Aktif mulai dari tanggal '+res.data.data.started_date+' hingga '+res.data.data.expired_date+'!',
            showCancelButton: false,
            confirmButtonText: "OK",
            type: "warning",
            allowOutsideClick : false,
            allowEscapeKey: false,
          }).then(res => {
            console.log(res.value)
            if (res.value) {

            }
          });
        }
      } catch (err) {
        // console.log(err);
      }
    },
    counterFunc() {
      if (this.intervalCounter) clearInterval(this.intervalCounter);

      this.intervalCounter = setInterval(() => {
        if (this.counter > 0) {
          this.counter--;
        } else {
          clearInterval(this.intervalCounter);
          this.intervalCounter = null;
        }
      }, 1000);
    },
    async fetchData() {
      try {
        const { searchValue } = this;
        const res = await axios.get(
          `${this.url_api}/pembayaran?limit=${this.perPage}&page=${this.currentPage}&nama_pasien=${searchValue}`
        );
        const { success, data } = res.data;
        if (success) {
          const { data: tmpData, total } = data;
          const { total: totalEntries, to: toPage, from: fromPage } = tmpData;
          this.data = [
            ...tmpData.map((item, index) => {
              return {
                id: item.id,
                status: item.status,
                nama: item.nama,
                no: (this.currentPage - 1) * this.perPage + index + 1
              };
            })
          ];
          this.rows = total;
          return this;
        }
      } catch (err) {
        console.log(err);
      }
    },
    fieldList() {
      const {
        generateFieldList: g,
        setSearchableAndSortableFieldList: s
      } = this;
      return (
        [
          {
            key: "id",
            label: "no"
          },
          {
            key: "nama",
            label: "nama pasien"
          },
          {
            key: "status",
            label: "status pembayaran"
          },
          {
            key: "action",
            thStyle: "width: 150px"
          }
        ] |> (z => g({ field: z }))
      );
    }
  }
};
</script>
