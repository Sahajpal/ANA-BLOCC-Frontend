import { combineReducers } from "redux";
// import { Auth_reducer } from "./Auth/Auth.reducer";
import { Active_Reducer } from "./Tab/Tab.reducer";
export const rootReducer = combineReducers({
  // auth: Auth_reducer,
  activeTabCheck: Active_Reducer,
});
