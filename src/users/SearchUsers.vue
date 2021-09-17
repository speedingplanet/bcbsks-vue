<template>
  <div class="row">
    <div class="col">
      <h3>Search Users</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div>
        Search locally, or on the server?
        <div class="form-check form-check-inline">
          <input
            id="searchLocal"
            v-model="searchLocation"
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
            v-model="searchLocation"
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
        v-model="searchText"
        type="text"
        name="searchText"
        class="form-control"
      >
    </div>
    <div class="col-2">
      <button
        v-show="searchLocation === 'remote'"
        class="btn btn-primary"
      >
        Search
      </button>
    </div>
  </div>
  <div
    v-show="searchText !== ''"
    class="row mt-2"
  >
    <div class="col">
      <DataGrid
        :columns="columns"
        :records="filteredUsers"
      />
    </div>
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid.vue';
import { dao } from '@speedingplanet/rest-server';

const columns = [ {
  field: 'displayName',
  label: 'Name',
},
{
  field: 'email',
  label: 'E-mail',
},
];

export default {
  components: { DataGrid },
  data() {
    return {
      searchLocation: 'local',
      searchText: '',
      users: [],
      columns,
    };
  },
  computed: {
    filteredUsers() {
      const searchRE = new RegExp( this.searchText, 'i' );
      return this.users.filter( user => searchRE.test( user.displayName ) );
    },
  },
  mounted() {
    dao.findAllUsers().then( results => { this.users = results.data; } );
  },
};
</script>

<style>

</style>
