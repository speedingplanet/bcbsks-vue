# Lab 5

All these labs deal with fetching remote data asynchronously

## Part 1: List Users with remote data

We want to have `ListUsers` fetch data remotely. 

Open `ListUsers.vue`. Remove the import of 'users'. We will use `fetch` to fetch the data directly from the server.

The URL to fetch from is http://localhost:8000/api/zippay/v1/users. Fetch from this URL during the `mounted` phase of the lifecyle. Parse the results as JSON, and then assign the results to the `users` property of the data array. Don't forget to `catch` any errors that might happen.

Visit `ListUsers` in your browser to verify that it is still working. You can look at the console or the network tabs in the developer tools to verify that a fetch request was made over the network.

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