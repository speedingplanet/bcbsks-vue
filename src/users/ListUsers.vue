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
import DataGrid from '../components/DataGrid.vue';
import { dao } from '@speedingplanet/rest-server';

// eslint-disable-next-line no-unused-vars
function shortCutToUsers() {
  dao.findAllUsers().then( results => {
    this.users = results.data;
  } )
    .catch( error => {
      console.error( 'Used the DAO, something went wrong:', error );
    } );
}

// eslint-disable-next-line no-unused-vars
function handleRequest() {
  const url = 'http://localhost:8000/api/zippay/v1/users?_delay=2000';
  const pResponse = fetch( url );
  const pData = pResponse.then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    } else {
      console.log( 'Response status: ', response.status );
      // Maybe do something here as well

      // No error version
      // return [];

      // Error version
      throw new Error( 'Could not retrieve users' );
    }
  } );
  const pFinal = pData.then( users => {
    this.users = users;
  } );

  pFinal.catch( ( error ) => {
    console.error( 'Something went wrong:', error );
  } );
}

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
      users: [],
    };
  },
  mounted() {
    const url = 'http://localhost:8000/api/zippay/v1/users?_delay=2000';
    fetch( url )
      .then( ( response ) => {
        if ( response.ok ) {
          return response.json();
        } else {
          console.log( 'Response status: ', response.status );
          throw new Error( 'Could not retrieve users' );
        }
      } )
      .then( users => {
        this.users = users;
      } )
      .catch( ( error ) => {
        console.error( 'Something went wrong:', error );
      } );
  },
};
</script>

<style>

</style>
