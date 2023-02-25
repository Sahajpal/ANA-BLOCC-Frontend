import { ACTIVE_TAB } from "./Tab.actionType";

export const set_active_tab = (payload) => {
  return {
    type: ACTIVE_TAB,
    payload: payload,
  };
};
