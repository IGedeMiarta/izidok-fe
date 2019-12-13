<template>
  <div>
    <page-title
      heading="Manajemen Tarif"
      :breadcrumb="[
        {
          label: 'Manajemen Tarif'
        },
        {
          label: 'Tambah Tarif',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
            <h4>Tambah Tarif</h4>
            <!--  <small>Custom</small>
              <b>Example widget with table inside.</b> -->
          </div>
        </div>
        <div class="card-body">
          <div class="container custom-height pb-5" form-body>
            <div class="form-row">
              <b-form-group
                label="Nama Layanan"
                class="text-capitalize col-md-4 pr-3"
                style="position: relative"
              >
                <b-form-input
                />
              </b-form-group>
              <b-form-group
                label="Kode Layanan"
                class="text-capitalize col-md-3 pr-3"
                style="position: relative"
              >
                <b-form-input
                />
              </b-form-group>
              <b-form-group
                label="Tarif Layanan"
                class="text-capitalize col-md-4 pr-3"
                style="position: relative"
              >
                <b-form-input
                />
              </b-form-group>
              <div class="col-md-1 pr-3" style="padding-top:32px;">
                <b-button
                  class="d-50 rounded-circle tambah-tarif"
                  >
                  <font-awesome-icon icon="plus" />    
                </b-button
                >
              </div>
            </div>
            <div class="col-md-6 bottom-button">
              <b-button variant="first" class="float-right pr-5 pl-5"
                >SIMPAN</b-button
              >
              <b-button variant="danger" class="float-right pr-5 pl-5 mr-3"
                >KELUAR</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus);
export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  data() {
    return {
      formRow: 10,
    };
  }
};
</script>
<style scoped lang="css">
.no-padding {
  padding: 0 !important;
}
.tambah-tarif{
  box-shadow: none;
  border: 4px solid rgb(86, 157, 197);
  padding: 0px;
  padding-left:1px;
  background: #C1E3F7;
  color: rgb(86, 157, 197);
  line-height: 30px !important;
  height: 40px !important;
  width: 40px !important;
}
.tambah-tarif:hover{
  border: 4px solid rgb(86, 157, 197);
  background: #fff;
  color: rgb(86, 157, 197);
}
.custom-height[form-body]{
  height: 400px;
  overflow: auto;
}
.bottom-button{
  position:absolute;
  bottom:20px;
  right:20px;
}
</style>
