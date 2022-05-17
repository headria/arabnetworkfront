import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-black2.svg";

import { t } from "i18next";

function Drawer({ drawer, action, lang }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    // e.preventDefault();
    if (itemSize !== "0px") {
      setSize("0px");
      return;
    }
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };
  return (
    <>
      {lang ? (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? "active" : ""}`}
          ></div>
          <div className="offcanvas_menu">
            <div className="container-fluid">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <Link to="#" onClick={(e) => action(e)}>
                    <i className="fa fa-times"></i>
                  </Link>
                </div>
                <div className="menu-inner">
                  <div className="offcanvas-brand text-center mb-40">
                    <img src={logo} alt="" />
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li
                        onClick={(e) => handler(e, "home")}
                        id="home"
                        className="menu-item-has-children active"
                      >
                        <Link to="/">الرئيسية</Link>
                      </li>
                      <li
                        onClick={(e) => handler(e, "assets")}
                        id="assets"
                        className="menu-item-has-children active1"
                      >
                        <Link to="/assets">الاصول</Link>
                      </li>
                      <li
                        onClick={(e) => handler(e, "nft")}
                        id="nft"
                        className="menu-item-has-children active1"
                      >
                        <Link to="/nft">NFT</Link>
                      </li>

                      <li
                        onClick={(e) => handler(e, "docs")}
                        id="docs"
                        className="menu-item-has-children active"
                      >
                        <span className="menu-expand">
                          <i className="fa fa-angle-down"></i>
                        </span>
                        <Link to="#">الملفات</Link>
                        <ul
                          className="sub-menu"
                          style={{
                            height: item === "docs" ? itemSize : "0px",
                          }}
                        >
                          <li>
                            <a
                              href="https://litepaper.arabnetwork.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              الورقة الملخصة (بوابة العرب)
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://whitepaper.arabnetwork.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              (شبكة العرب) الورقة البيضاء
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li
                        onClick={(e) => handler(e, "ecosystem")}
                        id="ecosystem"
                        className="menu-item-has-children active"
                      >
                        <span className="menu-expand">
                          <i className="fa fa-angle-down"></i>
                        </span>
                        <Link to="#">النظام البيئي</Link>
                        <ul
                          className="sub-menu"
                          style={{
                            height: item === "ecosystem" ? itemSize : "0px",
                          }}
                        >
                          <li>
                            <Link to="/community">تواصل اجتماعي</Link>
                          </li>
                          <li>
                            <Link to="/gate_pay">بوابة الدفع</Link>
                          </li>
                          <li>
                            <Link to="/hala-ai">هلا</Link>
                          </li>
                          <li>
                            <Link to="/exchange">بوابة الدعم</Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        onClick={(e) => handler(e, "about")}
                        id="about"
                        className="menu-item-has-children active"
                      >
                        <Link to="/about">حول بوابة العرب</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="human-support mt-20">
                    <a
                      className="main-btn type-2 w-100"
                      href="https://us02web.zoom.us/my/arabnetwork"
                      target="_blank"
                    >
                      <i className="fal fa-user" />{" "}
                      {t("home.header.human_support")}
                    </a>
                  </div>
                  <div className="offcanvas-social">
                    <ul className="text-center">
                      <li>
                        <Link to="https://www.facebook.com/thebigboss">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/c/sharifalshawish">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/SharifAlShawish$">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://t.me/ArabNetworkOfficial">
                          <i className="fab fa-telegram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.tiktok.com/@sharifalshawish">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/in/sharifalshawish">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://github.com/Arab-Network">
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget-info">
                    <ul>
                      <li>
                        <Link to="mailto:support@arabnetwork.org">
                          <i className="fal fa-envelope"></i>
                          support@arabnetwork.org
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? "active" : ""}`}
          ></div>
          <div className="offcanvas_menu">
            <div className="container-fluid">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <Link to="#" onClick={(e) => action(e)}>
                    <i className="fa fa-times"></i>
                  </Link>
                </div>
                <div className="menu-inner">
                  <div className="offcanvas-brand text-center mb-40">
                    <img src={logo} alt="" />
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li
                        onClick={(e) => handler(e, "home")}
                        id="home"
                        className="menu-item-has-children active"
                      >
                        <Link to="/">{t("menus.home")}</Link>
                      </li>
                      <li
                        onClick={(e) => handler(e, "assets")}
                        id="assets"
                        className="menu-item-has-children active1"
                      >
                        <Link to="/assets">{t("menus.assets")}</Link>
                      </li>
                      <li
                        onClick={(e) => handler(e, "nft")}
                        id="nft"
                        className="menu-item-has-children active1"
                      >
                        <Link to="/nft">{t("menus.nft")}</Link>
                      </li>

                      <li
                        onClick={(e) => handler(e, "docs")}
                        id="docs"
                        className="menu-item-has-children active"
                      >
                        <span className="menu-expand">
                          <i className="fa fa-angle-down"></i>
                        </span>
                        <Link to="#">{t("menus.docs")}</Link>
                        <ul
                          className="sub-menu"
                          style={{
                            height: item === "docs" ? itemSize : "0px",
                          }}
                        >
                          <li>
                            <a
                              href="https://litepaper.arabnetwork.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t("menus.litepaper")}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://whitepaper.arabnetwork.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t("menus.whitepaper")}
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li
                        onClick={(e) => handler(e, "ecosystem")}
                        id="ecosystem"
                        className="menu-item-has-children active"
                      >
                        <span className="menu-expand">
                          <i className="fa fa-angle-down"></i>
                        </span>
                        <Link to="#">{t("menus.ecosystem")}</Link>

                        <ul
                          className="sub-menu"
                          style={{
                            height: item === "ecosystem" ? itemSize : "0px",
                          }}
                        >
                          <li>
                            <Link to="/community">{t("menus.community")}</Link>
                          </li>
                          <li>
                            <Link to="/gate_pay">{t("menus.gate_pay")}</Link>
                          </li>
                          <li>
                            <Link to="/hala-ai">{t("menus.hala")}</Link>
                          </li>
                          {/* <li>
                            <Link to="/exchange">
                              {t("menus.support_gate")}
                            </Link>
                          </li> */}
                        </ul>
                      </li>

                      <li
                        onClick={(e) => handler(e, "about")}
                        id="about"
                        className="menu-item-has-children active"
                      >
                        <Link to="/about">{t("menus.about")}</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="human-support mt-20">
                    <a
                      className="main-btn type-2 w-100"
                      href="https://us02web.zoom.us/my/arabnetwork"
                      target="_blank"
                    >
                      <i className="fal fa-user" />{" "}
                      {t("home.header.human_support")}
                    </a>
                  </div>
                  <div className="offcanvas-social">
                    <ul className="text-center">
                      <li>
                        <a href="https://www.facebook.com/thebigboss">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/sharifalshawish">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/SharifAlShawish$">
                          <i className="fab fa-twitter"></i>
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
                        <a href="https://www.linkedin.com/in/sharifalshawish">
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
                  <div className="footer-widget-info">
                    <ul>
                      <li>
                        <a href="mailto:support@arabnetwork.org">
                          <i className="fal fa-envelope"></i>
                          support@arabnetwork.org
                        </a>
                      </li>
                      {/* <li>
                        <Link to="#">
                          <i className="fal fa-phone"></i> +(642) 342 762 44
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fal fa-map-marker-alt"></i>
                          442 Belle Terre St Floor 7, San Francisco, AV 4206
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Drawer;
