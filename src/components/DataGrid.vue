<template>
  <div>
    <!-- Content goes here (eventually) -->
  </div>
</template>

<script>
import DataGridHeader from './DataGridHeader.vue';
import DataGridRow from './DataGridRow.vue';
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { DataGridHeader, DataGridRow },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
