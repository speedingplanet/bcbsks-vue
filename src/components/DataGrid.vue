<template>
  <div class="flex-container w-100">
    <DataGridHeader :columns="columns" />
    <DataGridRow
      v-for="record in records"
      :key="record.id"
      :columns="columns"
      :record="record"
    />
  </div>
</template>

<script>
import DataGridHeader from './DataGridHeader.vue';
import DataGridRow from './DataGridRow.vue';
export default {
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
