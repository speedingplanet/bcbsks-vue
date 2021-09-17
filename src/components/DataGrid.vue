<template>
  <div>
    <!-- Content goes here (eventually) -->
    <div class="flex-container w-100">
      <DataGridHeader :columns="columns" />
      <DataGridRow
        v-for="record of records"
        :key="record[idField]"
        :columns="columns"
        :record="record"
      />
    </div>
  </div>
</template>

<script>
import DataGridHeader from './DataGridHeader.vue';
import DataGridRow from './DataGridRow.vue';
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { DataGridHeader, DataGridRow },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    records: {
      type: Array,
      required: true,
    },
    idField: {
      type: String,
      default: 'id',
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
