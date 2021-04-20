/****************************** Libraries *******************************/
import React, { useEffect } from "react";

/***************************** Components ******************************/
import NavgiationBar from "../../components/navigationBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/******************************** CSS *********************************/
import "../placeYourJackpotBet/placeYourJackpotBet.css";
import "../jackpotBet/jackpotBet.css";
import "./chooseColor.css";

export default function ChooseColor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavgiationBar />
      <section className="playForJackpot container">
        <div className="row">
          <div className="col-md-7 colPadding">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="text-center">Choose Colors</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="chooseColorUl row">
                  <li className="col-2 li-Responsive-PlayForJackpot chooseColorPosition">
                    <i className="fa fa-circle chooseColorRed"></i>
                    <i className="fa fa-circle chooseColorBlack"></i>
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey"></i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey"></i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey"></i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey"></i>
                  </li>
                  <li className="col-2 li-Responsive-PlayForJackpot">
                    <i className="fas fa fa-circle baseballPlayForJackpot baseballGrey"></i>
                  </li>
                  <li className="col-2"></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3 submitBet">
                <Link to="/JackpotBet">
                  <Button variant="primary" className="btnCustom">
                    Continue
                  </Button>
                </Link>
              </div>
              <div className="col-md-3 submitBet">
                <Link to="/JackpotBet">
                  <Button variant="outline-primary" className="skipButton">
                    Skip
                  </Button>
                </Link>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div className="col-md-5 yourBets">
            <div className="row colPadding">
              <div className="col-12">
                <h3>Your Bets</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="mt-3">Jackpot Bets</p>
                <div className="row">
                  <div className="col-12 rowPositionMain">
                    <div className="row">
                      <div className="col-12">
                        <ul className="PreviousDraw paddingLeft">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGreen">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className="PreviousDraw paddingLeft">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGrey">
                              <div className="baseBallNumberMediumSize">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballJackpotBet mediumSize baseballGreen">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Red or Black</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Odd or Even</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Over or Under</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
