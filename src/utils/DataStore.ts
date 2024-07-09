import { defineStore } from "pinia";
import { getDueStatus } from "./commons";
import { sampleAssignments, sampleCurriculums } from "./samples";

export type DataProps = {
  assignments: Assignment[];
  curriculums: Curriculum[];
};

export type Chapter = {
  number: number;
  topic: string;
};

export type Curriculum = {
  id: number;
  name: string;
  goal: string;
  chapters: Chapter[];
  totalChapters: number;
  currentChapter: number;
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
  submitters: string[];
};

type State = DataProps & {
  statusFilter: null | string;
  curriculumFilter: null | string;
};

const localData = localStorage.getItem("edutool-data");
const initialState: DataProps = localData
  ? JSON.parse(localData)
  : { assignments: sampleAssignments, curriculums: sampleCurriculums };

export const useDataStore = defineStore("assignments", {
  state: (): State => ({ ...initialState, statusFilter: null, curriculumFilter: null }),
  getters: {
    filteredAssignments: (state) => {
      if (!state.statusFilter && !state.curriculumFilter) return state.assignments;
      return state.assignments
        .filter((assignment) => {
          if (state.statusFilter === null) return true;
          const status = getDueStatus(assignment.startDate, assignment.dueDate);
          return status === state.statusFilter;
        })
        .filter((assignment) => {
          if (state.curriculumFilter === null) return true;
          return assignment.curriculum === state.curriculumFilter;
        });
    },
  },
  actions: {
    setStatusFilter(filter: string | null) {
      this.statusFilter = filter;
    },
    setCurriculumFilter(filter: string | null) {
      this.curriculumFilter = filter;
    },
  },
});
