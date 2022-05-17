import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../../assets/images/logo-white2.svg";
import logo from "../../../assets/images/logo-black2.svg";
import logoWhiteArb from "../../../assets/images/logo-black-arabic.svg";
import logoBlackArb from "../../../assets/images/logo-white-arabic.svg";

import StickyMenu from "../../lib/StickyMenu";
import Navigation from "../Navigation";
import { withTranslation } from "react-i18next";

function HomeOneHeader({
  lang,
  darkEnable = false,
  action,
  langEnabled = false,
  changeMode,
  changeModeLan,
  dark,
  className,
  t,
}) {
  useEffect(() => {
    StickyMenu();
  });
  return (
    <header
      className={`appie-header-area appie-sticky ${
        lang ? "appie-header-area-rtl" : ""
      } ${className || ""}`}
    >
      <div className="container-lg">
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-5 col-4 order-1 order-sm-1">
              {lang ? (
                <div className="appie-logo-box">
                  {darkEnable && dark ? (
                    <Link to="/">
                      <img src={logoBlackArb} alt="" />
                    </Link>
                  ) : (
                    <Link to="/">
                      <img src={logoWhiteArb} alt="" />
                    </Link>
                  )}
                </div>
              ) : (
                <div className="appie-logo-box">
                  {darkEnable && dark ? (
                    <Link to="/">
                      <img src={logoWhite} alt="" />
                    </Link>
                  ) : (
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div className="appie-header-main-menu">
                <Navigation lang={lang} />
              </div>
            </div>
            <div className="col-lg-4  col-md-7 col-sm-6 col-8 order-2 order-sm-3">
              <div className="appie-btn-box">
                {darkEnable &&
                  (dark ? (
                    <span
                      className={`dark__btn__sun ${lang ? "ml-3" : "mr-3"}`}
                      onClick={(e) => changeMode(e)}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    <span
                      className={`dark__btn__mon ${lang ? "ml-3" : "mr-3"}`}
                      onClick={(e) => changeMode(e)}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                      </svg>
                    </span>
                  ))}

                <span
                  className="change-header-align align-content-center ml-3"
                  onClick={(e) => changeModeLan(e)}
                >
                  {t("lang")}
                </span>

                {langEnabled &&
                  (lang ? (
                    <>
                      <a
                        className="main-btn type-2 rtl"
                        href="https://us02web.zoom.us/my/arabnetwork"
                        target="_blank"
                      >
                        <i className="fal fa-user" /> الدعم البشري
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        className="main-btn type-2 ltr"
                        href="https://us02web.zoom.us/my/arabnetwork"
                        target="_blank"
                      >
                        <i className="fal fa-user" />
                        {t("home.header.human_support")}
                      </a>
                    </>
                  ))}
                <div
                  onClick={(e) => action(e)}
                  className="toggle-btn canvas_open d-lg-none d-block"
                >
                  <i className="fa fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withTranslation()(HomeOneHeader);
