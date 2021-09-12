<template>
  <main class="container">
    <header class="row">
      <div class="col">
        <h1>Zippay by BCBSKS</h1>
      </div>
    </header>
    <hr>
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

<style>
.active {
  font-weight: bold;
}
</style>
