<template>
  <div class="row mt-2">
    <div class="col">
      <button
        class="btn btn-danger"
        @click="handlePrevious"
      >
        {{ previousLabel }}
      </button>
    </div>
    <div class="col text-end">
      <button
        class="btn btn-success"
        @click="handleNext"
      >
        {{ nextLabel }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nextLabel: {
      type: String,
      default: 'Next',
    },
    previousLabel: {
      type: String,
      default: 'Previous',
    },
  },
  emits: [ 'nextRecord', 'previousRecord' ],
  methods: {
    handlePrevious() {
      this.$emit( 'previousRecord' );
    },
    handleNext() {
      this.$emit( 'nextRecord' );
    },
  },
};
</script>

<style>

</style>
