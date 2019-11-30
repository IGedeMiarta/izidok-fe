<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="tdSistole">TD Sistole*</label>
          <input
            type="text"
            class="form-control"
            id="tensi_sistole"
            :value="pasien.tensi_sistole"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="tdDiastole">TD Diastole*</label>
          <input
            type="text"
            class="form-control"
            id="tensi_diastole"
            :value="pasien.tensi_diastole"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="tinggiBadan">TB*</label>
          <input
            type="text"
            class="form-control"
            id="tinggi_badan"
            :value="pasien.tinggi_badan"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="beratBadan">BB*</label>
          <input
            type="text"
            class="form-control"
            id="berat_badan"
            :value="pasien.berat_badan"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="nadi">Nadi*</label>
          <input type="text" class="form-control" id="nadi" :value="pasien.nadi" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"/>
        </div>
        <div class="form-group col-md-2">
          <label for="suhu">Suhu*</label>
          <input type="text" class="form-control" id="suhu" :value="pasien.suhu" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"/>
        </div>
        <div class="form-group col-md-4">
          <label for="respirasi">Respirasi*</label>
          <input type="text" class="form-control" id="respirasi" :value="pasien.respirasi" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value});"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Anamnesa",
  computed: mapGetters(["pasien"]),
  methods: mapActions(["updateAnamnesa"]),
};
</script>

<style>
</style>