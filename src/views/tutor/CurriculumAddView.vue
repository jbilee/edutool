<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useAccountStore } from "../../stores/AccountStore"
import { useCurriculumStore } from "../../stores/CurriculumStore"
import NewCurriculumTips from "../../components/curriculums/NewCurriculumTips.vue"

const router = useRouter()
const accountStore = useAccountStore()

if (accountStore.accountType === "student") router.push("/main")

const store = useCurriculumStore()
const formData = reactive({
  name: "",
  goal: "",
  totalChapters: 1,
  chapters: [{ number: 1, topic: "" }, { number: 2, topic: "" }]
})
const warnings = reactive({
  name: "",
  goal: "",
  chapters: ""
})
const dragStartIndex = ref<number | null>(null)

const onNameInput = (e: Event) => {
  const input = (e.target as HTMLInputElement).value
  if (input.length > 30) return
  formData.name = input
}
const onGoalInput = (e: Event) => {
  const input = (e.target as HTMLInputElement).value
  if (input.length > 200) return
  formData.goal = input
}

const onTopicInput = (e: Event, number: number) => {
  const [targetChapter] = formData.chapters.filter((chapter) => number === chapter.number)
  targetChapter.topic = (e.target as HTMLInputElement).value
}

const onAddChapter = () => {
  const newChapter = { number: formData.totalChapters += 1, topic: "" }
  formData.chapters.push(newChapter)
}

const onRemoveChapter = (number: number) => {
  if (formData.chapters.length === 2) return
  const filteredChapters = formData.chapters.filter((chapter) => number !== chapter.number)
  formData.totalChapters -= 1
  formData.chapters = filteredChapters.map((chapter, i) => ({ ...chapter, number: i + 1 }))
}

const checkFormValidity = () => {
  let isValid = true
  if (formData.name === "") {
    warnings.name = "*커리큘럼 주제를 입력해 주세요."
    isValid = false
  }
  if (formData.goal === "") {
    warnings.goal = "*학습 목표를 입력해 주세요."
    isValid = false
  }
  formData.chapters.forEach((chapter) => {
    if (chapter.topic === "") {
      warnings.chapters = "*챕터의 제목을 지어주세요."
      isValid = false
    }
  })
  return isValid
}

const onSubmit = () => {
  const isFormValid = checkFormValidity()
  if (!isFormValid) return
  store.addCurriculum(formData)
  router.push({ name: "curriculum" })
}

const onDragStart = (i: number) => dragStartIndex.value = i

const onDrop = (i: number) => {
  if (!dragStartIndex.value) return
  const [movedItem] = formData.chapters.splice(dragStartIndex.value, 1)
  formData.chapters.splice(i, 0, movedItem)
  formData.chapters = formData.chapters.map((chapter, i) => ({ ...chapter, number: i + 1 }))
  dragStartIndex.value = null
}

const onIconClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  target.closest("li")?.setAttribute("draggable", "true")
}

const onIconRelease = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  target.closest("li")?.setAttribute("draggable", "false")
}
</script>

<template>
  <div>
    <h1>새 커리큘럼</h1>
    <div class="page__layout">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="name">커리큘럼 <span class="warning">{{ warnings.name }}</span></label>
          <input type="text" id="name" @input="onNameInput" :value="formData.name" />
        </div>
        <div>
          <label for="goal">목표 <span class="warning">{{ warnings.goal }}</span></label>
          <textarea id="goal" @input="onGoalInput" :value="formData.goal"></textarea>
        </div>
        <div>
          <label for="chapters">챕터 <span class="warning">{{ warnings.chapters }}</span></label>
          <div class="chapters__container">
            <li v-for="(chapter, i) in formData.chapters" :key="chapter.number" draggable @dragstart="onDragStart(i)"
              @drop="onDrop(i)" @dragover.prevent>
              <v-icon name="gi-hamburger-menu" class="list__reorder-icon" @mousedown="onIconClick"
                @mouseup="onIconRelease" />
              <span>{{ chapter.number }} 챕터:</span>
              <input type="text" @input="onTopicInput($event, chapter.number)" :value="chapter.topic" />
              <v-icon name="io-trash-bin" @click="onRemoveChapter(chapter.number)" fill="#f02f3f" />
            </li>
          </div>
          <input class="btn chapters__btn" type="button" @click="onAddChapter" :disabled="formData.totalChapters === 10"
            value="+ 챕터 추가" />
        </div>
        <input class="btn" type="submit" value="커리큘럼 생성" />
      </form>
      <div>
        <NewCurriculumTips />
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

  div {
    display: flex;
    flex-direction: column;
  }

  .form__field {
    margin-bottom: 1.5rem;
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
    cursor: pointer;

    &.chapters__btn {
      align-self: flex-start;
      padding: 0.2rem 0.75rem;
      background: var(--secondary-link-color-base);
    }

    &:disabled {
      background: var(--disabled-color);
      cursor: default;
    }
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

.chapters__container {
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.2rem 0;

    & span {
      white-space: nowrap;
    }
  }
}
</style>