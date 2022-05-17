import React from "react";
import { Link } from "react-router-dom";

function HeroAbout({ dark, lang, t }) {
  return (
    <>
      {lang ? (
        <>
          <div
            className={`appie-about-page-content pt-100 pb-50 noBefore text-right ${dark ? "appie-about-page-dark" : ""
              }`}
          >
            <div className="container">
              <h3 className="title">
                حول هلا
              </h3>
              <p>
                <strong>Hala</strong> is an Artificially Intelligent virtual assistant for Digital Assets that was built to help Arab Gate users to send and receive assets directly by name or username. Anyone can send assets by simply saying, for example
                <br />
                "Hala. Send $50 Bitcoin to Sharif". Hala also assists users in using any function in the Arab Gate.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`appie-about-page-content pt-100 pb-50 noBefore ${dark ? "appie-about-page-dark" : ""
              }`}
          >
            <div className="container">
              <h3 className="title">{t("hala.about_hala.title")}</h3>
              <p>{t("hala.about_hala.description")}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HeroAbout;
