<template>
  <div class="row">
    <div class="col text-center mb-2">
      <button
        class="btn btn-secondary"
        @click="toggleShowPictures"
      >
        {{ showPicturesLabel }} Pictures
      </button>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <UserDetails
        :user="users[currentUser]"
        :show-picture="showPictures"
      />
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
import UserDetails from './UserDetails.vue';
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
      showPictures: true,
      showPicturesLabel: 'Hide',
    };
  },
  methods: {
    toggleShowPictures() {
      this.showPictures = !this.showPictures;
      if ( this.showPictures ) {
        this.showPicturesLabel = 'Hide';
      } else {
        this.showPicturesLabel = 'Show';
      }
    },
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
