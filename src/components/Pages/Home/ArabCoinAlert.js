import React, { useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import coinBG from "../../../assets/images/arabcoins-alert/coin-bg.png";
import coinLight from "../../../assets/images/arabcoins-alert/coin-lights.png";
import coinArab from "../../../assets/images/arabcoins-alert/coin-arab.png";
import i18next from "i18next";
// import CounterUpCom from '../../lib/CounterUpCom';

function FunFactHomeThree({ lang, dark, t }) {
  const detectLanguage = i18next.dir() === "rtl";
  const [textCountdown, setTextCountdown] = useState("0.05 ");
  const renderer = ({ completed }) => {
    if (completed) {
      return setTextCountdown("0.05 ");
    } else {
      return setTextCountdown("0.05 ");
    }
  };

  return (
    <>
      <section
        className={`area-countdown pb-10 
                  ${dark ? "fun-fact-area-dark" : ""}
                  ${lang ? "fun-fact-area-rtl" : ""}
          `}
      >
        <div className="container">
          <div
            className="area-countdown-box"
            data-wow-duration="2000ms"
            data-wow-delay="400ms"
          >
            <div className="row">
              <div className="col-lg-6">
                {!lang ? (
                  <div className="fun-fact-content">
                    <h3 className="title">{t("home.arab_coin_alert.title")}</h3>
                    <h5 className="title-desc">
                      {t("home.arab_coin_alert.title_desc")}
                    </h5>
                    <p className="desc">{t("home.arab_coin_alert.desc")}</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="fun-fact-item">
                          <h4 className="title">
                            <Countdown
                              date={1652827401838}
                              onComplete={renderer}
                            />
                          </h4>
                          <span>{t("home.arab_coin_alert.next_phase")}</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="fun-fact-item">
                          <h4 className="title">
                            {textCountdown}
                            <small>USD</small>
                          </h4>
                          <span>{t("home.arab_coin_alert.next_price")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="fun-fact-content">
                    <h3 className="title">
                      شكراً لكل من ساهم في دعم روية شبكة العرب
                    </h3>
                    <h4
                      className="title rtl"
                      style={{
                        paddingRight: "0px !important",
                      }}
                    >
                      مرحلة الماس
                    </h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="fun-fact-item">
                          <h4 className="title rtl">
                            <Countdown
                              date={1652827401838}
                              onComplete={renderer}
                            />
                          </h4>
                          <span>مرحلة الماس</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="fun-fact-item">
                          <h4 className="title">
                            {textCountdown}
                            <small>دولار</small>
                          </h4>
                          <span>السعر الحالي</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <div className="coins-box">
                  <div className="img-inner">
                    <img src={coinBG} alt="" className="img-bg" />
                    <img src={coinLight} alt="" className="img-light" />
                    <Link to="/exchange" className="mt-10">
                      <img
                        src={coinArab}
                        alt=""
                        className="img-coin"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="arrows-group">
              <div id="arrows-inner">
                <span className="arrow primera next bounceAlpha"></span>
                <span className="arrow segunda next bounceAlpha"></span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="center-con"> */}
        {/* </div> */}
      </section>
    </>
  );
}
export default FunFactHomeThree;
