<template>
  <div class="row">
    <div class="col">
      <h3>Add User</h3>
    </div>
  </div>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label
        for="displayName"
        class="form-label"
      >
        Display Name
      </label>
      <input
        id="displayName"
        v-model="formState.displayName"
        type="text"
        class="form-control"
        name="displayName"
      >
    </div>
    <TextInput
      v-model="formState.email"
      label="E-mail"
      field-name="email"
      field-type="email"
    />
    <TextInput
      v-model="formState.address.street"
      label="Street"
      field-name="address.street"
    />
    <TextInput
      v-model="formState.address.city"
      label="City"
      field-name="address.city"
    />
    <TextInput
      v-model="formState.address.state"
      label="State"
      field-name="address.state"
    />
    <TextInput
      v-model="formState.address.postalCode"
      label="Postal Code"
      field-name="address.postalCode"
    />
    <div class="mb-3">
      <label
        for="country"
        class="form-label"
      >
        Country
      </label>
      <select
        v-model="formState.address.country"
        class="form-select"
        aria-label="Default select example"
        name="country"
      >
        <option value="">
          Choose a country
        </option>
        <option value="USA">
          United States
        </option>
        <option value="CAN">
          Canada
        </option>
        <option value="UK">
          United Kingdom
        </option>
        <option value="MX">
          Mexico
        </option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input
          id="person"
          class="form-check-input"
          type="radio"
          name="userType"
          value="person"
          checked
        >
        <label
          class="form-check-label"
          for="person"
        >
          Person
        </label>
      </div>
      <div class="form-check">
        <input
          id="corporation"
          class="form-check-input"
          type="radio"
          name="userType"
          value="corporation"
        >
        <label
          class="form-check-label"
          for="corporation"
        >
          Corporation
        </label>
      </div>
    </div>
    <div class="mb-3">
      <button
        class="btn btn-success"
        type="submit"
      >
        Add User
      </button>
    </div>
  </form>
</template>

<script>
import TextInput from '../components/TextInput.vue';
export default {
  components: { TextInput },
  data() {
    return {
      formState: {
        displayName: '',
        email: '',
        userType: 'person',
        address: {
          street: '',
          city: '',
          state: '',
          country: '',
        },
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log( 'Form data: ', this.formState );
    },
  },
};
</script>

<style>

</style>
