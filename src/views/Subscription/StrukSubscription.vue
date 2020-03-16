<template>

    <div class="card " style="border-radius: 0px;">
      <div class="card-body">
        <b-row>
        <b-col sm="5"  style="text-align: left;" class="mt-3">
           <img fluid :src="require('@/assets/izidok.png')" height="40" width="120">
          <p class="ml-2 mt-5"><strong>Dr. {{ dataPaygetDetail.dokter.nama}}</strong></p>
          <p class="ml-2 "><strong>No. Handphone : {{ dataPaygetDetail.dokter.nomor_telp}}</strong></p>
          <p class="ml-2 "><strong>{{ dataPaygetDetail.dokter.email}}</strong></p>
        </b-col>
        <b-col sm="7"  style="text-align: left; text-align:left; " class="mt-xl-4">
          <span class="h4"><strong>INVOICE</strong></span>
          <p class=" mt-5"><strong>No. Invoice : {{ dataPaygetDetail.detail.transactionNo}}</strong></p>
          <p class=" "><strong>Tanggal Pembelian : {{ dataPaygetDetail.detail.transactionDate}}</strong></p>
          <p class=" "><strong>Tanggal Maksimal Pembayaran : {{ dataPaygetDetail.detail.transactionExpire}}</strong></p>
          <p class=" "><strong>Metode Pembayaran : {{ dataPaygetDetail.paygate.nama}}</strong></p>
          <template v-if="dataPaygetDetail.detail.status_billing === 'LUNAS'">
            <p class=" "><strong>Status Pembayaran :</strong> <button class="btn-success">LUNAS</button></p>
          </template>
          <template v-else>
            <p class=" "><strong>Status Pembayaran :</strong> <button class="btn-danger">MENUNGGU PEMBAYARAN</button></p>
          </template>

        </b-col>
         <b-col sm="12"   style="text-align: left; text-align:left; " class="mt-xl-4">
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
               <tr>
                 <td class="tx-nowrap">{{dataPaygetDetail.detail.paket}}</td>
                 <td class="text-center"> 1</td>
                 <td class="text-right">Rp. {{dataPaygetDetail.detail.amount_real}}</td>
                 <td  class="text-right">Rp. {{dataPaygetDetail.detail.amount_real}}</td>
               </tr>
               </tbody>
             </table>

           </div>
         </b-col>
          <b-col sm="12"  style="text-align: right;" class="mt-3">
            <b-col sm="12"  style="text-align: right;" class="mt-3">
            <p class="ml-2 "><strong>Subtotal (Rp) : {{dataPaygetDetail.detail.amount_real}}</strong></p>
            </b-col>
            <template v-if="dataPaygetDetail.detail.diskon !== null">
              <b-col sm="12"  style="text-align: right;" class="mt-3">
                <p class="ml-2 "><strong>Potongan (Rp) : {{dataPaygetDetail.detail.diskon}}</strong></p>
              </b-col>
            </template>
            <template v-else>
              <b-col sm="12"  style="text-align: right;" class="mt-3">
                <p class="ml-2 "><strong>Potongan (Rp) : -</strong></p>
              </b-col>
            </template>
            <b-col sm="12"  style="text-align: right;" class="mt-3">
              <p class="ml-2 "><strong>Total (Rp) : {{dataPaygetDetail.detail.amount_disc}}</strong></p>
            </b-col>
          </b-col>



        </b-row>


    </div>
  </div>
</template>

<script>

  import moment from "moment";
  import axios from 'axios';
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