<template>
  <div>
    <page-title heading="Billing" :breadcrumb="[
        {
          label: 'Billing',
          link: '/billing',
        },
      ]" />
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
                    <div class="card card-box borders-0" style="background-color:#d5f5d6;border-radius:0px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <label class>Paket</label>
                          </div>
                          <div class="col-md-2">
                            <label>: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-2">
                            <label>Status</label>
                          </div>
                          <div class="col-md-2">
                            <label>: <label class="btn-success"
                                style="padding-left: 5px; padding-right: 5px;">Aktif</label></label>
                          </div>
                          <div class="col-md-2">
                            <label>Sisa Kuota</label>
                          </div>
                          <div class="col-md-2">
                            <label>: <label class="btn-success"
                                style="padding-left: 5px; padding-right: 5px;">50</label></label>
                          </div>
                          <div class="col-md-2">
                            <label class>Pembelian</label>
                          </div>
                          <div class="col-md-2">
                            <label>: 15 JAN 2020 10:09</label>
                          </div>
                          <div class="col-md-2">
                            <label class>Mulai Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <label>: 15 JAN 2020 10:09</label>
                          </div>
                          <div class="col-md-2">
                            <label class>Habis Berlaku</label>
                          </div>
                          <div class="col-md-2">
                            <label>: 15 JAN 2020 10:09</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-box borders-0" style="background-color:#cef2f5;border-radius:0px;">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <label>Add-ON</label>
                          </div>
                          <div class="col-md-2">
                            <label>: STARTER-1 (1 BULAN)</label>
                          </div>
                          <div class="col-md-2">
                            <label>Status</label>
                          </div>
                          <div class="col-md-2">
                            <label>: <label
                                style="padding-left: 5px; padding-right: 5px;">Aktif</label></label>
                          </div>
                          <div class="col-md-2">
                            <label>Sisa Kuota</label>
                          </div>
                          <div class="col-md-2">
                            <label>: <label
                                style="background-color:#18d8f6;padding-left: 5px; padding-right: 5px;">20</label></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <button  @click="$router.push('/subskripsi/pilih-paket')" class="btn btn-primary float-right mt-3" style="width:60%">Beli Paket Berlangganan</button>
                  </div>
<!--                  <div class="col-md-6">-->
<!--                    <button class="btn float-left mt-3" style="background-color:#de51d9;color:white;width:60%">Beli-->
<!--                      Kouta ADD-ON</button>-->
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
                      <b-table striped hover :items="items" :fields="fields" ></b-table>
                    </b-tab>
                    <b-tab title="BERAKHIR">
                      <b-table striped hover :items="items" :fields="fields"></b-table>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card card-box mb-2 mt-3" style="border-radius:0px;">
              <div class="card-body">
                <div class="col-md-12 text-center">
                  <strong>RIWAYAT PEMBELIAN</strong>
                </div>
                <DataTableWrapper :perPage="perPage" :currentPage="currentPage" :callbackFunc="fetchListTagihan"
                  @valueChanged="handleValueChanged">
                  <b-table :items="dataTagihan" :fields="fieldList" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                    thead-tr-class="izd-datatable" :no-local-sorting="true">
                    <template v-slot:head()="data">
                      {{ data.label }}
                      <b-input size="sm" class="mt-2 w-70" v-if="data.field.searchable"
                        @input="searchValueChanged($event, data.field.key)" />
                    </template>

                    <template v-slot:cell(jenis_kelamin)="data">
                      {{ jenisKelamin(data.value) }}
                    </template>

                    <template v-slot:cell(status)="data">
                      {{data.value}}
                    </template>
                    <template v-slot:cell(actions)="data">
                      <span>
                           <b-link class="btn text-light font-size-md pl-2 pr-2 btn-sm " @click="detailTagihan(data.item)"
                      style="background-color:#37afe8;">
                      <font-awesome-icon icon="search" style="color:black;" />
                    </b-link>
                      </span>
                      <span >
                          <b-button
                      variant="success"
                      size="sm"
                      v-tooltip="'Halaman Pembayaran'"
                      @click="detailBayar(data.item)"
                      class="btn text-light font-size-md ml-1 pl-2 pr-2 btn-sm"
                      v-if="data.item.status == 'MENUNGGU PEMBAYARAN'"
                      ><font-awesome-icon icon="money-bill-wave"
                    /></b-button>
                      </span>

                    </template>
                  </b-table>
                </DataTableWrapper>
              </div>
            </div>
          </div>
           <b-modal ref="my-modal" title="Detail Paket">
             <div class="row" v-if="this.detail !== null ">
              <div class="col-md-4">
                <strong>Nama Paket</strong>
              </div>
              <div class="col-md-8">
                :  <label class=" ml-3">{{this.detail.produk}}</label>
              </div>

              <div class="col-md-4">
                <strong>Durasi</strong>
              </div>
              <div class="col-md-8">
                : <label class=" ml-3">{{this.detail.periode_berlaku}}</label>
              </div>
              <div class="col-md-4">
                <strong>Fitur</strong>
              </div>
               <div class="col-md-8">
                : <label class=" ml-3">asdasd</label>
              </div>
              <div class="col-md-4">
                <strong>User</strong>
              </div>
               <div class="col-md-8">
                : <label class=" ml-3">asdasd</label>
              </div>
             </div>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button variant="primary" class="float-right" @click="hideModal">
                  Tutup
                </b-button>
              </div>
            </template>
          </b-modal>
             <b-modal ref="lihat-struk">
             <div class="row" v-if="this.detailStruk !== null " style="font-size:14px;">

              <div class="col-md-7">
                <label class="float-left"><strong>Total Pembelian :</strong> Rp. 300.000</label>
              </div>
              <div class="col-md-5">
                 <b-button variant="success" size="sm" class="float-right text-uppercase" @click="hideModal">
                  Lihat Invoice
                </b-button>
              </div>
              <div class="col-md-12">
                <label class="float-left"><strong>Tanggal Pembelian :</strong>   23 Februari 2019</label>
              </div>
              <div class="col-md-12">
                <div class="col-sm- text-center" >
                  <label style="background-color:#ded5d5;padding-left:50px; padding-right:50px; " class="text-danger mt-3 mb-3">Bayar Sebelum 24 Februari 2020 16:30:20</label>
                </div>
              </div>
               <div class="col-md-5">
                 <label class="float-left"><strong>Metode Pembayaran</strong></label>
               </div>
               <div class="col-md-6">
                 <label class="float-left"><strong>:</strong> BCA Virtual Account</label>
               </div>
               <div class="col-md-5">
                 <label class="float-left"><strong>No. Virtual Account</strong></label>
               </div>
               <div class="col-md-6">
                 <label class="float-left"><strong>:</strong> 2081659279107</label>
               </div>

             </div>
             <div slot="modal-footer">
               <div class="align-content-center">
                 <b-button variant="primary mr-2" @click="$router.push('/subskripsi/cara-bayar')">Lihat Cara Pembayaran</b-button>
                 <b-button variant="danger" ref='modal-bataltransaksi' class="btn-link-dark mr-4" @click='closeModalBatalTransaksi'>Batalkan Transaksi</b-button>
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
            key: "WAKTU_PEMBELIAN",
            thStyle: "width: 25%"
          },
          {
            label: 'PAKET',
            key: 'PAKET',
            thStyle: "width: 25%"
          },
          {
            label: 'JUMLAH KOUTA',
            key: 'JUMLAH_KOUTA',
            thStyle: "width: 25%"
          },
          {
            label: 'ACTION',
            key: 'ACTION',
            thStyle: "width: 25%"
          },
        ],
        items: [{
            WAKTU_PEMBELIAN: '2019-10-10',
            PAKET: 'Dickerson',
            JUMLAH_KOUTA: 'Macdonald',
            ACTION: '',
          },
          {
            WAKTU_PEMBELIAN: '2019-10-10',
            PAKET: 'Larsen',
            JUMLAH_KOUTA: 'Shaw'
          },
          {
            WAKTU_PEMBELIAN: '2019-10-10',
            PAKET: 'Geneva',
            JUMLAH_KOUTA: 'Wilson'
          },
          {
            WAKTU_PEMBELIAN: '2019-10-10',
            PAKET: 'Jami',
            JUMLAH_KOUTA: 'Carney'
          }
        ],
        dataTagihan : [],
        detailStruk : null,
        searchValue: [],
        detail : null,
        totalEntries: 0,
        sortBy: "",
        sortDesc: false,
        currentPage: 1,
        rows: 0,
        fromPage: 0,
        toPage: 0,
        perPage: 10,
      }
    },
    watch: {
      currentPage() {
        this.fetchListTagihan();
      },
      perPage() {
        this.fetchListTagihan();
      },
      sortBy() {
        this.fetchListTagihan();
      },
      sortDesc() {
        this.fetchListTagihan();
      },
      searchValue: {
        handler: "fetchListTagihan",
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
              key: "no_tagihan",
              label: "No. Tagihan",
               thStyle: "width: 12%"
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
              key: "tanggal_pembayaran",
              label: "Tanggal Bayar",
              thStyle: "width: 15%"
            },
            {
              key: "status",
              thStyle: "width: 15%"
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
      closeModalBatalTransaksi() {
        this.$swal({
          title: startCase("Batalkan Transaksi"),
          text: `Apakah Anda yakin untuk membatalkan transaksi ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            this.$refs['modal-bataltransaksi'].show()
          } else {
            next(false);
          }
        });
      },
      changePage(page) {
        this.fetchListTagihan(page);
      },
       showModalTagihan() {
        this.$refs['lihat-struk'].show()
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      hideModalTagihan(){
        this.$refs['lihat-struk'].hide()
      },
      detailTagihan(item){
        this.showModalTagihan()
        this.detailStruk = item;
      },
      detailBayar(item){
        this.showModal();
        this.detail = item;
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
      fetchListTagihan () {
        this.totalEntries = 1;
        this.toPage = 1;
        this.fromPage = 1;
        this.rows = 1;
        this.dataTagihan =
         [{
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