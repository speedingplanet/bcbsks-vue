<template>
  <div class="row">
    <div class="col">
      <div class="text-center mb-2">
        <button
          class="btn btn-info"
          @click="showBlue = !showBlue"
        >
          If/Else
        </button>
      </div>
      <div
        v-if="showBlue"
        class="box box-left"
      />
    </div>
    <div class="col">
      <div class="text-center mb-2">
        <button
          class="btn btn-warning"
          @click="showYellow = !showYellow"
        >
          Show/Hide
        </button>
      </div>
      <div
        v-show="showYellow"
        class="box box-right"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBlue: true,
      showYellow: true,
    };
  },

};
</script>

<style>
.box {
  height: 200px;
  width: 200px;
}
.box-left {
  background-color: aqua
}

.box-right {
  background-color: goldenrod
}

</style>
