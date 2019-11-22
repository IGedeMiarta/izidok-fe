<template>
  <div>
      <top heading="Mega Ceriawaty" 
                  subheading="NOMOR: DRM00192 / Perempuan / 30 Tahun"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div>
                      <div class="accordion mb-5">
                          <div class="card card-box">
                              <div class="card-header">
                                  <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none" v-b-toggle.accordion-1>
                                      <span>Anamnesa</span>
                                      <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                                  </b-button>
                              </div>
                              <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                                  <div class="card-body">
                                      <Anamnesa/>
                                  </div>
                              </b-collapse>
                          </div>
                          <div class="card card-box">
                              <div class="card-header">
                                  <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-2>
                                      <span>Pemeriksaan Fisik</span>
                                      <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                                  </b-button>
                              </div>
                              <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                                <div class="card-body">
                                  <Pemeriksaan/>   
                                </div>
                              </b-collapse>
                          </div>
                          <div class="card card-box">
                              <div class="card-header">
                                  <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-3>
                                      <span>Diagnosa</span>
                                      <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                                  </b-button>
                              </div>
                              <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                                  <div class="card-body">
                                    <Diagnosa/>
                                  </div>
                              </b-collapse>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import top from './RekamMedis/Header.vue';
import Anamnesa from './RekamMedis/Anamnesa';
import Pemeriksaan from './RekamMedis/Pemeriksaan.vue';
import Diagnosa from './RekamMedis/Diagnosa';

export default {
  components: {
    top,
    Anamnesa,
    Pemeriksaan,
    Diagnosa
  }
};
</script>
