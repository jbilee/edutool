import { defineStore } from "pinia";
import { sampleAssignments, sampleCurriculums } from "./samples";

export type DataProps = {
  assignments: Assignment[];
  curriculums: string[];
};

export type Assignment = {
  id: number;
  title: string;
  startDate: number;
  dueDate: number;
  curriculum: string;
  submissions: number;
  classSize: number;
  details: string;
};

type State = DataProps & {
  filter: null | string;
};

const localData = localStorage.getItem("edutool-data");
const initialState: DataProps = localData
  ? JSON.parse(localData)
  : { assignments: sampleAssignments, curriculums: sampleCurriculums };

export const useDataStore = defineStore("assignments", {
  state: (): State => ({ ...initialState, filter: null }),
  getters: {
    filteredAssignments: (state) => {
      if (!state.filter) return state.assignments;
      return state.assignments.filter((assignment) => assignment.curriculum === state.filter);
    },
  },
  actions: {
    setCurriculumFilter(filter: string | null) {
      this.filter = filter;
    },
  },
});
