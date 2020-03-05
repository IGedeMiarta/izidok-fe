<template>
  <div>
    <page-title heading="Pembayaran" :breadcrumb="[
        {
          label: 'Manajemen Pembayaran',
          link : '/pembayaran'
        },
        {
          label: 'Pembayaran',
          active: true
        }
      ]" />

    <div class="container">
      <div class="card card-box border-0">
        <div class="card-header border-0 py-4 px-5">
          <div class="d-flex flex-column w-100">
            <span class="text-capitalize mb-1">{{now}}</span>
            <b-row class="mb-1">
              <b-col cols="2">No. RM </b-col>
              <b-col cols="auto">:</b-col>
              <b-col cols="auto">{{ pembayaranList['transklinik'].pasien.nomor_rekam_medis }}</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="2">Nama Pasien </b-col>
              <b-col cols="auto">:</b-col>
              <b-col cols="auto">{{ pembayaranList['transklinik'].pasien.nama }}</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="2">Nama Dokter </b-col>
              <b-col cols="auto">:</b-col>
              <b-col cols="auto">{{ pembayaranList['created_by'].nama }}</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="2">Waktu Masuk </b-col>
              <b-col cols="auto">:</b-col>
              <b-col cols="auto">{{ waktuMasuk  }}</b-col>
            </b-row>
          </div>
        </div>
        <template
          v-if="pembayaranList.status == 'BELUM LUNAS' || pembayaranList.status == 'Belum Lunas' || pembayaranList.status == 'belum lunas'">
          <h3>Belum Lunas</h3>
          <div class="card-body">
            <TablePembayaran @valueChanged="calc" :items="pembayaranList.detail" />
          </div>
        </template>
        <template
          v-if="pembayaranList.status == 'DRAFT' || pembayaranList.status == 'Draft' || pembayaranList.status == 'draft'">
          <h3>Draft</h3>
          <div class="card-body">
            <TablePembayaran @valueChanged="calc" :items="pembayaranList.detail" />
          </div>
        </template>
        <template
          v-if="pembayaranList.status == 'LUNAS' || pembayaranList.status == 'lunas' || pembayaranList.status == 'Lunas'">
          <h3>Lunas</h3>
          <div class="card-body">
            <TablePembayaran @valueChanged="calc" />
          </div>
        </template>

        <div class="card-footer">
          <div class="px-4 py-2 d-flex flex-row justify-content-end">
            <div class="w-50 d-flex flex-column text-capitalize">
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">total</b-col>
                <b-col cols="5">
                  <b-form-input v-model.lazy="total" disabled />
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">potongan</b-col>
                <b-col cols="5">
                  <b-form-input v-model.lazy="potongan" />
                </b-col>
                <b-col cols="auto">%</b-col>
              </b-row>
              <b-row class="d-flex align-items-center w-100 py-2">
                <b-col cols="4">total nett</b-col>
                <b-col cols="5">
                  <b-form-input disabled :value="nett" />
                </b-col>
              </b-row>
              <div class="w-100 mt-2 d-flex">
                <b-button variant="danger" class="text-uppercase mr-3" @click="previewStruk">preview struk</b-button>
                <b-button variant="success" class="text-uppercase mr-3" @click="simpanProsesPembayaran">simpan
                </b-button>
                <b-button variant="primary" class="text-uppercase" @click="bayarModal">bayar</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations
  } from "vuex";
  import startCase from "lodash/startCase";
  import upperCase from "lodash/upperCase";
  import axios from "axios";
  import moment from "moment";
  moment.locale('id');

  export default {
    components: {
      TablePembayaran: () => import("./TablePembayaran.vue")
    },
    data: () => ({
      pembayaranList: [],
      simpanPembayaran: [],
      setPembayaran: [],
      total: null,
      isidata: [],
      potongan: null,
      pembayaranVal: null,
    }),
    computed: {
      nett() {
        const tmp = (this.potongan / 100) * this.total;
        return this.total - tmp;
      },
      now() {
        return moment().format('dddd' + ', ' + "Do MMMM YYYY");
      },
      waktuMasuk() {
        return moment(this.pembayaranList.created_at).format("Do MMMM YYYY HH:mm");
      }
    },
    mounted() {
      this.fetchGetPembayaran();
    },
    methods: {
      ...mapMutations({
        setStrukVal: "struk/SET_STRUK_VAL"
      }),
      calc(val) {
        let total_tmp = 0;
        val.map(item => {
          total_tmp += item.quantity * item.tarif;
        });
        this.total = total_tmp;
      },
      bayarModal() {
        this.$swal({
          title: startCase("Bayar"),
          text: `Apakah anda yakin untuk melakukan pembayaran?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            next();
          } else {
            next(false);
          }
        });
      },
      previewStruk() {
        this.setStrukVal(this.pembayaranVal);
        this.$router.push({
          name: "pembayaran-struk"
        });
      },
      async fetchGetPembayaran() {
        try {
          var isRoute = this.$router.currentRoute.params.bayar_id;
          const res = await axios.get(
            `${this.url_api}/pembayaran/${isRoute}`
          );
          const {
            success,
            data
          } = res.data;
          this.pembayaranList = data;
        } catch (err) {
          // console.log(err);
        }
      },
      async simpanProsesPembayaran() {
        try {
          const res = await axios.post(
            `${this.url_api}/pembayaran/`, {
              detail_pembayaran: this.pembayaranVal
            }
          );
          const {
            success,
            data
          } = res.data;
          this.pembayaranList = data;
          this.$swal({
            title: 'Tambah Data Berhasil',
            text: 'Data berhasil tersimpan',
            icon: 'success',
            confirmButtonText: startCase("ya")
          });
          this.$router.push({
            path: "/pembayaran"
          });
        } catch (err) {
          // console.log(err);
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
  .card {
    .card-header {
      background-color: #eaf9e6;
    }
  }
</style>