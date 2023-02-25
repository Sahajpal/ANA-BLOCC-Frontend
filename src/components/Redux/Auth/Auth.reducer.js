// import { loadData, saveData } from "../../Utils/localStorage";
// import {
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGOUT,
// } from "./Auth.actionType";

// const initState = {
//   isLogin: loadData("vendorId") ? true : false,
//   // isLogin: true,

//   token: loadData("token") || "",
//   isLoading: false,
//   isError: false,
//   vendorId: loadData("vendorId") || "",
// };

// export const Auth_reducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//       };
//     case LOGIN_SUCCESS:
//       saveData("vendorId", payload);
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         isLogin: true,
//         token: payload,
//         vendorId: payload,
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case LOGOUT:
//       saveData("vendorId", "");
//       localStorage.clear();
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         token: "",
//         isLogin: false,
//         vendorId: "",
//       };
//     default:
//       return state;
//   }
// };
