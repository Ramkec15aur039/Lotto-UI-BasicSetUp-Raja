/****************************** Libraries ********************************/
import React, { useEffect } from "react";

/****************************** Components *******************************/
import NavgiationBar from "../../components/navigationBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/********************************* CSS **********************************/
import "./placeYourJackpotBet.css";

export default function PlayForJackpot() {

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
                <h3 className="text-center">Place Your Jackpot Bet</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="jackpotBetUl text-center">
                  <li className="mt-3">
                    <i className="fas fa fa-circle baseballJackpotBet baseballGrey">
                      <div className="baseBallNumber">
                        <span className="ml-1 pt-2">0</span>
                      </div>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa fa-circle baseballJackpotBet baseballGrey">
                      <div className="baseBallNumber">
                        <span className="ml-1 pt-2">5</span>
                      </div>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa fa-circle baseballJackpotBet baseballGrey">
                      <div className="baseBallNumber">
                        <span>15</span>
                      </div>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa fa-circle baseballJackpotBet baseballGrey">
                      <div className="baseBallNumber">
                        <span className="ml-1 pt-2">8</span>
                      </div>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa fa-circle baseballJackpotBet baseballGrey">
                      <div className="baseBallNumber">
                        <span>25</span>
                      </div>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa fa-circle baseballJackpotBet baseballGreen">
                      <div className="baseBallNumber">
                        <span className="ml-1 pt-2">7</span>
                      </div>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <Button variant="primary" className="btnCustom responsive mt-3">
                  Add Row
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 BtnPadding">
                <Link to="/JackpotBet">
                  <Button variant="primary" className="btnCustom">
                    Continue
                  </Button>
                </Link>
              </div>
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
