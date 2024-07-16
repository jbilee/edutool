import { defineStore } from "pinia";
import { accountType, isLoggedIn } from "../utils/account";

type AccountStoreProps = {
  accountType: string | null;
  isLoggedIn: boolean;
};

type State = AccountStoreProps;

const initialState: AccountStoreProps = { accountType, isLoggedIn };

export const useAccountStore = defineStore("account", {
  state: (): State => ({ ...initialState }),
  actions: {
    setAccountType(type: string | null) {
      this.accountType = type;
    },
    setLoggedInStatus(status: boolean) {
      this.isLoggedIn = status;
    },
  },
});
