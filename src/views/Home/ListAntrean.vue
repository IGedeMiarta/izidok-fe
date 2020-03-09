<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <span class="text-capitalize mx-2 text-center" style="width: 150px"
        >antrean hari ini</span
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
      <div class="d-flex justify-content-between ml-2">
        <b-button
          variant="primary"
          size="sm"
          class="text-capitalize mr-2 btn-antrean"
          :to="{
            name: 'registrasi-rawat-jalan'
          }"
          >tambah antrean</b-button
        >
        <b-button
          variant="primary"
          size="sm"
          class="text-capitalize mr-2 btn-registrasi"
          :to="{
            name: 'pasien-tambah'
          }"
          >registrasi pasien baru</b-button
        >
      </div>
    </div>
    <b-table :items="data" class="table-tab-home" :fields="fieldList()">
      <template v-slot:cell(jenis_kelamin)="data">
        {{ jenisKelamin(data.value) }}
      </template>
      <template v-slot:cell(status)="data">
        <template v-if="data && data.value">
          <b-badge
            variant="warning"
            v-if="data.value.toLowerCase() === 'menunggu'"
            style="background-color: #e6bf32"
            >{{ data.value }}</b-badge
          >
          <b-badge
            variant="warning"
            v-else-if="data.value.toLowerCase() === 'selesai'"
            style="background-color: #4e4e4b"
            >{{ data.value }}</b-badge
          >
          <b-badge variant="primary" v-else>{{ data.value }}</b-badge>
        </template>
      </template>
      <template v-slot:cell(action)="data">
        <div class="d-flex flex-row justify-content-between">
          <b-button
            size="sm"
            class="mx-1"
            variant="primary"
            v-tooltip="'View Detail'"
            @click="showDetail(data.item.id)"
          >
            <font-awesome-icon icon="search" />
          </b-button>
          <b-button
            size="sm"
            class="mx-1"
            variant="success"
            :to="`/rekam-medis/${data.item.id}/${data.item.pasien_id}`"
            v-if="isDoctor"
            v-tooltip="'Halaman Rekam Medis'"
          >
            <font-awesome-icon icon="sign-in-alt" />
          </b-button>
          <b-button
            size="sm"
            class="mx-1"
            variant="danger"
            @click="updateStatusAntrean(data.item.id)"
            v-tooltip="'Hapus Antrean'"
          >
            <font-awesome-icon icon="trash-alt" />
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

    <b-modal id="modalDetail" title="Detail Registrasi Antrean">
      <b-row v-for="(data, index) in dataRegistrasiPasien" :key="index" class="mb-2 pl-3 pr-3">
        <b-col sm="6">
          <div class="d-flex">
            <template v-if="data.label == 'TANDA TANDA VITAL' || data.label == 'DATA PASIEN'">
              <strong>{{data.label}}</strong>
            </template>
            <template v-else>
              <div class="flex-grow-1 text-capitalize">
                {{ data.label }}
            </div>
            <span>:</span>
            </template>
          </div>
        </b-col>
        <b-col sm="6">
          {{ data.value }}
        </b-col>
      </b-row>

      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="primary" class="float-right" @click="$bvModal.hide('modalDetail')">
            Tutup
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSignInAlt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faSignInAlt, faTrashAlt);

const __dataRegistrasiPasien = {
  dp: {
    label: "DATA PASIEN",
  },
  nama: {
    label: "nama pasien",
    value: null
  },
  rekam_medis: {
    label: "no. rekam medis",
    value: null
  },
  hp: {
    label: "no. handphone",
    value: null
  },
  kelamin: {
    label: "jenis kelamin",
    value: null
  },
  dokter: {
    label: "dokter",
    value: null
  },
  tanda: {
    label: "TANDA TANDA VITAL",
  },
  
  tb : {
    label : "tinggi badan ",
    value : null,
  },
  bb : {
    label : "berat badan ",
    value : null
  },
  suhu : {
    label : "suhu",
    value : null,
  },
  tensi_diastole : {
    label : "tekanan diastole",
    value : null
  },
  tensi_sistole : {
    label : "tekanan sistole",
    value : null
  },
  nadi : {
    label : "nadi",
    value : null,
  },
  anamnesis : {
    label : "anamnesis",
    value : null
  },
};

export default {
  data() {
    return {
      currentPage: 1,
      rows: 1,
      perPage: 5,
      data: [],
      searchValue: '',
      dataRegistrasiPasien: null,
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
    async updateStatusAntrean(id) {
      try {
        const antreanStatus = "batal";
        const res = await axios.put(`${this.url_api}/transaksi/${id}`, {
          status: antreanStatus.toUpperCase()
        });
        const { status, data, message } = res.data;
        if (status) {
          this.fetchData();
        } else {
          this.$swal({
            text: message,
            type: "warning"
          });
        }
      } catch (err) {}
    },
    async fetchData() {
      try {
        const { searchValue } = this;
        const res = await axios.get(
          `${this.url_api}/transaksi?limit=${this.perPage}&page=${this.currentPage}&nama_pasien=${searchValue}`
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
            key: "nomor_antrian",
            label: "no urut",
            thStyle: "width: 85px"
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
            label: "status pasien"
          },
          {
            key: "action",
            thStyle: "width: 150px"
          }
        ] |> (z => g({ field: z }))
      );
    },
    showDetail(id) {
      axios.get(`${this.url_api}/transaksi/${id}`)
        .then(res => {
          if (res.data.status) {
            const {
              waktu_konsultasi,
              examination_by: dokter,
              anamnesa,
              pasien
            } = res.data.data;
            
            const x = __dataRegistrasiPasien;
            x["nama"].value = pasien.nama;
            x["rekam_medis"].value = pasien.nomor_rekam_medis;
            x["hp"].value = pasien.nomor_hp;
            x["kelamin"].value = this.jenisKelamin(pasien.jenis_kelamin);
            x["dokter"].value = dokter.nama;

            x["tb"].value = pasien.tinggi_badan + ' (cm)';
            x["bb"].value = pasien.berat_badan + ' (kg)';
            x["suhu"].value = pasien.suhu +' (celcius)';
            x["tensi_sistole"].value = pasien.tensi_sistole;
            x["tensi_diastole"].value = pasien.tensi_diastole;
            x["nadi"].value = pasien.nadi;
            x["anamnesis"].value = anamnesa;

            this.dataRegistrasiPasien = x;
            this.$bvModal.show('modalDetail');

          } else {
            this.$swal({
              text: message,
              type: "warning"
            });
          }
        })
    }
  }
};
</script>

<style lang="scss">
.w-35 {
  width: 35% !important;
}

.btn-antrean,
.btn-antrean:hover {
  $baseColor: #8ba6fd;
  background-color: $baseColor;
  border-color: $baseColor;
}

.btn-registrasi,
.btn-registrasi:hover {
  $baseColor: #b583fe;
  background-color: $baseColor;
  border-color: $baseColor;
}

.table-tab-home {
  $evenColor: #e9e9e9;
  background-color: #f9f9f9;

  thead {
    tr {
      th {
        background-color: $evenColor;
        color: #778fad !important;
      }
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: $evenColor;
      }
    }
  }
}

.home-search-input {
  .input-group-text {
    padding: 0.2rem 0.5rem;
    border-right-color: transparent;
  }

  input {
    &:focus {
      border-color: #d1d2db;
    }
    border-left-color: transparent;
  }
}

.pagination-home {
  .page-item {
    & > * {
      $baseColor: #a8bcd7;
      background-color: $baseColor !important;
      border-color: $baseColor !important;
      color: #fff !important;
      font-size: 17px;
    }

    &.active {
      & > * {
        $baseColor: #759dc0;
        background-color: $baseColor !important;
        border-color: $baseColor !important;
      }
    }

    &.disabled {
      & > * {
        $baseColor: #a8bcd7;
        background-color: $baseColor !important;
        border-color: $baseColor !important;
      }
    }
  }
}
</style>
