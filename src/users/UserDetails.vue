<template>
  <div class="card">
    <div class="card-header bg-info">
      {{ user.displayName }}
    </div>
    <ul class="list-group">
      <li class="list-group-item">
        {{ user.email }}
      </li>
      <li class="list-group-item">
        {{ user.address.street }}
      </li>
      <li class="list-group-item">
        {{ user.address.city }}, {{ user.address.state }}
      </li>
      <li class="list-group-item">
        Active? {{ user.active }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
