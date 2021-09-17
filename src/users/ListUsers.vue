<template>
  <div class="row">
    <div class="col">
      <h3>List Users</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <DataGrid
        :columns="columns"
        :records="users"
      />
    </div>
  </div>
</template>

<script>
import { users } from '@speedingplanet/rest-server';
import DataGrid from '../components/DataGrid.vue';
const columns = [ {
  field: 'displayName',
  label: 'Name',
},
{
  field: 'email',
  label: 'E-mail',
},
{
  field: 'address.city',
  label: 'City',
},
{
  field: 'address.state',
  label: 'State',
},
];

export default {
  components: { DataGrid },
  data() {
    return {
      columns,
      users,
    };
  },
};
</script>

<style>

</style>
