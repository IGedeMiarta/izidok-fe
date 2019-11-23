<template>
    <div>
        <form>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="tdSistole">TD Sistole*</label>
                    <input type="text" class="form-control" id="tdSistole" v-bind="pasien" :value="pasien.tensi">
                </div>
                <div class="form-group col-md-2">
                    <label for="tdDiastole">TD Diastole*</label>
                    <input type="text" class="form-control" id="tdDiastole" v-bind="pasien" :value="pasien.nadi">
                </div>
                <div class="form-group col-md-2">
                    <label for="tinggiBadan">TB*</label>
                    <input type="text" class="form-control" id="tinggiBadan" v-bind="pasien" :value="pasien.tinggi_badan">
                </div>
                <div class="form-group col-md-2">
                    <label for="beratBadan">BB*</label>
                    <input type="text" class="form-control" id="beratBadan" v-bind="pasien" :value="pasien.berat_badan">
                </div>
            </div>
            <div class="form-row">
               <div class="form-group col-md-2">
                    <label for="nadi">Nadi*</label>
                    <input type="text" class="form-control" id="nadi" v-bind="pasien" :value="pasien.nadi">
                </div>
                <div class="form-group col-md-2">
                    <label for="suhu">Suhu*</label>
                    <input type="text" class="form-control" id="suhu" v-bind="pasien" :value="pasien.suhu">
                </div>
                <div class="form-group col-md-4">
                    <label for="respirasi">Respirasi*</label>
                    <input type="text" class="form-control" id="respirasi" v-bind="pasien" :value="pasien.respirasi">
                </div>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    name: 'Anamnesa',
    props: ['pasien'],
    data(){
        return {

        }
    }
}
</script>

<style>

</style>