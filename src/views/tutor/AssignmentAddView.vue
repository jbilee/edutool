<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { DatePicker } from "v-calendar"
import { getDateString } from "../../utils/commons"
import { useAccountStore } from "../../stores/AccountStore"
import { useAssignmentStore } from "../../stores/AssignmentStore"
import { useCurriculumStore } from "../../stores/CurriculumStore"
import NewAssignmentTips from "../../components/assignments/NewAssignmentTips.vue"
import "v-calendar/style.css"

const router = useRouter()
const accountStore = useAccountStore()

if (accountStore.accountType === "student") router.push("/main")

const curriculumStore = useCurriculumStore()
const assignmentsStore = useAssignmentStore()
const { curriculums } = storeToRefs(curriculumStore)
const currentTime = ref(Date.now())
const range = ref({
  start: currentTime,
  end: currentTime
})
const formData = reactive({
  curriculum: "",
  title: "",
  details: "",
})
const warnings = reactive({
  curriculum: "",
  title: "",
  details: "",
  dueDate: ""
})

const onTitleInput = (e: Event) => {
  const input = (e.target as HTMLInputElement).value
  if (input.length > 30) return
  formData.title = input
}

const onDetailsInput = (e: Event) => {
  const input = (e.target as HTMLInputElement).value
  if (input.length > 200) return
  formData.details = input
}

const checkFormValidity = () => {
  let isValid = true
  if (formData.curriculum === "") {
    warnings.curriculum = "*커리큘럼을 선택해 주세요."
    isValid = false
  }
  if (formData.title === "") {
    warnings.title = "*과제의 주제를 입력해 주세요."
    isValid = false
  }
  if (formData.details === "") {
    warnings.details = "*과제에 대한 설명을 입력해 주세요."
    isValid = false
  }
  return isValid
}

const checkDueDate = () => {
  let isValid = true
  const dueDate = range.value.end
  if (currentTime.value >= dueDate) {
    warnings.dueDate = "*마감일은 오늘일 수 없습니다."
    isValid = false
  }
  return isValid
}

const onSubmit = () => {
  const isDateValid = checkDueDate()
  const isFormValid = checkFormValidity()
  if (!isDateValid || !isFormValid) return
  const startDate = range.value.start
  const dueDate = range.value.end
  assignmentsStore.addAssignment({ ...formData, startDate, dueDate })
  router.push({ name: "assignments" })
}
</script>

<template>
  <div>
    <h1>새 과제</h1>
    <div class="page__layout">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="curriculum">커리큘럼 <span class="warning">{{ warnings.curriculum }}</span></label>
          <select id="curriculum" v-model="formData.curriculum">
            <option value="" disabled>커리큘럼 선택</option>
            <option v-for="curriculum in curriculums" :key="curriculum.id" :value="curriculum.name">{{ curriculum.name
              }}
            </option>
          </select>
        </div>
        <div>
          <label for="title">주제 <span class="warning">{{ warnings.title }}</span></label>
          <input type=text id="title" @input="onTitleInput" :value="formData.title" />
        </div>
        <div>
          <label for="details">내용 <span class="warning">{{ warnings.details }}</span></label>
          <textarea id="details" @input="onDetailsInput" :value="formData.details"></textarea>
        </div>
        <div>
          <label>과제 기간</label>
          <DatePicker v-model.range.number="range" :columns="2" locale="ko-KR" />
        </div>
        <div>
          <label for="start-date">시작일</label>
          <div>{{ getDateString(range.start) }}</div>
        </div>
        <div>
          <label for="due-date">마감일 <span class="warning">{{ warnings.dueDate }}</span></label>
          <div>{{ getDateString(range.end) }}</div>
        </div>
        <input class="btn" type="submit" value="과제 생성" />
      </form>
      <div>
        <NewAssignmentTips />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__layout {
  display: grid;
  gap: 1.75rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1.5fr 1fr;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .form__field {
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  select {
    border: 1px solid var(--light-line-color);
    border-radius: 0.3rem;
  }

  input {
    width: 100%;

    &[type="text"] {
      border: 1px solid var(--light-line-color);
      border-radius: 0.3rem;
    }
  }

  textarea {
    width: 100%;
    resize: vertical;
    border: 1px solid var(--light-line-color);
    border-radius: 0.3rem;
    font-family: "Noto Sans KR", sans-serif;
  }

  .btn {
    max-width: max-content;
    padding: 0.5rem 2rem;
    align-self: flex-end;
  }
}

label {
  font-weight: 500;
  margin-bottom: 0.5rem;

  .warning {
    color: var(--warning-text-color);
    font-size: 0.75rem;
    font-weight: 400;
  }
}

li {
  user-select: none;
}

.list__reorder-icon {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}
</style>