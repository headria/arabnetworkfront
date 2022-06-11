import React from "react";

import LogoWhite from "../../assets/images/logo-arabnetwork-white-2.svg";
import LogoBlack from "../../assets/images/logo-arabnetwork-dark-2.svg";

import { t } from "i18next";
import { Link } from "react-router-dom";

const Footer = ({ darkMode, lang }) => {
  return (
    <div className={`footer ${lang ? "area-rtl" : ""}`}>
      <div className="container">
        <div className="footer-inner">
          <div className="row align-items-start">
            <div className="col-lg-4 col-md-6">
              <div className="logo">
                <div className="img-inner">
                  {darkMode ? (
                    <img src={LogoWhite} alt="" />
                  ) : (
                    <img src={LogoBlack} alt="" />
                  )}
                </div>
              </div>
              <div className="social-media">
                <ul>
                  <li>
                    <a
                      href="https://github.com/Arab-Network"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sharifalshawish"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@sharifalshawish"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://us02web.zoom.us/my/arabnetwork"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path d="M47.73,25.53l14.1-10.31c1.23-1,2.17-.77,2.17,1.09V47.73c0,2.08-1.17,1.85-2.17,1.09L47.73,38.51ZM0,16.38V39.81a9.6,9.6,0,0,0,9.64,9.55H43.81a1.75,1.75,0,0,0,1.75-1.74V24.19a9.59,9.59,0,0,0-9.64-9.54H1.75A1.74,1.74,0,0,0,0,16.38Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/thebigboss"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/sharifalshawish"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SharifAlShawish$"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/ArabNetworkOfficial"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="links">
                <h4>Developers</h4>
                <ul>
                  <li>
                    <Link to="#">Get Started</Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/Arab-Network"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="links">
                <h4>General</h4>
                <ul>
                  <li>
                    <Link to="/private_policy">{t("menus.privacy")}</Link>
                  </li>
                  <li>
                    <Link to="/term_of_services">{t("menus.term")}</Link>
                  </li>
                  <li>
                    <Link to="/intellectual_property">
                      {t("menus.intellectual_property_rights")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/trademarks">{t("menus.trademarks")}</Link>
                  </li>
                  <li>
                    <Link to="/prohibited_uses">
                      {t("menus.prohibited_uses")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/entire_agreement">
                      {t("menus.entire_agreement")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <div className="information no-borders">
                <div className="social-row">
                  <p>{t('footer.discussion')}</p>
                  <ul className='social-icons-list'>
                    <ul className='social-icons-list'>
                      <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                      <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                    </ul>
                  </ul>
                </div>
                <div className="social-row">
                  <p>{t('footer.join')}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="copyright">{t("footer.copyright")}</div>
      </div>
    </div>
  );
};

export default Footer;
