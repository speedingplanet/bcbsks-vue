<template>
  <div class="row">
    <div class="col">
      <h3>v-model Demo</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="mb-3">
        <label
          for="user-name"
          class="form-label"
        >User name</label>
        <input
          id="user-name"
          v-model="userName"
          type="text"
          class="form-control"
        >
        <p class="mt-2">
          The user's name is {{ userName }}
        </p>
      </div>
      <hr>
      <div>
        <p>Choose a pizza topping</p>
        <div class="form-check form-check-inline">
          <input
            id="pepperoni"
            v-model="pizzaTopping"
            class="form-check-input"
            type="radio"
            name="pizzaToppings"
            value="pepperoni"
          >
          <label
            class="form-check-label"
            for="pepperoni"
          >Pepperoni</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="mushrooms"
            v-model="pizzaTopping"
            class="form-check-input"
            type="radio"
            name="pizzaToppings"
            value="mushrooms"
          >
          <label
            class="form-check-label"
            for="mushrooms"
          >Mushrooms</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="extra-cheese"
            v-model="pizzaTopping"
            class="form-check-input"
            type="radio"
            name="pizzaToppings"
            value="extra-cheese"
          >
          <label
            class="form-check-label"
            for="extra-cheese"
          >Extra Cheese</label>
        </div>
        <p>You choose {{ pizzaTopping }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      pizzaTopping: '',
    };
  },
};
</script>

<style>

</style>
