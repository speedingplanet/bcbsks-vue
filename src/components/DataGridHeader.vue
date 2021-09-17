<template>
  <div
    class="flex-header"
    :style="{borderBottom: '2px solid black'}"
  >
    <!-- Content goes here (eventually) -->
    <div
      v-for="column in columns"
      :key="column.field"
      class="flex-column-header"
    >
      {{ column.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style scoped>
.flex-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-column-header {
  flex: 1;
}
</style>
