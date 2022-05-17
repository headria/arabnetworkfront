import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

import heroThumbDark from "../../../assets/images/mobile-screenshots/screen-splash-dark.png";
import heroThumbLight from "../../../assets/images/mobile-screenshots/screen-splash-light.png";

// Rign Lang
import LangRingLight0 from "../../../assets/images/rings/lang-ring-light-0.png";
import LangRingLight1 from "../../../assets/images/rings/lang-ring-light-1.png";
import LangRingLight2 from "../../../assets/images/rings/lang-ring-light-2.png";
import LangRingLight3 from "../../../assets/images/rings/lang-ring-light-3.png";
import LangRingDark0 from "../../../assets/images/rings/lang-ring-dark-0.png";
import LangRingDark1 from "../../../assets/images/rings/lang-ring-dark-1.png";
import LangRingDark2 from "../../../assets/images/rings/lang-ring-dark-2.png";
import LangRingDark3 from "../../../assets/images/rings/lang-ring-dark-3.png";

// Rign Coin
import coinRingLight0 from "../../../assets/images/rings/coin-ring-dark-0.png";
import coinRingLight1 from "../../../assets/images/rings/coin-ring-dark-1.png";
import coinRingLight2 from "../../../assets/images/rings/coin-ring-dark-2.png";
import coinRingLight3 from "../../../assets/images/rings/coin-ring-dark-3.png";
import coinRingDark0 from "../../../assets/images/rings/coin-ring-light-0.png";
import coinRingDark1 from "../../../assets/images/rings/coin-ring-light-1.png";
import coinRingDark2 from "../../../assets/images/rings/coin-ring-light-2.png";
import coinRingDark3 from "../../../assets/images/rings/coin-ring-light-3.png";


import bnb from "../../../assets/images/cryptoicons/binance.png";
import btc from "../../../assets/images/cryptoicons/bitcoin.png";
import arabcoin from "../../../assets/images/cryptoicons/arab-coin-light.png";
import arabcoindark from "../../../assets/images/cryptoicons/arab-coin-dark.png";

// import headerOverLay from "../../../assets/images/header-overlay.png";

function HeroHomeOne({ dark, lang, t }) {
  return (
    <>
      <section
        className={`appie-hero-area ${dark ? "appie-hero-area-dark" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {lang ? (
                <div className="appie-hero-content text-right">
                  <span>مرحبا بك في بوابة العرب</span>
                  <h1 className="appie-title">
                    الطريقة الاكثر أمانًا لتخزين , شراء ، تداول العملات الرقمية
                    تحت اداراتك
                  </h1>
                  <p>
                    ارسال, استقبال, استبدال العملات الرقمية, والتفاعل مع
                    التطبيقات لامركزية
                  </p>
                  <ul>
                    <li>
                      <a href="/ios">
                        <i className="fab fa-apple" /> تنزيل لنظام iOS
                      </a>
                    </li>
                    <li>
                      <a
                        className="item-2"
                        href="https://dl.dropboxusercontent.com/s/ulfo4qv8r4b333y/arabgatewallet.apk"
                      >
                        <i className="fab fa-google-play" /> تنزيل لنظام Android
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="appie-hero-content">
                  <span>{t("home.hero_home.welcome")}</span>
                  <div className="appie-title">
                    <span>The&nbsp;</span>
                    <ReactTypingEffect
                      speed="70"
                      eraseSpeed="60"
                      eraseDelay="1000"
                      typingDelay="1000"
                      className="animation-text"
                      style={{
                        textTransform: "none",
                      }}
                      text={[
                        t("home.hero_home.animation_text.safest"),
                        t("home.hero_home.animation_text.most_secure"),
                        t("home.hero_home.animation_text.simplest"),
                        t("home.hero_home.animation_text.easiest"),
                        t("home.hero_home.animation_text.best"),
                        t("home.hero_home.animation_text.smartest"),
                        t("home.hero_home.animation_text.most_trusted"),
                      ]}
                    />
                    <br />
                    <h1
                      className="appie-title"
                      style={{
                        textTransform: "none",
                      }}
                    >
                      {t("home.hero_home.crypto_app")}
                    </h1>
                  </div>
                  <p>
                    {t("home.hero_home.arab_gate_desc")}
                  </p>
                  <ul>
                    <li>
                      <Link to="/ios">
                        <i className="fab fa-apple" />{t("home.hero_home.apple_button")}
                      </Link>
                    </li>
                    <li>
                      <a
                        className="item-2"
                        href="https://dl.dropboxusercontent.com/s/ulfo4qv8r4b333y/arabgatewallet.apk"
                        download
                      >
                        <i className="fab fa-google-play" />{t("home.hero_home.android")}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <div
                className={`appie-hero-thumb big-size no-before ${lang ? "align-right" : ""
                  }`}
              >
                {dark ? (
                  <>
                    <div
                      className="thumb wow animated fadeInUp"
                      data-wow-duration="2000ms"
                      data-wow-delay="200ms"
                    >
                      <img
                        src={heroThumbDark}
                        alt=""
                        className="img-background"
                      />
                      <img
                        src={coinRingDark0}
                        alt=""
                        className="img-ring ring-1"
                      />
                      <img
                        src={coinRingDark1}
                        alt=""
                        className="img-ring ring-2"
                      />
                      <img
                        src={coinRingDark2}
                        alt=""
                        className="img-ring ring-3"
                      />
                      <img
                        src={coinRingDark3}
                        alt=""
                        className="img-ring ring-4"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="thumb wow animated fadeInUp fix-size"
                      data-wow-duration="2000ms"
                      data-wow-delay="200ms"
                    >
                      <img
                        src={heroThumbLight}
                        alt=""
                        className="img-background"
                      />
                      <img
                        src={coinRingLight0}
                        alt=""
                        className="img-ring ring-1"
                      />
                      <img
                        src={coinRingLight1}
                        alt=""
                        className="img-ring ring-2"
                      />
                      <img
                        src={coinRingLight2}
                        alt=""
                        className="img-ring ring-3"
                      />
                      <img
                        src={coinRingLight3}
                        alt=""
                        className="img-ring ring-4"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img
            style={{ width: "45px" }}
            src={dark ? arabcoindark : arabcoin}
            alt=""
          />
        </div>
        <div className="hero-shape-2">
          <img style={{ width: "45px" }} src={btc} alt="" />
        </div>
        {/* <div className="hero-shape-3">
          <img style={{ width: "45px" }} src={bnb} alt="" />
        </div> */}
      </section>
    </>
  );
}

export default HeroHomeOne;
