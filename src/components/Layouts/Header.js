import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arabNetworkLogoWhite from "../../assets/images/logo-arabnetwork-white.svg";
import arabNetworkLogoDark from "../../assets/images/logo-arabnetwork-black.svg";

import { t } from "i18next";
// import { ThemeContext, Themes } from './Themes/themeContext';
// TODO - detect selected language and change it.

const HeaderArabNetwork = ({
  drawer,
  setDrawer,
  darkMode,
  setDarkMode,
  themecontext,
  themes,
}) => {
  return (
    <>
      <div className="header-arabnetwork">
        <div className="top-header">
          <div className="logo">
            <Link to="/home">
              {darkMode ? (
                <img src={arabNetworkLogoWhite} alt="" />
              ) : (
                <img src={arabNetworkLogoDark} alt="" />
              )}
            </Link>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-inner">
              <div className="header-main-menu">
                <ul className="navigation-text-Light">
                  <li>
                    <Link to="/">{t("menus.home")}</Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t("menus.ecosystem")}
                      <i className="fal fa-angle-down" />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="#">Eco 1</Link>
                      </li>
                      <li>
                        <Link to="#">Eco 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/community">{t("menus.community")}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{t("menus.contact")}</Link>
                  </li>
                  <li>
                    <Link to="/about">{t("menus.about")}</Link>
                  </li>
                </ul>
              </div>
              <div className="btn-groups">
                {/* <button type="button" className="btn btn-dark">
                  {t("menus.buy_arabcoin")}
                </button> */}
                <div className="choose-lang">
                  <ul>
                    <li className="item">
                      <Link to="#">
                        English
                        <i className="fal fa-angle-down" />
                      </Link>
                    </li>
                    <ul className="sub-menu">
                      <li>
                        <Link to="#" rel="noreferrer">
                          {t("currency.en")}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" rel="noreferrer">
                          {t("currency.tr")}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" rel="noreferrer">
                          {t("currency.ar")}
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="change-theme">
                  {/* { */}
                  <themecontext.Consumer>
                    {({ changeTheme }) => (
                      <button
                        type="button"
                        className="btn-theme"
                        onClick={() => {
                          setDarkMode(!darkMode);
                          changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                      >
                        <i
                          className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
                        ></i>
                      </button>
                    )}
                  </themecontext.Consumer>
                </div>
              </div>
              <div className="btn-show-drawer">
                <button
                  type="button"
                  className="btn-drawer"
                  onClick={() => setDrawer(!drawer)}
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderArabNetwork;
