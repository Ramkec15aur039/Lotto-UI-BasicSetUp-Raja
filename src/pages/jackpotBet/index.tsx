/****************************** Libraries ********************************/
import React, { useEffect } from "react";

/****************************** Components *******************************/
import NavgiationBar from "../../components/navigationBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/********************************* CSS **********************************/
import "../placeYourJackpotBet/placeYourJackpotBet.css";
import "./jackpotBet.css";

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
                <h3 className="text-center">Try Your Luck With More Games</h3>
              </div>
            </div>
            <div className="row jackpotBetMargin">
              <div className="col-md-4">
                <div className="jackpotBetCard p-3 text-center">
                  <p>Red or Black</p>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </small>
                  <Link to="/ChooseColor">
                    <Button
                      variant="primary"
                      className="btnCustom jackpotBet mt-2"
                    >
                      Play
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jackpotBetCard p-3 text-center">
                  <p>Odd or Even</p>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </small>
                  <Button
                    variant="primary"
                    className="btnCustom jackpotBet mt-2"
                  >
                    Play
                  </Button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jackpotBetCard p-3 text-center">
                  <p>Over or Under</p>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </small>
                  <Button
                    variant="primary"
                    className="btnCustom jackpotBet mt-2"
                  >
                    Play
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 submitBet">
                <Link to="/homePage">
                  <Button variant="primary" className="btnCustom">
                    Submit Bet
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
