<template>
  <div class="flex-row">
    <div
      v-for="column in columns"
      :key="column.field"
      class="flex-cell"
    >
      {{ getValue(record, column.field) }}
    </div>
  </div>
</template>

<script>
import lodashGet from 'lodash-es/get';

export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    record: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getValue( field, path ) {
      return lodashGet( field, path );
    },
  },
};
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-cell {
  flex: 1;
}
</style>
