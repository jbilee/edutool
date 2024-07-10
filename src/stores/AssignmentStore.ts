import { defineStore } from "pinia";
import { getDueStatus } from "../utils/commons";
import { sampleAssignments } from "../utils/samples";

export type AssignmentStoreProps = {
  assignments: Assignment[];
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
  isArchived: boolean;
  submitters: string[];
};

type State = AssignmentStoreProps & {
  statusFilter: null | string;
  curriculumFilter: null | string;
};

const localData = localStorage.getItem("edutool-data");
const initialState: AssignmentStoreProps = localData ? JSON.parse(localData) : { assignments: sampleAssignments };

export const useAssignmentStore = defineStore("assignments", {
  state: (): State => ({ ...initialState, statusFilter: null, curriculumFilter: null }),
  getters: {
    unarchivedAssignments: (state) => {
      return state.assignments.filter((assignment) => assignment.isArchived === false);
    },
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
    addAssignment(newAssignment: AssignmentFormData) {
      const initValues = {
        id: this.assignments.length + 1,
        submissions: 0,
        submitters: [],
        classSize: 0,
        isArchived: false,
      };
      this.assignments.push({ ...newAssignment, ...initValues });
    },
    archiveAssignment(id: number) {
      const [target] = this.assignments.filter((assignment) => assignment.id === id);
      if (!target) return;
      target.isArchived = true;
    },
  },
});
