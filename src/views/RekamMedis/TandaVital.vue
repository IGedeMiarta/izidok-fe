<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label >TD Sistole</label>
          <input
            type="text"
            class="form-control"
            id="tensi_sistole"
            :value="pasien.tensi_sistole"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
        <div class="form-group col-md-2">
          <label >TD Diastole</label>
          <input
            type="text"
            class="form-control"

            :value="pasien.tensi_diastole"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
        <div class="form-group col-md-2">
          <label >TB</label>
          <input
            type="text"
            class="form-control"

            :value="pasien.tinggi_badan"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
        <div class="form-group col-md-2">
          <label >BB</label>
          <input
            type="text"
            class="form-control"

            :value="pasien.berat_badan"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label >Nadi</label>
          <input type="text" class="form-control" :value="pasien.nadi" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
        </div>
        <div class="form-group col-md-2">
          <label >Suhu</label>
          <input type="text" class="form-control" :value="pasien.suhu" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
        </div>
        <div class="form-group col-md-4">
          <label >Respirasi</label>
          <input type="text" class="form-control" :value="pasien.respirasi" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
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