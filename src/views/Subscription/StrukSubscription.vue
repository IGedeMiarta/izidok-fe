<template>

    <div class="card" style="border-radius: 0px; align-content: center; align-items: center;">
      <template v-if="dataPaygetDetail.detail.status_billing === 'LUNAS'">
      <b-row>
        <b-col sm="12" class="a">
          <div>
            <b-button
              @click=" downloadInvoice(dataPaygetDetail.detail.billing_id)"
              variant="success"
              size="sm"
              class="text-capitalize mr-2 btn-antrean btn-block mt-3"
            >DOWNLOAD INVOICE</b-button>
          </div>
        </b-col>
      </b-row>
      </template>

      <div class="card-body">
        <b-row>
        <b-col sm="7"  style="text-align: left;" class="mt-1">
           <img fluid :src="require('@/assets/izidok.png')" height="40" width="120">
          <p class="ml-2 mt-5"><strong>Dr. {{ dataPaygetDetail.dokter.nama}}</strong></p>
          <p class="ml-2 "><strong>No. Handphone : {{ dataPaygetDetail.dokter.nomor_telp}}</strong></p>
          <p class="ml-2 "><strong>{{ dataPaygetDetail.dokter.email}}</strong></p>
        </b-col>
        <b-col sm="5"  style="text-align: left; text-align:left; " class="mt-xl-2">
          <span class="h4"><strong>INVOICE</strong></span>
          <p class=" mt-5"><strong>No. Invoice : {{ dataPaygetDetail.detail.transactionNo}}</strong></p>
          <p class=" "><strong>Tanggal Pembelian : {{ moment(dataPaygetDetail.detail.transactionDate).format('Do MMMM YYYY')}}</strong></p>
          <p class=" "><strong>Tanggal Maksimal Pembayaran : {{moment( dataPaygetDetail.detail.transactionExpire).format('Do MMMM YYYY kk:mm:ss ')}}</strong></p>
          <p class=" "><strong>Metode Pembayaran : {{ dataPaygetDetail.paygate.nama}}</strong></p>
          <template v-if="dataPaygetDetail.detail.status_billing === 'LUNAS'">
            <p class=" "><strong>Status Pembayaran :</strong> <label class="btn-success" style="padding:5px;">LUNAS</label></p>
          </template>
          <template v-else>
            <p class=" "><strong>Status Pembayaran :</strong> <label class="btn-danger" style="padding:5px;">MENUNGGU PEMBAYARAN</label></p>
          </template>

        </b-col>
         <b-col sm="12"   style="text-align: left; text-align:left; " class="mt-xl-2">
           <div class="table-responsive-xs">
             <table class="table table-striped table-hover mb-0">
               <thead class="thead-dark">
               <tr class="text-capitalize">
                 <th scope="col">Nama Paket</th>
                 <th scope="col" class="text-center">QTY</th>
                 <th scope="col"  class="text-right">
                  Harga Unit
                 </th>
                 <th scope="col"  class="text-right">
                   Jumlah (Rp)
                 </th>
               </tr>
               </thead>
               <tbody>
                 <template v-if="dataPaygetDetail.detail.status_billing === 'LUNAS'">
                    <img src="@/assets/img/lunas.png" class="status-payment">
                 </template>

                 <template v-else>
                      <img src="@/assets/img/BELUM.png" class="status-payment">
                 </template>
               <tr>
                 <td class="tx-nowrap">{{dataPaygetDetail.detail.paket}}</td>
                 <td class="text-center"> 1</td>
                 <td class="text-right">Rp {{dataPaygetDetail.detail.amount_real.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</td>
                 <td  class="text-right">Rp {{dataPaygetDetail.detail.amount_real.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</td>
               </tr>
               </tbody>
             </table>
           </div>
         </b-col>
          <b-col sm="12"  style="text-align: right;" class="mt-3">
            <b-col sm="12"  style="text-align: right;" class="mt-3">
            <p class="ml-2 "><strong>Subtotal (Rp) : Rp {{dataPaygetDetail.detail.amount_real.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</strong></p>
            </b-col>
            <template v-if="dataPaygetDetail.detail.diskon !== null">
              <b-col sm="12"  style="text-align: right;" class="mt-3">
                <p class="ml-2 "><strong>Potongan (Rp) : Rp {{dataPaygetDetail.detail.diskon.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</strong></p>
              </b-col>
            </template>
            <template v-else>
              <b-col sm="12"  style="text-align: right;" class="mt-3">
                <p class="ml-2 "><strong>Potongan (Rp) : -</strong></p>
              </b-col>
            </template>
            <b-col sm="12"  style="text-align: right;" class="mt-3">
              <p class="ml-2 "><strong>Total (Rp) : Rp {{dataPaygetDetail.detail.amount_disc.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}}</strong></p>
            </b-col>
          </b-col>
        </b-row>
        <b-col sm="12"   style="text-align: right; text-align:right; margin-top: 200px; " >
           <label><strong>customercare@medlinx.co.id, contact center : 021-723-7982</strong></label>
        </b-col>


    </div>
      </div>
</template>

<script>

  import axios from 'axios';
  import moment from "moment";
  moment.locale('id');

  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faHome,
    faUser,
    faSearch,
    faArrowRight,
    faArrowUp,
    faCheck,
    faCheckCircle
  } from "@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeLayers
  } from "@fortawesome/vue-fontawesome";
  import {mapMutations} from "vuex";

  library.add(
    faHome,
    faArrowRight,
    faArrowUp,
    faUser,
    faSearch,
    faCheck,
    faCheckCircle
  );
  export default {
    components: {

    },
    data() {
      return{
        data: [],
        dataPaygetDetail: null,
      }
    },
    mounted() {
      this.getPaygetDetail();
    },
    methods: {
       moment(){
        return moment();
      },
      downloadInvoice(id) {
          // axios.get(`${this.url_api}/invoice/${id}`)
          //   .then(res => {
          //
          //   });
        axios.get(`${this.url_api}/invoice/${id}`, {responseType: 'arraybuffer'})
          .then(response => {
              let blob = new Blob([response.data], { type: 'application/pdf' })
              let link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = 'invoice'+id+'.pdf'
              link.click()
          })
        },
      fieldList() {
        const {
          generateFieldList: g,
          setSearchableAndSortableFieldList: s
        } = this;
        return (
          [
            {
              key: "nama_paket",
              label: "Nama Paket"
            },
            {
              key: "qty",
              label: "QTY"
            },
            {
              key: "harga_unit",
              label: "Harga Unit"
            },
            {
              key: "jumlah",
              label: "Jumlah (Rp)"
            },

          ] |> (z => g({ field: z }))
        );
      },
      async getPaygetDetail() {
        try {
          var isRoute = this.$router.currentRoute.params.bill_id;
          const res = await axios.get(`${this.url_api}/detailpembayaran/${isRoute}`)
          this.dataPaygetDetail = res.data.data;
          const { success, data } = res.data.data.detail;
          if (success) {
            const { data: tmpData, total } = data;
            const { total: totalEntries, to: toPage, from: fromPage } = tmpData;
            this.data = [
              ...tmpData.map((item, index) => {
                return {
                  nama_paket: item.nama,
                  qty: '1',
                  harga_unit: item.amount_real,
                  jumlah: item.amount_real * 1
                };
              })
            ];
            this.rows = total;
            return this;
          }

        } catch {}
      },
    }
  }

  </script>

  <style scoped>
  .status-payment {
    position: absolute;
    opacity: 0.3;
    margin-left: 300px;
    margin-right: auto;
  }
  @media only screen and (max-width: 900px) and (min-width:768px) {
    .status-payment {
      margin-left: 170px;
    }
  }
  @media only screen and (max-width: 772px) and (min-width:270px) {
    .status-payment {
      margin-left: 50px;
      position: relative;
    }
  }
  </style>