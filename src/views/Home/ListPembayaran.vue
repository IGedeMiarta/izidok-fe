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
      <template v-slot:cell(jenis_kelamin)="data">
        {{ jenisKelamin(data.value) }}
      </template>
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
      data: [],
      searchValue: null,
      counter: 60,
      intervalCounter: null
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
  beforeMount() {
    this.counterFunc();
    this.fetchData();
  },
  beforeDestroy() {
    if (this.intervalCounter) clearInterval(this.intervalCounter);
  },
  methods: {
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
          `${this.url_api}/pembayaran?limit=${this.perPage}&page=${this.currentPage}&search=${searchValue}`
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
            key: "jenis_kelamin",
            label: "jenis kelamin"
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
