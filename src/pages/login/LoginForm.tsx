import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { userActions } from "../../actions";
import { AppState } from "../../reducers";
import { AuthState, AppActions } from "../../types";
import LoginImage from "../../assets/images/login-image.png";
import "./loginRegister.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FaGoogle } from "react-icons/fa";
import { hostConfig } from "../../config/index";
import FacebookIcon from "@material-ui/icons/Facebook";

type LoginFormState = {
  email: string;
  password: string;
};

type Props = LinkStateToProps & LinkDispatchToProps;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      width: "100%",
    },
  })
);
const LoginForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [isError, setIsError] = useState(false);

  const [values, setValues] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  // handle password field
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // handle fields change event
  const handleChange = (prop: keyof LoginFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // handle form submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (values.email === "" || values.password === "") {
      setIsError(true);
    }
    props.login(values);
  };

  return (
    <div>
      {/* <NavgiationBar /> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3 loginFormResponsive">
            <ValidatorForm onSubmit={handleSubmit}>
              <form className="loginForm">
                <h3>Logo</h3>
                <p className="pt-3">Login to your Lotto60</p>
                <div className="form-group pt-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <TextValidator
                    variant="outlined"
                    onChange={handleChange("email")}
                    name="email"
                    placeholder="Enter Email"
                    error={isError}
                    value={values.email}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required.",
                      "email is not valid.",
                    ]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <TextValidator
                    id="adornment-password"
                    variant="outlined"
                    error={isError}
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    placeholder="Enter Password"
                    onChange={handleChange("password")}
                    name="password"
                    validators={["required"]}
                    errorMessages={[
                      "this field is required.",
                      "password should be at least 5 characters.",
                    ]}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordToggle}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary loginCustomBtn"
                      disabled={props.auth.loggingIn}
                      onClick={handleSubmit}
                    >
                      Login
                    </button>

                    <span className="loginRegister">
                      New to Lotto60?
                      <Link to="/register" className="registerLink">
                        Register
                      </Link>
                    </span>
                    <button
                      className="btn btn-primary loginCustomBtnResponsive"
                      onClick={handleSubmit}
                      disabled={props.auth.loggingIn}
                    >
                      Login
                    </button>

                    <p className="loginRegisterResponsive">
                      New to Lotto60?
                      <Link to="/register" className="registerLink">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="centered">
                    <h5 className="texts">or</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button
                      style={{ textTransform: "none" }}
                      variant="contained"
                      color="default"
                      id="google-btn"
                      className={classes.button}
                      startIcon={<FaGoogle />}
                      href={`${hostConfig.API_URL}auth/google`}
                    >
                      Signup with Google
                    </Button>
                  </div>
                </div>
                <div></div>
                <div className="row">
                  <div className="col-12">
                    <Button
                      style={{ textTransform: "none" }}
                      variant="contained"
                      color="default"
                      className={classes.button}
                      id="faceBook-btn"
                      startIcon={<FacebookIcon />}
                      href={`${hostConfig.API_URL}auth/facebook`}
                    >
                      Signup with Facebook
                    </Button>
                  </div>
                </div>
              </form>
            </ValidatorForm>
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
    </div>
  );
};

interface LinkStateToProps {
  auth: AuthState;
}

interface LinkDispatchToProps {
  login: ({ email, password }: { email: string; password: string }) => void;
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
