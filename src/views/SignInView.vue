<script setup lang="ts">
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"

const router = useRouter()
const store = useAccountStore()
const { isLoggedIn } = storeToRefs(store)

if (isLoggedIn.value) router.push("/main")

const onSignin = (type: string) => {
  if (type === "tutor") {
    store.setDisplayName("김튜터")
  }
  if (type === "student") {
    store.setDisplayName("김제자")
  }
  store.setAccountType(type)
  store.setLoggedInStatus(true)
  store.saveToStorage()
  router.push("/main")
}
</script>

<template>
  <div class="container">
    <div>
      <h1>Welcome!</h1>
      <p>회원가입 기능을 지원하지 않는 데모 사이트입니다.<br />아래 데모용 계정을 사용해주세요.</p>
    </div>
    <div class="signin-buttons">
      <div class="signin-button signin-button__tutor" @click="onSignin('tutor')"><strong>튜터 계정</strong>으로 로그인</div>
      <div class="signin-button signin-button__student" @click="onSignin('student')"><strong>학생 계정</strong>으로 로그인</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  height: 100dvh;
  padding: 1.5rem 1rem;
  place-content: flex-end center;

  @media (min-width: 768px) {
    height: 100dvh;
    place-content: center;
  }
}

.signin-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 60%;

  @media (min-width: 768px) {
    margin: 0;
    flex-direction: row;
    gap: 1rem;
  }
}

.signin-button {
  color: rgb(255, 255, 255);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.25s;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}

.signin-button__tutor {
  background: var(--primary-link-color-base);

  &:hover {
    background: var(--primary-link-color-light);
  }
}

.signin-button__student {
  background: var(--secondary-link-color-base);

  &:hover {
    background: var(--secondary-link-color-light);
  }
}
</style>