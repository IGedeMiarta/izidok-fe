<template>
  <div>
      <top heading="Mega Ceriawaty" 
                  subheading="NOMOR: DRM00192 / Perempuan / 30 Tahun"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <container/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import container from './RekamMedis/RekamMedisContainer.vue';
import top from './RekamMedis/Header.vue';

export default {
  components: {
    top,
    container
  }
};
</script>
