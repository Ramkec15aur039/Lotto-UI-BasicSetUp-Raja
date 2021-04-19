/****************************** Libraries *******************************/
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/****************************** Helpers ********************************/
import { store } from "./helpers";

/***************************** Components ******************************/
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/******************************** Pages *******************************/
import { LoginForm } from "./pages/login/LoginForm";
import { SignUpForm } from "./pages/register/SignUpForm";
import HomePage from "./pages/homePage";
import PlaceYourJackpotBet from "./pages/placeYourJackpotBet";
import JackpotBet from "./pages/jackpotBet";
import ChooseColor from "./pages/chooseColor";
import PlayForJackpot from "./pages/playForJackpot"

/******************************** CSS *********************************/
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

/****************************** Themes *******************************/
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={darkTheme}>
          <div className="App" style={{ width: "100%" }}>
            <CssBaseline />
            <Switch>
              <Route exact path="/" render={() => <LoginForm />} />
              <Route exact path="/register" render={() => <SignUpForm />} />
              <Route
                exact
                path="/homePage"
                render={() => <HomePage />}
              />
              <Route
                exact
                path="/playForJackpot"
                render={() => <PlayForJackpot />}
              />
              <Route
                exact
                path="/PlaceYourJackpotBet"
                render={() => <PlaceYourJackpotBet />}
              />
              <Route
                exact
                path="/JackpotBet"
                render={() => <JackpotBet />}
              />
              <Route
                exact
                path="/ChooseColor"
                render={() => <ChooseColor />}
              />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
