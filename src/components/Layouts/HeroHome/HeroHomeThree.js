import React, { useEffect, useState } from "react";
import heroMan from "../../../assets/images/hero-mans.png";

import halaAiDark from "../../../assets/images/ai-robot-dark.png";
import halaAiLight from "../../../assets/images/ai-robot-light.png";
import { useMoralis, useWeb3Transfer, useMoralisWeb3Api } from "react-moralis";

function HeroHomeThree({ dark, lang, t }) {
  return (
    <>
      <section
        className={`appie-hero-area-2 pb-90 ${dark ? "hero-area-2-dark" : ""}`}
      >
        {lang ? (
          <>
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="appie-hero-content-2 small-font text-right">
                    <h1 className="appie-title">
                      Send, receive and exchange crypto using only a friend's
                      name
                    </h1>
                    <p>
                      Arab Network is building the world's first AI Virtual
                      assistant for digital assets Named Hala.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="appie-hero-thumb-3 wow animated fadeInRight align-left"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              {dark ? (
                <img src={halaAiDark} alt="" />
              ) : (
                <img src={halaAiLight} alt="" />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="appie-hero-content-2 small-font">
                    <h1 className="appie-title">{t("hala.title")}</h1>
                    <p>{t("hala.description")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="appie-hero-thumb-3 wow animated fadeInRight"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              {dark ? (
                <img src={halaAiDark} alt="" />
              ) : (
                <img src={halaAiLight} alt="" />
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default HeroHomeThree;
