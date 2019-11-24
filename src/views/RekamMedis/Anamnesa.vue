<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="tdSistole">TD Sistole*</label>
          <input
            type="text"
            class="form-control"
            id="tensi"
            :value="dataPasien.tensi"
            @input="updateAnamnesa($event);"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="tdDiastole">TD Diastole*</label>
          <input
            type="text"
            class="form-control"
            id="nadi"
            :value="dataPasien.nadi"
            @input="updateAnamnesa($event);"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="tinggiBadan">TB*</label>
          <input
            type="text"
            class="form-control"
            id="tinggi_badan"
            :value="dataPasien.tinggi_badan"
            @input="updateAnamnesa($event);"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="beratBadan">BB*</label>
          <input
            type="text"
            class="form-control"
            id="berat_badan"
            :value="dataPasien.berat_badan"
            @input="updateAnamnesa($event);"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="nadi">Nadi*</label>
          <input type="text" class="form-control" id="nadi" :value="dataPasien.nadi" @input="updateAnamnesa($event);"/>
        </div>
        <div class="form-group col-md-2">
          <label for="suhu">Suhu*</label>
          <input type="text" class="form-control" id="suhu" :value="dataPasien.suhu" @input="updateAnamnesa($event);"/>
        </div>
        <div class="form-group col-md-4">
          <label for="respirasi">Respirasi*</label>
          <input type="text" class="form-control" id="respirasi" :value="dataPasien.respirasi" @input="updateAnamnesa($event);"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Anamnesa",
  computed: mapGetters(["dataPasien"]),
  methods: {
    ...mapActions(["updateAnamnesa"])
  }
};
</script>

<style>
</style>