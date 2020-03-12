<template>
  <div class="mt-5 py-3 px-4 laporan-pendapatan-wrapper">
    <header class="laporan-pendapatan-header">
      <b-row>
        <b-col cols="6">
          <p>
            Laporan Pendapatan
          </p>
          <b-row class="align-items-center mb-2">
            <b-col cols="2"><p class="text-capitalize m-0">periode</p></b-col>
            <b-col cols="4"
              ><b-form-select
                size="sm"
                v-model="periodeSelected"
                :options="filterPeriode"
              ></b-form-select
            ></b-col>
            <b-col cols="6" v-if="selectedPeriodeRange">
              <DatePicker
                v-model="dateRange"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                size="small"
              />
            </b-col>
          </b-row>
          <p class="font-italic">
            <small style="color: red"
              >*Data yang ditampilkan maksimal 3 bulan terakhir</small
            >
          </p>
        </b-col>
        <b-col cols="6">
          <div
            class="d-flex flex-row justify-content-end align-items-center mb-2"
          >
            <span class="text-uppercase mr-3">periode :</span>
            <b-form-input
              class="w-auto text-right"
              size="sm"
              disabled
              :value="periodeX({ periode: periodeSelected, rawValue: true })"
            />
          </div>
          <div
            class="d-flex flex-row justify-content-end align-items-center mb-2"
          >
            <span class="text-uppercase mr-3">total pasien :</span>
            <b-form-input
              class="w-auto text-right"
              size="sm"
              disabled
              :value="totalPasienValue"
            />
          </div>
          <div
            class="d-flex flex-row justify-content-end align-items-center mb-2"
          >
            <span class="text-uppercase mr-3">total pendapatan :</span>
            <b-form-input
              class="w-auto text-right"
              size="sm"
              disabled
              :value="totalPendapatanValue"
            />
          </div>
        </b-col>
      </b-row>
    </header>
    <section>
      <DataTableWrapper
        :perPage="perPage"
        :currentPage="currentPage"
        :customPagingClass="['custom-pagination']"
        :customEntryOptions="{ f: 100 }"
        dropdownSizeProps="sm"
        :callbackFunc="fetchData"
        @valueChanged="handleValueChanged"
      >
        <b-table
          :items="dataList"
          :fields="fieldList"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          thead-tr-class="kntl"
          :no-local-sorting="true"
        >
          <template v-slot:head()="data">
            {{ data.label }}
            <b-input
              size="sm"
              class="mt-2 w-95"
              v-if="data.field.searchable"
              @input="searchValueChanged($event, data.field.key)"
            />
          </template>

          <!-- <template v-slot:head()="data"></template> -->

          <template v-slot:cell(jenis_kelamin)="data">
            {{ jenisKelamin(data.value) }}
          </template>

          <template v-slot:cell(actions)="data">
            <span>
              <b-dropdown
                id="dropdown-1"
                class="m-md-2 text-capitalize"
                variant="primary"
                size="sm"
                right
              >
                <template v-slot:button-content>
                  <font-awesome-icon icon="copy" />
                </template>
                <b-dropdown-item
                  @click="
                    editPasien({
                      id: data.item.id
                    })
                  "
                  >edit data pasien</b-dropdown-item
                >

                <b-dropdown-item
                  @click="
                    detailPasien({
                      id: data.item.id
                    })
                  "
                  >view detail pasien</b-dropdown-item
                >
                <template v-if="isOperator == false">
                  <b-dropdown-item
                    @click="
                      rekamMedis({
                        pasien_id: data.item.id,
                        klinik_id: data.item.klinik_id
                      })
                    "
                    >lihat riwayat rekam medis</b-dropdown-item
                  >
                </template>
                <b-dropdown-item
                  @click="
                    removePasien({
                      id: data.item.id,
                      nama: data.item.nama
                    })
                  "
                  >hapus data pasien</b-dropdown-item
                >
              </b-dropdown>
            </span>
          </template>
        </b-table>
      </DataTableWrapper>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import debounce from "lodash/debounce";
import startCase from "lodash/startCase";
import { DatePicker } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

export default {
  components: {
    DatePicker,
    DataTableWrapper: () => import("../../components/DataTableWrapper")
  },
  data() {
    return {
      sortBy: "",
      sortDesc: false,
      currentPage: 1,
      perPage: 10,
      periodeSelected: "hari ini",
      dateRange: null,
      periodeValue: null,
      totalPasienValue: null,
      totalPendapatanValue: null,
      searchValue: [],
      dataList: []
    };
  },
  computed: {
    selectedPeriodeRange() {
      const { periodeSelected } = this;
      return /(pilih)/gi.test(periodeSelected);
    },
    filterPeriode() {
      return (
        ["hari ini", "minggu ini", "bulan ini", "pilih tanggal"]
        |> (x => x.map(item => ({ value: item, text: startCase(item) })))
      );
    },
    fieldList() {
      const {
        generateFieldList: g,
        setSearchableAndSortableFieldList: s
      } = this;
      return (
        [
          {
            key: "no"
          },
          {
            key: "waktu_konsultasi",
            label: "waktu konsultasi"
          },
          {
            key: "nama",
            label: "nama pasien"
          },
          {
            key: "tanggal_lahir"
          },
          {
            key: "no.rekam_medis",
            label: "no. rekam medis"
          },
          {
            key: "diagnosis_icd_x"
          },
          {
            key: "jumlah_transaksi"
          },
          {
            key: "actions"
          }
        ] |> (z => g({ field: z }))
      );
    }
  },
  watch: {
    currentPage() {
      this.fetchData();
    },
    perPage() {
      this.fetchData();
    },
    sortBy() {
      this.fetchData();
    },
    sortDesc() {
      this.fetchData();
    },
    searchValue: {
      handler: "fetchData",
      deep: true
    }
  },
  methods: {
    // searchValueChanged: debounce(function(val, key) {
    //   const { searchValue } = this;
    //   const z = searchValue.filter(item => item.key !== key);
    //   this.searchValue = [
    //     ...z,
    //     {
    //       key,
    //       value: val
    //     }
    //   ];
    // }, 500),
    periodeX({ periode = null, rawValue = false } = {}) {
      const formatBackendDate = "YYYY-MM-DD";
      const rawValueFormat = "DD-MMM-YYYY";
      const now = moment();
      const symbol = "!";
      switch (periode && periode.toLowerCase()) {
        case "pilih tanggal":
          break;

        case "hari ini":
          const today = now.format(formatBackendDate);
          return rawValue
            ? now.format(rawValueFormat)
            : Array(2)
                .fill(today)
                .map(
                  (val, index) =>
                    `&${(item => (item ? "to" : "from"))(index)}=${val}`
                )
                .join("");

        case "minggu ini":
          const startWeek = now.clone().weekday(0);
          const endWeek = now.clone().weekday(6);
          return rawValue
            ? `${startWeek.format(rawValueFormat)}-${endWeek.format(
                rawValueFormat
              )}`
            : `&from=${startWeek.format(formatBackendDate)}&to=${endWeek.format(
                formatBackendDate
              )}`;

        case "bulan ini":
          const startMonth = now.clone().date(1);
          const endMonth = now.clone().date(31);
          return rawValue
            ? `${startWeek.format(rawValueFormat)}-${endWeek.format(
                rawValueFormat
              )}`
            : `&from${startMonth.format(
                formatBackendDate
              )}&to=${endMonth.format(formatBackendDate)}`;

        default:
          break;
      }
    },
    handleValueChanged({ perPage, currentPage }) {
      perPage && (perPage |> (_ => (this.perPage = _)));
      currentPage && (currentPage |> (_ => (this.currentPage = _)));
    },
    determineParameter() {
      const {
        periodeX,
        periodeSelected: periode,
        sortBy,
        sortDesc,
        searchValue
      } = this;
      let tmp = "";

      tmp += `${periodeX({ periode })}`;

      searchValue.map(item => {
        const x = (item.key === "nama" && "nama_pasien") || item.key;
        tmp += `&${x}=${item.value}`;
      });

      if (sortBy) {
        tmp += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
      }

      return tmp;
    },
    async fetchData() {
      try {
        const { searchValue, determineParameter } = this;
        const res = await axios.get(
          `${this.url_api}/pembayaran/pendapatan?limit=${this.perPage}&page=${
            this.currentPage
          }${determineParameter()}`
        );
        const {
          success,
          data: { pendapatan, periode, total_pasien, total_pendapatan }
        } = {
          success: true,
          message: "success",
          data: {
            periode: "06-Mar-2020 - 10-Mar-2020",
            total_pasien: 4,
            total_pendapatan: "Rp. 940.000,-",
            pendapatan: {
              current_page: 1,
              data: [
                {
                  pembayaran_id: 44,
                  waktu_konsultasi: "2020-03-06 00:00:00",
                  nama: "Doe",
                  tanggal_lahir: "05-May-1995",
                  nomor_rekam_medis: "1020-0000-1140-0000-03",
                  jumlah_transaksi: "Rp. 270.000,-",
                  diagnosa_id: 41,
                  kode_penyakit_id: "[1,4]",
                  diagnosa: {
                    id: 41,
                    kode_penyakit_id: "[1,4]",
                    deskripisi: "Acquired Deformities of Fingers and Toes"
                  }
                },
                {
                  pembayaran_id: 44,
                  waktu_konsultasi: "2020-03-06 00:00:00",
                  nama: "Doe",
                  tanggal_lahir: "05-May-1995",
                  nomor_rekam_medis: "1020-0000-1140-0000-03",
                  jumlah_transaksi: "Rp. 270.000,-",
                  diagnosa_id: 40,
                  kode_penyakit_id: "[2,3]",
                  diagnosa: {
                    id: 40,
                    kode_penyakit_id: "[2,3]",
                    deskripisi: "Acquired Deformity of Nose"
                  }
                },
                {
                  pembayaran_id: 40,
                  waktu_konsultasi: "2020-03-06 00:00:00",
                  nama: "Ariana",
                  tanggal_lahir: "01-Feb-1991",
                  nomor_rekam_medis: "1010-0001-1400-0002",
                  jumlah_transaksi: "Rp. 200.000,-",
                  diagnosa_id: 36,
                  kode_penyakit_id: "[2]",
                  diagnosa: {
                    id: 36,
                    kode_penyakit_id: "[2]",
                    deskripisi: "Acquired Deformity of Nose"
                  }
                },
                {
                  pembayaran_id: 40,
                  waktu_konsultasi: "2020-03-06 00:00:00",
                  nama: "Ariana",
                  tanggal_lahir: "01-Feb-1991",
                  nomor_rekam_medis: "1010-0001-1400-0002",
                  jumlah_transaksi: "Rp. 200.000,-",
                  diagnosa_id: 35,
                  kode_penyakit_id: "[2]",
                  diagnosa: {
                    id: 35,
                    kode_penyakit_id: "[2]",
                    deskripisi: "Acquired Deformity of Nose"
                  }
                }
              ],
              first_page_url:
                "http://localhost:9001/api/v1/pembayaran/pendapatan?page=1",
              from: 1,
              last_page: 1,
              last_page_url:
                "http://localhost:9001/api/v1/pembayaran/pendapatan?page=1",
              next_page_url: null,
              path: "http://localhost:9001/api/v1/pembayaran/pendapatan",
              per_page: 15,
              prev_page_url: null,
              to: 4,
              total: 4
            }
          }
        };
        // } = res.data;
        if (success) {
          const {
            data: listLaporanPendapatan,
            total: totalEntries,
            to: toPage,
            from: fromPage
          } = pendapatan;
          this.totalPasienValue = total_pasien;
          this.totalPendapatanValue = total_pendapatan;
          this.periodeValue = periode;
          // this.data = [
          //   ...listAntrean.map((item, index) => {
          //     return {
          //       id: item.id,
          //       waktu_konsultasi: item.waktu_konsultasi,
          //       nomor_antrian: item.nomor_antrian,
          //       status: item.status,
          //       jenis_kelamin: item.jenis_kelamin,
          //       nama: item.nama,
          //       nomor_hp: item.nomor_hp,
          //       pasien_id: item.pasien_id,
          //       no: (this.currentPage - 1) * this.perPage + index + 1
          //     };
          //   })
          // ];
          this.dataList = listLaporanPendapatan;
          this.rows = totalEntries;
          return this;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss">
$baseBgColor: #e6e6e6;
$evenBgColor: #f9f9f9;

.laporan-pendapatan-wrapper {
  $border-radius: 12px;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  background-color: $baseBgColor;
  color: #4c6e8a !important;

  section {
    table {
      thead {
        tr {
          th {
            background-color: transparent !important;
            color: #4c6e8a !important;
            border: none !important;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(even) {
            background-color: #f9f9f9;
          }
        }
      }
    }
  }

  .el-range-separator {
    width: 35px;
  }
}
</style>
