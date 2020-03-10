<template>
  <div class="mt-5 py-3 px-4 laporan-pendapatan-wrapper">
    <header class="laporan-pendapatan-header">
      <b-row>
        <b-col cols="6">
          <p>
            Laporan Pendapatan
          </p>
          <b-row class="align-items-center mb-2">
            <b-col cols="2"
              ><p class="text-capitalize m-0">periode</p></b-col
            >
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
            <b-form-input class="w-auto" size="sm" disabled />
          </div>
          <div
            class="d-flex flex-row justify-content-end align-items-center mb-2"
          >
            <span class="text-uppercase mr-3">total pasien :</span>
            <b-form-input class="w-auto" size="sm" disabled />
          </div>
          <div
            class="d-flex flex-row justify-content-end align-items-center mb-2"
          >
            <span class="text-uppercase mr-3">total pendapatan :</span>
            <b-form-input class="w-auto" size="sm" disabled />
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
      >
        <b-table
          :items="pasienList"
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
        </b-table></DataTableWrapper
      >
    </section>
  </div>
</template>

<script>
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
      dateRange: null
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
  mounted() {
    console.log(this);
  },
  methods: {}
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
