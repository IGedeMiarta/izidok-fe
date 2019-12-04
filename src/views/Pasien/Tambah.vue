<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien'
        },
        {
          label: 'Tambah Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="form-row">
          <div class="form-group col-md-6 pr-3">
              <label for="namalengkap">Nama Lengkap*</label>
              <input type="text" class="form-control" name="namalengkap" id="namalengkap" placeholder="Nama Lengkap">
          </div>
          <div class="form-group col-md-6 pl-3">
              <label for="nohp">No. Handphone</label>
              <input type="text" class="form-control" id="nohp" name="nohp" placeholder="No. Handphone">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-6 pr-3">
              <label for="nik">NIK*</label>
              <input type="text" class="form-control" name="nik" id="nik" placeholder="NIK">
          </div>
          <div class="form-group col-md-6 pl-3">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Email">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-6 pr-3">
              <label for="ttl">Tempat Tanggal Lahir*</label>
              <input type="text" class="form-control" name="ttl" id="ttl" placeholder="Tempat Tanggal Lahir">
          </div>
          <div class="form-group col-md-6 pl-3">
              <label for="asuransi">Nama Penjamin/Asuransi</label>
              <input type="text" class="form-control" id="asuransi" name="asuransi" placeholder="Nama Penjamin/Asuransi">
          </div>
      </div>
      <div class="form-row">
          <div class="col-md-6 pr-3">
            <div class="form-group col-md-6 no-padding" style="float:left">
                <b-form-group label="Jenis Kelamin">
                    <b-form-radio class="my-1" v-model="selectedRadio" name="jeniskelamin" value="pria">Pria</b-form-radio>
                    <b-form-radio class="my-1" v-model="selectedRadio" name="jeniskelamin" value="wanita">Wanita</b-form-radio>
                </b-form-group>
            </div>
            <div class="form-group col-md-6 no-padding" style="float:left">
                <label for="goldarah">Gol. Darah*</label>
                <input type="text" class="form-control" id="goldarah" name="goldarah" placeholder="Gol. Darah">
            </div>
          </div>
          <div class="col-md-6 pl-3">
            <div class="form-group">
                <label for="nomember">No. Member/Polis Asuransi</label>
                <input type="text" class="form-control" id="nomember" name="nomember" placeholder="No. Member/Polis Asuransi">
            </div>
            <div class="form-group">
                <label for="namapj">Nama Penanggung Jawab</label>
                <input type="text" class="form-control" id="namapj" name="namapj" placeholder="Nama Penanggung Jawab">
            </div>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-6 pr-3">
              <label for="alamatrumah">Alamat Rumah*</label>
              <input type="text" class="form-control" name="alamatrumah" id="alamatrumah" placeholder="Alamat Rumah">
          </div>
          <div class="form-group col-md-6 pl-3">
              <label for="nohppj">No. Hp Penanggung Jawab</label>
              <input type="text" class="form-control" id="nohppj" name="nohppj" placeholder="No. Hp Penanggung Jawab">
          </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 pr-3">
          <div class="col-md-4 no-padding" style="float:left;padding-right:15px !important;">
              <label for="alamatrumah">RT/RW*</label>
              <input type="text" class="form-control" name="alamatrumah" id="alamatrumah" placeholder="Alamat Rumah">
          </div>
          <div class="col-md-4 no-padding" style="float:left;padding-left:7.5px !important;padding-right:7.5px !important;">
              <label for="nohppj">Kel/Desa*</label>
              <input type="text" class="form-control" id="nohppj" name="nohppj" placeholder="No. Hp Penanggung Jawab">
          </div>
          <div class="col-md-4 no-padding" style="float:left;padding-left:15px !important;">
              <label for="nohppj">Kecamatan</label>
              <input type="text" class="form-control" id="nohppj" name="nohppj" placeholder="No. Hp Penanggung Jawab">
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 pr-3">
          <label for="inputState">Status Perkawinan*</label>
          <select id="inputState" class="form-control">
              <option value="" selected></option>
              <option value="0">Sudah Kawin</option>
              <option value="1">Sudah Kawin 2X</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 pr-3">
          <label for="inputState">Pekerjaan*</label>
          <select id="inputState" class="form-control">
              <option value="" selected></option>
              <option value="0">Kerja</option>
              <option value="1">Kerja Kerja</option>
          </select>
        </div>
        <div class="col-md-6 pl-3 pt-4">
          <b-button class="ml-3" variant="primary" style="float:right;font-size:22px;">SIMPAN</b-button>
          <b-button class="ml-3" variant="danger" style="float:right;font-size:22px;">KELUAR</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="css">
.no-padding{
  padding: 0 !important;
}
</style>