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
  top: -120px;
  scale: 0.7;

  img {
    width: inherit;
  }

  @media screen and (min-width: 460px) {
    top: -80px;
    scale: 0.85;
  }

  @media screen and (min-width: 1160px) {
    width: 550px;
    scale: 1;
  }
}

.image-device {
  position: absolute;
  width: 260px;
  left: 35px;

  @media screen and (min-width: 670px) {
    left: 80px;
  }

  @media screen and (min-width: 1160px) {
    left: 150px;
  }
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
  left: -10px;
  width: 260px;
  height: 170px;
  border-radius: 1.3rem;

  @media screen and (min-width: 1160px) {
    left: 35px;
  }
}

.overlay__curriculum {
  top: 290px;
  right: -20px;
  width: 340px;
  height: 140px;
  border-radius: 1.3rem;

  @media screen and (min-width: 1160px) {
    right: 10px;
  }
}
</style>