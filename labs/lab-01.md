# Lab 1

## Part 1: First component

Create a component under `components` called `Greeter`. It should say something like "Good morning, <your name>". Assume that you can leave the name hard coded for the moment.

Register the component with App.vue.
Use the component below the `<hr>` but above the `<nav>`.

**STOP HERE**

## Part 2: Testing the component

Write two tests for `Greeter`. One should use the native Vue testing tools to ensure that `Greeter` outputs what you think it outputs. The other should use @testing-library/vue to accomplish the same result.

Run your tests and make sure they pass.

**STOP HERE**

## Part 3: Props

Update `Greeter` to take a prop `user-name`. It should be a string, required, and have no default.

**STOP HERE**

## Part 4: Testing Props

Update the tests for `Greeter`, including tests to ensure that the props show up correctly. Write the tests in both native and testing-library styles. After the lab, discuss which style we want to use going forward.

**STOP HERE**

## Part 5: data and UserDetails

In this lab, we are starting to build out more of the UI of our application.

### users/UserDetails.vue

Create a folder `src/users`. Under the `users` folder, create `UserDetails`. It should take a `user` as a prop (required, it's an Object). It should display the following properties from the `user` object:

- displayName
- email
- address.street, address.city, address.state
- Whether or not the user is active

Consider using the Card layout from Bootstrap: https://getbootstrap.com/docs/5.1/components/card/.

### Users.vue

In this file, import users from @speedingplanet/rest-server. It's an array. Make this information available in the `data` property.

Register the `UserDetails` component.

Use the `UserDetails` component in `Users`. You'll want to wrap it in a structure that looks like this:

```html
<div class="row">
  <div class="col-4 offset-4"></div>
</div>
```

This will use Bootstrap to have `UserDetails` take up a third of the width of the browser window, and be centered. 

Pass one of the `users` into `UserDetails`. Check the component in the browser to verify that it displays properly. 

**STOP HERE**

## Part 6: Event handling

Create a component under the `components` folder `NextPrevious`. It should have two buttons, 'Next' and 'Previous'. You can use the Bootstrap button classes (https://getbootstrap.com/docs/5.1/components/buttons/) to style the buttons. Consider wrapping the buttons in divs for alignment purposes (https://getbootstrap.com/docs/5.1/utilities/text/#text-alignment). 

The component should take two props: `nextLabel` and `previousLabel`. They are strings, optional, and should have default values of "Next" and "Previous". Use these as the labels on the buttons.

Attach event handlers to the buttons that activate on a button click. For this exercise, have the event handlers log to the console that they were clicked on.

**STOP HERE**

## Part 7: Custom events

Setting up custom events.

## NextPrevious.vue

Register two custom events `nextRecord` and `previousRecord`. Emit these events when the appropriate buttons are clicked on. 

## users/UserBrowser.vue

Create a new component `users/UserBrowser.vue`. It will wrap around `UserDetails` and `NextPrevious`. Import and register those two components. Add them to the `template` for `UserBrowser`. 

Import `users` from @speedingplanet/rest-server. 

Add event handlers from `NextPrevious`'s `nextRecord` and `previousRecord` events. These should select the next or previous record in the `users` array as appropriate. You can decide whether to wrap-around when you hit the beginning or end of the array.

Pass the selected user into `UserDetails`. 

## Users.vue

Remove the import of `users`.

Replace `UserDetails` with `UserBrowser`. Try out the code to make sure it works.

**STOP HERE**

