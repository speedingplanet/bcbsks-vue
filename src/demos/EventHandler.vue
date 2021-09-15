<template>
  <div class="row">
    <div class="col">
      <h3>Button</h3>
      <button
        class="btn btn-primary"
        @click="handleButtonClick"
      >
        Click me
      </button>
      <p class="buttonMsg">
        You clicked on the button {{ buttonClicks }} times.
      </p>
    </div>
    <div class="col">
      <h3>Link</h3>
      <p>
        Click on the <a
          href="http://vuejs.org/"
          @click.prevent="handleLinkClick"
        >link</a>.
      </p>
      <p class="linkMsg">
        You clicked on the link {{ linkClicks }} times.
      </p>
    </div>
    <div class="col">
      <h3>Custom event</h3>
      <button
        class="btn btn-danger"
        @click="handleCustomClick"
      >
        Fire custom event
      </button>
      <p class="customMsg">
        You clicked on the custom event button {{ customClicks }} times.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: [ 'customEvent' ],
  data() {
    return {
      buttonClicks: 0,
      linkClicks: 0,
      customClicks: 0,
    };
  },
  methods: {
    handleButtonClick() {
      console.log( 'Clicked on the button' );
      this.buttonClicks += 1;
    },
    handleLinkClick() {
      console.log( 'Clicked on the link.' );
      this.linkClicks += 1;
    },
    handleCustomClick() {
      console.log( 'Clicked on the custom event button.' );
      this.customClicks += 1;
      this.$emit( 'customEvent', 'EventHandler.customEvent' );
    },
  },
};
</script>

<style>

</style>
