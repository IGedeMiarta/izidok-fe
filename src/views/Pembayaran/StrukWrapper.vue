<template>
  <div>
    <page-title
      heading="Pembayaran"
      :breadcrumb="[
        {
          label: 'Pembayaran',
          link : '/pembayaran'
        },
        {
          label: 'Daftar Pembayaran',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h3 class="text-capitalize">preview struk</h3>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex flex-column">
            <div class="d-flex flex-row">
              <div>
                <button 
                  type="button" 
                  class="btn btn-sm btn-primary text-uppercase"
                  @click="close"
                >
                  tutup
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-success text-uppercase ml-3"
                  @click="cetakStruk"
                >
                  print struk
                </button>
                <button 
                  type="button" 
                  class="btn btn-sm btn-warning text-uppercase ml-3"
                  @click="emailStruk"
                >
                  email struk
                </button>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="d-flex flex-column justify-cotent-center">
                <!-- <Struk class="flex-grow-1" /> -->
                <iframe ref="iframeStruk" src="" frameborder="0" height="600" width="362"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
  components: {
    // Struk: () => import("./Struk.vue")
  },
  data() {
    return {
      pembayaran_id: null,
      afterPrintInjected: false
    }
  },
  computed: {
    ...mapGetters({
      strukVal: "struk/struk_values"
    })
  },
  mounted() {
    this.pembayaran_id = this.$router.currentRoute.params.pembayaran_id;
    this.fetchStruk()
  },
  methods: {
    fetchStruk() {
      axios.get(`${this.url_api}/pembayaran/struk/${this.pembayaran_id}`)
        .then(res => {
          let iframeStrukDoc = this.$refs.iframeStruk.contentWindow.document
          iframeStrukDoc.open('text/html', 'replace');
          iframeStrukDoc.write(res.data);
          iframeStrukDoc.close();
        })
        .catch(error => {
          
        })
    },
    close() {
      this.$router.push({
        name: 'pembayaran-list'
      });
    },
    cetakStruk() {

      let fnAfterPrint = (e) => {
        this.$swal({
          title: startCase("struk berhasil di cetak"),
          text: `Silahkan ambil struk pembayaran anda`,
          type: "success",
          confirmButtonText: startCase("ok")
        });
      };

      if(this.afterPrintInjected == false) {
        if(this.$refs.iframeStruk.contentWindow.onafterprint) {
          this.$refs.iframeStruk.contentWindow.onafterprint = fnAfterPrint
        }
        else {
          this.$refs.iframeStruk.contentWindow.addEventListener('afterprint', fnAfterPrint)
        }

        this.afterPrintInjected = true
      }

      this.$refs.iframeStruk.contentWindow.print()
    },
    emailStruk() {
      console.log('email')
    }
  }
};
</script>
