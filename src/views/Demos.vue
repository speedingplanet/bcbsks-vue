<template>
  <section class="row">
    <div class="col">
      <h2>Demos</h2>
    </div>
  </section>
  <div class="row">
    <div class="col">
      <ul class="list-unstyled">
        <li>
          <router-link :to="{name: 'HelloWorld'}">
            Hello, world
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ComponentData'}">
            Component Data
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'TestableComponent'}">
            Testable Component
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ComponentProps'}">
            Component Props
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
