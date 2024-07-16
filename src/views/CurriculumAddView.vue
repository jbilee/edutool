<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useCurriculumStore } from "../stores/CurriculumStore"
import NewCurriculumTips from "../components/curriculums/NewCurriculumTips.vue"

const router = useRouter()
const store = useCurriculumStore()
const formData = reactive({
  name: "",
  goal: "",
  totalChapters: 1,
  chapters: [{ number: 1, topic: "" }]
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
  const filteredChapters = formData.chapters.filter((chapter) => number !== chapter.number)
  formData.totalChapters -= 1
  formData.chapters = filteredChapters.map((chapter, i) => ({ ...chapter, number: i + 1 }))
}

const onSubmit = () => {
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
        <label for="name">커리큘럼</label>
        <input type="text" id="name" @input="onNameInput" :value="formData.name" />
        <label for="goal">목표</label>
        <textarea id="goal" @input="onGoalInput" :value="formData.goal"></textarea>
        <label for="chapters">챕터</label>
        <div class="chapters__container">
          <li v-for="(chapter, i) in formData.chapters" :key="chapter.number" draggable @dragstart="onDragStart(i)"
            @drop="onDrop(i)" @dragover.prevent>
            <v-icon name="gi-hamburger-menu" class="list__reorder-icon" @mousedown="onIconClick"
              @mouseup="onIconRelease" /> {{
                chapter.number }} 챕터<input @input="onTopicInput($event, chapter.number)" :value="chapter.topic" /> <button
              @click="onRemoveChapter(chapter.number)">Delete</button>
          </li>
        </div>
        <button @click="onAddChapter" :disabled="formData.totalChapters === 10">챕터 추가</button>
        <input type="submit" value="생성" />
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