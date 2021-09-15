<template>
  <div class="row mt-2">
    <div class="col">
      <button
        class="btn btn-danger"
        @click="handlePrevious"
      >
        Previous
      </button>
    </div>
    <div class="col text-end">
      <button
        class="btn btn-success"
        @click="handleNext"
      >
        Next
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col text-center">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handlePrevious() {
      this.message = 'You clicked on the "Previous" button';
    },
    handleNext() {
      this.message = 'You clicked on the "Next" button';
    },
  },
};
</script>

<style>

</style>
