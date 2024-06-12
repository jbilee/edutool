import { defineStore } from "pinia";
import { sampleAssignments } from "./samples";

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

const localData = localStorage.getItem("edutool-assignments");
const initialState: Assignment[] = localData ? JSON.parse(localData) : sampleAssignments;

export const useAssignmentsStore = defineStore("assignments", {
  state: () => ({ assignments: initialState }),
  getters: {
    base: (state) => state.assignments,
  },
});
