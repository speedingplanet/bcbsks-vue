<template>
  <div class="row">
    <div class="col">
      <UserDetails :user="users[currentUser]" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <NextPrevious
        @nextRecord="handleNext"
        @previousRecord="handlePrevious"
      />
    </div>
  </div>
</template>

<script>
import UserDetails from './UserDetails';
import NextPrevious from '../components/NextPrevious';
import { users } from '@speedingplanet/rest-server';
export default {
  components: {
    UserDetails, NextPrevious,
  },
  data() {
    return {
      users,
      currentUser: 0,
    };
  },
  methods: {
    handleNext() {
      this.currentUser = Math.min( this.users.length - 1, this.currentUser + 1 );
    },
    handlePrevious() {
      this.currentUser = Math.max( 0, this.currentUser - 1 );
    },
  },
};
</script>

<style>

</style>
