<template>
  <div class="row">
    <div class="col">
      <h4>Computed values</h4>
      <ul>
        <li>First Name: {{ firstName }}</li>
        <li>Last Name: {{ lastName }}</li>
        <li>Full Name: {{ fullName }}</li>
        <!-- <li>Full Name: {{ firstName + ' ' + lastName }}</li> -->
        <!-- <li>Full Name: {{ firstName }} {{ lastName }}</li> -->
        <li>{{ city }}, {{ state }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Paxton',
      city: 'Nutley',
      state: 'NJ',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },

    nameAndAddress: {
      get() {
        return this.firstName + ' ' + this.lastName +
        ' living in ' + this.city + ', ' + this.state;
      },
      set( city ) {
        this.city = city;
      },
    },

  },
};
</script>

<style>

</style>
