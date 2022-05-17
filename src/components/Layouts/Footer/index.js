import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../../assets/images/logo-white2.svg";
import logo from "../../../assets/images/logo-black2.svg";

import { t } from "i18next";

function FooterHomeOne({ dark, lang }) {
  return (
    <>
      <section
        className={`appie-footer-area 
          ${dark ? "appie-footer-area-dark" : ""}
          ${lang ? "appie-project-area-rtl" : ""}
          `}
      >
        <div className="container">
          {lang ? (
            <>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-about-widget text-right">
                    <div className="logo">
                      {dark ? (
                        <Link to="/">
                          <img src={logoWhite} alt="" />
                        </Link>
                      ) : (
                        <Link to="/">
                          <img src={logo} alt="" />
                        </Link>
                      )}
                    </div>
                    <p>
                      الطريقة الاكثر أمانًا لتخزين , شراء ، تداول العملات
                      الرقمية تحت اداراتك
                    </p>
                    <div className="social mt-30">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/thebigboss">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/c/sharifalshawish">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/SharifAlShawish">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ArabNetworkOfficial">
                            <i className="fab fa-telegram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@sharifalshawish">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/sharifalshawish/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="https://github.com/Arab-Network">
                            <i className="fab fa-github"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-navigation text-right">
                    <h4 className="title">الوصول السريع</h4>
                    <ul>
                      <li>
                        <Link to="/about">حول بوابة العرب</Link>
                      </li>
                      <li>
                        <Link to="/privacy_and_term">خصوصية</Link>
                      </li>
                      <li>
                        <Link to="/term_of_service">شروط الخدمة</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-navigation text-right">
                    <h4 className="title">الروابط</h4>
                    <ul>
                      <li>
                        <Link to="/">الرئيسية</Link>
                      </li>
                      <li>
                        <Link to="/assets">الاصول</Link>
                      </li>
                      <li>
                        <Link to="/nft">NFT</Link>
                      </li>
                      <li>
                        <Link to="/hala-ai">هلا</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                    <div className="apps-download-btn">
                      <ul>
                        <li>
                          <a href="/ios">
                            <i className="fab fa-apple" /> تنزیل لنظام iOS
                          </a>
                        </li>
                        <li>
                          <a
                            className="item-2"
                            href="https://dl.dropboxusercontent.com/s/ulfo4qv8r4b333y/arabgatewallet.apk"
                          >
                            <i className="fab fa-google-play" /> تنزیل لنظام
                            Android
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="copyright-text">
                      <p>حقوق النشر © 2022 ArabNetwork. كل الحقوق محفوظة</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-about-widget">
                    <div className="logo">
                      {dark ? (
                        <Link to="/">
                          <img src={logoWhite} alt="" />
                        </Link>
                      ) : (
                        <Link to="/">
                          <img src={logo} alt="" />
                        </Link>
                      )}
                    </div>
                    <p>{t('footer.about')}</p>
                    <div className="social mt-30">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/thebigboss">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/c/sharifalshawish">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/SharifAlShawish">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ArabNetworkOfficial">
                            <i className="fab fa-telegram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@sharifalshawish">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/sharifalshawish/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/Arab-Network">
                            <i className="fab fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-navigation">
                    <h4 className="title">{t('footer.quick_access')}</h4>
                    <ul>
                      <li>
                        <Link to="/about">{t('menus.about')}</Link>
                      </li>
                      <li>
                        <Link to="/privacy_and_term">{t('menus.privacy')}</Link>
                      </li>
                      <li>
                        <Link to="/term_of_service">{t('menus.term_of_services')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-navigation">
                    <h4 className="title">{t('footer.links')}</h4>
                    <ul>
                      <li>
                        <Link to="/">{t('menus.home')}</Link>
                      </li>
                      <li>
                        <Link to="/assets">{t('menus.assets')}</Link>
                      </li>
                      <li>
                        <Link to="/nft">{t('menus.nft')}</Link>
                      </li>
                      <li>
                        <Link to="/hala-ai">{t('menus.hala')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                    <div className="apps-download-btn">
                      <ul>
                        <li>
                          <a href="/ios">
                            <i className="fab fa-apple" />
                            {t("footer.apple_button")}
                          </a>
                        </li>
                        <li>
                          <a
                            className="item-2"
                            href="https://dl.dropboxusercontent.com/s/ulfo4qv8r4b333y/arabgatewallet.apk"
                          >
                            <i className="fab fa-google-play" />
                            {t("footer.android")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="copyright-text">
                      <p>{t("footer.made")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default FooterHomeOne;
