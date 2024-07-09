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

type CurriculumFormData = {
  name: string;
  goal: string;
  chapters: Chapter[];
  totalChapters: number;
};

export type Curriculum = CurriculumFormData & {
  id: number;
  currentChapter: number;
};

export type AssignmentFormData = {
  title: string;
  startDate: number;
  dueDate: number;
  curriculum: string;
  details: string;
};

export type Assignment = AssignmentFormData & {
  id: number;
  submissions: number;
  classSize: number;
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
    addCurriculum(newCurriculum: CurriculumFormData) {
      const id = this.curriculums.length + 1;
      const currentChapter = 1;
      this.curriculums.push({ ...newCurriculum, id, currentChapter });
    },
    addAssignment(newAssignment: AssignmentFormData) {
      const id = this.assignments.length + 1;
      const submissions = 0;
      const submitters: string[] = [];
      const classSize = 5;
      this.assignments.push({ ...newAssignment, id, submissions, submitters, classSize });
    },
  },
});
