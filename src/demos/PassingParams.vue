<template>
  <div class="row">
    <div class="col">
      <h3>Passing parameters to a remote server</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h4>Get params</h4>
      <DataGrid
        :columns="columns"
        :records="getResults"
      />
    </div>
    <div class="col" />
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid.vue';
const columns = [
  { field: 'payorId', label: 'Payor' },
  { field: 'payeeId', label: 'Payee' },
  { field: 'amount', label: 'Amount' },
  { field: 'txDate', label: 'Date' },
];

export default {
  components: { DataGrid },
  data() {
    return {
      columns,
      getResults: [],
      oneTx: null,
      message: '',
    };
  },

  mounted() {
    const baseUrl = 'http://localhost:8000/api/zippay/v1/transactions';
    const getParams = new URLSearchParams( { txDate_like: '2020-' } );

    fetch( `${baseUrl}?${getParams.toString()}` )
      .then( response => response.json() )
      // eslint-disable-next-line no-return-assign
      .then( results => {
        console.log( 'results:', results );
        this.getResults = results;
        this.oneTx = results[0];
        this.oneTx.lastUpdated = new Date().toISOString();
        this.oneTx.version = this.oneTx.version + 1;
        updateTx( this.oneTx );
      } )
      .catch( error => console.error( 'Fetching error:', error ) );

    function updateTx( tx ) {
      fetch( `${baseUrl}/${tx.id}`,
        {
          method: 'PUT',
          body: JSON.stringify( tx ),
          headers: { 'Content-Type': 'application/json' },
        } )
        .then( response => {
          if ( !response.ok ) {
            console.log( 'Problems with the update:', response );
            throw new Error( { message: 'Update problem', response } );
          }
          return response.json();
        } )
        .then( results => {
          console.log( 'Updated tx:', results );
        } )
        .catch( error => console.error( 'Problems updating:', error ) );
    }
  },
};
</script>

<style>

</style>
