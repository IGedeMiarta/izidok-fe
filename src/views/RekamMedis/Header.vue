<template>
  <div class="page-title">
    <div class="row">
      <div class="col-xl-7">
        <div>
          <ol class="breadcrumb text-uppercase font-size-xs p-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Dashboard</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{pasien.nama}}</li>
          </ol>
          <h5 class="display-4 mt-1 mb-2 font-weight-bold">{{pasien.nama}}</h5>
          <template v-if="pasien.nomor_rekam_medis">
            <p
              class="text-black-50 mb-0"
            >NO RM. {{pasien.nomor_rekam_medis}} / {{(pasien.jenis_kelamin==1)?'Laki-laki':'Perempuan'}} / {{age}}</p>
          </template>
        </div>
        <br>
        <p style="font-weight:bold"
            class="text-black-50 mb-0"
          >Hari ini : {{tanggal}}</p>
      </div>
      <div
        class="col-xl-5 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end"
      >
        <div class="mx-auto mx-xl-0">
           <b-button target="_blank" v-tooltip="'Riwayat'" variant="primary" @click="goToRiwayat">Lihat Riwayat</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faFileCode,
  faExpandArrowsAlt,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters } from "vuex";
import moment from 'moment';

library.add(faStar, faFileCode, faExpandArrowsAlt, faBuilding);

export default {
  components: {
    // 'font-awesome-icon': FontAwesomeIcon,
    // VuePerfectScrollbar,
  },
  props: {
    icon: String,
    heading: String,
    subheading: String
  },
  computed: {
    ...mapGetters(["pasien"]),
    age: function() {
      return this.getAge(this.pasien.tanggal_lahir);
    },
    tanggal: function(){
      moment.locale('id');   
      return moment().format('dddd, Do MMMM YYYY');
    }
  },
  methods: {
    goToRiwayat(){
      let routeData = this.$router.resolve({name: 'riwayat-rekam-medis'});
      window.open(routeData.href, '_blank');
      // this.$router.push(`/rekam-medis/riwayat/${this.pasien.id}`);
    },
    getAge(DOB) {
      var today = new Date();
      var birthDate = new Date(DOB);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
      }

      return age;
    }
  }
};
</script>
