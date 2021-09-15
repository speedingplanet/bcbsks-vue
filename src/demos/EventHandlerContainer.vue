<template>
  <div class="row">
    <div class="col">
      <h3>Event Handler Container</h3>
      <hr>
      <EventHandler @customEvent="handleCustomEvent" />
      <hr>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p>The message is {{ customEventMessage }}</p>
    </div>
  </div>
</template>

<script>
import EventHandler from './EventHandler';

export default {
  components: {
    EventHandler,
  },
  data() {
    return {
      customEventMessage: '',
    };
  },
  methods: {
    handleCustomEvent( message ) {
      this.customEventMessage = message;
    },
  },
};
</script>

<style>

</style>
