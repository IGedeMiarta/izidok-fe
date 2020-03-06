<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <span class="text-capitalize mx-2" style="width: 200px"
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
        />
      </b-input-group>
    </div>
    <b-table :items="data" class="table-tab-home" :fields="fieldList()">
      <template v-slot:cell(id)="data">{{ data.index + 1 }}</template>
      <template v-slot:cell(jenis_kelamin)="data">
        {{ jenisKelamin(data.value) }}
      </template>
      <template v-slot:cell(action)="data">
        <div class="d-flex flex-row justify-content-between">
          <!-- blm bayar -->
          <b-button
            size="sm"
            class="mx-1"
            variant="primary"
            :to="{
              name: 'pasien-detail',
              params: {
                idPasien: data.item.pasien_id
              }
            }"
            v-tooltip="'Lihat Struk'"
          >
            <font-awesome-icon icon="search" />
          </b-button>
          <!-- sdh bayar -->
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
            v-tooltip="'Lihat Struk'"
          >
            <font-awesome-icon icon="search" />
          </b-button>
          <b-button
            size="sm"
            class="mx-1"
            variant="success"
            v-tooltip="'Bayar'"
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
      rows: 30,
      perPage: 10,
      data: [],
      searchValue: null
    };
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
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { searchValue } = this;
        const res = await axios.get(
          `${this.url_api}/transaksi?limit=${this.perPage}&page=${this.currentPage}&search=${searchValue}`
        );
        const { success, data } = res.data;
        if (success) {
          const { trans_klinik: dataAntrean, total } = data;
          const {
            data: listAntrean,
            total: totalEntries,
            to: toPage,
            from: fromPage
          } = dataAntrean;
          this.data = [
            ...listAntrean.map((item, index) => {
              return {
                id: item.id,
                waktu_konsultasi: item.waktu_konsultasi,
                nomor_antrian: item.nomor_antrian,
                status: item.status,
                jenis_kelamin: item.jenis_kelamin,
                nama: item.nama,
                nomor_hp: item.nomor_hp,
                pasien_id: item.pasien_id,
                no: (this.currentPage - 1) * this.perPage + index + 1
              };
            })
          ];
          this.rows = dataAntrean.total;
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
            key: "jenis_kelamin",
            label: "jenis kelamin"
          },
          {
            key: "status_pembayaran",
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
