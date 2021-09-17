<template>
  <div>
    <!-- Content goes here (eventually) -->
    <div class="flex-container w-100">
      <DataGridHeader :columns="columns" />
      <DataGridRow :columns="columns" />
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
