import { defineStore } from "pinia";
import { accountType, isLoggedIn, displayName } from "../utils/account";

type AccountStoreProps = {
  accountType: string | null;
  isLoggedIn: boolean;
  displayName: string;
};

type State = AccountStoreProps;

const initialState: AccountStoreProps = { accountType, isLoggedIn, displayName };

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
