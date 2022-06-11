import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arabNetworkLogoWhite from "../../assets/images/logo-arabnetwork-white.svg";
import arabNetworkLogoDark from "../../assets/images/logo-arabnetwork-black.svg";

import { changeLanguage, t } from "i18next";
// import { ThemeContext, Themes } from './Themes/themeContext';
// TODO - detect selected language and change it.

const HeaderArabNetwork = ({
  drawer,
  setDrawer,
  darkMode,
  setDarkMode,
  themecontext,
  themes,
  setLang,
  lang,
}) => {
  const [languageText, setlanguageText] = useState("English");

  const ChangeLanguage = (value) => {
    if (value === 0) {
      setlanguageText("English");
      setLang(false);
    }
    if (value === 1) {
      setlanguageText("Turkey");
      setLang(false);
    }
    if (value === 2) {
      setlanguageText("عربي");
      setLang(true);
    }
  };

  useEffect(() => {}, [darkMode]);
  return (
    <>
      <div className={`header-arabnetwork ${lang ? "area-rtl" : ""}`}>
        <div className="top-header">
          <div className="logo">
            <Link to="/">
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
                  {/* <li>
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
                  </li> */}
                  {/* <li>
                    <Link to="/community">{t("menus.community")}</Link>
                  </li> */}
                  <li>
                    <a
                      href="https://whitepaper.arabnetwork.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("menus.whitepaper")}
                    </a>
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
                      <span>
                        {languageText}
                        <i className="fal fa-angle-down" />
                      </span>
                    </li>
                    <ul className="sub-menu">
                      <li>
                        <span onClick={() => ChangeLanguage(0)}>
                          {t("language.en")}
                        </span>
                      </li>
                      <li>
                        <span onClick={() => ChangeLanguage(1)}>
                          {t("language.tr")}
                        </span>
                      </li>
                      <li>
                        <span onClick={() => ChangeLanguage(2)}>
                          {t("language.ar")}
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="change-theme">
                  <themecontext.Consumer>
                    {({ changeTheme }) => {
                      changeTheme(darkMode ? themes.dark : themes.light);

                      return (
                        <button
                          type="button"
                          className="btn-theme"
                          onClick={() => {
                            setDarkMode(!darkMode);
                          }}
                        >
                          <i
                            className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
                          ></i>
                        </button>
                      );
                    }}
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
