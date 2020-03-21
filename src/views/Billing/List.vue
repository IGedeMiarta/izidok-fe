<template>
  <div>
    <page-title heading="Subskripsi" :breadcrumb="[
        {
          label: 'Subskripsi',
          link: '/subskripsi',
        },
          {
          label: 'List Subskripsi',
          active: true
        }
      ]" />
    <template v-if="this.adaTagihan === true">
    <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12  text-center" style="font-size:16px;">
              <div class="card-body bg-sunny-morning">
                <strong style="color:black;">Anda masih memiliki tagihan yang belum terbayar. Klik <button @click="goto('ScrollActivate')" style="color: #3b86ff; border: 0px; background: transparent" ><strong>DISINI</strong></button> untuk melihat lebih lanjut</strong>
              </div>
          </div>
        </div>
      </div>
    </div>
    </template>
    <div class="app-content--inner p-0 d-flex flex-column">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12 text-uppercase" style="font-size:13px;">
            <div class="card card-box mb-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 text-center">
                    <h3>PAKET ANDA SAAT INI</h3>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-box borders-0 mt-2" style="background-color:#f2f2f2;border-radius:10px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <label class>Paket</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: - </label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <label>: {{dataActive.data.paket}}</label>
                            </template>
                          </div>
                          <div class="col-md-2">
                            <label>Status</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: -</label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <label>: <label class="btn-primary"
                                              style="padding-left: 5px; padding-right: 5px; border-radius: 4px;">Aktif</label></label>
                            </template>

                          </div>
                          <div class="col-md-2">
                            <label>Sisa Kuota</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: -</label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <label>: <label class="btn-primary"
                                              style="padding-left: 6px; padding-right: 5px;  border-radius: 4px;">{{dataActive.data.sisa_kouta}}</label> dari {{dataActive.data.jumlah_kouta}}</label>
                            </template>
                          </div>
                          <div class="col-md-2">
                            <label class>Pembelian</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: -</label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <template v-if="dataActive.data.pembelian === null">: -</template>
                              <template v-else><label>: {{moment(dataActive.data.pembelian).format('Do MMMM YYYY kk:mm:ss ') }}</label></template>
                            </template>
                          </div>
                          <div class="col-md-2">
                            <label class>Mulai Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: -</label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <label>: {{ moment(dataActive.data.mulai_berlaku).format('Do MMMM YYYY kk:mm:ss ')}}</label>
                            </template>
                          </div>
                          <div class="col-md-2">
                            <label class>Habis Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <template v-if="dataActive.message === 'package not found'">
                              <label>: -</label>
                            </template>
                            <template v-if="dataActive.message !== 'package not found'">
                              <label>: {{dataActive.data.habis_berlaku}}</label>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--                    <div class="card card-box borders-0" style="background-color:#cef2f5;border-radius:0px;">-->
                    <!--                      <div class="card-body">-->
                    <!--                        <div class="row">-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>Add-ON</label>-->
                    <!--                          </div>-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>: STARTER-1 (1 BULAN)</label>-->
                    <!--                          </div>-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>Status</label>-->
                    <!--                          </div>-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>: <label-->
                    <!--                                style="padding-left: 5px; padding-right: 5px;">Aktif</label></label>-->
                    <!--                          </div>-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>Sisa Kuota</label>-->
                    <!--                          </div>-->
                    <!--                          <div class="col-md-2">-->
                    <!--                            <label>: <label-->
                    <!--                                style="background-color:#18d8f6;padding-left: 5px; padding-right: 5px;">20</label></label>-->
                    <!--                          </div>-->
                    <!--                        </div>-->
                    <!--                      </div>-->
                    <!--                    </div>-->
                  </div>
                  <div class="col-md-9 mt-2">
                    <button  @click="$router.push('/subskripsi/pilih-paket')" class="btn btn-primary float-right mt-3" style="width:60%">Beli Paket Berlangganan</button>
                  </div>
                  <!--                  <div class="col-md-6">-->
                  <!--                    <button class="btn float-left mt-3" style="background-color:#de51d9;color:white;width:60%">Beli-->
                  <!--                      Kuota ADD-ON</button>-->
                  <!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card card-box mb-2 mt-3" style="border-radius:0px;">
              <div class="card-body">
                <div class="col-md-12 text-center">
                  <strong>DETAIL PAKET IZIDOK</strong>
                </div>
                <div class="col-md-12">
                  <b-tabs card>
                    <b-tab title="BELUM AKTIF" active>
                      <table class="table table-striped table-hover mb-0">
                        <thead class="thead-light">
                        <tr class="text-capitalize">
                          <th scope="col">Waktu Pembelian</th>
                          <th scope="col" >
                            Paket
                          </th>
                          <th scope="col" >
                            jumlah Kuota
                          </th>
                          <th scope="col">
                            Action
                          </th>
                        </tr>
                        </thead>
                        <tbody class="list">
                        <tr v-for="(data) in dataNotActive" :key="data.id">
                          <td class="text-wrap">
                            <div class="align-box-row">
                              <div class="d-flex align-items-center">
                                <span> {{ data.waktu_pembelian == null ? "-" : moment(data.waktu_pembelian).format('Do MMMM YYYY kk:mm:ss ')  }}</span>
                              </div>
                            </div>
                          </td>
                          <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                  {{ data.nama }}
                                </span>
                            </div>
                          </td>
                          <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                  {{ data.jumlah_kouta }} visit
                                </span>
                            </div>
                          </td>
                          <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                   <b-button
                                     @click="detailNotActive(data.id)"
                                     variant="primary"
                                     size="sm"
                                     v-tooltip="'Detail Paket'"
                                   ><font-awesome-icon icon="search"
                                   /></b-button>
                                </span>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <b-pagination class="d-flex justify-content-center mt-4" v-model="currentPageNotActive" :total-rows="rowsBelumAktif"
                                    :per-page="perPageBelumAktif"></b-pagination>
                    </b-tab>
                    <b-tab title="BERAKHIR">
                      <table class="table table-striped table-hover mb-0">
                        <thead class="thead-light">
                        <tr class="text-capitalize">
                          <th scope="col">Waktu Pembelian</th>
                          <th scope="col" >
                            Paket
                          </th>
                          <th scope="col" >
                            Mulai Berlaku
                          </th>
                          <th scope="col" >
                            Habis Berlaku
                          </th>
                          <th scope="col" >
                            Action
                          </th>
                        </tr>
                        </thead>
                        <tbody class="list">
                        <tr v-for="(data) in dataPaketExpired" :key="data.id">
                          <td class="text-wrap">
                            <div class="align-box-row">
                              <div class="d-flex align-items-center">
                                <span>{{ moment(data.waktu_pembelian).format('Do MMMM YYYY kk:mm:ss ')  }} </span>
                              </div>
                            </div>
                          </td>
                          <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                  {{ data.nama }}
                                </span>
                            </div>
                          </td>
                           <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                  {{ data.mulai_berlaku }}
                                </span>
                            </div>
                          </td>
                            <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                  {{ data.habis_berlaku }}
                                </span>
                            </div>
                          </td>
                          <td class="text-wrap">
                            <div class="align-box-row">
                                <span class="d-block">
                                   <b-button
                                     @click="detailNotActive(data.id)"
                                     variant="primary"
                                     size="sm"
                                     v-tooltip="'Detail Paket'"
                                   ><font-awesome-icon icon="search"
                                   /></b-button>
                                </span>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <b-pagination class="d-flex justify-content-center mt-4" v-model="currentPageExpired" :total-rows="rowsExpired"
                                    :per-page="perPageExpired"></b-pagination>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>
          <div ref="ScrollActivate" class="col-md-12">
            <div class="card card-box mb-2 mt-3" style="border-radius:0px;">
              <div class="card-body">
                <div class="col-md-12 text-center">
                  <strong>RIWAYAT PEMBELIAN</strong>
                </div>
                <DataTableWrapper :perPage="perPage" :currentPage="currentPage" :callbackFunc="fetchRiwayatPembelian"
                                  @valueChanged="handleValueChanged">
                  <b-table :items="dataRiwayatPembelian" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                           thead-tr-class="izd-datatable" :no-local-sorting="true">
                    <template v-slot:head()="data">
                      {{ data.label }}
                      <b-input size="sm" class="mt-2 w-70" v-if="data.field.searchable"
                               @input="searchValueChanged($event, data.field.key)" />
                    </template>
                    <template v-slot:cell(status_text)="data">
                      <template v-if="data.item.status_text == 'Menunggu Pembayaran'">
                        <strong class="text-uppercase" style="color:blue;">{{data.value}}</strong>
                      </template>
                      <template v-else-if="data.item.status_text == 'Lunas'">
                        <strong class="text-uppercase">{{data.value}}</strong>
                      </template>
                      <template v-else-if="data.item.status_text == 'Batal'">
                        <strong class="text-uppercase" style="color:red">{{data.value}}</strong>
                      </template>
                    </template>
                    <template v-slot:cell(actions)="data">
                      <template v-if=" data.item.status_text ==='Batal' || data.item.status_text ==='Gagal'  ">
                        <span>
                           <b-link class="btn text-light font-size-md pl-2 pr-2 btn-sm " v-tooltip="'Lihat Struk'"  disabled @click="detailBayar(data.item)"
                                   style="background-color:#37afe8;">
                                    <font-awesome-icon icon="search" style="color:black;" />
                           </b-link>
                         </span>
                      </template>
                      <template v-else>
                        <span>
                           <b-link class="btn text-light font-size-md pl-2 pr-2 btn-sm " v-tooltip="'Lihat Struk'"  @click="detailBayar(data.item)"
                                   style="background-color:#37afe8;">
                                    <font-awesome-icon icon="search" style="color:black;" />
                           </b-link>
                         </span>
                      </template>
                      <template v-if=" data.item.status_text ==='Menunggu Pembayaran'  ">
                      <span >
                          <b-button
                            variant="success"
                            size="sm"
                            v-tooltip="'Detail Pembayaran'"
                            @click="detailTagihan(data.item)"
                            class="btn text-light font-size-md ml-1 pl-2 pr-2 btn-sm"
                          ><font-awesome-icon icon="money-bill-wave"
                          /></b-button>
                      </span>
                      </template>

                    </template>
                  </b-table>
                </DataTableWrapper>
              </div>
            </div>
          </div>
          <b-modal ref="modalNotActive" title="Detail Paket">
            <div class="row" >
              <div class="col-md-4">
                <strong>Nama Paket</strong>
              </div>
              <div class="col-md-8">
                :  <label class=" ml-3">{{belumAktif.nama}}</label>
              </div>

              <div class="col-md-4">
                <strong>Durasi</strong>
              </div>
              <div class="col-md-8">
                : <label class=" ml-3">{{belumAktif.durasi}}</label>
              </div>
              <div class="col-md-4">
                <strong>Fitur</strong>
              </div>
              <div class="col-md-8">
                : <label class=" ml-3">

                    Dashboard Monitoring
                    <br>
                    e-Rekam Medis
                    <template v-if="belumAktif.nama == 'Essential-1' || belumAktif.nama == 'Essential-12'">
                      ({{250 * belumAktif.paket_bln}} visit pasien)                      
                    </template>
                    <template v-else-if="belumAktif.nama == 'Premium-1' || belumAktif.nama == 'Premium-12'">
                      Unlimited
                    </template>
                    <template v-else>
                      ({{75 * belumAktif.paket_bln}} visit pasien)
                    </template>
                    <br>
                    Daftar Pasien
                    <br>
                    Registrasi Pasien
                    <br>
                    Manajemen Antrian
                    <br>
                    Manajemen Tarif
                    <br>
                    Manajemen Asisten Dokter
                    <br>
                    Pembayaran
                    <br>
                    Engagement Pasien Via Email

                </label>
              </div>
              <div class="col-md-4">
                <strong>User</strong>
              </div>
              <div class="col-md-8">
                : <label class=" ml-3">1 Dokter, 1 Asisten Dokter</label>
              </div>
            </div>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button variant="primary" class="float-right" @click="hideModalNotActive">
                  Tutup
                </b-button>
              </div>
            </template>
          </b-modal>
          <b-modal  ref="modal-bataltransaksi">
            <div class="row" v-if="this.detailStruk !== null " style="font-size:14px;">

              <div class="col-md-7">
                <label class="float-left"><strong>Total Pembelian :</strong> Rp {{parseInt(dataDetailRiwayatPembelian.detail.transactionAmount).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</label>
              </div>
              <div class="col-md-5">
                <b-button variant="success" size="sm" class="float-right text-uppercase" @click="ToInvoice(dataDetailRiwayatPembelian.detail.billing_id)">
                  Lihat Invoice
                </b-button>
              </div>
              <div class="col-md-12">
                <label class="float-left"><strong>Tanggal Pembelian :</strong> {{
                  moment(dataDetailRiwayatPembelian.detail.transactionDate).format('Do MMMM YYYY')
                  }}</label>
              </div>
              <div class="col-md-12">
                <div class="col-sm- text-center" >
                  <label style="background-color:#ded5d5;padding-left:50px; padding-right:50px; " class="text-danger mt-3 mb-3">Bayar Sebelum {{
                    moment(dataDetailRiwayatPembelian.detail.transactionExpire).format('Do MMMM YYYY kk:mm:ss ')
                    }}</label>
                </div>
              </div>
              <div class="col-md-5">
                <label class="float-left"><strong>Metode Pembayaran</strong></label>
              </div>
              <div class="col-md-6">
                <label class="float-left"><strong>:</strong> {{dataDetailRiwayatPembelian.paygate.nama}}</label>
              </div>
              <div class="col-md-5">
                <label class="float-left"><strong>No. Virtual Account</strong></label>
              </div>
              <div class="col-md-6">
                <label class="float-left"><strong>:</strong> {{dataDetailRiwayatPembelian.detail.customerAccount}}</label>
              </div>

            </div>
            <div slot="modal-footer">
              <div class="align-content-center">
                <b-button variant="primary mr-2" @click="caraBayar(dataDetailRiwayatPembelian.detail.billing_id)">Lihat Cara Pembayaran</b-button>
                <b-button variant="danger" rclass="btn-link-dark mr-4" @click='closeModalBatalTransaksi(dataDetailRiwayatPembelian.detail.id)'>Batalkan Transaksi</b-button>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import debounce from "lodash/debounce";
  import axios from "axios";
  import moment from "moment";
  moment.locale('id');
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowRight,
    faArrowUp,
    faTrashAlt,
    faEye,
    faEyeSlash,
    faSearch,
    faPencilAlt,
    faMoneyBillWave
  } from "@fortawesome/free-solid-svg-icons";
  import startCase from "lodash/startCase";
  library.add(faArrowRight, faEye,   faMoneyBillWave,
    faEyeSlash, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

  export default {
    components: {
      DataTableWrapper: () => import("../../components/DataTableWrapper")
    },
    data() {
      return {
        fields: [{
          label: 'WAKTU PEMBELIAN',
          key: "waktu_pembelian",
          thStyle: "width: 25%"
        },
          {
            label: 'PAKET',
            key: 'PAKET',
            thStyle: "width: 25%"
          },
          {
            label: 'JUMLAH KUOTA',
            key: 'jumlah_kouta',
            thStyle: "width: 25%"
          },
          {
            label: 'ACTION',
            key: 'action',
            thStyle: "width: 25%"
          },
        ],
        dataTagihan : [],
        dataDetailRiwayatPembelian: [],
        dataRiwayatPembelian : [],
        dataNotActive : [],
        dataActive : [],
        dataExpired : [{
          nama: null,
        }],
        detailStruk : null,
        checkDataInvoice : [],
        belumAktif : [],
        searchValue: [],
        adaTagihan : false,
        detail : null,
        totalEntries: 0,
        sortBy: "",
        sortDesc: false,
        currentPage: 1,
        rows: 0,
        fromPage: 0,
        toPage: 0,
        perPage: 10,
        dataPaketExpired : [],
        currentPageExpired: 1,
        perPageExpired: 5,
        rowsExpired : 0,
        currentPageNotActive: 1,
        perPageBelumAktif : 5,
        rowsBelumAktif: 0,
        fromPageBelumAktif: 0,
        toPageBelumAktif: 0,
      }
    },
    async mounted() {
      this.cekPaket();
      this.fetchListNotActive();
      this.fetchListExpired();
      this.fetchActive();
      await this.checkBilling();
    },
    watch: {
      currentPageNotActive(){
        this.fetchListNotActive()
      },
      currentPageExpired(){
        this.fetchListExpired();
      },
      currentPage() {
        this.fetchRiwayatPembelian();
      },
      perPage() {
        this.fetchRiwayatPembelian();
      },
      sortBy() {
        this.fetchRiwayatPembelian();
      },
      sortDesc() {
        this.fetchRiwayatPembelian();
      },
      searchValue: {
        handler: "fetchRiwayatPembelian",
        deep: true
      }
    },
    computed: {
      fieldList() {
        const {
          generateFieldList: g,
          setSearchableAndSortableFieldList: s
        } = this;
        const r = val => Boolean(/(actions)\b/gi.test(val) ? !1 : 1);
        return (
          [{
            key: "nomor_tagihan",
            label: "No. Tagihan",
            thStyle: "width: 18%"
          },
            {
              key: "produk",
              label: "Produk",
              thStyle: "width: 15%"
            },
            {
              key: "periode_berlaku",
              label: "Periode Berlaku",
              thStyle: "width: 15%"
            },
            {
              key: "total_pembayaran",
              label: "Total Bayar",
              thStyle: "width: 13%"
            },
            {
              key: "tanggal_bayar",
              label: "Tanggal Bayar",
              thStyle: "width: 15%",
              class: ""
            },
            {
              key: "status_text",
              label: "status",
              thStyle: "width: 15%",
            },
            {
              key: "actions",
              thStyle: "width: 12%"
            },
          ] |> (v => s({
            field: v,
            customFunc: r
          })) |> (z => g({
            field: z
          }))
        );
      }
    },
    methods: {
      goto(refName){
          var element = this.$refs[refName];
          console.log(element);
          var top = element.offsetTop;
          window.scrollTo(0, top);

      },
      async checkBilling(){
        try {
           const res = await axios.get(
            `${this.url_api}/billing/package-unpaid`
          );
          this.checkDataInvoice = res.data;
          console.log(this.checkDataInvoice);
        } catch {
          
        }
      },
      moment(){
        return moment();
      },
      async cekPaket() {
        try {
          const res = await axios.get(
            `${this.url_api}/cekPaket`
          );

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
        } catch (err) {
          // console.log(err);
        }
      },
      closeModalBatalTransaksi($id) {
        this.$swal({
          title: startCase("Batalkan Transaksi"),
          text: `Apakah Anda yakin untuk membatalkan transaksi ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            var id_billing = $id
            axios.delete(`${this.url_api}/cancelsubscribe/${id_billing}`)
              .then(res => {
                this.$swal({
                  title: startCase("Transaksi Anda Berhasil dibatalkan!"),
                  type: "success",
                  confirmButtonText: startCase("OK")
                }).then(res => {
                  if (res.value) {
                        this.$refs['modal-bataltransaksi'].hide()
                         this.$router.go(`/subskripsi`);
                  } else {

                  }
                });
              });
          } else {

          }
        });
      },
      async fetchListNotActive() {
        try {
          const res = await axios.get(
            `${this.url_api}/billing/package?page=${this.currentPageNotActive}`
          );
          this.dataNotActive = res.data.data.data;
          // this.dataNotActive = [
          //     ...dat.map((item, index) => {
          //       return {
          //         ...item,
          //         pkt_bln : parseInt(item.durasi.replace(" Bulan", ""))
          //       };
          //     })
          //   ];
          this.rowsBelumAktif = res.data.data.total;
          
        } catch (err) {
          // console.log(err);
        }
      },
      caraBayar(id ) {
        this.$router.push({
          name: "subskripsi-bayar",
          params: {
            bill_id: id
          }
        });

      },
      fetchActive() {
        axios.get(`${this.url_api}/billing/package-active`)
          .then(res => {
            this.dataActive = res.data
          });
      },
      async fetchListExpired() {
        try {
          const res = await axios.get(
            `${this.url_api}/billing/package-expired?page=${this.currentPageExpired}`
          );
          this.dataPaketExpired = res.data.data.data;
          this.rowsExpired = this.data.data.total
        } catch (err) {
          // console.log(err);
        }
      },
      determineParameter() {
        const {
          searchValue,
          sortBy,
          sortDesc
        } = this;
        let v = "";
        searchValue.map(item => {
          const x =
            (item.key === "produk" && "produk") || item.key;
          v += `&${x}=${item.value}`;
        });

        if (sortBy) {
          v += `&column=${sortBy}&order=${sortDesc ? "desc" : "asc"}`;
        }
        return v;
      },
      async fetchRiwayatPembelian() {
        try {
          const res = await axios.get(
            `${this.url_api}/billing?limit=${this.perPage}&page=${
              this.currentPage
            }${this.determineParameter()}`
          );
          const { success, data } = res.data;
          if (success) {
            const { total } = data;
            const {
              data: listRiwayatPembelian,
              total: totalEntries,
              to: toPage,
              from: fromPage
            } = data;
            this.totalEntries = totalEntries;
            this.toPage = toPage;
            this.fromPage = fromPage;
            let statusText = ["Menunggu Pembayaran","Lunas","Gagal","Batal"]
            let tglBayar = "-"
            this.dataRiwayatPembelian = [
              ...listRiwayatPembelian.map((item, index) => {
                if(item.tanggal_bayar === null){
                  item.tanggal_bayar = tglBayar
                }
                if(item.status === 0) {
                  this.adaTagihan = true
                }
                return {
                  ...item,
                  no: (this.currentPage - 1) * this.perPage + index + 1,
                  status_text : statusText[item.status],
                };
              })
            ];
            this.rows = data.total;
            return this;
          }
        } catch (err) {
          // console.log(err);
        }
      },
      changePage(page) {
        this.fetchListTagihan(page);
      },
      showModalTagihan() {
        this.$refs['modal-bataltransaksi'].show()
      },
      showModalNotActive() {
        this.$refs['modalNotActive'].show()
      },
      hideModalNotActive() {
        this.$refs['modalNotActive'].hide()
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      ToInvoice(item) {
        this.detailStruk = item;
        this.$router.push({
          name: "struk-subskripsi",
          params: {
            bill_id: this.detailStruk
          }
        });
      },
      detailTagihan(item){
        this.showModalTagihan()
        this.detailStruk = item;

        axios.get(`${this.url_api}/detailpembayaran/${this.detailStruk.id}`)
          .then(res => {
            this.dataDetailRiwayatPembelian = res.data.data
          });

      },
      detailNotActive(item){
        this.showModalNotActive()
        var i = item;
        axios.get(`${this.url_api}/billing/package/${i}`)
          .then((res) => {
            let dat = res.data.data;
            console.log('dat',dat)
            this.belumAktif = 
            {
              ...dat,
              paket_bln : parseInt(dat.durasi.replace(" Bulan", ""))
            }
          });

      },
      detailBayar(item){
        this.detailStruk = item;
        this.$router.push({
          name: "struk-subskripsi",
          params: {
            bill_id: this.detailStruk.id
          }
        });
      },
      handleValueChanged({
                           perPage,
                           currentPage
                         }) {
        perPage && (perPage |> (_ => (this.perPage = _)));
        currentPage && (currentPage |> (_ => (this.currentPage = _)));
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
      fetchListTagihan () {
        this.totalEntries = 1;
        this.toPage = 1;
        this.fromPage = 1;
        this.rows = 1;
        this.dataTagihan = [{
            id : 1,
            no_tagihan: "IZID1123",
            produk: "STARTER 1",
            periode_berlaku: "1 BULAN",
            total_pembayaran: "RP. 121.000",
            tanggal_pembayaran: "27/02/2020",
            status: "LUNAS",
          },
            {
              id : 2,
              no_tagihan: "IZID1124",
              produk: "STARTER 2",
              periode_berlaku: "12 BULAN",
              total_pembayaran: "RP. 121.000",
              tanggal_pembayaran: "27/02/2020",
              status: "MENUNGGU PEMBAYARAN",
            },
          ];
        return this;
      }
    }
  }
</script>

