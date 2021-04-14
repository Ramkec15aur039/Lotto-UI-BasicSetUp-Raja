import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

/******************************** Variables *********************************/
const initState = {};
const middleware = [thunk];

/******************************* Main Store ********************************/
export const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...middleware))
);
