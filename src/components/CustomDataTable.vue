<template>
  <div>
    <!-- <div class="d-flex"> -->
    <b-container>
      <b-row>
        <b-col class="pl-0">
          <div class="d-flex text-capitalize align-items-center">
            <span>show</span>
            <b-form-select
              :options="entriesOptions"
              class="w-25 mx-2"
              v-model="selectedEntryOptions"
            ></b-form-select>
            <span>entries</span>
          </div>
        </b-col>
        <b-col class="pr-0">
          <div class="d-flex justify-content-end">
            <b-button variant="primary" class="text-capitalize align-self-end"
              >tambah pasien</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false }
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ],
      // etnriesOptions: [
      //   { value: , text: "Please select an option" },
      //   { value: "a", text: "This is First option" },
      //   { value: "b", text: "Selected Option" },
      //   { value: { C: "3PO" }, text: "This is an option with object value" },
      //   { value: "d", text: "This one is disabled", disabled: true }
      // ]
      selectedEntryOptions: 10
    };
  },
  computed: {
    entriesOptions() {
      return [10, 25, 50, "All"].map(item => ({
        value: item,
        text: item
      }));
    }
  }
};
</script>
