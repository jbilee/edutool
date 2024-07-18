import { defineStore } from "pinia";
import { sampleCurriculums } from "../utils/samples";
import { EnrolledClass } from "./AccountStore";

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

export const useCurriculumStore = defineStore("curriculums", {
  state: (): State => ({ ...initialState }),
  getters: {
    getCurriculumsById: (state) => (classes: EnrolledClass[]) => {
      if (classes.length === 0) return null;
      return classes.reduce<Curriculum[]>((arr, cur) => {
        const curriculum = state.curriculums.find((curriculum) => curriculum.id === cur.id);
        if (curriculum) arr.push(curriculum);
        return arr;
      }, []);
    },
  },
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
