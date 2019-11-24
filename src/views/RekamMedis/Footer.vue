<template>
  <div class="card card-box mb-5">
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <!-- <label>Konsultasi Selanjutnya:</label> -->
             <b-form-group label="Konsultasi Selanjutnya:">
                <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="A">2 Minggu</b-form-radio>
                <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="B">1 Bulan</b-form-radio>
                <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="D">
                    <b-input-group class="input-group-seamless" size="sm">
                        <b-form-input type="number" min="0" placeholder="..." class="col-md-3"></b-form-input>
                        <span style="margin-left:10px;">hari kemudian</span>
                    </b-input-group>
                </b-form-radio>
                <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="D">Tidak Membutuhkan Konsultasi</b-form-radio>
            </b-form-group>
          </div>
        </div>
         <div class="form-row">
            <div class="form-group col-md-8">
                <b-form-checkbox class="my-3">
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
export default {
  components: {},
  data(){
      return {
          selectedRadio: {}
      }
  }
};
</script>

<style scoped>
.card {
  background-color: #f8f9ff;
}
</style>
