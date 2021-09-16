<template>
  <div class="row">
    <div class="col">
      <h3>Looping with v-for</h3>
      <p>List of names</p>
      <ul>
        <li
          v-for="foo in names"
          :key="foo"
        >
          {{ foo }}
        </li>
      </ul>
      <p>Person object</p>
      <ul>
        <li
          v-for="(a, b) in person"
          :key="a"
        >
          {{ b }} : {{ a }}
        </li>
      </ul>
      <p>Array of people</p>
      <ul>
        <li
          v-for="human in people"
          :key="human.id"
        >
          {{ human.firstName }} {{ human.lastName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [ 'John', 'Dan', 'Tim', 'Andre', 'Andres', 'Hector' ],
      person: {
        firstName: 'John',
        lastName: 'Paxton',
        city: 'Nutley',
        state: 'NJ',
      },
      people: [
        { id: 1, firstName: 'John', lastName: 'Paxton' },
        { id: 2, firstName: 'Andreina', lastName: 'Castillo' },
      ],
    };
  },
};
</script>

<style>

</style>
