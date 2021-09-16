<template>
  <div class="card">
    <div class="card-header bg-info">
      {{ user.displayName }}
    </div>
    <div class="row g-0">
      <div
        v-if="showPicture"
        class="col-2 text-center"
      >
        <img
          :src="user.picture.large"
          class="img-fluid"
        >
      </div>
      <div class="col">
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    showPicture: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>

</style>
