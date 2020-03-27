<template>
  <div class="user-box ml-2">
    <a href="javascript:void(0);" class="p-0 d-flex align-items-center" id="userBoxPopover">
      <div class="d-block p-0 avatar-icon-wrapper">
        <span class="badge badge-circle badge-success p-top-a">Online</span>
        <div class="avatar-icon rounded">
          <template v-if="dataProfile.foto_profile === null">
            <img src="@/assets/img/avatars/avatar3.jpg" alt="" />
          </template>
          <template v-else>
            <img :src="dataProfile.foto_profile" class="img-pp">
          </template>

        </div>
      </div>
      <div class="d-none d-md-block pl-2">
        <div class="font-weight-bold">
          {{ dataProfile.nama }}
        </div>
        <span class="text-black-50">
          <template v-if="userRole == 'Operator'">
            Asisten Dokter
          </template>
          <template v-else>
            {{ userRole }}
          </template>

        </span>
      </div>
      <span class="pl-3">
        <font-awesome-icon icon="angle-down" class="opacity-5" />
      </span>
    </a>
    <b-popover triggers="click blur" placement="bottom" @show="showPopoverIntegrations" ref="userBoxPopover"
      target="userBoxPopover">
      <ul class="list-group list-group-flush text-left bg-transparent">
        <li class="list-group-item rounded-top">
          <ul class="nav nav-pills nav-pills-hover flex-column">
            <li class="d-block d-md-none font-weight-bold">{{ dataProfile.nama }}</li>
            <li class="d-block d-md-none nav-item text-black-50">
              <template v-if="userRole == 'Operator'">
                Asisten Dokter
              </template>
              <template v-else>
                {{ userRole }}
              </template>
            </li>
            <li class="d-block d-md-none nav-item"><hr></li>
            <!-- <li
              class="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center"
            >
              <div>
                Profile options
              </div>
              <div class="ml-auto font-size-xs">
                <a href="javascript:void(0);">
                  <font-awesome-icon icon="plus-circle" />
                </a>
              </div>
            </li> -->
            <template v-if="!initPage">
              <template v-if="userRole !== 'Operator'">
                <li class="nav-item text-capitalize">
                  <a class="nav-link" href="javascript:void(0);" @click="pageProfile">
                    Account Setting
                  </a>
                </li>
              </template>
              <li class="nav-item text-capitalize">
                <a class="nav-link" href="javascript:void(0);" @click="showModal">
                  ubah password
                </a>
              </li>
            </template>
            <li class="nav-item text-capitalize">
              <a class="nav-link" href="javascript:void(0);" @click="logout">
                log out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </b-popover>
    <b-modal ref="ubah-password" hide-footer title="Ubah Password">
      <b-form row v-on:submit.prevent="submitForm">
        <div class="col-sm-12">
          <b-form-group v-for="form in formBasicData" :key="form.tmpId" :invalid-feedback="
                      renderInvalidFeedback({
                        validationDesc: form['validation-desc']
                      })
                    " :state="renderError({ error: form.error })">
            <label for="">{{form.labelName}}</label>
            <b-input-group>
              <b-input-group-text slot="append" class="border-left-0" v-if="form.labelName == 'Password Lama' "
                @click="switchVisibilityPassword">
                <font-awesome-icon v-if="passwordVisible == false" icon="eye" />
                <font-awesome-icon v-else icon="eye-slash" />
              </b-input-group-text>

              <b-input-group-text slot="append" class="border-left-0" v-if="form.labelName == 'Password Baru' "
                @click="switchVisibilityPasswordConfirmation">
                <font-awesome-icon v-if="passwordVisible1 == false" icon="eye" />
                <font-awesome-icon v-else icon="eye-slash" />
              </b-input-group-text>

              <b-input-group-text slot="append" class="border-left-0"
                v-if="form.labelName == 'Konfirmasi Password Baru' " @click="switchVisibilityPasswordConfirmation1">
                <font-awesome-icon v-if="passwordVisible2 == false" icon="eye" />
                <font-awesome-icon v-else icon="eye-slash" />
              </b-input-group-text>


              <b-form-input @input="
                        setValuePassword({
                          rawLabel: form.rawLabel,
                          label : form.label,
                          $event,
                          tmpId: form.tmpId
                        })
                      " :state="renderError({ error: form.error })" :placeholder="form.placeholder"
                :maxlength="form.maxlength" :type="form.type " />
            </b-input-group>
          </b-form-group>
          <b-button class="ml-3 text-uppercase" variant="success" style="font-size:17.5px;float:right " type="submit">
            simpan
          </b-button>
          <b-button class="ml-3 text-uppercase" variant="danger" style="font-size:17.5px;float:right "
            @click='hideModal'>
            Batal
          </b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faPlusCircle,
    faChartBar,
    faAngleDown,
    faEye,
    faEyeSlash,
    //   faFacebook,
    //   faTwitter
  } from "@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";
  import {
    faDribbble
  } from "@fortawesome/free-brands-svg-icons";
  import axios from 'axios';
  import startCase from "lodash/startCase";
  library.add(
    faDribbble,
    faPlusCircle,
    faChartBar,
    faEye,
    faEyeSlash,
    faAngleDown
    //   faFacebook,
    //   faTwitter
  );
  import {
    required,
    minLength,
    maxLength,
    sameAs,
    email,
    numeric,
    helpers
  } from "vuelidate/lib/validators";
  import {
    mapGetters
  } from "vuex";

  export default {
    data: () => ({
      dataProfile: [],
      formData: null,
      formBasicData: null,
      passwordVisible: false,
      passwordVisible1: false,
      passwordVisible2: false,

    }),
    components: {
      "font-awesome-icon": FontAwesomeIcon
    },
    validations() {
      return {
        formData: {
          password_lama: {
            required,
            maxLength: maxLength(15),
            // verifyPassword(val) {
            //   if (val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
            //     return true
            //   } else {
            //     return false;
            //   }
            // }
          },
          password_baru: {
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
          konfirmasi_password_baru: {
            required,
            sameAsPassword: sameAs("password_baru"),
            minLength: minLength(6),
            maxLength: maxLength(15),
          },
        }
      };
    },
    mounted() {
      this.formBasicData = this.setformBasicData();
      this.formData = this.setformData();
      this.getProfile();
    },
    computed: {
      ...mapGetters({
        initPage: "sidebar/initPage"
      }),
      userName() {
        return startCase(this.$store.state.user.nama)
      },
      userRole() {
        let role = this.$store.state.user.roles[0].name
        return startCase(role)
      }
    },
    methods: {
      async getProfile() {
        try {
          var profile = this.$store.state.user.id
          const res = await axios.get(`${this.url_api}/user/${profile}`)
          this.dataProfile = res.data.data;
        } catch (e) {

        }
      },
      submitForm() {
        const tmp = this.formBasicData.filter(
          item => (item.label)
        );
        if (tmp.every(item => item.error !== null && !item.error)) {
          this.changePassword();
        } else {
          tmp.map(item => {
            this.triggerValidation({
              label: item.label,
              $v: this.$v,
              $vm: this
            });
          });
        }
      },
      switchVisibilityPassword() {
        this.formBasicData[0].type == 'password' ? this.formBasicData[0].type = 'text' :
          this.formBasicData[0].type =
          'password';
        if (this.formBasicData[0].type == 'text') {
          this.passwordVisible = true;
        } else if (this.formBasicData[0].type == 'password') {
          this.passwordVisible = false;
        }
      },
      switchVisibilityPasswordConfirmation() {
        this.formBasicData[1].type == 'password' ? this.formBasicData[1].type = 'text' :
          this.formBasicData[1].type =
          'password';
        if (this.formBasicData[1].type == 'text') {
          this.passwordVisible1 = true;
        } else if (this.formBasicData[1].type == 'password') {
          this.passwordVisible1 = false;
        }
      },
      switchVisibilityPasswordConfirmation1() {
        this.formBasicData[2].type == 'password' ? this.formBasicData[2].type = 'text' :
          this.formBasicData[2].type =
          'password';
        if (this.formBasicData[2].type == 'text') {
          this.passwordVisible2 = true;
        } else if (this.formBasicData[2].type == 'password') {
          this.passwordVisible2 = false;
        }
      },
      setformData() {
        return this.setformBasicData().reduce((arr, val) => {
          arr[val.label.split(" ").join("_")] = null;
          return arr;
        }, {});
      },
      setformBasicData() {
        const tmp = [{
            label: "password lama",
            placeholder: "Masukkan password Anda",
            type: "password",
            name: 'old_password',
            isType: "password",
            labelName: 'Password Lama',
            maxlength: 15
          },
          {
            label: "password baru",
            placeholder: "Masukkan password Anda",
            type: "password",
            isType: "password",
            name: "new_password",
            labelName: 'Password Baru',
            maxlength: 15
          },
          {
            label: "konfirmasi password baru",
            placeholder: "Masukkan password Anda sekali lagi",
            type: "password",
            isType: "password",
            name: "confirm_new_password",
            labelName: 'Konfirmasi Password Baru',
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
      setValuePassword({
        label,
        rawLabel,
        $event = null
      } = {}) {
        const value = $event;
        this.formData[label] = value && value.trim();
        const confirms = ["password_baru", "konfirmasi_password_baru"];
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
      showModal() {
        this.$refs['ubah-password'].show()
      },
      hideModal() {
        this.$refs['ubah-password'].hide()
      },
      pageProfile() {
        var checkRole = this.$store.state.user.roles[0];
        if (checkRole) {
          this.$router.push('/profile');
        }
      },
      showTooltip() {
        this.$refs.tooltipSuccess._toolpop
          .getTipElement()
          .classList.add("tooltip-success");
      },
      showPopoverIntegrations() {
        this.$refs.userBoxPopover._toolpop
          .getTipElement()
          .classList.add(
            "popover-custom-wrapper",
            "popover-custom-lg",
            "popover-secondary"
          );
      },
      async changePassword() {
        try {
          const {
            formData,
            formBasicData
          } = this;

          const tmpPostData = formBasicData.reduce((obj, item) => {
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
          const res = await axios.post(`${this.url_api}/change_password`,
            postData
          );
          const {
            status,
            data,
            message
          } = res.data;
          if (status) {
            this.$swal({
              title: "Berhasil",
              text: `Password Berhasil di Perbaharui`,
              type: "success",
              confirmButtonText: startCase("ya")
            });
            this.hideModal();
            this.$router.push('/');
          } else {
            this.$swal({
              title: "Gagal",
              text: `Password Gagal diperbaharui`,
              type: "failed",
              confirmButtonText: startCase("ya")
            });
            this.hideModal();
            this.$router.push('/');
          }
        } catch {
            this.$swal({
              title: "Gagal",
              text: `Password Lama Anda Salah`,
              type: "failed",
              confirmButtonText: startCase("ya")
            });
        }
      },
      async logout() {
        try {
          const res = await axios.post(`${this.url_api}/logout`);
          const {
            status,
            data,
            message
          } = res.data;
          if (status) {
            this.$store.commit('SET_BEARER_TOKEN', null);
            this.$store.commit('SET_USER', null);
            this.$store.commit('SET_AUTHERROR', null);
            this.$router.push('/login');
          }
        } catch (err) {
          // console.log(err);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
.img-pp {
  width: 100% !important;
  height: auto !important;
}
</style>