<script setup lang="ts">
import MobileImage from "../components/MobileImage.vue"
import NavBar from "../components/NavBar.vue"
</script>

<template>
  <NavBar />
  <div class="main">
    <div class="section top">
      <div>
        <h1 class="slogan">과외 매니지먼트 플랫폼</h1>
        <h1 class="brand-name">Edutool</h1>
      </div>
      <div>
        <img src="../assets/tutor.svg" />
      </div>
    </div>
    <div class="section bottom">
      <div class="bottom__content">
        <div>
          <p>
            <strong>FOR TUTORS,</strong><br />
            과외 아젠다와 과제를 한곳에서 관리해요!
          </p>
          <p>
            <strong>STUDENTS,</strong><br />
            학습 진도와 일정을 한눈에 확인하고<br />간편하게 과제를 제출해요!
          </p>
        </div>
        <MobileImage />
      </div>
    </div>
    <div class="footer">
      Image assets from <a href="https://www.freepik.com/" target="_blank">freepik.com</a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 0;

  &.slogan {
    font-size: 1.25rem;
  }

  &.brand-name {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 410px) {
    &.slogan {
      font-size: 1.75rem;
    }

    &.brand-name {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 670px) {
    &.slogan {
      font-size: 2.75rem;
    }

    &.brand-name {
      font-size: 4rem;
    }
  }
}

.main {
  position: relative;
  top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section {
  display: grid;
  place-content: center;
  min-height: 100dvh;

  &.bottom {
    background-color: var(--primary-polygon-color-light);
    font-size: 1.25rem;

    @media screen and (min-width: 670px) {
      font-size: 1.5rem;
    }
  }
}

.top {
  margin: 0 auto;

  @media screen and (max-width: 1159px) {
    grid-template-rows: auto 1fr;
    margin-top: 8rem;

    img {
      width: 90vw;
    }

    gap: 1rem;
  }

  @media screen and (min-width: 1160px) {
    grid-template-columns: auto 1fr;

    img {
      width: 650px;
    }
  }
}

.bottom__content {
  display: grid;
  margin: 0 auto;

  @media screen and (max-width: 670px) {
    padding: 1rem;

  }

  @media screen and (max-width: 1159px) {
    grid-template-rows: auto 1fr;
    margin-top: 10rem;
    gap: 5rem;
    height: 110dvh;
  }

  @media screen and (min-width: 1160px) {
    grid-template-columns: 1fr auto;
  }
}

.footer {
  height: 140px;
  padding: 5rem 2rem 0;
  text-align: right;
  font-size: 0.85rem;
}
</style>