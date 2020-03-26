<template>
  <div class="mt-5 py-3 px-4 laporan-pendapatan-wrapper">
    <b-row>
      <b-col sm="12" lg="6">
        <p>
          Laporan Pendapatan
        </p>
        <b-row class="align-items-center mb-2">
          <b-col sm="4" lg="2">
            <p class="text-capitalize m-0">periode</p>
          </b-col>
          <b-col sm="4" lg="4">
            <b-form-select size="sm" v-model="periodeSelected" :options="filterPeriode"></b-form-select>
          </b-col>
          <b-col sm="8" offset-sm="4" lg="6" v-if="selectedPeriodeRange">
            <DatePicker v-model="dateRange" type="daterange" range-separator="To" start-placeholder="Start date"
              end-placeholder="End date" size="small" format="dd-MM-yyyy" value-format="dd-MM-yyyy"
              :disabledDate="disabledDate" :picker-options="{
                disabledDate
              }" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="12">
            <small class="font-italic" style="color: red">
              *Data yang ditampilkan maksimal 3 bulan terakhir
            </small>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12" lg="6">
        <b-row class="mb-2">
          <b-col sm="4" lg="7" class="text-right-lg">PERIODE</b-col>
          <b-col sm="8" lg="5">
            <b-form-input class="w-auto text-right" size="sm" disabled
              :value="periodeX({ periode: periodeSelected, rawValue: true })" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="4" lg="7" class="text-right-lg">TOTAL PASIEN</b-col>
          <b-col sm="8" lg="5">
            <b-form-input class="w-auto text-right" size="sm" disabled :value="totalPasienValue" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="4" lg="7" class="text-right-lg">TOTAL PENDAPATAN</b-col>
          <b-col sm="8" lg="5">
            <b-form-input class="w-auto text-right" size="sm" disabled :value="totalPendapatanValue" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <DataTableWrapper :perPage="perPage" :currentPage="currentPage" :customPagingClass="['custom-pagination']"
      :customEntryOptions="{ f: 100 }" dropdownSizeProps="sm" :callbackFunc="fetchData"
      @valueChanged="handleValueChanged">
      <b-table :items="dataList" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
        thead-tr-class="kntl" :no-local-sorting="true" :responsive="true">
        <template v-slot:head()="data">
          {{ data.label }}
          <b-input size="sm" class="mt-2 w-95" v-if="data.field.searchable"
            @input="searchValueChanged($event, data.field.key)" />
        </template>

        <template v-slot:cell()="data">
          <template v-if="
              data.item.leaveBlank &&
                data.field.key &&
                data.field.key.toLowerCase() !== 'no'
            ">
            <b-input size="sm" class="mt-2 w-95" @input="searchValueChanged($event, data.field.key)" />
          </template>
          <div class="text-wrap text-break" v-else>
            {{ data.value }}
          </div>
        </template>

        <template v-slot:cell(jenis_kelamin)="data">
          {{ jenisKelamin(data.value) }}
        </template>

        <template v-slot:cell(diagnosis_icd_x)="data">
          <template v-if="data.item.leaveBlank">
            <vue-select :options="diagnosisList" v-model="selectedDiagnosis" class="custom-v-select w-95 mt-2"
              :filterable="false" @search="onSearch">
              <template slot="no-options">
                Tulis untuk mencari diagnosis
              </template>
              <template slot="option" slot-scope="option">
                {{ option.label }}
              </template>
              <template slot="selected-option" slot-scope="option">
                {{ option.label }}
              </template>
            </vue-select>
          </template>
          <div v-else style="max-width: 140px" v-tooltip="
              detailDiagnosis({ pembayaran_id: data.item.pembayaran_id })
            ">
            <p class="text-truncate d-inline-block w-100 pr-2 m-0">
              {{ data.value }}
            </p>
          </div>
        </template>

        <template v-slot:cell(actions)="data">
          <div v-if="!data.item.leaveBlank">
            <b-button variant="primary" size="sm" class="text-capitalize"
              :to="`/pembayaran/struk/${data.item.pembayaran_id}`">lihat struk</b-button>
          </div>
        </template>
      </b-table>
    </DataTableWrapper>
  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment";
  import debounce from "lodash/debounce";
  import startCase from "lodash/startCase";
  import {
    DatePicker
  } from "element-ui";
  import lang from "element-ui/lib/locale/lang/en";
  import locale from "element-ui/lib/locale";

  locale.use(lang);

  export default {
    components: {
      DatePicker,
      DataTableWrapper: () => import("../../components/DataTableWrapper"),
      "vue-select": () => import("vue-select")
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
        dataList: [],
        diagnosisList: [],
        selectedDiagnosis: null,
        fromPage: 0,
        toPage: 0,
        totalEntries: 0
      };
    },
    computed: {
      selectedPeriodeRange() {
        const {
          periodeSelected
        } = this;
        return /(pilih)/gi.test(periodeSelected);
      },
      filterPeriode() {
        return (
          ["hari ini", "minggu ini", "bulan ini", "pilih tanggal"] |> (x => x.map(item => ({
            value: item,
            text: startCase(item)
          })))
        );
      },
      fieldList() {
        const {
          generateFieldList: g,
          setSearchableAndSortableFieldList: s
        } = this;

        const fields = [{
            key: "no"
          },
          {
            key: "waktu_konsultasi",
            label: "waktu konsultasi",
            sortable: true
          },
          {
            key: "nama",
            label: "nama pasien",
            sortable: true
          },
          {
            key: "tanggal_lahir",
            thStyle: "width: 150px",
            sortable: true
          },
          {
            key: "diagnosis_icd_x",
            thStyle: "width: 160px",
            sortable: true
          },
          {
            key: "jumlah_transaksi",
            sortable: true
          },
          {
            key: "actions",
            thStyle: "width: 140px"
          }
        ];

        if (!this.isMobile()) fields.splice(4, 0, {
          key: "nomor_rekam_medis",
          label: "no. rekam medis",
          sortable: true
        })

        return (fields |>
          // |> (v =>
          //   s({
          //     field: v,
          //     customFunc: val =>
          //       val.toLowerCase() === "no" || /(jumlah|actions)/gi.test(val)
          //         ? 0
          //         : 1
          //   }))
          (z => g({
            field: z
          }))
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
      },
      selectedDiagnosis: {
        handler: "fetchData",
        deep: true
      },
      periodeSelected(val) {
        if (val !== "pilih tanggal") {
          this.fetchData();
        }
      },
      dateRange: {
        handler: function () {
          if (this.periodeSelected === "pilih tanggal") {
            this.fetchData();
          }
        },
        deep: true
      }
    },
    mounted() {
      this.fetchDiagnosis();
    },
    methods: {
      disabledDate(val) {
        const monthsBefore = moment(val).diff(moment(), "months", true);
        return !(
          moment(val).diff(moment(), "months", true) |> (x => x < 1 && x >= -3.0 && moment(val).isSameOrBefore(moment()))
        );
      },
      detailDiagnosis({
        pembayaran_id
      } = {}) {
        if (pembayaran_id) {
          const {
            dataList
          } = this;
          const {
            diagnosis_icd_x
          } = dataList.find(
            item => item.pembayaran_id === pembayaran_id
          );
          return diagnosis_icd_x;
        }
      },
      searchValueChanged: debounce(function (val, key) {
        const {
          searchValue
        } = this;
        const z = searchValue.filter(item => item.key !== key);
        this.searchValue = [
          ...z,
          {
            key,
            value: val
          }
        ];
      }, 500),
      periodeX({
        periode = null,
        rawValue = false
      } = {}) {
        const formatBackendDate = "YYYY-MM-DD";
        const rawValueFormat = "DD-MMM-YYYY";
        switch (periode && periode.toLowerCase()) {
          case "pilih tanggal":
            const {
              dateRange
            } = this;
            if (dateRange) {
              const [startDate, endDate] = dateRange;
              const formatDate = "DD-MM-YYYY";
              if (rawValue) {
                return `${moment(startDate, formatDate).format(
                rawValueFormat
              )}-${moment(endDate, formatDate).format(rawValueFormat)}`;
              } else {
                return `&from=${moment(startDate, formatDate).format(
                formatBackendDate
              )}&to=${moment(endDate, formatDate).format(formatBackendDate)}`;
              }
            } else {
              return null;
            }

            case "hari ini":
              const today = moment().format(formatBackendDate);
              return rawValue ?
                moment().format(rawValueFormat) :
                Array(2)
                .fill(today)
                .map(
                  (val, index) =>
                  `&${(item => (item ? "to" : "from"))(index)}=${val}`
                )
                .join("");

            case "minggu ini":
              const startWeek = moment().weekday(0);
              const endWeek = moment().weekday(6);
              return rawValue ?
                `${startWeek.format(rawValueFormat)}-${endWeek.format(
                rawValueFormat
              )}` :
                `&from=${startWeek.format(formatBackendDate)}&to=${endWeek.format(
                formatBackendDate
              )}`;

            case "bulan ini":
              const startMonth = moment().date(1);
              const endMonth = moment().date(31);
              return rawValue ?
                `${startMonth.format(rawValueFormat)}-${endMonth.format(
                rawValueFormat
              )}` :
                `&from${startMonth.format(
                formatBackendDate
              )}&to=${endMonth.format(formatBackendDate)}`;

            default:
              break;
        }
      },
      handleValueChanged({
        perPage,
        currentPage
      }) {
        perPage && (perPage |> (_ => (this.perPage = _)));
        currentPage && (currentPage |> (_ => (this.currentPage = _)));
      },
      onSearch(val) {
        this.search(val, this);
      },
      search: debounce((val, vm) => vm.fetchDiagnosis(val), 500),
      determineParameter() {
        const {
          periodeX,
          periodeSelected: periode,
          sortBy,
          sortDesc,
          searchValue,
          selectedDiagnosis
        } = this;
        const r = new RegExp("diagnosis", "gi");
        const v = "kode_penyakit_id";
        let tmp = "";
        tmp += `${periodeX({ periode })}`;
        searchValue.map(item => {
          const x =
            (item.key === "nama" && "nama_pasien") ||
            (r.test(item.key) && v) ||
            item.key;
            tmp += `&${x}=${item.value}`;
        });

        if (selectedDiagnosis) {
          const {
            code,
            label
          } = selectedDiagnosis;
          tmp = `&${v}=${code}${tmp}`;
        }

        if (sortBy) {
          tmp += `&column=${r.test(sortBy) ? v : val}&order=${
          sortDesc ? "desc" : "asc"
        }`;
        }

        return tmp;
      },
      async fetchData() {
        try {
          const {
            searchValue,
            determineParameter
          } = this;
          const res = await axios.get(
            `${this.url_api}/pembayaran/pendapatan?limit=${this.perPage}&page=${
            this.currentPage
          }${determineParameter()}`
          );
          const {
            success,
            data: {
              pendapatan,
              periode,
              total_pasien,
              total_pendapatan
            }
          } = res.data;
          if (success) {
            const {
              data: listLaporanPendapatan,
              total: totalEntries,
              to: toPage,
              from: fromPage
            } = pendapatan;
            const copyObj = Object.assign({}, listLaporanPendapatan[0]);
            const tmp = Object.keys(copyObj).map(item => {
              copyObj[item] = null;
            });
            const tmpList = [
              ...listLaporanPendapatan.map((item, index) => ({
                ...item,
                waktu_konsultasi: (e =>
                  moment(e, "YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY HH:mm:ss"))(
                  item.waktu_konsultasi
                ),
                diagnosis_icd_x: item.diagnosa.deskripsi,
                no: (this.currentPage - 1) * this.perPage + index + 1
              }))
            ];
            this.dataList = (tmpList &&
              tmpList.length > 0 && [
                Object.assign(copyObj, {
                  leaveBlank: true
                }),
                ...tmpList
              ]) || [...tmpList, {
              leaveBlank: true
            }];
            this.totalPasienValue = total_pasien;
            this.totalPendapatanValue = total_pendapatan;
            this.periodeValue = periode;
            this.rows = totalEntries;
            this.totalEntries =  totalEntries;
            this.toPage = toPage;
            this.fromPage = fromPage;
            return this;
          }
        } catch (err) {
          console.log(err);
        }
      },
      async fetchDiagnosis(search) {
        try {
          const res = await axios.get(
            `${this.url_api}/rekam_medis/kode_penyakit?search=${search}`
          );
          const {
            success,
            data,
            message
          } = res.data;
          if (success) {
            this.diagnosisList = data.map(item => ({
              label: item.description,
              code: item.id
            }));
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

  .custom-v-select {
    .vs__dropdown-toggle {
      max-height: 29.94px;
      background-color: #fff;
      overflow: hidden;
    }

    .vs__dropdown-menu {
      width: auto !important;
    }
  }

  @media screen and (min-width: 993px) {
    .text-right-lg {
      text-align: right;
    }
  }
</style>