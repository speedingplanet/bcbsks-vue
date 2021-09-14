<template>
  <ul>
    <li>Prop One: {{ propOne }}</li>
    <li>Prop Two: {{ propTwo }}</li>
    <li>Prop Three: {{ propThree }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'propOne', 'propTwo', 'propThree' ],

};
</script>

<style>

</style>
