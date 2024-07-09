<script setup lang="ts">
</script>

<template>
  <div class="ad">
    <div>
      <span class="slogan">AI 비서 Edupal과 함께 다음 레슨을 준비하세요!</span><br />
      내 커리큘럼의 맞춤 과제나 시험 문제를 자동으로 생성합니다.
    </div>
    <div class="ad-button">튜토리얼 시작하기</div>
  </div>
</template>

<style scoped>
.ad {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 1rem;
  background: linear-gradient(247deg, rgb(245, 0, 69), rgba(0, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgb(134, 47, 255), rgba(0, 0, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(0, 182, 248), rgba(0, 0, 0, 0) 70.71%);
  color: rgb(255, 255, 255);
  padding: 1.5rem;

  .slogan {
    font-weight: 700;
    font-size: 1.5rem;
  }
}

.ad-button {
  visibility: hidden;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.6rem;
  padding: 0.5rem 1rem;
  flex-shrink: 0;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>