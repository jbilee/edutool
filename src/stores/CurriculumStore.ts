import { defineStore } from "pinia";
import { sampleCurriculums } from "../utils/samples";

export type CurriculumStoreProps = {
  curriculums: Curriculum[];
};

export type Chapter = {
  number: number;
  topic: string;
};

type CurriculumFormData = {
  name: string;
  goal: string;
  chapters: Chapter[];
  totalChapters: number;
};

export type Curriculum = CurriculumFormData & {
  id: number;
  currentChapter: number;
  classSize: number;
  students: string[];
};

type State = CurriculumStoreProps;

const localData = localStorage.getItem("edutool-data");
const initialState: CurriculumStoreProps = localData ? JSON.parse(localData) : { curriculums: sampleCurriculums };

export const useCurriculumStore = defineStore("assignments", {
  state: (): State => ({ ...initialState }),
  actions: {
    addCurriculum(newCurriculum: CurriculumFormData) {
      const initValues = {
        id: this.curriculums.length + 1,
        currentChapter: 1,
        classSize: 0,
        students: [],
      };
      this.curriculums.push({ ...newCurriculum, ...initValues });
    },
    increaseChapter(id: number) {
      const [target] = this.curriculums.filter((curriculum) => curriculum.id === id);
      if (!target || target.currentChapter === target.totalChapters) return;
      target.currentChapter += 1;
    },
    addChapter(id: number, topic: string) {
      const [target] = this.curriculums.filter((curriculum) => curriculum.id === id);
      if (!target) return;
      const nextChapter = target.totalChapters + 1;
      target.totalChapters += 1;
      target.chapters.push({ number: nextChapter, topic });
    },
  },
});
