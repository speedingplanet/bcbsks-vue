<template>
  <div class="row">
    <div class="col">
      <ComponentProps
        prop-one="value one"
        :prop-two="foo"
        :prop-three="3"
      />
    </div>
  </div>
</template>

<script>
import ComponentProps from './ComponentProps.vue';
export default {
  components: {
    ComponentProps,
  },
  data() {
    return {
      foo: 'bar',
    };
  },

};
</script>

<style>

</style>
