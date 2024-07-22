<template>
  <div class="image-container">
    <div class="image-device">
      <img src="../assets/demo2.png" />
    </div>
    <div class="image-overlay overlay__calendar">
      <img src="../assets/demo1.png" />
    </div>
    <div class="image-overlay overlay__curriculum">
      <img src="../assets/demo3.png" />
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 550px;
  top: -100px;

  img {
    width: inherit;
  }
}

.image-device {
  position: absolute;
  width: 260px;
  height: 500px;
  left: 150px;
}

.image-overlay {
  position: absolute;
  display: grid;
  place-content: center;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.5);
}

.overlay__calendar {
  top: 60px;
  left: 35px;
  width: 260px;
  height: 170px;
  border-radius: 1.3rem;
}

.overlay__curriculum {
  top: 290px;
  right: 10px;
  width: 340px;
  height: 140px;
  border-radius: 1.3rem;
}
</style>