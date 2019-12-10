<template>
  <div class="card card-box mb-5">
    <div class="card-header pr-2">
      <div class="card-header--title">
        <b-button
          :to="{ name: 'registrasi-rawat-jalan' }"
          class="float-right text-capitalize"
          pill
          variant="success"
          >registrasi baru</b-button
        >
      </div>
    </div>
    <div class="card-body p-0">
      <div>
        <div class="table-responsive-xs">
          <table class="table table-striped table-hover mb-0">
            <thead class="thead-light">
              <tr class="text-capitalize">
                <th scope="col">no</th>
                <th scope="col">nama pasien</th>
                <th scope="col" class="text-center">
                  no. rekam medis
                </th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="(name, key) in names" :key="key">
                <td class="text-wrap">
                  <div class="align-box-row">
                    <div class="d-flex align-items-center">
                      <span>{{ key+1 }}</span>
                    </div>
                  </div>
                </td>
                <td class="text-wrap">
                  <div class="align-box-row">
                    <span class="d-block">
                      {{ name }}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    class="text-center d-flex align-items-center justify-content-between"
                  >
                    <span class="flex-grow-1">0001-0{{ key+1 }}</span>
                    <span
                      ><b-button variant="dark" size="sm">
                        <span class="btn-wrapper--icon">
                          <font-awesome-icon
                            icon="sign-in-alt"
                          /> </span></b-button
                    ></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faSignInAlt);

export default {
  data: () => ({
    names: [
      'Adisty Zara',
      'Ario Bayu',
      'Ernest Prakasa',
      'Raditya Dika',
      'Maudy Ayunda'
    ]
  })
};
</script>
