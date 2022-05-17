import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

function Navigation({ lang, dark }) {
  return (
    <>
      {lang ? (
        <ul className={`${dark ? "navigation-text-Light" : ""}`}>
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
            <Link to="#">
              الملفات <i className="fal fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          <li>
            <Link to="#">
              النظام البيئي <i className="fal fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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

          <li>
            <Link to="/about">حول بوابة العرب</Link>
          </li>
        </ul>
      ) : (
        <ul className={`${dark ? "navigation-text-Light" : ""}`}>
          <li>
            <Link to="/">{t("menus.home")}</Link>
          </li>
          <li>
            <Link to="/assets">{t("menus.assets")}</Link>
          </li>
          <li>
            <Link to="/nft">{t("menus.nft")}</Link>
          </li>

          <li>
            <Link to="#">
              {t("menus.docs")}
              <i className="fal fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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

          <li>
            <Link to="#">
              {t("menus.ecosystem")}
              <i className="fal fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/hala-ai">{t("menus.hala")}</Link>
              </li>
              <li>
                <Link to="/gate_pay">{t("menus.gate_pay")}</Link>
              </li>
              {/* <li>
                <Link to="/exchange">{t("menus.support_gate")}</Link>
              </li> */}
              <li>
                <Link to="/community">{t("menus.community")}</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about">{t("menus.about")}</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navigation;
