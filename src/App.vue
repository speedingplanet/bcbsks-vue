<template>
  <main class="container">
    <header class="row">
      <div class="col">
        <h1>Zippay by BCBSKS</h1>
      </div>
    </header>
    <hr>
    <!-- Use the component -->
    <Greeter />
    <nav class="row">
      <div class="col">
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link
              active-class="active"
              to="/"
            >
              Home
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link
              active-class="active"
              to="/demos"
            >
              Demos
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link
              active-class="active"
              to="/users"
            >
              Users
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link
              active-class="active"
              to="/transactions"
            >
              Transactions
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </main>
</template>

<script>
// Import the component
import Greeter from './components/Greeter.vue';

export default {
  // Register the component
  components: {
    Greeter,
  },
};
</script>

<style>
.active {
  font-weight: bold;
}
</style>
