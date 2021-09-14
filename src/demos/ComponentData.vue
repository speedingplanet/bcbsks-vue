<template>
  <div class="row">
    <div class="col">
      <ul>
        <li>2 + 2 is {{ 2 + 2 }}</li>
        <li>The message is: {{ message }}</li>
        <li>
          Name: {{ person.firstName }} {{ person.lastName }}
          <!-- Name: {{ person.firstName + ' ' + person.lastName }} -->
        </li>
        <li />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'A message from data',
      person: {
        firstName: 'John',
        lastName: 'Paxton',
      },
    };
  },
};
</script>

<style>

</style>
