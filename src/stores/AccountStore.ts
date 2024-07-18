import { defineStore } from "pinia";
import { accountType, isLoggedIn, displayName, enrolledClasses } from "../utils/account";

export type EnrolledClass = {
  id: number;
  curriculum: string;
};

type AccountStoreProps = {
  accountType: string | null;
  isLoggedIn: boolean;
  displayName: string;
  enrolledClasses: EnrolledClass[];
};

type State = AccountStoreProps;

const initialState: AccountStoreProps = { accountType, isLoggedIn, displayName, enrolledClasses };

export const useAccountStore = defineStore("account", {
  state: (): State => ({ ...initialState }),
  actions: {
    setAccountType(type: string | null) {
      this.accountType = type;
    },
    setLoggedInStatus(status: boolean) {
      this.isLoggedIn = status;
    },
    setDisplayName(name: string) {
      this.displayName = name;
    },
  },
});
