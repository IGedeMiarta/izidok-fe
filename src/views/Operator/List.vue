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
            <div class="form-group col-md-12" style="padding-top: 30px; padding-left: 0px;">
              <b-button variant="primary" class="float-right" @click="showcreateOperator">TAMBAH ASISTEN</b-button>
            </div>
          </div>
          <div class="col-md-12 no-padding">
            <table class="table table-hover table-hover mb-5">
              <thead>
                <tr class="text-capitalize">
                  <th>nama asisten</th>
                  <th>email</th>
                  <th>no. handphone</th>
                  <th>Terakhir Aktif</th>
                  <th class="no-sort text-center">Actions</th>
                  <!-- <th class="no-sort text-center">Status</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in dataOperator" :key="item.id">
                  <td>{{item.nama}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.nomor_telp}}</td>
                  <td>{{item.last_active}}</td>

                  <td class="text-center">
                    <b-link class="btn text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" @click="editOperator({id : item.id})"
                      style="background-color:yellow;">
                      <font-awesome-icon icon="pencil-alt" style="color:black;" />
                    </b-link>
                    <b-link class="btn bg-danger text-light font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" @click="removeOperator({
                            id: item.id,
                            nama: item.nama
                        })">
                      <font-awesome-icon icon="trash-alt" />
                    </b-link>
                  </td>
                  <!-- <td class="text-center">Aktif
                    <toggle-button style="margin-top:8px;margin-left:5px;" v-model="status"
                      :labels="{ checked: 'On', unchecked: 'OFF' }" :width="60" :color="{
                            checked: '#3c44b1',
                            unchecked: '#f83245',
                            disabled: '#CCCCCC'
                          }" />
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <b-modal ref="modal-operator" hide-footer title="Tambah Asisten">
        <b-form @submit.prevent="submitInputDataOperator">
          <div class="col-sm-12">
            <b-form-group v-for="form in formBasicData" :key="form.tmpId" class="text-capitalize" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })" style="margin-top:-7px;">
              <label for="" class="text-capitalize">{{form.rawLabel}}</label>
              <label for="" style="color:red"> *</label>

              <template v-if="form.isType === 'password'">
                <b-input-group>
                  <b-input-group-text slot="append" class="border-left-0" v-if="form.name == 'password' "
                    @click="switchVisibilityPassword">
                    <font-awesome-icon v-if="passwordVisible == false" icon="eye" />
                    <font-awesome-icon v-else icon="eye-slash" />
                  </b-input-group-text>
                  <b-input-group-text slot="append" class="border-left-0" v-if="form.name == 'password_confirmation' "
                    @click="switchVisibilityPasswordConfirmation">
                    <font-awesome-icon v-if="passwordVisible1 == false" icon="eye" />
                    <font-awesome-icon v-else icon="eye-slash" />
                  </b-input-group-text>
                  <b-form-input :type="form.type || 'text'" class="border-right-0" @input="
                                      setValue({
                                        rawLabel: form.rawLabel,
                                        label: form.label,
                                        $event,
                                        tmpId: form.tmpId
                                      })
                                    " :state="renderError({ error: form.error })" :maxlength='form.maxlength'
                    :placeholder="form.placeholder" />
                </b-input-group>
              </template>
              <template v-else>
                <b-form-input @input="
                        setValue({
                          rawLabel: form.rawLabel,
                          label : form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      " :state="renderError({ error: form.error })" :maxlength="form.maxlength" />
              </template>
            </b-form-group>
            <b-button class="ml-3 text-uppercase" variant="primary" style="font-size:17.5px;float:right" type="submit">
              simpan
              <!-- <font-awesome-icon class="mx-auto" icon="caret-down" /> -->
            </b-button>
            <b-button class="ml-3 text-uppercase" variant="danger" @click="hideModal"
              style="font-size:17.5px;float:right ">
              batal
              <!-- <font-awesome-icon class="mx-auto" icon="caret-down" /> -->
            </b-button>
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
  import {
    ToggleButton
  } from "vue-js-toggle-button";
  library.add(faArrowRight, faEye,
    faEyeSlash, faArrowUp, faTrashAlt, faSearch, faPencilAlt);

  export default {
    components: {
      "font-awesome-icon": FontAwesomeIcon,
      // "toggle-button": ToggleButton
    },
    data() {
      return {
        currentPage: 1,
        rows: 100,
        dataOperator: [],
        perPage: 10,
        formBasicData: null,
        formData: null,
        status: null,
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
      editOperator({ id } = {}) {
       console.log('editOperator',id)
      if (id) {
        this.$router.push({
          name: "operator-edit",
          params: {
            operator_id: id
          }
        });
      }
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
      submitInputDataOperator() {
        const {
          formBasicData
        } = this;
        if (formBasicData.every(item => item.error !== null && !item.error)) {
          this.addOperator();
        } else {
          formBasicData.map(item => {
            this.triggerValidation({
              label: item.label,
              $v: this.$v,
              $vm: this
            });
          });
        }
      },
      showcreateOperator() {
        var res = axios.get(`${this.url_api}/checkavailop`)
        if(res.status == true){
          this.$refs['modal-operator'].show()
        } else {
           this.$swal({
              text: `Klinik sudah memiliki Asisten Dokter`,
              type: "warning",
              confirmButtonText: startCase("ya")
            })
        }
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
            maxlength: 50
          },
          {
            label: "email",
            placeholder: "Masukkan email operator",
            type: "email",
            name: "email",
            maxlength: 50,
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
      switchVisibilityPassword() {
        this.formBasicData[3].type == 'password' ? this.formBasicData[3].type = 'text' : this.formBasicData[3].type =
          'password';
        if (this.formBasicData[3].type == 'text') {
          this.passwordVisible = true;
        } else if (this.formBasicData[3].type == 'password') {
          this.passwordVisible = false;
        }
      },
      switchVisibilityPasswordConfirmation() {
        this.formBasicData[4].type == 'password' ? this.formBasicData[4].type = 'text' : this.formBasicData[4].type =
          'password';
        if (this.formBasicData[4].type == 'text') {
          this.passwordVisible1 = true;
        } else if (this.formBasicData[4].type == 'password') {
          this.passwordVisible1 = false;
        }
      },
      async addOperator() {
        try {
          const {
            formData,
            formBasicData
          } = this;
          const tmpPostData = this.formBasicData.reduce((obj, item) => {
            const {
              label,
              name
            } = item;
            obj[name] = formData[label];
            return obj;
          }, {});
          const postData = {
            ...tmpPostData
          };
          const res = await axios.post(
            `${this.url_api}/operator`,
            postData
          );
          const {
            status,
            data
          } = res.data;
          if (status) {
            this.hideModal();
            this.$swal({
              text: `Asisten ${res.data.data.user.nama} Berhasil ditambahkan`,
              type: "success",
              confirmButtonText: startCase("ya")
            })
            this.$router.push({
              name: "operator-list"
            });
          }
        } catch (err) {
          // console.log(err);
        }
      },
      hideModal() {
        this.formData = {
          nama_operator: "",
          email: "",
          'no._handphone': "",
          password: "",
          konfirmasi_password: ""
        }
        this.$refs['modal-operator'].hide()
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
            this.$swal({
              text: `Asisten ${nama} berhasil dihapus`,
              type: "success",
              confirmButtonText: startCase("ya")
            })
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