/****************************** Libraries *******************************/
import React, { useEffect } from "react";

/****************************** Components ******************************/
import NavgiationBar from "../../components/navigationBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/********************************* CSS **********************************/
import "./homePage.css";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavgiationBar />
      <section className="content-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 adTop"></div>
          </div>
          <div className="row">
            <div className="col-md-2 mt-3 adLeft"></div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-12"></div>
                  </div>
                  <div className="row contentResponsiveHome">
                    <div className="col-4 text-center contentPaddingTop">
                      <p>Next Draw</p>
                      <p>Thursday 08/04/2021</p>
                    </div>
                    <div className="col-4 text-center contentPaddingTop">
                      <p>Countdown for next Draw</p>
                      <p className="price">00:15:00</p>
                      <p>
                        <span className="pl-1">hr</span>{" "}
                        <span className="pl-2">min</span>{" "}
                        <span className="pl-2">sec</span>
                      </p>
                    </div>
                    <div className="col-4 text-center contentPaddingTop">
                      <p>Next Jackpots Price Pool</p>
                      <span className="price">$100,000</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-12 contentPaddingTop text-center">
                      <button className="btn btn-primary playNowBtn">
                        Play Now
                      </button>
                      <p className="time">Time Remaining</p>
                      <p className="timer">00:15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="jackpotBox">
                    <div className="row">
                      <div className="col-2 text-center homeFontResponsive">
                        <span>Lotto 60</span>
                        <br />
                        <span>Jackpot</span>
                      </div>
                      <div className="col-7">
                        <div className="row">
                          <div className="col-12">
                            <div className="row marginResponsive">
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball red">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball red">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball green">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                              <div className="col-2 scaleMedium">
                                <section className="stage">
                                  <figure className="ball red">
                                    <span className="shadow"></span>
                                    <span className="eight"></span>
                                  </figure>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 pt-4 text-center">
                        <Link to="/PlayForJackpot" className="link">
                          <Button
                            variant="primary"
                            className="btnCustom mr-lg-3 homeBtnResponsive"
                          >
                            Play For Jackpot
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-lg-3">
                <div className="col-md-4 textCenterResponsive">
                  <ul className="PreviousDraw">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 removePadding">
                          <p className="pb-2 previousDrawFont">Previous Draw</p>
                        </div>
                        <div className="col-md-6 removePadding">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">0</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">5</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>15</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">8</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>25</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                        <div className="baseBallNumber">
                          <span className="ml-1">7</span>
                        </div>
                      </i>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 pt-lg-5 textCenterResponsive">
                  <ul className="PreviousDraw ulResponsive">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6 removePadding">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">0</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">5</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>15</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">8</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>25</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                        <div className="baseBallNumber">
                          <span className="ml-1">7</span>
                        </div>
                      </i>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 pt-lg-5 textCenterResponsive">
                  <ul className="PreviousDraw ulResponsive">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6 removePadding">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">0</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">5</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>15</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                        <div className="baseBallNumber">
                          <span className="ml-1">8</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                        <div className="baseBallNumber">
                          <span>25</span>
                        </div>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                        <div className="baseBallNumber">
                          <span className="ml-1">7</span>
                        </div>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="footerCustomContainer">
                    <div className="row p-3">
                      <div className="col-md-4 cardResponsive">
                        Recent Draw{" "}
                        <span>
                          <i className="fas fa-calendar-alt"></i>
                        </span>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4"></div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
                        <p>Winning Numbers</p>
                        <ul className="winningNumbers">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                              <div className="baseBallNumber">
                                <span className="ml-1">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 text-center">
                        <p>No. of Winners</p>
                        <p>7</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p>Date & Time</p>
                        <small>April 5, 6.00pm</small>
                      </div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
                        <p>Winning Numbers</p>
                        <ul className="winningNumbers">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                              <div className="baseBallNumber">
                                <span className="ml-1">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 text-center">
                        <p>No. of Winners</p>
                        <p>7</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p>Date & Time</p>
                        <small>April 5, 6.00pm</small>
                      </div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
                        <p>Winning Numbers</p>
                        <ul className="winningNumbers">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                              <div className="baseBallNumber">
                                <span className="ml-1">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 text-center">
                        <p>No. of Winners</p>
                        <p>7</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p>Date & Time</p>
                        <small>April 5, 6.00pm</small>
                      </div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
                        <p>Winning Numbers</p>
                        <ul className="winningNumbers">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                              <div className="baseBallNumber">
                                <span className="ml-1">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 text-center">
                        <p>No. of Winners</p>
                        <p>7</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p>Date & Time</p>
                        <small>April 5, 6.00pm</small>
                      </div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
                        <p>Winning Numbers</p>
                        <ul className="winningNumbers">
                          <li className="mt-3">
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">0</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">5</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>15</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballRed">
                              <div className="baseBallNumber">
                                <span className="ml-1">8</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballBlack">
                              <div className="baseBallNumber">
                                <span>25</span>
                              </div>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa fa-circle baseballPreviousDraw baseballGreen">
                              <div className="baseBallNumber">
                                <span className="ml-1">7</span>
                              </div>
                            </i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 text-center">
                        <p>No. of Winners</p>
                        <p>7</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p>Date & Time</p>
                        <small>April 5, 6.00pm</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mt-3 adLeft"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
