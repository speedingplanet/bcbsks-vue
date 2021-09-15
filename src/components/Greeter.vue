<template>
  <h3>Good morning, {{ userName }}</h3>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      // default: 'user',
    },
  },
};
</script>

<style>

</style>
