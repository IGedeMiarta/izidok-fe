<template>
  <div>
    <page-title heading="Manajemen Asisten Dokter" :breadcrumb="[
        {
          label: 'Manajemen Asisten Dokter'
        },
        {
          label: 'List Asisten Dokter',
          active: true
        }
      ]" class="layout-gantung ninja-shadow" />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-body">
          <div class="row no-padding">
            <div class="col-md-9 no-padding">
              <div class="form-group col-md-6" style="float:left;">
                <label for="inputEmail4">Nama</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="form-group col-md-6" style="float:left;padding-top:30px;padding-left:0;">
                <b-button variant="first">CARI</b-button>
              </div>
            </div>
            <div class="col-md-3 no-padding">
              <div class="form-group col-md-12" style="padding-top: 30px; padding-left: 0px;">
                <b-button variant="primary" class="float-right" @click="createOperator">TAMBAH ASISTEN DOKTER</b-button>
              </div>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-hover table-hover mb-5">
              <thead>
                <tr class="text-capitalize">
                  <th>no</th>
                  <th>nama asisten dokter</th>
                  <th>email</th>
                  <th>nomer hp</th>
                  <th class="no-sort text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataOperator" :key="item.id">
                  <td>{{index + 1}}</td>
                  <td>{{item.nama}}</td>
                  <td>{{item.user.email}}</td>
                  <td>{{item.user.nomor_telp}}</td>
                  <td class="text-center">
                    <b-link class="btn bg-info text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1"
                      @click="showModal(item)">
                      <font-awesome-icon icon="search" />
                    </b-link>
                    <b-link class="btn bg-danger text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" @click="removeOperator({
                            id: item.id,
                            nama: item.nama
                        })">
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="border-radius:10px;">
        <div class="p-3">
          <b-pagination class="d-flex justify-content-center mt-4" v-model="currentPage" :total-rows="rows"
            :per-page="perPage"></b-pagination>
        </div>
      </div>
      <b-modal ref="modal-operator" hide-footer title="Edit Asisten Dokter">
        <b-form @submit.prevent="submitForm">
          <div class="col-sm-12">
            <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })" style="margin-top:-7px;">
              <label for="" class="text-capitalize">{{form.rawLabel}}</label>
              <label for="" style="color:red"> *</label>
              <b-form-input @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label : form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      "  :state="renderError({ error: form.error })" />
            </b-form-group>
          </div>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
  import startCase from "lodash/startCase";
  import axios from "axios";
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowRight,
    faArrowUp,
    faTrashAlt,
    faEye,
    faEyeSlash,
    faSearch,
    faPencilAlt
  } from "@fortawesome/free-solid-svg-icons";
  import {
    maxLength,
    email,
    numeric,
    sameAs,
    minLength,
    required
  } from "vuelidate/lib/validators";
  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";

  library.add(faArrowRight, faEye,
    faEyeSlash, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

  export default {
    components: {
      "font-awesome-icon": FontAwesomeIcon
    },
    data() {
      return {
        currentPage: 1,
        rows: 100,
        dataOperator: [],
        dataEdit : [],
        perPage: 10,
        formBasicData: null,
        formData: null,
        passwordVisible: false,
        passwordVisible1: false,
      };
    },
    validations: {
      formData: {
        nama_operator: {
          required,
          maxLength: maxLength(50)
        },
        email: {
          required,
          email,
          maxLength: maxLength(50),
          verifyEmail(val) {
            const {
              required: re,
              email: em
            } = this.$v.formData.email;
            if (val === "" || !re || !em) return true;
            return new Promise((resolve, reject) => {
              axios
                .get(`${this.url_api}/email/verify?email=${val}`)
                .then(res => {
                  const {
                    data: {
                      status,
                      message
                    }
                  } = res;
                  resolve(status);
                })
                .catch(err => {
                  if (err.response) {
                    const x = err.response.data;
                    if (x && x.email) {
                      resolve(false);
                    }
                  } else {
                    resolve(true);
                  }
                })
                .finally(() => {
                  const x = "email";
                  this.triggerValidation({
                    label: x,
                    $v: this.$v,
                    $vm: this,
                    rawLabel: x
                  });
                });
            });
          }
        },
        "no._handphone": {
          numeric,
          required,
          maxLength: maxLength(15),
          minLength: minLength(10),
          verifyPhone(val) {
            if (this.timeVerifyPhone) clearTimeout(this.timeVerifyPhone)

            return new Promise((resolve, reject) => {
              this.timeVerifyPhone = setTimeout(() => {
                const {
                  required: re,
                } = this.$v.formData['no._handphone'];
                if (val === "" || !re) resolve(true);
                axios
                  .get(`${this.url_api}/phone/verify?nomor_telp=${val}`)
                  .then(res => {
                    const {
                      data: {
                        status,
                        message
                      }
                    } = res;
                    resolve(status);
                  })
                  .catch(err => {
                    if (err.response) {
                      const x = err.response.data;
                      if (x && x.nomor_telp) {
                        resolve(false);
                      }
                    } else {
                      resolve(true);
                    }
                  })
                  .finally(() => {
                    const x = "no._handphone";
                    this.triggerValidation({
                      label: x,
                      $v: this.$v,
                      $vm: this,
                      rawLabel: x
                    });
                    resolve(true);
                  });
              }, 450);
            });
          },
        },
        password: {
          required,
          maxLength: maxLength(15),
          verifyPassword(val) {
            if (val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
              return true
            } else {
              return false;
            }
          }
        },
        konfirmasi_password: {
          required,
          sameAsPassword: sameAs("password"),
          minLength: minLength(6),
          maxLength: maxLength(15),
        },
      }
    },
    mounted() {
      this.formBasicData = this.setFormBasicData();
      this.formData = this.setFormData();
      this.getOperator();
    },
    methods: {
      submitForm() {

      },
      showModal(item) {
        this.$refs['modal-operator'].show()
        this.dataEdit = item;
        console.log('data edit',this.dataEdit)
      },
      async updateProses(item) {
        try {
          const res = await axios.put(
            `${this.url_api}/operator/${item.user_id}`,

          );
          const {
            status,
            data
          } = res.data;
          if (status) {
            
          }
        } catch (err) {
          alert(err);
        } finally {
        }
      },
      hideModal() {
        this.$refs['modal-operator'].hide()
      },
      setFormData() {
        return this.setFormBasicData().reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setFormBasicData() {
        const tmp = [{
            label: "nama operator",
            placeholder: "Masukkan nama operator",
            type: "text",
            name: "nama",
          },
          {
            label: "email",
            placeholder: "Masukkan email operator",
            type: "email",
            name: "email",
          },
          {
            label: "no. handphone",
            placeholder: "Masukkan nomor handphone Anda",
            name: "nomor_telp",
            maxlength: 15
          },
          {
            label: "password",
            placeholder: "Masukkan password Anda",
            type: "password",
            isType: "password",
            name: "password",
            maxlength: 15
          },
          {
            label: "konfirmasi password",
            placeholder: "Masukkan password Anda sekali lagi",
            type: "password",
            isType: "password",
            name: "password_confirmation",
            maxlength: 15
          }
        ].map((item, index) => ({
          ...item,
          label: item.label.split(" ").join("_"),
          tmpId: index,
          error: null,
          rawLabel: item.label
        }));
        return tmp;
      },
      setValue({
        label,
        rawLabel,
        $event = null
      } = {}) {
        const value = $event;
        this.formData[label] = value && value.trim();
        const confirms = ["password", "konfirmasi_password"];
        if (confirms.includes(label)) {
          confirms.forEach(item => {
            this.triggerValidation({
              label: item,
              $v: this.$v,
              $vm: this,
              rawLabel: item.split("_").join(" ")
            });
          });
        } else {
          this.triggerValidation({
            label,
            $v: this.$v,
            $vm: this,
            rawLabel
          });
        }
      },
      createOperator() {
        this.$router.push('operator/tambah');
      },
      async getOperator() {
        try {
          const res = await axios.get(
            `${this.url_api}/operator`);
          this.dataOperator = res.data.data.operator.data
          console.log(this.dataOperator)
        } catch {

        }
      },
      removeOperator({
        id,
        nama = null
      } = {}) {
        this.$swal({
          text: `Apakah Anda yakin ingin menghapus data pasien ${nama}?`,
          type: "question",
          showCancelButton: true,
          cancelButtonText: startCase("batal"),
          confirmButtonText: startCase("ya")
        }).then(async res => {
          if (res.value) {
            // console.log(res);
            await this.deleteOperator(id);
          }
        });
      },
      async deleteOperator(id) {
        try {
          const res = await axios.delete(`${this.url_api}/operator/${id}`);
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.$swal({
              type: "success",
              title: startCase("deleted"),
              text: startCase("Asisten Dokter berhasil di hapus")
            });
            this.getOperator();
          } else {
            this.$swal({
              type: "error",
              title: startCase("gagal"),
              text: startCase("Asisten Dokter gagal di hapus")
            });
            this.getOperator();
          }
        } catch (err) {
          this.$swal({
            type: "error",
            title: startCase("gagal"),
            text: startCase("pasien gagal di hapus")
          });
        }
      },
    }
  };
</script>
<style scoped lang="css">
  .bg-kuning {
    background: #f7fc6b;
  }

  .bg-kuning,
  .bg-danger,
  .bg-first {
    color: black !important;
  }

  .no-padding {
    padding: 0 !important;
  }

  .page-item.active a {
    background: #3b86ff;
    border: none !important;
  }

  .layout-gantung {
    border-radius: 0px 0px 10px 10px;
    max-height: 250px;
  }

  .ninja-shadow {
    box-shadow: 0px 8px 15px 0px lightgrey;
  }

  table thead tr.text-capitalize th {
    background: #DCE6F1;
  }
</style>