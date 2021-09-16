<template>
  <section class="row">
    <div class="col">
      <h2>Demos</h2>
    </div>
  </section>
  <div class="row">
    <div class="col-3">
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
        <li>
          <router-link :to="{name: 'EventHandler'}">
            Event Handler
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'CustomEvent'}">
            Custom Event
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ConditionalRendering'}">
            Conditional Rendering
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ComputedValues'}">
            Computed Values
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'CSSClassesAndStyles'}">
            CSS Classes and Styles
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'VModelDemo'}">
            v-model demo
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
