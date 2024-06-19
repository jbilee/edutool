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

const localData = localStorage.getItem("edutool-data");
const initialState: DataProps = localData
  ? JSON.parse(localData)
  : { assignments: sampleAssignments, curriculums: sampleCurriculums };

export const useDataStore = defineStore("assignments", {
  state: () => ({ ...initialState }),
});
