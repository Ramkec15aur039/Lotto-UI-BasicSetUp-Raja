/****************************** Libraries *******************************/
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

/******************************** HOC *********************************/
import { connect } from "react-redux";

/***************************** Actions ******************************/
import { userActions } from "../../actions";

/****************************** Types *******************************/
import { AppState } from "../../reducers";
import { AppActions, RegisterState } from "../../types";

/******************************** CSS *********************************/
import "../login/loginRegister.css";

/****************************** Images *******************************/
import LoginImage from "../../assets/images/login-image.png"

const SignUpForm = () => {
  const date: any = [];
  for (let i = 1; i <= 31; i++) {
    date.push(<option>{i.toString().length === 1 ? "0" + i : i}</option>);
  }

  const month: any = [];
  for (let i = 1; i <= 12; i++) {
    month.push(<option>{i.toString().length === 1 ? "0" + i : i}</option>);
  }

  const year: any = [];
  for (let i = 1970; i <= 2021; i++) {
    year.push(<option>{i}</option>);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mt-3">
          <div className="row">
            <div className="col-12 mt-5">
              <h3>Logo</h3>
              <h5 className="pt-2">Register now to play Lotto60</h5>
              <small className="pt-2">
                Join 10 million other people getting to play the biggest
                jackpots
                <br />
                Dream Bigger Win Bigger with Lotto60
              </small>
            </div>
          </div>
          <form className="row mt-3">
            <div className="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </form>
          <form>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1">First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>
          <form className="mt-3">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="exampleInputEmail1">Date Of Birth</label>
                <div className="row">
                  <div className="col-4">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option selected disabled hidden>
                        DD
                      </option>
                      {date}
                    </select>
                  </div>
                  <div className="col-4">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option selected disabled hidden>
                        MM
                      </option>
                      {month}
                    </select>
                  </div>
                  <div className="col-4">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option selected disabled hidden>
                        YY
                      </option>
                      {year}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-md-6 mt-4">
              <Link className="registerLink" to="/">
                <button
                  type="submit"
                  className="btn btn-primary customButtonRegister"
                >
                  Register
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <p className="pt-4">
                Already a Lotto60 member?{" "}
                <Link className="registerLink" to="/">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 loginResponsive">
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
  reg: RegisterState;
}

interface LinkDispatchToProps {
  register: ({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  reg: state.registration,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  register: bindActionCreators(userActions.register, dispatch),
});

const connectedSignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

export { connectedSignUpForm as SignUpForm };
