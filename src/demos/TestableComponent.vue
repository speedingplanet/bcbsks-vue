<template>
  <div class="row">
    <div class="col">
      <h3>Testable component</h3>
      <p>This component is testable in some way.</p>
      <p>Value from data.foo: {{ foo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 'dynamicValue',
    };
  },
};
</script>

<style>

</style>
