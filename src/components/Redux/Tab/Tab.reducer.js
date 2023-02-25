import { ACTIVE_TAB } from "./Tab.actionType";

const initState = {
  active: 1,
};

export const Active_Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIVE_TAB:
      return {
        ...state,
        active: payload,
      };

    default:
      return state;
  }
};
