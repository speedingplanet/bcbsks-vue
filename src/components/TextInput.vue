<template>
  <div className="mb-3">
    <label
      :for="fieldName"
      class="form-label"
    >
      {{ label }}
    </label>
    <input
      :id="fieldName"
      :type="fieldType"
      class="form-control"
      :name="fieldName"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    fieldName: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],

};
</script>

<style>

</style>
