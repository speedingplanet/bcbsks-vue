# Lab 3: Routing

This is an all-in-one lab. We are going to set up the `Users` portion of the app with custom routing.

### users/user-routes.js

This is a plain JavaScript file. Import the following components:

- AddUser
- ListUsers
- SearchUsers
- UserBrowser

Create an array of route configurations. Each configuration should have the following props:

- path: Relative, so don't start with a slash '/'. 
- component: The appropriate component from the list above
- name: Usually the same as the component. 

Make your route configuration the default export from this file.

### router/index.js

Import the user routing config from `user-routes`. Add the `children` property to the `Users` route configuration, and use the imported user routes as the children.

### views/Users.vue

Below the `section` add a Bootstrap row and column. Inside the column, add an inline unordered list that follows this template:

```html
<ul class="list-inline">
  <li class="list-inline-item">
    <router-link :to="{name: 'Some route name'}">
      <!-- Some label goes here -->
    </router-link>
  </li>
  <!-- ... -->
</ul>
```

Make sure you configure router links for Add, Search, List, and Browse. 

Remove the references to `UserBrowser` in the template and the script block. At the end of the template, add a `router-view` component. 

Check out the results in your browser. 

**STOP HERE**