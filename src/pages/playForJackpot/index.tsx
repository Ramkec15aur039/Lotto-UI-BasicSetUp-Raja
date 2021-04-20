/****************************** Libraries *******************************/
import React from "react";

/****************************** Components *******************************/
import TextField from "@material-ui/core/TextField";
import NavigationBar from "../../components/navigationBar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

/********************************* CSS **********************************/
import "./playForJackpot.css";

import playForJackpot from "../../assets/images/play-for-jackpot.png";

export default function index() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 playForJackpotMain">
            <div className="row">
              <div className="col-12">
                <p>Pick or Enter your bet amount</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="PlayForJackpotUl row">
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey">
                      <div className="baseBallNumber PlayForJacpotDiv">
                        <span className="PlayForJacpotNumber">$1</span>
                      </div>
                    </i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey">
                      <div className="baseBallNumber PlayForJacpotDiv">
                        <span className="PlayForJacpotNumber">$2</span>
                      </div>
                    </i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey">
                      <div className="baseBallNumber PlayForJacpotDiv">
                        <span className="PlayForJacpotNumber">$3</span>
                      </div>
                    </i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey">
                      <div className="baseBallNumber PlayForJacpotDiv">
                        <span className="PlayForJacpotNumber">$4</span>
                      </div>
                    </i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey">
                      <div className="baseBallNumber PlayForJacpotDiv">
                        <span className="PlayForJacpotNumber">$5</span>
                      </div>
                    </i>
                  </li>
                  <li className="col-2"></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-md-playForJackPot">
                <input
                  type="text"
                  className="form-control playForJackpotInput"
                  id="exampleInputPassword1"
                  placeholder="Enter your bet amount"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>Select Date and Time for Next Draw</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-xs-10 col-md-8 mt-2">
                <TextField
                  id="datetime-local"
                  label="Next Draw"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    color: "primary",
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-5 textCenterResponsive">
                <Link to="/PlaceYourJackpotBet">
                  <Button variant="primary" className="btnCustom responsive">
                    Place Bet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={playForJackpot}
              alt="lotto balls and dollers"
              className="playForJackpotImage img-fluid"
              width="600"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
