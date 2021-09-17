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
    <div
      v-if="searchLocation === 'remote'"
      class="col-2"
    >
      <button
        class="btn btn-primary"
        @click="handleRemoteSearch(searchText)"
      >
        Search
      </button>
    </div>
  </div>
  <div
    v-if="searchText !== ''"
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
import { dao } from '@speedingplanet/rest-server';
import DataGrid from '../components/DataGrid.vue';

const columns = [ {
  field: 'displayName',
  label: 'Name',
},
{ field: 'email', label: 'E-mail' } ];

export default {
  components: { DataGrid },
  data() {
    return {
      searchText: '',
      searchLocation: 'local',
      users: [],
      columns,
    };
  },
  computed: {
    filteredUsers() {
      if ( this.searchLocation === 'remote' ) return this.users;
      const searchRE = new RegExp( this.searchText, 'i' );
      return this.users.filter( user => searchRE.test( user.displayName ) );
    },
  },
  watch: {
    searchLocation( newSearchLocation, oldSearchLocation ) {
      if ( newSearchLocation === 'remote' ) {
        this.users = [];
      }
    },
  },
  mounted() {
    dao.findAllUsers().then( ( { data } ) => {
      this.users = data;
    } );
  },
  methods: {
    handleRemoteSearch( searchText ) {
      const params = new URLSearchParams( { displayName_like: searchText } );
      fetch( `http://localhost:8000/api/zippay/v1/users?${params.toString()}` )
        .then( response => response.json() )
        // eslint-disable-next-line no-return-assign
        .then( results => {
          console.log( 'users: ', this.users );
          console.log( 'results: ', results );
          this.users = results;
        } );
    },
  },
};
</script>

<style>

</style>
