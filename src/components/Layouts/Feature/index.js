import React, { useState } from "react";
import { Link } from "react-router-dom";

import hightSecurityLight from "../../../assets/images/features/high-security-light.jpg";
import hightSecurityDark from "../../../assets/images/features/high-security-dark.jpg";
import buyAssetsLight from "../../../assets/images/features/buy-assets-light.jpg";
import buyAssetsDark from "../../../assets/images/features/buy-assets-dark.jpg";
import dAppWebLight from "../../../assets/images/features/dapp-web-light.jpg";
import dAppWebDark from "../../../assets/images/features/dapp-web-dark.jpg";
import multiChainLight from "../../../assets/images/features/multi-chain-light.jpg";
import multiChainDark from "../../../assets/images/features/multi-chain-dark.jpg";
import privacyLight from "../../../assets/images/features/privacy-light.jpg";
import privacyDark from "../../../assets/images/features/privacy-dark.jpg";
import nftLight from "../../../assets/images/features/nft-light.jpg";
import nftDark from "../../../assets/images/features/nft-dark.jpg";

import shapeSix from "../../../assets/images/shape/shape-6.png";
import shapeSeven from "../../../assets/images/shape/shape-7.png";
import shapeEight from "../../../assets/images/shape/shape-8.png";

function FeaturesHomeOne({ lang, dark, t }) {
  const [tab, setTab] = useState("custome-tab-1");
  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  return (
    <section
      className={`appie-features-area pt-100 ${dark ? "appie-features-area-dark" : ""
        }`}
      id="features"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="appie-features-tabs-btn">
              <div
                className={`nav flex-column nav-pills ${lang ? "text-right" : ""
                  }`}
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {lang ? (
                  <>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-1")}
                      className={`nav-link ${tab === "custome-tab-1" ? "active" : ""
                        }`}
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      to="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-fingerprint"></i> حماية عالية
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-2")}
                      className={`nav-link ${tab === "custome-tab-2" ? "active" : ""
                        }`}
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      to="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i className="fas fa-user-secret"></i> الخصوصية / المجهولية
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-3")}
                      className={`nav-link ${tab === "custome-tab-3" ? "active" : ""
                        }`}
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      to="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="far fa-box-open"></i> اشتري اصولك الرقمية
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-4")}
                      className={`nav-link ${tab === "custome-tab-4" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="far fa-spider-web"></i> متصفح للتطبيقات لامركزية & الجيل الثالث من الانترنت
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-5")}
                      className={`nav-link ${tab === "custome-tab-5" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fab fa-bitcoin"></i> متعدد السلاسل
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-6")}
                      className={`nav-link ${tab === "custome-tab-6" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fas fa-file-image"></i> NFT
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-1")}
                      className={`nav-link ${tab === "custome-tab-1" ? "active" : ""
                        }`}
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      to="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-fingerprint"></i>
                      {(t("home.features.high_security.tab_name"))}
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-2")}
                      className={`nav-link ${tab === "custome-tab-2" ? "active" : ""
                        }`}
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      to="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i className="fas fa-user-secret"></i>
                      {(t("home.features.privacy_anonymity.tab_name"))}
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-3")}
                      className={`nav-link ${tab === "custome-tab-3" ? "active" : ""
                        }`}
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      to="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="far fa-box-open"></i>
                      {(t("home.features.buy_assets.tab_name"))}
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-4")}
                      className={`nav-link ${tab === "custome-tab-4" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="far fa-spider-web"></i>
                      {(t("home.features.dapp_web.tab_name"))}
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-5")}
                      className={`nav-link ${tab === "custome-tab-5" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fab fa-bitcoin"></i>
                      {(t("home.features.multi_chain.tab_name"))}
                    </Link>
                    <Link
                      onClick={(e) => handleClick(e, "custome-tab-6")}
                      className={`nav-link ${tab === "custome-tab-6" ? "active" : ""
                        }`}
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      to="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fas fa-file-image"></i>
                      {(t("home.features.nft.tab_name"))}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            {lang ?
              (
                <>
                  <div className="tab-content">
                    <div
                      className={`${tab === "custome-tab-1" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={hightSecurityDark} alt="" />
                            ) : (
                              <img src={hightSecurityLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content wow animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">حماية عالية</h3>
                            <p>
                              مفاتيحك الخاص لا يمكن ان تترك جهازك. باستخدام اقوي نظام تشفيري لدي محفظة, يمكنك ان تطمئن علي ان اصولك الرقمية امنة ومحمية.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-2" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={privacyDark} alt="" />
                            ) : (
                              <img src={privacyLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content wow animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">زيادة الخصوصية و المجهولية</h3>
                            <p>
                              لا يوجد بيروقراطية تعرف علي عميلك لتصل الي أصولك الرقمية, لا يوجد ملكية فكرية, لا يوجد هوية, لا يوجد تتبع للمعاملات.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-3" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={buyAssetsDark} alt="" />
                            ) : (
                              <img src={buyAssetsLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">اشتري اصولك الرقمية ببطاقتك</h3>
                            <p>
                              شراء الاصول الرقمية مباشرة من بوابة العرب من خلال استخدام شراكتنا. المزيد من الخيارات قريبا!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-4" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={dAppWebDark} alt="" />
                            ) : (
                              <img src={dAppWebLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">متصفح للتطبيقات لامركزية & دعم الجيل الثالث من الانترنت</h3>
                            <p>
                              يمكنك الوصول بسهولة إلى تطبيقاتك لا مركزية المفضلة من خلال متصفح تطبيقات لا مركزية المدمج ببوابة العرب و دعم لتقنية الجيل الثالث من الانترنت بدون أي مساومة علي الامان .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-5" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={multiChainDark} alt="" />
                            ) : (
                              <img src={multiChainLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">متعدد السلاسل</h3>
                            <p>
                              دعم كامل للبيتكوين والعملات الاخري البديلة والرموز. يتم اختيار واضافة العملات بعناية فائقة.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-6" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={nftDark} alt="" />
                            ) : (
                              <img src={nftLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight text-right"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>ما الذي يجعل بوابة العرب مميزة؟</span>
                            <h3 className="title">NFT</h3>
                            <p>
                              الدعم الكامل لرموز ERC721, ERC1155, BEP721, BEP1155, SLP وتخزين والوصول واداراة مقتنياتك براحة بال وامان باستخدام واجهة بوابة العرب المبتكرة
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) :
              (
                <>
                  <div className="tab-content">
                    <div
                      className={`${tab === "custome-tab-1" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={hightSecurityDark} alt="" />
                            ) : (
                              <img src={hightSecurityLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className={`appie-features-content wow animated fadeInRight ${lang ? "text-right" : ""
                              }`}
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.high_security.title"))}</h3>
                            <p>{(t("home.features.high_security.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-2" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={privacyDark} alt="" />
                            ) : (
                              <img src={privacyLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.privacy_anonymity.title"))}</h3>
                            <p>{(t("home.features.privacy_anonymity.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-3" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={buyAssetsDark} alt="" />
                            ) : (
                              <img src={buyAssetsLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.buy_assets.title"))}</h3>
                            <p>{(t("home.features.buy_assets.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-4" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={dAppWebDark} alt="" />
                            ) : (
                              <img src={dAppWebLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.dapp_web.title"))}</h3>
                            <p>{(t("home.features.dapp_web.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-5" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={multiChainDark} alt="" />
                            ) : (
                              <img src={multiChainLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.multi_chain.title"))}</h3>
                            <p>{(t("home.features.multi_chain.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${tab === "custome-tab-6" ? "show active" : ""
                        } tab-pane fade`}
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="appie-features-thumb text-center animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                          >
                            {dark ? (
                              <img src={nftDark} alt="" />
                            ) : (
                              <img src={nftLight} alt="" />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="appie-features-content animated fadeInRight"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                          >
                            <span>{(t("home.features.feature_title"))}</span>
                            <h3 className="title">{(t("home.features.nft.title"))}</h3>
                            <p>{(t("home.features.nft.desc"))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
      <div className="features-shape-1">
        <img src={shapeSix} alt="" />
      </div>
      <div className="features-shape-2">
        <img src={shapeSeven} alt="" />
      </div>
      <div className="features-shape-3">
        <img src={shapeEight} alt="" />
      </div>
    </section>
  );
}

export default FeaturesHomeOne;
