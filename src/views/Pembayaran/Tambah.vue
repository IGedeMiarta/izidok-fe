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
          <h3 class="m-4" style="margin-bottom:0 !important;">Belum Lunas</h3>
          <div class="card-body">
            <TablePembayaran @valueChanged="calc" @layananDuplicateErrorState="layananDuplicateError = $event" :items="pembayaranDetails" />
          </div>
        </template>
        <template
          v-if="pembayaranList.status == 'LUNAS' || pembayaranList.status == 'lunas' || pembayaranList.status == 'Lunas'">
          <h3 class="m-4" style="margin-bottom:0 !important;">Lunas</h3>
          <div class="card-body">
            <TablePembayaran @valueChanged="calc" @layananDuplicateErrorState="layananDuplicateError = $event" />
          </div>
        </template>

        <div class="card-footer">
          <div class="px-4 py-2 d-flex flex-row justify-content-end">
            <b-container>
              <b-row>
                <b-col cols="6" offset="6">
                  <b-form-row class="d-flex align-items-center w-100 py-2">
                    <b-col cols="4">Total</b-col>
                    <b-col cols="7">
                      <money v-model="total" v-bind="money" class="form-control text-right" disabled />
                    </b-col>
                  </b-form-row>
                  <b-form-row class="d-flex align-items-center w-100 py-2">
                    <b-col cols="4">Diskon</b-col>
                    <b-col cols="7">
                      <b-input-group append="%">
                        <b-form-input v-model.lazy="potongan" @keypress="isNumber($event)" :disabled="assistantRole" class="text-right" />
                      </b-input-group>
                    </b-col>
                  </b-form-row>
                  <b-form-row class="d-flex align-items-center w-100 py-2">
                    <b-col cols="4">Total Nett</b-col>
                    <b-col cols="7">
                      <money :value="nett" v-bind="money" class="form-control text-right" disabled />
                    </b-col>
                  </b-form-row>
                  <b-form-row class="d-flex align-items-right w-100 py-2">
                    <b-col cols="11">
                      <!-- <b-button variant="danger" class="text-uppercase mr-3" @click="previewStruk">preview struk</b-button> -->
                      <b-button variant="danger" class="text-uppercase mr-3" @click="kembali" v-if="assistantRole">kembali</b-button>
                      <b-button variant="success" class="text-uppercase mr-3" @click="simpanPembayaran" v-if="!assistantRole">simpan</b-button>
                      <b-button variant="primary" class="text-uppercase" @click="bayarModal">bayar</b-button>
                    </b-col>
                    </b-form-row>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="modalMetodePembayaran" title="Pilih Metode Pembayaran Anda" ok-only>
      <vue-select :options="['Cash']" v-model="metodePembayaran"></vue-select>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right ml-2"
            @click="bayarPembayaran"
            :disabled="!metodePembayaran"
          >
            Lanjutkan Pembayaran
          </b-button>
          <b-button
            variant="danger"
            size="sm"
            class="float-right"
            @click="$bvModal.hide('modalMetodePembayaran')"
          >
            Batal
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from "vuex";
  import startCase from "lodash/startCase";
  import upperCase from "lodash/upperCase";
  import axios from "axios";
  import moment from "moment";
  moment.locale('id');
  import { Money } from 'v-money';

  export default {
    components: {
      TablePembayaran: () => import("./TablePembayaran.vue"),
      "vue-select": () => import("vue-select"),
      Money
    },
    data: () => ({
      money: {
        decimal: "",
        thousands: ",",
        prefix: "Rp. ",
        suffix: "",
        precision: 0,
        masked: false
      },
      pembayaranList: [],
      total: null,
      potongan: null,
      pembayaranVal: null,
      pembayaranDetails: [],
      postData: {
        pembayaran_id: null,
        total: 0,
        potongan: 0,
        total_nett: 0,
        detail_pembayaran: []
      },
      metodePembayaran: 'Cash',
      layananDuplicateError: false
    }),
    computed: {
      ...mapGetters(["assistantRole"]),
      nett() {
        return this.total - ((this.potongan / 100) * this.total);
      },
      now() {
        return moment().format('dddd' + ', ' + "Do MMMM YYYY");
      },
      waktuMasuk() {
        return moment(this.pembayaranList.created_at).format("Do MMMM YYYY HH:mm");
      }
    },
    watch: {
      potongan(newVal) {
        this.postData.potongan = newVal;
        this.postData.total_nett = this.nett;
      }
    },
    mounted() {
      this.fetchGetPembayaran();
    },
    methods: {
      ...mapMutations({
        setStrukVal: "struk/SET_STRUK_VAL"
      }),
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
          evt.preventDefault();;
        }

        if(parseInt(this.potongan + evt.key) > 100 || parseInt(this.potongan + evt.key) < 0) {
          evt.preventDefault();
        }

        return true;
      },
      calc(val) {
        let total_tmp = 0;
        let detail_pembayaran = [];

        val.forEach(item => {
          total_tmp += item.quantity * item.tarif;
          detail_pembayaran.push({
            kode_layanan: item.kode_layanan,
            nama_layanan: item.nama_layanan.nama_layanan,
            tarif: item.tarif,
            quantity: item.quantity,
          })
        });

        this.total = total_tmp;

        this.postData.pembayaran_id = this.pembayaranList.id;
        this.postData.total = this.total;
        this.postData.potongan = this.potongan;
        this.postData.total_nett = this.nett;
        this.postData.detail_pembayaran = detail_pembayaran;
      },
      bayarModal() {
        let detPem = this.postData.detail_pembayaran;
        let status = [];

        detPem.forEach(item => {
          if (item.kode_layanan == '') {
            status.push(false);
            this.$swal({
              type: "error",
              title: startCase("gagal"),
              text: startCase("Seluruh kolom harus diisi!")
            });
          }else{
            status.push(true);
          }
        });

        if(this.layananDuplicateError) {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("Layanan Tidak Boleh Sama")
          });
          return;
        }
        
        if (status.indexOf(false) < 0) {
          this.$swal({
            title: startCase("Bayar"),
            text: `Apakah Anda yakin untuk melakukan pembayaran?`,
            type: "warning",
            showCancelButton: true,
            cancelButtonText: startCase("tidak"),
            confirmButtonText: startCase("ya")
          }).then(res => {
            if (res.value) {
              this.$bvModal.show('modalMetodePembayaran');
              // TODO: tampil popup pilihan metode pembayaran
            }
          });
        }
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
            status,
            data
          } = res.data;

          if(status == false || data.status == "LUNAS") {
            this.$router.push({name: "pembayaran-list"})
          }

          this.pembayaranList = data;
          this.potongan = !data.potongan ? 0 : data.potongan
          data.detail.forEach((item, i) => {
            this.pembayaranDetails.push({
              no: i+1,
              kode_layanan: item.kode_layanan,
              nama_layanan: item.nama_layanan,
              tarif: item.tarif,
              quantity: item.quantity,
              subtotal: item.subtotal_tarif
            })
          })
        } catch (err) {
          // console.log(err);
        }
      },
      async simpanPembayaran() {
        let detPem = this.postData.detail_pembayaran;
        let status = [];

        detPem.forEach(item => {
          if (item.kode_layanan == '') {
            status.push(false);
            this.$swal({
              type: "error",
              title: startCase("gagal"),
              text: startCase("Seluruh kolom harus diisi!")
            });
          }else{
            status.push(true);
          }
        });
        
        if (status.indexOf(false) < 0) {
          try {
            const res = await axios.post(
              `${this.url_api}/pembayaran/detail`, 
              this.postData
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
        }
      },
      async bayarPembayaran() {
        this.$bvModal.hide('modalMetodePembayaran');

        try {
          await axios.post(
            `${this.url_api}/pembayaran/detail`, 
            this.postData
          );
          
          await axios.put(
            `${this.url_api}/pembayaran/${this.pembayaranList.id}`, 
            {status:"LUNAS"}
          );

          this.$swal({
            title: 'Pembayaran Berhasil',
            icon: 'success',
            confirmButtonText: startCase("ya")
          });
          this.$router.push(`/pembayaran/struk/${this.pembayaranList.id}`)
        } catch (err) {
          // console.log(err);
        }
      },
      kembali() {
        this.$router.push({
          name: 'pembayaran-list'
        });
      }
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