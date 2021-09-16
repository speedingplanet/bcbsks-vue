<template>
  <div class="row">
    <div class="col mb-2">
      <span>Show pictures? </span>
      <div class="form-check form-check-inline">
        <input
          id="showPicturesYes"
          v-model="showPictures"
          class="form-check-input"
          :value="true"
          type="radio"
          name="showPictures"
          checked
        >
        <label
          class="form-check-label"
          for="showPicturesYes"
        >Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          id="showPicturesNo"
          v-model="showPictures"
          class="form-check-input"
          :value="false"
          type="radio"
          name="showPictures"
        >
        <label
          class="form-check-label"
          for="showPicturesNo"
        >No</label>
      </div>
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
