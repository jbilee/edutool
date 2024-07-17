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
  router.push("/main")
}
</script>

<template>
  <div class="container">
    <h1>Welcome!</h1>
    <p>회원가입 기능을 지원하지 않는 데모 사이트입니다.<br />아래 데모용 계정을 사용해주세요.</p>
    <div class="signin-buttons">
      <div class="signin-button signin-button__tutor" @click="onSignin('tutor')"><strong>튜터 계정</strong>으로 로그인</div>
      <div class="signin-button signin-button__student" @click="onSignin('student')"><strong>학생 계정</strong>으로 로그인</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  height: 100vh;
  place-content: center;
}

.signin-buttons {
  display: flex;
  gap: 1rem;
}

.signin-button {
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.25s;
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