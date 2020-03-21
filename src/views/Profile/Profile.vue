<template>
  <div>
    <page-title heading="Profil Dokter Praktik" :breadcrumb="[
        {
          label: 'Profil Dokter Praktik',
          link: '/profile',
          active: true
        },
      ]" class="layout-gantung ninja0-shadow" />
    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">

          <div class="col-md-12 no-padding">
            <div class="col-md-12 text-center">
              <template>
                <picture-input
                  :customStrings="{
                    change: 'Ubah Foto',
                    remove: 'Hapus Foto',
                    drag: 'Klik untuk memilih file foto',
                     fileSize: 'File maksimal foto',
                     fileType: 'Jenis file ini tidak didukung'
                   }"

                  ref="pictureInput" @change="onChangeImage" width="180" height="180"
                  accept="image/jpeg,image/png" size="1" buttonClass="btn btn-primary button primary"
                  removeButtonClass="btn btn-secondary button secondary" radius="50" z-index="0"
                  :disabled="btnDisable == true"  :removable="true"
                  :prefill="dataProfile.foto_profile">
                </picture-input>
                <label>Maks. 1 MB, File: jpeg, jpg, png</label>
              </template>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <b-form-group label-for="input-1">
                  <label>Nama Dokter</label>
                  <label style="color:red"> *</label>
                  <b-form-input v-model="dataProfile.nama" maxlength="50" :disabled="btnDisable == true" id="input-1"
                    type="text" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group :state="getDataError({ rawLabel: 'jenis kelamin' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'jenis kelamin'
                    })
                  })
                ">
                  <label>{{ renderLabel({label: 'Jenis kelamin'  }) }}</label>
                  <label style="color:red"> *</label>
                  <b-form-radio-group v-model="dataProfile.jenis_kelamin" stacked @change="
                    setValue({
                      rawLabel: 'jenis kelamin',
                      $event
                    })

                  " class="text-capitalize" :options="[
                    { text: 'laki-laki', value: 1 },
                    { text: 'perempuan', value: 0 }
                  ]" :disabled="btnDisable == true" :checked="getValue('jenis kelamin')">
                  </b-form-radio-group>
                </b-form-group>
                <b-form-group label-for="input-1">
                  <label>No. Handphone</label>
                  <label style="color:red"> *</label>
                  <b-form-input v-model="dataProfile.nomor_telp" maxlength="15" :disabled="btnDisable == true"
                    id="input-1" type="text" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Email" label-for="input-1">
                  <b-form-input v-model="dataProfile.email" disabled type="email" required />
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Spesialisasi" label-for="input-1">
                  <b-form-input v-model="dataProfile.klinik.spesialisasi.nama" disabled
                    id="input-1" type="text">
                  </b-form-input>
                </b-form-group>
                <b-form-group label="No. SIP" label-for="input-1">
                  <b-form-input v-model="dataProfile.klinik.nomor_ijin" :disabled="btnDisable == true" id="input-1"
                    type="text" maxlength="50">
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Alamat Praktek" label-for="input-1">
                  <b-form-textarea v-model="dataProfile.klinik.alamat" :disabled="btnDisable == true" id="input-1"
                    rows="3" max-rows="6" maxlength="50">
                  </b-form-textarea>
                </b-form-group>
                <b-form-group label="provinsi" class="text-capitalize" style="position: relative"
                  :state="getDataError({ rawLabel: 'provinsi' })" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'provinsi'
                })
              })
            ">
                  <vue-select v-model="tempat.provinsi" :disabled="btnDisable == true" :options="provinces"
                    @input="getCity" />
                </b-form-group>
                <b-form-group label="kota" class="text-capitalize" style="position: relative"
                  :state="getDataError({ rawLabel: 'kota' })" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'kota'
                })
              })
            ">
                  <vue-select :disabled="btnDisable == true" :options="cities" v-model="tempat.kota"
                    @input="setDataTempat" />
                </b-form-group>
                <template v-if="btnDisable == true">
                  <b-button @click="btnDisable = false" type="submit" variant="primary"
                    class="text-capitalize my-2 float-right">EDIT PROFIL</b-button>
                </template>
                <template v-else>
                  <b-button type="submit" @click="updateProses" variant="primary"
                    class="text-capitalize my-2 float-right">SIMPAN PROFIL</b-button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PictureInput from 'vue-picture-input'
  import startCase from "lodash/startCase";
  import axios from 'axios'
  export default {
    components: {
      PictureInput,
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data: () => {
      return {
        dataProfile: [],
        btnDisable: true,
        imageProps: {
          width: 75,
          height: 75
        },
        provinces: [],
        checkValueNik: null,
        cities: [],
        provinces: [],
        image : null,
        tempat: {
          provinsi: {id:null},
          kota: {id:null},
        }
      }
    },
    async mounted() {
      await this.getProvince();
      await this.getProfile();
      this.cekPaket();
    },
    methods: {
      async cekPaket() {
        try {
          const res = await axios.get(
            `${this.url_api}/cekPaket`
          );

          if(res.data !== null) {
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
          }
        } catch (err) {
          // console.log(err);
        }
      },
      async getProfile() {
        try {
          var profile = this.$store.state.user.id
          const res = await axios.get(`${this.url_api}/user/${profile}`)
          this.dataProfile = res.data.data;
          
          this.provinces.forEach(prov => {
            if(prov.id == this.dataProfile.klinik.provinsi) {
              this.tempat.provinsi = {
                ...prov,
                label: prov.provinsi_nama
              }
            }
          });

          if(this.tempat.provinsi.id) {
            this.getCity();
          }
        } catch (e) {

        }
      },
      onChangeImage(image) {
        if (image) {
          let profile = this.$store.state.user.id;
          let formData = new FormData();
          formData.set('foto_profile', this.$refs.pictureInput.file);

          axios.post(`${this.url_api}/user/upload-foto/${profile}`, formData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
        }
      },
      disabledForm() {
        return this.formType === "detail";
      },
      async updateProses() {
        try {
          var profile = this.$store.state.user.id;
          const res = await axios.put(`${this.url_api}/user/${profile}`, {
            nama: this.dataProfile.nama,
            nomor_telp: this.dataProfile.nomor_telp,
            jenis_kelamin: this.dataProfile.jenis_kelamin,
            nomor_ijin: this.dataProfile.klinik.nomor_ijin,
            provinsi: this.tempat.provinsi.id,
            kota: this.tempat.kota.id,
            alamat: this.dataProfile.klinik.alamat,
          })
          if (res.data.status) {
            this.$swal({
              type: "success",
              title: startCase("Simpan Profil"),
              text: startCase("Simpan Profil berhasil.")
            });
          }
          this.btnDisable = true;
        } catch {

        }
      },
      setDataTempat() {
        this.dataProfile.klinik['provinsi'] = this.tempat.provinsi.id
        this.dataProfile.klinik['kota'] = this.tempat.kota.id
      },
      getProvince() {
        axios.get(`${this.url_api}/province`)
          .then((response) => {
            // handle success
            this.provinces = response.data.data.provinsi.map(val => ({
              ...val,
              label: `${val.provinsi_nama}`,
            }));
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
      },
      async getCity() {
        try {
          var val;
          if (this.tempat.provinsi == '' || this.tempat.provinsi == null) {
            val = '';
          } else {
            val = this.tempat.provinsi.id;
            const res = await axios.get(`${this.url_api}/getcitybyprovince/${val}`)
            // handle success
            this.cities = res.data.data.kota.map(val => ({
              ...val,
              label: `${val.nama}`,
            }));

            if(this.dataProfile.klinik.kota) {
              this.cities.forEach(city => {
                if(city.id == this.dataProfile.klinik.kota) {
                  this.tempat.kota = city;
                }
              });
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
      dataURLtoFile(dataurl, filename) {
        const arr = dataurl.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n) {
          u8arr[n] = bstr.charCodeAt(n)
          n -= 1 // to make eslint happy
        }
        return new File([u8arr], filename, { type: mime })
      }
    }
  }
</script>