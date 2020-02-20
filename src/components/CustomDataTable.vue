<template>
  <div>
    <b-container class="mb-4">
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
      thead-tr-class="kntl"
    >
      <template v-slot:head()="data">
        {{ data.label }}
        <!-- turn this input into a slot for custom render -->
        <b-input
          size="sm"
          class="mt-2 w-95"
          v-if="data.field.searchable"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    },
    fields: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      // fields: [
      //   { key: "last_name", sortable: true },
      //   { key: "first_name", sortable: true },
      //   { key: "age", sortable: true },
      //   { key: "isActive", sortable: false, searchable: false }
      // ],
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

<style lang="scss" scoped>
.w-95 {
  width: 95%;
}</style
>
