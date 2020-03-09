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
            <h3 class="text-capitalize">struk pembayaran</h3>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-center">
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
              <div class="d-flex flex-column justify-cotent-center w-100">
                <!-- <Struk class="flex-grow-1" /> -->
                <iframe ref="iframeStruk" src="" frameborder="0" :style="iframeStrukStyle"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <b-modal id="modalEmailPasien" title="Masukkan Email Untuk Mengirimkan Struk" ok-only>
      <div role="group">
        <label for="emailPasien">Email <span class="text-danger">*</span></label>
        <b-form-input 
          id="emailPasien"
          aria-describedby="emailPasien-help emailPasien-feedback"
          :state="emailError == ''"
          v-model="emailPasien"
        ></b-form-input>

        <b-form-invalid-feedback id="emailPasien-feedback" v-if="emailError != ''">
          {{ emailError }}
        </b-form-invalid-feedback>
      </div>

      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right ml-2"
            @click="sendEmail"
            :disabled="emailError != ''"
          >
            Kirim Email
          </b-button>
        </div>
      </template>
    </b-modal>
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
      afterPrintInjected: false,
      iframeStrukStyle: {
        height: '600px',
        width: '362px',
        margin: '1em auto',
        display: 'block'
      },
      emailPasien: null,
      emailValidation: {
        required: false,
        format: false,
      }
    }
  },
  watch: {
    emailPasien(newVal) {
      this.emailValidation.required = (newVal != '');
      this.emailValidation.format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newVal);
    }
  },
  computed: {
    ...mapGetters({
      strukVal: "struk/struk_values"
    }),
    emailError() {
      if(this.emailValidation.required == false) {
        return "Email Harus Diisi"
      }
      else if(this.emailValidation.format == false) {
        return "Format Email Tidak Sesuai"
      }
      else return "";
    }
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
          text: `Silahkan ambil struk pembayaran Anda`,
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
      axios.get(`${this.url_api}/pembayaran/pasien-email/${this.pembayaran_id}`)
        .then(res => {
          this.emailPasien = res.data;
        })
        .catch()
        .finally(() => {
          this.$bvModal.show('modalEmailPasien')
        });
    },
    sendEmail() {
      axios.get(`${this.url_api}/pembayaran/struk/${this.pembayaran_id}?email=${this.emailPasien}`)
        .then(res => {
          this.$swal({
            title: `Struk berhasil dikirimkan ke alamat email '${this.emailPasien}'`,
            type: "success",
            confirmButtonText: startCase("ok")
          });

          this.$bvModal.hide('modalEmailPasien')
        });
    }
  }
};
</script>
