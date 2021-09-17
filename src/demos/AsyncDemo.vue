<template>
  <div class="row">
    <div class="col">
      <h3>Async Demo</h3>
      <p>
        Payor {{ tx.payorId }} paid payee {{ tx.payeeId }}
        ${{ tx.amount }} on {{ tx.txDate }}.
      </p>
    </div>
  </div>
</template>

<script>
import { dao } from '@speedingplanet/rest-server';

export default {
  props: {
    txId: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      tx: {},
    };
  },
  mounted() {
    dao.findTransactionById( this.txId ).then( ( { data } ) => {
      this.tx = data;
    } );
  },
};
</script>

<style>

</style>
