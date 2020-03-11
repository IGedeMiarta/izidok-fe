<template>
  <div>
    <page-title heading="Manajemen Dokter Praktik Mandiri" :breadcrumb="[
        {
          label: 'Manajemen Dokter Praktik Mandiri',
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
                <div class="hello">
                  <picture-input
                    ref="pictureInput"
                    @change="onChangeImage"
                    width="150"
                    height="150"
                    accept="image/jpeg,image/png"
                    size="10"
                    buttonClass="btn"
                    plain
                    radius="50"
                   >
                  </picture-input>
                  <label>Maks. 1 MB, File: jpeg, jpg, png</label>
                </div>
              </template>


            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <b-form-group label-for="input-1">
                  <label >Nama Dokter</label>
                  <label  style="color:red"> *</label>
                  <b-form-input id="input-1" type="text" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group :state="getDataError({ rawLabel: 'jenis kelamin' })" :invalid-feedback="
                  renderInvalidFeedback({
                    validationDesc: blindlyGetData({
                      rawLabel: 'jenis kelamin'
                    })
                  })
                ">
                  <label >{{ renderLabel({label: 'Jenis kelamin'  }) }}</label>
                  <label style="color:red"> *</label>
                  <b-form-radio-group stacked @change="
                    setValue({
                      rawLabel: 'jenis kelamin',
                      $event
                    })
                  " class="text-capitalize" :options="[
                    { text: 'laki-laki', value: 1 },
                    { text: 'perempuan', value: 0 }
                  ]" :disabled="disabledForm()" :checked="getValue('jenis kelamin')">
                  </b-form-radio-group>
                </b-form-group>
                <b-form-group label-for="input-1">
                  <label >No. Handphone</label>
                  <label  style="color:red"> *</label>
                  <b-form-input id="input-1" type="text" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Email" label-for="input-1">
                  <b-form-input type="email" disabled required />
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Spesialisasi" label-for="input-1">
                  <b-form-input id="input-1" type="text" disabled>
                  </b-form-input>
                </b-form-group>
                <b-form-group label="No. SIP" label-for="input-1">
                  <b-form-input id="input-1" type="text">
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Alamat Praktek" label-for="input-1">
                  <b-form-textarea id="input-1" rows="3" max-rows="6">
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
                  <vue-select :options="provinces" @input="getCity"
                    v-model="tempat.provinsi" />
                </b-form-group>
                <b-form-group label="kota" class="text-capitalize" style="position: relative"
                  :state="getDataError({ rawLabel: 'kota' })" :invalid-feedback="
              renderInvalidFeedback({
                validationDesc: blindlyGetData({
                  rawLabel: 'kota'
                })
              })
            ">
                  <vue-select :options="cities" v-model="tempat.kota" @input="setDataTempat"
                    />
                </b-form-group>
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
  export default {
       components: {
         PictureInput,
      "vue-select": () => import("@/components/VueSelect.vue")
    },
    data: () => {
      return {
        imageProps: { width: 75, height: 75 },
        provinces: [],
        checkValueNik: null,
        cities: [],
        tempat: {
          provinsi: null,
          kota: null,
        }
      }
    },
    async mounted() {
      this.getProvince();
    },
    methods: {
      onChangeImage (image) {
        console.log('New picture selected!')
        if (image) {
          console.log('Picture loaded.')
          this.image = image
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      },
      disabledForm() {
        return this.formType === "detail";
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
          }
        } catch (error) {
          console.error(error);
        }
      },
    }
  }
</script>