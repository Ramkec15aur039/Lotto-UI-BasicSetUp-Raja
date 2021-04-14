/****************************** Constants *******************************/
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants";

/******************************** Types *********************************/
import { User } from ".";

export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}

export interface UserLoginFailureAction {
  type: typeof USER_LOGIN_FAILURE;
  payload: any;
}

export interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

export type AuthActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction;

export type AuthState = {
  loggedIn?: boolean;
  loggingIn?: boolean;
  user?: User;
  error?: any;
};
