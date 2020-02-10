<template>
  <div class="card card-box mb-5">
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <b-form-group label="Konsultasi Selanjutnya:">
              <b-form-radio
                class="my-1"
                v-model="selectedRadio"
                name="some-radios"
                value="14"
              >2 Minggu</b-form-radio>
              <b-form-radio
                class="my-1"
                v-model="selectedRadio"
                name="some-radios"
                value="30"
              >1 Bulan</b-form-radio>
              <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="99">
                <b-input-group class="input-group-seamless" size="sm">
                  <b-form-input
                    v-model="hari"
                    type="number"
                    min="0"
                    placeholder="..."
                    class="col-md-3"
                  ></b-form-input>
                  <span style="margin-left:10px;">hari kemudian</span>
                </b-input-group>
              </b-form-radio>
              <b-form-radio
                class="my-1"
                v-model="selectedRadio"
                name="some-radios"
                value="0"
              >Tidak Membutuhkan Konsultasi</b-form-radio>
            </b-form-group>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-10">
            <b-form-checkbox v-model="checkbox" class="my-3">
              Dengan ini, saya menyatakan bahwa saya telah mengisi data rekam medis dengan lengkap dan benar.
              Saya juga memberikan keterangan yang sejujur - jujurnya mengenai riwayat penyakit dan/atau cidera tubuh
              lain yang dialami oleh pasien. Salinan deklarasi ini berlaku sama kuatnya dan sah seperti aslinya.
            </b-form-checkbox>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      selectedRadio: {},
      hari: 0,
      checkbox: false
    };
  },
  methods: mapActions(["updatePostData", "updateSavingParams"]),
  watch:{
    selectedRadio: function (){
      if (this.selectedRadio != 99)
        this.updatePostData({key:'next_konsultasi', value: this.selectedRadio});
        this.updateSavingParams({key:'is_next_konsul', value: true});
    },
    hari: function (){
      if (this.selectedRadio == 99)
        this.updatePostData({key:'next_konsultasi', value: this.hari});
        this.updateSavingParams({key:'is_next_konsul', value: true});
    },
    checkbox: function (){
      this.updatePostData({key:'agreement', value: this.checkbox});
      this.updateSavingParams({key:'is_agree', value: true});
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #f8f9ff;
}
</style>
