<template>
  <section class="row">
    <div class="col">
      <h2>Users</h2>
    </div>
  </section>
  <div class="row">
    <div class="col-6 offset-3">
      <UserBrowser />
    </div>
  </div>
</template>

<script>
import UserBrowser from '../users/UserBrowser';

export default {
  components: { UserBrowser },
};
</script>

<style>

</style>
