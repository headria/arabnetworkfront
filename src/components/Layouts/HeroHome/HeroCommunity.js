import React from "react";
import { Link } from "react-router-dom";
import CommunityDark from "../../../assets/images/community-dark.png";
import CommunityLight from "../../../assets/images/community-light.png";

function HeroHomeFive({ dark, lang, t }) {
  return (
    <>
      <section
        className={`appie-hero-area appie-hero-4-area ${dark ? "hero-area-4-dark" : ""
          }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="appie-hero-content appie-hero-content-4">
                <h1 className="appie-title">{t("community.title")}</h1>
                <p>{t("community.desc")}</p>
                <Link className="main-btn" to="#">{t("community.btn_talk")}</Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="appie-hero-thumb appie-hero-thumb-4 pt-50">
                {dark ? (
                  <>
                    <img src={CommunityDark} alt="" />
                  </>
                ) : (
                  <>
                    <img src={CommunityLight} alt="" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHomeFive;
