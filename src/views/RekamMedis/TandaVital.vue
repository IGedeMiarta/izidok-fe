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
            id="tensi_diastole"
            :value="pasien.tensi_diastole"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
        <div class="form-group col-md-2">
          <label >TB</label>
          <input
            type="text"
            class="form-control"
            id="tinggi_badan"
            :value="pasien.tinggi_badan.toString().replace('.',',')"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
        <div class="form-group col-md-2">
          <label >BB</label>
          <input
            type="text"
            class="form-control"
            id="berat_badan"
            :value="pasien.berat_badan.toString().replace('.',',')"
            @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label >Nadi</label>
          <input type="text" class="form-control" id="nadi" :value="pasien.nadi" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
        </div>
        <div class="form-group col-md-2">
          <label >Suhu</label>
          <input type="text" class="form-control" id="suhu" :value="pasien.suhu.toString().replace('.',',')" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
        </div>
        <div class="form-group col-md-4">
          <label >Respirasi</label>
          <input type="text" class="form-control" id="respirasi"  :value="0" @input="updateAnamnesa({key:$event.target.id, value: $event.target.value})"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
   bb:0,
   tb:0,
   suhu:0,
  }),
  name: "Anamnesa",
  computed: mapGetters(["pasien"]),
  methods: {
    ...mapActions(["updateAnamnesa"]),

  },

};

</script>

<style>
</style>