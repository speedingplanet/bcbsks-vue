<template>
  <div class="row">
    <div class="col">
      <h3>Lifecycle Demo</h3>
      <ul>
        <li
          v-for="(message, index) in messages"
          :key="index"
        >
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],

      // Otherwise we get stuck in a recursive loop!
      beforeUpdateOnce: false,
      updatedOnce: false,
    };
  },
  beforeCreate() {
    // data() is not yet available
    // this.messages.push( 'beforeCreate' );
    console.log( 'beforeCreate' );
  },
  created() {
    this.messages.push( 'created' );
  },
  beforeMount() {
    this.messages.push( 'beforeMount' );
  },
  mounted() {
    this.messages.push( 'mounted' );
  },
  beforeUpdate() {
    if ( !this.beforeUpdateOnce ) this.messages.push( 'beforeUpdate' );
    this.beforeUpdateOnce = true; // loop prevention
  },
  updated() {
    if ( !this.updatedOnce ) this.messages.push( 'updated' );
    this.updatedOnce = true; // loop prevention
  },
  beforeUnmount() {
    this.messages.push( 'beforeUnmount' );
    console.log( 'beforeUnmount' );
  },
  unmounted() {
    this.messages.push( 'unmounted' );
    console.log( 'unmounted' );
  },
};
</script>

<style>

</style>
