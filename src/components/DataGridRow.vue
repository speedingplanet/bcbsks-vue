<template>
  <div class="flex-row">
    <div
      v-for="column in columns"
      :key="column.field"
      class="flex-cell"
    >
      <!-- {{ record[column.field] }} -->
      {{ lodashGet(record, column.field) }}
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
    /*
    getValue( record, path ) {
      return lodashGet( record, path );
    },
    */
    getValue: lodashGet,
    lodashGet,

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
