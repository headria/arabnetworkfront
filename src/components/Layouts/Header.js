import React from "react";
import { Link } from "react-router-dom";
import arabNetworkLogo from "../../assets/images/logo-arabnetwork-white.svg";

import { t } from "i18next";

// TODO - detect selected language and change it.
const HeaderArabNetwork = ({ dark, drawer, setDrawer }) => {
  return (
    <>
      <div className="header-arabnetwork">
        <div className="top-header">
          <div className="logo">
            <Link to="/">
              <img src={arabNetworkLogo} alt="" />
            </Link>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-inner">
              <div className="header-main-menu">
                <ul className={`${dark ? "navigation-text-Light" : ""}`}>
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
                <button type="button" className="btn btn-dark">
                  {t("menus.buy_arabcoin")}
                </button>
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
                  <button type="button" className="btn-theme">
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
                  </button>
                  {/* <button type='button' className='btn-theme'>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                            </path>
                                        </svg>
                                    </button> */}
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
