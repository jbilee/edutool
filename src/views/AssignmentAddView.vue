<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { DatePicker } from "v-calendar"
import NewAssignmentTips from "../components/assignments/NewAssignmentTips.vue"
import { getDateString } from "../utils/commons"
import { useAssignmentStore } from "../stores/AssignmentStore"
import { useCurriculumStore } from "../stores/CurriculumStore"
import "v-calendar/style.css"

const router = useRouter()
const curriculumStore = useCurriculumStore()
const assignmentsStore = useAssignmentStore()
const { curriculums } = storeToRefs(curriculumStore)
const range = ref({
  start: Date.now(),
  end: Date.now()
})
const formData = reactive({
  curriculum: "",
  title: "",
  details: "",
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

const onSubmit = () => {
  const startDate = range.value.start
  const dueDate = range.value.end
  console.log(formData)
  assignmentsStore.addAssignment({ ...formData, startDate, dueDate })
  router.push({ name: "assignments" })
}
</script>

<template>
  <div>
    <h1>새 과제</h1>
    <div class="page__layout">
      <form @submit.prevent="onSubmit">
        <label for="curriculum">커리큘럼</label>
        <select id="curriculum" v-model="formData.curriculum">
          <option value="" disabled>커리큘럼 선택</option>
          <option v-for="curriculum in curriculums" :key="curriculum.id" :value="curriculum.name">{{ curriculum.name }}
          </option>
        </select>
        <label for="title">주제</label>
        <input type=text id="title" @input="onTitleInput" :value="formData.title" />
        <label for="details">내용</label>
        <textarea id="details" @input="onDetailsInput" :value="formData.details"></textarea>
        <label>과제 기간</label>
        <DatePicker v-model.range.number="range" :columns="2" locale="ko-KR" />
        <label for="start-date">시작일</label>
        <div>{{ getDateString(range.start) }}</div>
        <label for="due-date">마감일</label>
        <div>{{ getDateString(range.end) }}</div>
        <input type="submit" value="생성" />
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

  .form__field {
    margin-bottom: 1.5rem;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    resize: vertical;
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