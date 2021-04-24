import {
  USER_LOGIN_FAILURE,USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,USER_LOGOUT,
  USER_REGISTER_FAILURE,
 USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants";
import { userService } from "../services";
import { history } from "../helpers";
import { Dispatch } from "redux";
import { AppActions, User } from "../types";

const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(request());
    userService.login({ email, password }).then(
      (user) => {
        dispatch(success(user));
       // history.push("/homePage");
        window.location.href = "/homePage";

      },
      (error) => {
       // alert("Fill User Email");
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
  firstName,
  lastName,
  email,
  phone,
  dob,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone:string;
  dob:string;
  password: string;
}) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(request());
    userService.register({ firstName,lastName, email,phone,dob,password }).then(
      () => {
        dispatch(success());
        //window.location.reload(true);
        window.location.href = "/";

      },
      (error) => {
       // alert(error);
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
