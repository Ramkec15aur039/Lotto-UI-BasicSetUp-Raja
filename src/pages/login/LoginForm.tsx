/****************************** Libraries *****************************/
import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

/******************************** HOC *********************************/
import { connect } from "react-redux";

/***************************** Components *****************************/
import { ThunkDispatch } from "redux-thunk";

/****************************** Actions *****************************/
import { userActions } from "../../actions";

/****************************** Types *******************************/
import { AppState } from "../../reducers";
import { AuthState, AppActions } from "../../types";

/******************************** CSS *********************************/
import "./loginRegister.css";

/****************************** Images *******************************/
import LoginImage from "../../assets/images/login-image.png"

const LoginForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-3 loginFormResponsive">
          <form className="loginForm">
            <h3>Logo</h3>
            <p className="pt-3">Login to your Lotto60</p>
            <div className="form-group pt-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control inputEmail"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control inputPassword"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/homePage">
                  <button
                    type="submit"
                    className="btn btn-primary loginCustomBtn"
                  >
                    Login
                  </button>
                </Link>
                <span className="loginRegister">
                  New to Lotto60?
                  <Link to="/register" className="registerLink">
                    Register
                  </Link>
                </span>
                <Link to="/homePage">
                  <button className="btn btn-primary loginCustomBtnResponsive">
                    Login
                  </button>
                </Link>
                <p className="loginRegisterResponsive">
                  New to Lotto60?
                  <Link to="/register" className="registerLink">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 loginResponsive">
          <img
            src={LoginImage}
            alt="lotto"
            width="500px"
            height="600px "
            className="loginImage"
          />
        </div>
      </div>
    </div>
  );
};

interface LinkStateToProps {
  auth: AuthState;
}

interface LinkDispatchToProps {
  login: ({
    email,
    password,
    remember,
  }: {
    email: string;
    password: string;
    remember?: boolean;
  }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  auth: state.authentication,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  login: bindActionCreators(userActions.login, dispatch),
});

const connectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export { connectedLoginForm as LoginForm };
