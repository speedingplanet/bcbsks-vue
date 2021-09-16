<template>
  <div class="row">
    <div class="col">
      <h4>CSS Classes and Styles</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <p>Style attribute</p>
      <!-- <div :style="myCustomStyle" /> -->
      <div :style="{height: '200px', width: '200px', backgroundColor: 'yellow'}" />

      <!-- This doesn't work -->
      <!-- <div style="height: '200px'; width: '200px'; background-color: 'yellow'" /> -->
    </div>
    <div class="col">
      <p>Class attribute</p>
      <div class="row">
        <div class="col">
          <p>Regular and bound</p>
          <p
            class="regularClass"
            :class="boundClass"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur ut, dolores vero debitis ipsa totam,
            dicta quam doloremque ducimus qui
            molestiae non quo expedita nam quis quisquam, reiciendis laboriosam et.
          </p>
        </div>
        <div class="col">
          <p>Bound as array</p>
          <p :class="boundAsArray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim commodi reprehenderit nam provident magnam aperiam
            nesciunt recusandae alias quasi facere? Sequi cumque officiis
            sapiente. Sunt necessitatibus dolorem culpa soluta iure!
          </p>
        </div>
        <div class="col">
          <p>Bound as object</p>
          <p :class="boundAsObject">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum accusamus hic enim laudantium cumque! Ratione,
            dolore, nisi corrupti nobis architecto nam mollitia numquam
            repellat, dolor maiores illum quam magnam fugit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCustomStyle: {
        height: '200px',
        width: '200px',
        backgroundColor: 'green',
      },
      boundClass: 'bold',
      boundAsArray: [ 'whiteText', 'blackBackground' ],
      boundAsObject: {
        bigFont: true,
        monospaced: false,
      },
      enlargeFont: true,
      changeFont: false,
    };
  },
};
</script>

<style>
.bold {
  font-weight: bold;
}
.regularClass {
  text-decoration: underline;
}
.whiteText {
  color: white;
}
.blackBackground {
  background-color: black
}
.bigFont {
  font-size: 150%;
}
.monospaced {
  font-family: monospace;
}
</style>
