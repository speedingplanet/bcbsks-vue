<template>
  <div class="row">
    <div class="col">
      <h3>Async Demo</h3>
      <p>
        Payor {{ tx.payorId }} paid payee {{ tx.payeeId }}
        ${{ tx.amount }} on {{ tx.txDate }}.
      </p>
      <p v-if="tx2 !== null">
        Payor {{ tx2.payorId }} paid payee {{ tx2.payeeId }}
        ${{ tx2.amount }} on {{ tx2.txDate }}.
      </p>
    </div>
  </div>
</template>

<script>
import { dao } from '@speedingplanet/rest-server';

export default {
  data() {
    return {
      tx: {},
      tx2: null,
    };
  },
  mounted() {
    // Using the DAO
    dao.findTransactionById( '1' ).then( ( results ) => {
      this.tx = results.data;
    } );

    // Using native fetch
    const baseUrl = 'http://localhost:8000/api/zippay/v1/transactions/2?_delay=5000';
    fetch( baseUrl )
      .then( response => {
        if ( response.ok ) {
          return response.json();
        } else {
        // Bad response, >=400. What should we do?
        }
      } )
      .then( results => {
        this.tx2 = results;
      } )
      .catch( error => console.error( 'Something went wrong: ', error ) );
  },
};
</script>

<style>

</style>
