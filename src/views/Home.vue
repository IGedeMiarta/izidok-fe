<template>
  <!-- <div>
    <div class="app-content--inner p-0 d-flex flex-column"> -->
  <div>
    <b-row class="my-4">
      <b-col cols="12">
        <div>
          <ol class="d-inline-block breadcrumb text-uppercase font-size-xs p-0">
            <li class="d-inline-block breadcrumb-item">
              <a href="javascript:void(0);">Beranda</a>
            </li>
            <li
              class="d-inline-block breadcrumb-item active"
              aria-current="page"
            >
              dashboard
            </li>
          </ol>
          <div class="d-flex flex-row align-items-center">
            <h5
              class="display-4 mt-1 mb-1 font-weight-bold text-capitalize flex-grow-1"
            >
              dashboard
            </h5>
            <h5 class="display-4 mt-1 mb-1 font-weight-bold text-capitalize">
              Hari ini, {{ nowIndonesia }}
            </h5>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="align-items-center mb-2 mb-md-0">
      <b-col cols="12">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center w-100 mr-2">
            <CardDashboard
              title="total pasien hari ini"
              :highlight="totalPasienHariIni"
              bg-color="total-pasien-hari-ini"
              :goTo="{ name: 'antrean-rawat-jalan' }"
            />
          </div>
          <div class="d-flex align-items-center w-100 mr-2">
            <CardDashboard
              title="pasien baru hari ini"
              :highlight="pasienBaruHariIni"
              bg-color="pasien-baru-hari-ini"
              :goTo="{ name: 'antrean-rawat-jalan' }"
            />
          </div>
          <div class="d-md-flex align-items-center w-100 mr-2 d-sm-none">
            <CardDashboard
              title="no. antrean saat ini"
              :highlight="nomor_antrean"
              bg-color="no-antrean-saat-ini"
              :goTo="{ name: 'antrean-rawat-jalan' }"
            />
          </div>
          <div class="d-flex align-items-center w-100">
            <CardDashboard
              title="jumlah pasien batal hari ini"
              :highlight="pasienBatalHariIni"
              bg-color="jumlah-pasien-batal-hari-ini"
              :goTo="{ name: 'antrean-rawat-jalan' }"
            />
          </div>
          <div class="d-md-flex align-items-center w-100 ml-2 d-sm-none">
            <CardDashboard
              title="total pendapatan hari ini"
              :highlight="totalPendapatan"
              bg-color="total-pendapatan-hari-ini"
              :pointerHover="false"
              :showArrow="false"
            >
              <template v-slot:highlight>
                <p
                  style="font-size: 1.5rem; font-weight: 700; word-break: break-word"
                >
                  {{ totalPendapatan }}
                </p>
              </template>
            </CardDashboard>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="align-items-center mb-5">
      <b-col cols="12">
        <div class="d-flex justify-content-between">
          <div class="d-md-none align-items-center w-100 mr-2 d-sm-flex">
            <CardDashboard
              title="no. antrean saat ini"
              :highlight="nomor_antrean"
              bg-color="no-antrean-saat-ini"
              :goTo="{ name: 'antrean-rawat-jalan' }"
            />
          </div>
          <div class="d-md-none align-items-center w-100 d-sm-flex">
            <CardDashboard
              title="total pendapatan hari ini"
              :highlight="totalPendapatan"
              bg-color="total-pendapatan-hari-ini"
              :pointerHover="false"
              :showArrow="false"
            >
              <template v-slot:highlight>
                <p
                  style="font-size: 1.5rem; font-weight: 700; word-break: break-word"
                >
                  {{ totalPendapatan }}
                </p>
              </template>
            </CardDashboard>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="9" sm="12" class="align-self-start">
        <b-tabs content-class="pt-3 pb-2" lazy class="tab-izd-home">
          <b-tab title="List Antrean" active>
            <div slot="title">
              list antrean
            </div>
            <list-antrean />
          </b-tab>
          <b-tab title="List Pembayaran">
            <div slot="title">
              list pembayaran
            </div>
            <list-pembayaran />
          </b-tab>
        </b-tabs>
        <!-- <b-row>
          <b-col>
            <TableDashboard />
          </b-col>
        </b-row> -->
      </b-col>
      <b-col md="3" sm="12" class="paket-wrapper">
        <Paket
          :sisa_hari="paketAnda.sisa_hari"
          :habis_berlaku="paketAnda.habis_berlaku"
          :nama_paket="paketAnda.nama_paket"
          :paket="paketAnda.durasi_paket"
          :sisa_kouta="paketAnda.sisa_kouta"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <template v-if="isMobile()">
          <div class="mt-5 text-center">
            <b-link href="/laporan-pendapatan" class="btn btn-primary">
              <font-awesome-icon icon="money-check-alt" /> Laporan Pendapatan
            </b-link>
          </div>
        </template>
        <template v-else>
          <LaporanPendapatan />
        </template>
      </b-col>
    </b-row>
    <!-- <div class="d-flex">
      <TrendPasien class="flex-grow-1 my-2" :seriesData="dataSeries" />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faMoneyCheckAlt);

export default {
  name: "home",
  components: {
    ListAntrean: () => import("@/views/Home/ListAntrean"),
    ListPembayaran: () => import("@/views/Home/ListPembayaran"),
    CardDashboard: () => import("@/components/CardDashboard"),
    LaporanPendapatan: () => import("@/views/Home/LaporanPendapatan"),
    Paket: () => import("@/views/Home/Paket")
    // TableDashboard: () => import("@/components/TableDashboard")
    // TrendPasien: () => import("@/components/TrendPasien")
  },
  mounted() {
    Promise.all([
      // this.getAntrean(),
      // this.getRawatJalan(),
      this.cekPaket(),
      this.dashboardPasien()
      // this.getPasienBaru()
    ]);
  },
  computed: {
    now() {
      return moment().format("YYYY-MM-DD");
    },
    nowIndonesia() {
      moment.locale("ID");
      return moment().format("D MMMM YYYY");
    }
  },
  methods: {
    async cekPaket() {
      try {
        const res = await axios.get(
          `${this.url_api}/cekPaket`
        );
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
        }
      } catch (err) {
        // console.log(err);
      }
    },
    async getRawatJalan() {
      try {
        const res = await axios.get(
          `${this.url_api}/dash-rawat-jalan?from=${this.now}&to=${this.now}`
        );
        const { status, data } = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async dashboardPasien() {
      try {
        const res = await axios.get(`${this.url_api}/dash-pasien`);
        const {
          status,
          data: {
            data: {
              pasien_hari_ini = 10,
              pasien_baru_hari_ini = 0,
              nomor_antrian_saat_ini = 0,
              pasien_batal_hari_ini = 0,
              total_pendapatan_hari_ini = 0,
              paket_berlangganan: {
                durasi_paket,
                sisa_hari,
                habis_berlaku,
                sisa_kouta,
                nama_paket,
              }
            }
          }
        } = res;
        if (status) {
          this.totalPasienHariIni = pasien_hari_ini || 0;
          this.pasienBaruHariIni = pasien_baru_hari_ini || 0;
          this.nomor_antrean = nomor_antrian_saat_ini || 0;
          this.pasienBatalHariIni = pasien_batal_hari_ini || 0;
          this.totalPendapatan = total_pendapatan_hari_ini || 0;
          this.paketAnda = {
            nama_paket : nama_paket || 'Anda belum melakukan pembelian paket apapun',
            durasi_paket : durasi_paket || '-',
            sisa_kouta : sisa_kouta || '-',
            habis_berlaku : habis_berlaku || '-',
            sisa_hari : sisa_hari || '-'
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getPasienBaru() {
      try {
        const res = await axios.get(`${this.url_api}/dash-pasien-baru`);
        const {
          status,
          data: {
            data: { today_patient }
          }
        } = res;
        if (status) {
          this.pasienBaruHariIni = today_patient;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getAntrean() {
      try {
        const res = await axios.get(`${this.url_api}/dash-antrian`);
        const {
          status,
          data: { nomor_antrian = 0 }
        } = res.data;
        if (status) {
          this.nomor_antrean = nomor_antrian;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  data: () => ({
    nomor_antrean: 0,
    totalPasienHariIni: 0,
    pasienBaruHariIni: 0,
    pasienBatalHariIni: 0,
    totalPendapatan: 0,
    paketAnda : {},
    // dataSeries: [
    //   {
    //     name: "Pasien Baru",
    //     type: "column",
    //     data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    //   },
    //   {
    //     name: "Pasien Rawat Jalan",
    //     type: "column",
    //     data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    //   },
    //   {
    //     name: "Pendapatan",
    //     type: "line",
    //     data: [20, 29, 37, 36, 44, 45, 50, 58]
    //   }
    // ]
  })
};
</script>

<style lang="scss">
$bg-izd-home: #f2f2f2;
$bg-izd-home-alternate: #d6d6d6;

.apexcharts-title-text {
  font-weight: 800 !important;
}

.tab-izd-home {
  color: #778fad !important;

  ul {
    &[role="tablist"] {
      padding: 0;
      border-color: $bg-izd-home;

      li {
        &:first-child {
          padding: 0;
        }

        padding-left: 12px;

        a {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-color: $bg-izd-home-alternate !important;
          background-color: $bg-izd-home-alternate;
          text-transform: capitalize !important;
          color: #fff !important;
          font-weight: 600;

          &.active {
            color: #778fad !important;
            border-color: $bg-izd-home !important;
            background-color: $bg-izd-home;
          }
        }
      }
    }
  }

  .tab-content {
    background-color: $bg-izd-home;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
}

.card-dashboard {
  background-repeat: no-repeat !important;
  background-size: 185% !important;
  background-position: center !important;

  @function bgImage($imageName) {
    @return url("../assets/img/dashboard/"+$imageName+".png");
  }

  &.total-pasien-hari-ini {
    background-image: bgImage("total-pasien-hari-ini");
  }

  &.pasien-baru-hari-ini {
    background-image: bgImage("pasien-baru-hari-ini");
  }

  &.no-antrean-saat-ini {
    background-image: bgImage("no-antrean-saat-ini");
  }

  &.jumlah-pasien-batal-hari-ini {
    background-image: bgImage("jumlah-pasien-batal-hari-ini");
  }

  &.total-pendapatan-hari-ini {
    background-image: bgImage("total-pendapatan");
  }
}

@media screen and (max-width: 1200px) {
  .card-dashboard {
    background-size: 240% !important;
  }
}

@media screen and (max-width: 992px) {
  .card-dashboard {
    background-size: 260% !important;
  }
}

@media screen and (max-width: 768px) {
  .card-dashboard {
    background-size: 380% !important;
  }

  .paket-wrapper {
    margin-top: 1rem !important;
  }
}

@media screen and (max-width: 576px) {
  .card-dashboard {
    background-size: 800% !important;
  }
}
</style>
