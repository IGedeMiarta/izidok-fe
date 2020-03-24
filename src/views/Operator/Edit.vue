<template>
  <div>
    <div class="app-content--inner p-0 d-flex flex-column">
      <page-title heading="Edit Asisten Dokter" :breadcrumb="[
          {
            label: 'Manajemen pengguna',
            link : '/asisten-dokter'
          },
          {
            label: 'Edit Asisten Dokter',
            active: true
          }
        ]" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-box mb-5">
              <div class="card-header" style="background-color : #d3e8eb">
                <h4>Edit Asisten Dokter</h4>
              </div>
              <div class="card-body">
                <b-form @submit.prevent="updateProses">
                  <b-row class="justify-content-center">
                    <b-col sm="6">
                      <b-form-group  v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize"
                        :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })" style="margin-top:-7px;">
                        <label class="text-capitalize">{{form.rawLabel}}</label>
                        <template v-if="form.rawLabel == 'nama asisten'"> <label style="color:red"> *</label></template>

                        <b-form-input :type="form.type || 'text'"  @input="
                                      setValue({
                                        rawLabel: form.rawLabel,
                                        label: form.label,
                                        $event,
                                        tmpId: form.tmpId
                                      })
                                    " :state="renderError({ error: form.error })" :value="getValue(form.label)" :disabled="form.rawDisabled" :maxlength='form.maxlength'
                          :placeholder="form.placeholder" />
                      </b-form-group>
                      <b-button class="ml-3 text-uppercase" variant="primary" style="font-size:17.5px;float:right"
                        type="submit">
                        simpan
                        <!-- <font-awesome-icon class="mx-auto" icon="caret-down" /> -->
                      </b-button>
                      <b-button class="ml-3 text-uppercase" variant="danger" style="font-size:17.5px;float:right "
                        @click="keluar">
                        keluar
                        <!-- <font-awesome-icon class="mx-auto" icon="caret-down" /> -->
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
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
  import axios from "axios";
    import {
    maxLength,
    email,
    numeric,
    sameAs,
    minLength,
    required
  } from "vuelidate/lib/validators";
  export default {
    data: () => {
      return {
        formBasicData: null,
        formData: null,
        operator_id: null,
        beingSubmit: false,
        data_operator: null
      }
    },
    validations: {
      formData : {
        nama_asisten: {
            required,
            maxLength: maxLength(50)
        },
      }
    },
    beforeRouteLeave(to, from, next) {
      if (!this.beingSubmit) {
        this.$swal({
          title: startCase("keluar"),
          text: `Apakah Anda yakin untuk keluar dari halaman ini?`,
          type: "warning",
          showCancelButton: true,
          cancelButtonText: startCase("tidak"),
          confirmButtonText: startCase("ya")
        }).then(res => {
          if (res.value) {
            next();
          } else {
            next(false);
          }
        });
      } else {
        next();
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.operator_id = this.$router.currentRoute.params.operator_id;
      this.formData = this.setFormData();
      this.getOperator(this.operator_id);
    },
    methods: {
      keluar() {
        this.$router.push({
          name: 'operator-list'
        })
      },
      getOperator(id) {
        return axios.get(`${this.url_api}/operator/${id}`)
          .then((response) => {
            // handle success
             this.data_operator = response.data.data.user;
             this.formData = {
               email : this.data_operator.email,
               nama_asisten : this.data_operator.nama,
               'no._handphone' : this.data_operator.nomor_telp
             }
             console.log(this.formData,'dat')
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
        // this.data_operator = res.data.user;
      },
      emailValidation() {
        const x = {
          email,
          required,
          maxLength: maxLength(50)
        };

        const {
          required: re,
          email: em,
          maxLength: ml
        } = this.$v.formData.email;

        return re && em && ml ? {
            ...x,
            verifyEmail
          } :
          x;
      },
      noTelpValidation() {
        const x = {
          email,
          required,
          maxLength: maxLength(15)
        };

        const {
          required: re,
          maxLength: ml
        } = this.$v.formData['no._handphone'];

        return re && ml ? {
            ...x,
            verifyPhone
          } :
          x;
      },
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setValue({
        rawLabel,
        $event = null
      } = {}) {
        let value = $event;
        const label = rawLabel.split(" ").join("_");
        if (typeof $event === "object") {
          if ($event) {
            const {
              target: {
                value
              }
            } = $event;
            this.formData[label] = value;
          } else {
            this.formData[label] = null;
          }
        } else {
          this.formData[label] = value;
        }
        this.triggerValidation({
          label,
          $v: this.$v,
          $vm: this,
          rawLabel
        });
      },
      async updateProses() {
        try {
          console.log('dat', this.formData);
          const res = await axios.put(
            `${this.url_api}/operator/${this.operator_id}`, {
              nama: this.formData.nama_asisten,
              email: this.formData.email,
              nomor_telp: this.formData['no._handphone'],
            }
          );
          const {
            status,
            data
          } = res.data;
          if (res.data.status == true) {
             this.$swal({
              text: 'Data asisten '+this.formData.nama_asisten+' berhasil disimpan!',
              type: "success",
              confirmButtonText: startCase("ya")
            })
            this.beingSubmit = true;
            this.$router.push({name : 'operator-list'})
          } 
        } catch (err) {
           this.$swal({
              text: 'Nama Asisten Harus diisi!',
              type: "failed",
              confirmButtonText: startCase("ya")
            })
        }
      },
      setFormBasicData() {
        const tmp = [{
            label: "nama asisten",
            placeholder: "Masukkan nama asisten",
            type: "text",
            disabled: false,
            name: "nama_asisten",
            maxlength: 50
          },
          {
            label: "email",
            placeholder: "Masukkan email asisten",
            type: "email",
            name: "email",
            disabled: true,
            maxlength: 50,
          },
          {
            label: "no. handphone",
            placeholder: "Masukkan nomor handphone Anda",
            name: "nomor_telp",
            disabled: true,
            maxlength: 15
          },
        ].map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          rawLabel: item.label,
          rawDisabled: item.disabled
        }));
        return tmp;
      },
    }
  }
</script>