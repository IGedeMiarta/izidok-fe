<template>
  <div>
    <page-title
      heading="Antrean Rawat Jalan"
      :breadcrumb="[
        {
          label: 'rawat jalan',
          active: true
        }
      ]"
    />
    <div class="container">
      <div class="card card-box mb-5">
        <div class="card-body">
          <b-row>
            <b-col cols="8">
              <b-form>
                <b-row class="d-flex align-items-center justify-content-center">
                  <b-col cols="4" class="pr-2">
                    <b-form-group>
                      <label class="text-capitalize">no rekam medis</label>
                      <b-input class="mb-2 mr-sm-2 mb-sm-0"></b-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" class="pl-2">
                    <b-form-group>
                      <label class="text-capitalize">nama pasien</label>
                      <b-input class="mb-2 mr-sm-2 mb-sm-0"></b-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" class="align-self-center p-0">
                    <b-button
                      type="submit"
                      variant="primary"
                      style="margin-top: 12.6px"
                      >Save</b-button
                    >
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
            <b-col cols="4"></b-col>
          </b-row>
          <b-button
            :to="{ name: 'registrasi-rawat-jalan' }"
            variant="primary"
            class="text-capitalize float-right mb-4"
            >registrasi rawat jalan</b-button
          >
          <b-table bordered striped hover :fields="fields" :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fields: [
      "no",
      "nomor rekam medis",
      "nama pasien",
      "jenis kelamin",
      "nomor hp",
      "dokter tujuan",
      "actions"
    ],
    items: []
  })
};
</script>
