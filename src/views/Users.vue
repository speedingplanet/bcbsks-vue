<template>
  <section class="row">
    <div class="col">
      <h2>Users</h2>
    </div>
  </section>
  <div class="row">
    <div class="col">
      <ul class="list-inline">
        <li class="list-inline-item">
          <router-link :to="{name: 'NoUser'}">
            Users Home
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link :to="{name: 'UserBrowser'}">
            Browse
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link :to="{name: 'SearchUsers'}">
            Search
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link :to="{name: 'ListUsers'}">
            List
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link :to="{name: 'AddUser'}">
            Add
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
};
</script>

<style>

</style>
