<template>
  <div class="mx-4 my-1">
    <div class="border struk-border min-vh-100 mx-4 p-4">
      <div class="text-center">
        <p class="font-weight-bold">Praktek dr. Ajeng</p>
        <div class="d-flex justify-content-center mb-3">
          <font-awesome-icon icon="clinic-medical" class="fa-3x" />
        </div>
        <p
          class="font-weight-bold mb-1"
          v-for="data in ['sip', 'telp']"
          :key="data"
        >
          <span class="text-uppercase">{{ data }}. </span>
          <span v-for="x in 10" :key="x">{{ x }}</span>
        </p>
      </div>
      <div class="mt-4 mb-2 pt-4">
        <p class="text-uppercase font-weight-bold mb-0">rawat jalan</p>
        <p class="text-uppercase font-weight-bold mb-0">pembayaran</p>
        <div class="my-2">
          <p class="text-uppercase mb-0">
            no rm: <span v-for="x in 10" :key="x">{{ x }}</span>
          </p>
          <p class="text-uppercase mb-0">
            no struk: <span v-for="x in 10" :key="x">{{ x }}</span>
          </p>
          <p
            class="text-uppercase mb-0"
            v-for="data in [
              'dawai pagi',
              'pasien umum',
              'dokter: dr. anjeng',
              'created by: admin pita'
            ]"
            :key="data"
          >
            {{ data }}
          </p>
          <div class="text-right">
            <p
              class="text-uppercase mb-0"
              v-for="data in [
                `created time: ${now}`,
                `admission time: ${now}`,
                `discharged time: ${now}`
              ]"
              :key="data"
            >
              {{ data }}
            </p>
          </div>
        </div>
        <b-table-lite
          class="my-3"
          :items="[
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
          ]"
          :fields="[
            {
              key: 'first_name',
              label: 'first name',
              thStyle: 'background-color: transparent'
            },
            {
              key: 'last_name',
              label: 'last_name',
              thStyle: 'background-color: transparent'
            },
            {
              key: 'age',
              label: 'age',
              thStyle: 'background-color: transparent'
            }
          ]"
        >
          <template v-slot:head(first_name)="data">
            <div class="d-flex flex-column">
              <p class="text-capitalize mb-2">nama layanan</p>
              <p class="text-capitalize mb-0">qty * harga layanan</p>
            </div>
          </template>
        </b-table-lite>
        <p class="text-right text-capitalize">
          jakarta, 17 oktober 2019
        </p>
        <p class="mt-4 pt-3">
          <span class="text-uppercase text-center w-50 float-right">
            admin pita
          </span>
        </p>
        <p class="mt-4 pt-4 d-flex justify-content-center">
          <span class="pt-4 mt-2" v-for="data in 15" :key="data">*</span>
        </p>
        <p class="text-capitalize text-center mb-1">
          semoga lekas sembuh dan sehat selalu
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";

library.add(faClinicMedical);

export default {
  computed: {
    now() {
      return moment().format("DD MMM, YYYY HH:mm:ss");
    }
  }
};
</script>

<style lang="scss" scoped>
.struk-border {
  border-color: #ddd !important;
}
</style>
