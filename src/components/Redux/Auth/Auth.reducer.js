import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from './Auth.actionType'

const initState = {
  // isLogin: JSON.parse(localStorage.getItem("token")) ? true : false,
  // token: JSON.parse(localStorage.getItem("token")) || "",
  // isLoading: false,
  // isError: false,
  // userData: JSON.parse(localStorage.getItem("user")) || "",
  // role: JSON.parse(localStorage.getItem("role")) || "",
  //   userId: JSON.parse(localStorage.getItem("user"))._id || "",
}

export const Auth_reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        token: payload.token,
        userData: payload.user,
        role: payload.role,
        // userId: payload.user.user._id,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case LOGOUT:
      localStorage.clear()
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: '',
        isLogin: false,
        userData: '',
        role: '',
        // userId: "",
      }
    default:
      return state
  }
}
