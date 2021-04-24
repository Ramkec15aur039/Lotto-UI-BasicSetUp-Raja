import React, { useState, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import { AppState } from "../../reducers";
import { AppActions, RegisterState } from "../../types";
import "../login/loginRegister.css";
import LoginImage from "../../assets/images/login-image.png";
import {
  makeStyles,
  createStyles,
  Theme,
  Select,
  FormControl,
} from "@material-ui/core";
import NavgiationBar from "../../components/navigationBar";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

type SignUpFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  password: string;
};

type Props = LinkDispatchToProps & LinkStateToProps;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);


const SignUpForm: React.FC<Props> = (props: Props) => {
  const [isError, setIsError] = useState(false);

  const [values, setValues] = useState<SignUpFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });
  const classes = useStyles();

  const [date, setDate] = React.useState("");
  const handleDate = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (event.target.value === "") {
      console.log(1);
    } else {
      setDate(event.target.value as string);
    }
  };
  const [month, setMonth] = React.useState("");
  const handleMonth = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMonth(event.target.value as string);
  };
  const [year, setYear] = React.useState("");
  const handleYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as string);
  };
  // handle fields change event
  const handleChange = (prop: keyof SignUpFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // values.dob = `${month}-${date}-${year}`
    values.dob = `${year}-${month}-${date}`;
    if (
      date === "" ||
      values.dob === "" ||
      values.email === "" ||
      values.firstName === "" ||
      values.lastName === "" ||
      values.password === ""
    ) {
      setIsError(true);
    } else {
      props.register(values);
    }
  };

  useEffect(() => {
    // onComponentDidMount
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("minLength", (value) => {
      if (value.length < 5) {
        return false;
      }
      return true;
    });

    return () => {
      // onComponentUnmount
      ValidatorForm.removeValidationRule("isPasswordMatch");
      ValidatorForm.removeValidationRule("minLength");
    };
  }, [values.password]);
  const date1: any = [];
  for (let i = 1; i <= 31; i++) {
    date1.push(<option>{i.toString().length === 1 ? "0" + i : i}</option>);
  }

  const month1: any = [];
  for (let i = 1; i <= 12; i++) {
    month1.push(<option>{i.toString().length === 1 ? "0" + i : i}</option>);
  }

  const year1: any = [];
  for (let i = 1970; i <= 2021; i++) {
    year1.push(<option>{i}</option>);
  }

  return (
    <div>
      <NavgiationBar />
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
            <ValidatorForm onSubmit={handleSubmit}>
              <form className="row mt-3">
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <FormControl>
                    <TextValidator
                      // label="Email address"
                      variant="outlined"
                      onChange={handleChange("email")}
                      name="email"
                      placeholder="Enter Emails"
                      value={values.email}
                      error={isError}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required.",
                        "email is not valid.",
                      ]}
                    />
                  </FormControl>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <FormControl margin="dense">
                    <TextValidator
                      // label="Password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      placeholder="Enter Password"
                      variant="outlined"
                      error={isError}
                      onChange={handleChange("password")}
                      name="password"
                      validators={["required", "minLength:5"]}
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
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </div>
              </form>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1">First name</label>
                    <FormControl margin="dense">
                      <TextValidator
                        onChange={handleChange("firstName")}
                        name="first Name"
                        variant="outlined"
                        error={isError}
                        value={values.firstName}
                        placeholder="First name"
                        validators={["required"]}
                        errorMessages={["this field is required."]}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1">Last name</label>
                    <FormControl margin="dense">
                      <TextValidator
                        variant="outlined"
                        name="Last Name"
                        type="text"
                        onChange={handleChange("lastName")}
                        value={values.lastName}
                        error={isError}
                        placeholder="Last name"
                        validators={["required"]}
                        errorMessages={["this field is required."]}
                      />
                    </FormControl>
                  </div>
                </div>
              </form>
              <form className="mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1">Phone</label>
                    <FormControl margin="dense">
                      <TextValidator
                        variant="outlined"
                        name="Last Name"
                        type="tel"
                        error={isError}
                        onChange={handleChange("phone")}
                        value={values.phone}
                        placeholder="Phone"
                        validators={["required", "matchRegexp:^[0-9]$"]}
                        errorMessages={["this field is required."]}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="exampleInputEmail1">Date Of Birth</label>
                    <div className="row">
                      <div className="col-4">
                        <FormControl variant="outlined" error={isError}>
                          <Select
                            native
                            value={date}
                            onChange={handleDate}
                            label="Age"
                            inputProps={{
                              name: "age",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option aria-label="None" value="" />
                            <option selected disabled hidden>
                              DD
                            </option>
                            {date1}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-4">
                        <FormControl variant="outlined" error={isError}>
                          <Select
                            native
                            value={month}
                            onChange={handleMonth}
                            inputProps={{
                              name: "age",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option aria-label="None" value="" />
                            <option selected disabled hidden>
                              DD
                            </option>
                            {month1}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-4">
                        <FormControl variant="outlined" error={isError}>
                          <Select
                            native
                            value={year}
                            onChange={handleYear}
                            inputProps={{
                              name: "age",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option aria-label="None" value="" />

                            <option selected disabled hidden>
                              DD
                            </option>
                            {year1}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-6 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary customButtonRegister"
                    onClick={handleSubmit}
                    disabled={props.reg.registering}
                  >
                    Register
                  </button>
                  {props.reg.registering && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
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
            </ValidatorForm>
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
    </div>
  );
};

interface LinkStateToProps {
  reg: RegisterState;
}

interface LinkDispatchToProps {
  register: ({
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
    phone: string;
    dob: string;
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
