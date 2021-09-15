<template>
  <section class="row">
    <div class="col">
      <h2>Users</h2>
    </div>
  </section>
  <div class="row">
    <div class="col-4 offset-4">
      <UserDetails :user="users[1]" />
    </div>
  </div>
</template>

<script>
import { users } from '@speedingplanet/rest-server';
import UserDetails from '../users/UserDetails';

export default {
  components: { UserDetails },
  data() {
    return {
      users,
    };
  },

};
</script>

<style>

</style>
