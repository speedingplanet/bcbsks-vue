<template>
  <div class="row">
    <div class="col">
      <h3>Button</h3>
      <div>
        <button
          class="btn btn-success mb-2"
          @click="buttonClicks = buttonClicks + 1"
        >
          Click me (expression)
        </button>
        <button
          class="btn btn-primary"
          @click="handleButtonClick"
        >
          Click me (method ref)
        </button>
        <button
          class="btn btn-warning mt-2"
          @click="handleButtonClickCall(2, $event)"
        >
          Click me (method call)
        </button>
      </div>
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
    handleButtonClickCall( amount, event ) {
      console.log( 'Calling a method in-line' );
      console.log( 'handleButtonClickCall event:', event );
      this.buttonClicks = this.buttonClicks + amount;
      // event.preventDefault();
    },
    handleButtonClick( event ) {
      console.log( 'Clicked on the button' );
      console.log( 'handleButtonClick event:', event );
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
