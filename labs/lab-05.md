# Lab 5

All these labs deal with fetching remote data asynchronously

## Part 1: List Users with remote data

We want to have `ListUsers` fetch data remotely. 

Open `ListUsers.vue`. Remove the import of 'users'. We will use `fetch` to fetch the data directly from the server.

The URL to fetch from is http://localhost:8000/api/zippay/v1/users. Fetch from this URL during the `mounted` phase of the lifecyle. Parse the results as JSON, and then assign the results to the `users` property of the `data` array. Don't forget to `catch` any errors that might happen.

Visit `ListUsers` in your browser to verify that it is still working. You can look at the console or the network tabs in the developer tools to verify that a fetch request was made over the network.

If you want to see a delay, change the URL to this: http://localhost:8000/api/zippay/v1/users?_delay=3000. The `_delay` value is in milliseconds.

**STOP HERE**

## Part 2: Search users

SearchUsers should include live fetching as well. We will use `DataGrid` to display the search results. 

Import `DataGrid` and register it as a `component`. 
Build a `columns` config for `DataGrid`. The `displayName` and `email` fields are enough for now. 

Update `data()` with the following properties: 

- `searchLocation`, initialized to 'local'
- `searchText`, initialized to ''
- `users`, initialized to an empty array
- `columns`, with the columns config from above

Add the following HTML to `SearchUsers.vue`: 

```html
  <div class="row">
    <div class="col">
      <div>
        Search locally, or on the server?
        <div class="form-check form-check-inline">
          <input
            id="searchLocal"
            type="radio"
            name="searchLocation"
            class="form-check-input"
            value="local"
            checked
          >
          <label
            class="form-check-label"
            for="searchLocal"
          >Local</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="searchRemote"
            type="radio"
            name="searchLocation"
            class="form-check-input"
            value="remote"
          >
          <label
            class="form-check-label"
            for="searchLocal"
          >Remote</label>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <label
      for="searchText"
      class="col-2 col-form-label"
    >Search names</label>
    <div class="col-8">
      <input
        id="searchText"
        type="text"
        name="searchText"
        class="form-control"
      >
    </div>
    <div class="col-2">
      <button class="btn btn-primary">
        Search
      </button>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col">
      <DataGrid
        :columns="columns"
      />
    </div>
  </div>
```

On the `#searchText` input, add a v-model, tying it to the same data property. 
On the radio buttons, add a v-model, `searchLocation`.
Hide the "Search" button if `searchLocation` is set to "local".
Hide the div containing the `DataGrid` if `searchText` is empty.

Add a `mounted` lifecycle method. Make a request to http://localhost:8000/api/zippay/v1/users, parse the results, assign them to `users`. Don't forget to catch any errors. 

Add a `computed` configuration. Set up a computed prop `filteredUsers`. It should return `users` filtered by displayName values that partially match `searchText`. 

Pass `filteredUsers` into the `DataGrid`'s `records` property. Trying using `SearchUsers` and see if it works.

**STOP HERE**

## Part 3: Remote searching

What if we want to search remotely, instead of against a local cache? 

In `SearchUsers`, set up a `watch` configuration to watch `searchLocation`. If the value is `remote`, reset the `users` property to an empty array. 

Add an event handler to the search button, `handleRemoteSearch`. It should build out a `URLSearchParams` object, where the key is `displayName_like` and the value is `searchText`. Convert the `URLSearchParams` to a string, and append it to the URL, prefixed by a question mark. Fetch, parse, and assign data to users as appropriate, catching errors as well. 

Try searching remotely. You can look at the network tab in the dev tools to verify that you are connecting to the server and passing search params. 

**STOP HERE**

## Part 4: Building an AddUser form

### components/TextInput.vue

This is a reusable component for capturing input in a single-line text field. It's set up to take parameters to customize the text field itself, while using Bootstrap styling.

It is missing v-model configuration, though. Since this is a component that will have a v-model passed to it, configure the text field's `:value` and `@input` events accordingly. Don't forget to add a corresponding `emits` configuration as well.

### users/AddUser.vue

Build out a form. Start with a `form` tag, with an event handler for `submit`. Make sure to prevent the default behavior on the `submit` event. The event handler can be a placeholder for now.

In the `data()` property, add a `formState` object which will store the state of the form. You should use the following fields:

- displayName
- email
- address.street
- address.city
- address.state
- address.country
- userType, defaulting to 'person'

Add form fields for the following, using `TextInput` for implementation unless otherwise noted.

- Name / displayName
- E-mail / email
- Street / address.street
- City / address.city
- State / address.state
- Country / address.country / select drop-down with US, UK, Canada, and Mexico
- User type / userType / radio button set

The directions above indicate the label and the v-model for each of the fields. 

Add a button at the end, as a submit button. It will need to have `type="submit"`. 

Finish the event handler for the `submit` event. It should log to the console the data in the `formState` object. This lets us verify that we are capturing all the data in the form in an accurate structure. 

**STOP HERE**

## Part 6: Adding a user

When the form submits, disable the submit button, to prevent accidentally (or intentionally) submitting more than once. 

Update the event handler for the form submission to actually add the user. Use `fetch` to point to http://localhost:8000/api/zippay/v1/users and submit the data in the form via the `POST` method. Don't forget to parse the data into a JSON string first. 

When the fetch comes back, print out a message somewhere in AddUser, indicating that the user was successfully added. If there were any problems, print out a message saying that there was a problem.

The user that returns has a unique ID. You should be able to use that to validate that the user was added corrently. Visit http://localhost:8000/api/zippay/v1/users/{id} (skipping the curly braces, just use the actual ID) to see the user that was created. 

**STOP HERE**

