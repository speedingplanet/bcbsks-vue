# Lab 4: The DataGrid

In which we build out our re-usable DataGrid component. 

## Part 1: DataGrid and header

We are building a generic `DataGrid` component, with a sub-component `DataGridHeader`. Both files should already exist in the `components` folder.

### users/ListUsers.vue

Import and register `DataGrid`. 
We will pass a list of columns to DataGrid as a property called `columns`. Define the list. It should be an array of objects with `field` and `label` properties. Similar to this:

```javascript
const columns = [ {
  field: 'displayName',
  label: 'Name',
},
// ...
]; 
```
The columns configuration should include `displayName`, `email`, `address.city`, `address.state`. 

Add columns to the `data()` configuration. Pass it as a bound value to `:columns` on `DataGrid`. 

### components/DataGrid.vue

Note that there is an already-defined `style` block.

In the `script` block, import `DataGridHeader`. Add it to the `components` configuration. Create a `props` configuration that expects the following: 

- columns, an array that is required

In the `template` block, create a `div` with the classes `flex-container` and `w-100`. Under the div, add a reference to `DataGridHeader`. Pass `columns` to `DataGridHeader` as the bound property `:columns`. 

### components/DataGridHeader.vue

Note that there is an already-defined `style` block.

In the `script` block, add a `props` config to account for `columns`. The configuration should be the same as the one in `DataGrid`. 

In the `template` block, add a div with the class `flex-header` and optionally, a style definition for a black border along the bottom of the headers. 

Inside the `flex-header` div, add a child div with the class `flex-column-header`. Use `v-for` to iterate over the `columns` and print out a `div` for each column, using the field as the key, and the label as the display value. 

Navigate to `ListUsers` in your browser. You should see a list of column headers with no data under them. To be continued. 

**STOP HERE**

## Part 2: Actual data

Now we can render actual data!

### components/DataGridRow.vue

Note that there is an already-defined `style` block.

In the `script` block, set up a `props` config for `columns` (as in `DataGrid` and `DataDridHeader`). Add a config for a `records` prop, which is the same as columns (an array that's required).

Import the `get` method from `lodash-es/get`. Note that you can rename it to anything you'd like. Add at `methods` config, and create a method `getValue(field, path)`. It should invoke lodash's `get` with the same arguments.

For the template, there should be a div with the class `flex-row`. Inside that div, create another div with the class `flex-cell`. The cell should iterate over each column in columns, and the content of the div should be a call to `getValue` passing in the `record` and the `column.field`.

Try out your code in a browser.

**STOP HERE**
