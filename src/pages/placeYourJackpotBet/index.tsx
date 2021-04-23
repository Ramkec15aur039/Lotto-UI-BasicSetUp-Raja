/****************************** Libraries ********************************/
import React, { useEffect, useState } from "react";

/****************************** Components *******************************/
import NavgiationBar from "../../components/navigationBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/********************************* CSS **********************************/
import "./placeYourJackpotBet.css";

/********************************* Image **********************************/
// import TestSVG from "../../assets/images/Test.svg"

export default function PlayForJackpot() {
  const [rows, setRows] = useState(1);
  const addRows: any = [];
  console.log("AddRows: ", addRows);

  useEffect(() => {
    const input1: any = document.querySelector("#limit");
    const settings1 = {
      maxLen: 2,
    };
    input1.addEventListener("keydown", function (event: any) {
      const len = event.target.innerText.trim().length;

      if (len >= settings1.maxLen) {
        event.preventDefault();
        return false;
      }
    });
  }, []);

  for (let i = 1; i <= rows; i++) {
    addRows.push(
      <div className="jackpotBetUl text-center row">
        <div className="col-2">
          <div className="background-PlaceYourJackpotBet baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span
                contentEditable="true"
                id="limit"
                data-input-length="2"
                className="pt-2"
              >
                0
              </span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="background-PlaceYourJackpotBet baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span contentEditable="true" id="limit" className="pt-2">
                5
              </span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="background-PlaceYourJackpotBet baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span contentEditable="true" id="limit">
                15
              </span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="background-PlaceYourJackpotBet baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span contentEditable="true" id="limit" className="pt-2">
                8
              </span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="background-PlaceYourJackpotBet baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span contentEditable="true" id="limit">
                25
              </span>
            </div>
          </div>
        </div>
        <div className="col-2 deleteIconPosition">
          <div className="background-PlaceYourJackpotBet-green baseballJackpotBet">
            <div className="placeYourJackpotBetNumber">
              <span contentEditable="true" id="limit" className="pt-2">
                7
              </span>
            </div>
          </div>
          {rows == 1 ? null : (
            <i
              className="far fa-trash-alt deleteIcon"
              onClick={() => {
                setRows(rows - 1);
              }}
              style={{ color: "red", cursor: "pointer" }}
            ></i>
          )}
        </div>
      </div>
    );
  }

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
                <h3 className="text-center h3-Responsive">
                  Place Your Jackpot Bet
                </h3>
              </div>
            </div>
            {addRows}
            <div className="row">
              <div className="col-12 text-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    setRows(rows + 1);
                  }}
                  className="btnCustom responsive mt-5"
                >
                  Add Row
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 BtnPadding">
                <Link to="/JackpotBet">
                  <Button variant="primary" className="btnCustom responsive">
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
                            <div className="background-PlaceYourJackpotBet mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">0</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="background-PlaceYourJackpotBet mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">5</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="background-PlaceYourJackpotBet mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span>15</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="background-PlaceYourJackpotBet mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">8</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="background-PlaceYourJackpotBet mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span>25</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="background-PlaceYourJackpotBet-green mediumSize baseballJackpotBet">
                              <div className="baseBallNumberMediumSize">
                                <span className="ml-1 pt-2">7</span>
                              </div>
                            </div>
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
