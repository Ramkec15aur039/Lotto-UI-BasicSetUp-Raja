/*************************** Constants *******************************/
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants";

/****************************** Services *********************************/
import { userService } from "../services";

/****************************** Helpers **********************************/
import { history } from "../helpers";

/******************************* Types ***********************************/
import { Dispatch } from "redux";
import { AppActions, User } from "../types";

/************************** User Login Action ***************************/
const login = ({
  email,
  password,
  remember = false,
}: {
  email: string;
  password: string;
  remember?: boolean;
}) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(request());
    userService.login({ email, password, remember }).then(
      (user) => {
        dispatch(success(user));
        history.push("/dashboard");
      },
      (error) => {
        alert(error);
        dispatch(failure(error));
      }
    );

    function request(): AppActions {
      return { type: USER_LOGIN_REQUEST };
    }
    function success(user: User): AppActions {
      return { type: USER_LOGIN_SUCCESS, payload: user };
    }
    function failure(error: any): AppActions {
      return { type: USER_LOGIN_FAILURE, payload: error };
    }
  };
};

/*************************** User Register Action *****************************/
const register = ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(request());
    userService.register({ fullName, email, password }).then(
      () => {
        dispatch(success());
        window.location.reload(true);
      },
      (error) => {
        alert(error);
        dispatch(failure(error));
      }
    );

    function request(): AppActions {
      return { type: USER_REGISTER_REQUEST };
    }
    function success(): AppActions {
      return { type: USER_REGISTER_SUCCESS };
    }
    function failure(error: any): AppActions {
      return { type: USER_REGISTER_FAILURE, payload: error };
    }
  };
};

/************************** User Logout Action ******************************/
const logout = () => {
  userService.logout();
  history.push("/");
  return { type: USER_LOGOUT };
};

export const userActions: any = {
  login,
  register,
  logout,
};
