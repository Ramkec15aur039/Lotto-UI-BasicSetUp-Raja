/******************************** Constants *********************************/
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants";

/********************************** Types ***********************************/
import { User, AuthActionTypes, AuthState } from "../types";

let user: User | null = null;
const userStorage: string | null =
  localStorage.getItem("user") || sessionStorage.getItem("user");

user = userStorage ? JSON.parse(userStorage) : null;

const initState: AuthState = user ? { loggedIn: true, user } : {};

const authentication = (
  state = initState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authentication;
