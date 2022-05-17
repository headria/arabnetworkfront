import React from "react";
import { Link } from "react-router-dom";

function HeroAbout({ dark, t }) {
  return (
    <>
      <div
        className={`appie-about-page-content pt-100 pb-30 noBefore ${dark ? "appie-about-page-dark" : ""
          }`}
      >
        <div className="container">
          <h3 className="title">{t("privacy.privacy_description.text_content_title_1")}</h3>
          <p>
            {t("privacy.privacy_description.text_content_desc_1")}

            {/* This Privacy Policy provided by ARAB NETWORK FUTURE TEKNOLOJI
            PROGRAMCILIGI LIMITED SIRKETI With corporate seat in HAMURCU SITESI,
            NO:12-26 CEVIZLIK MAHALLESI ISTANBUL CADDESI, BAKIRKOY Istanbul
            (Europe) Turkey registered under :0710927186 informs and explains to
            you how we collect, store, and process any information that
            directly, indirectly, or in connection with other information.
            <br />
            Privacy and data protection are core principles on which we have our
            website{" "} */}
            {/* <Link to="https://arabgatewallet.com" className="mx-2">
              Arabgatewallet.com
            </Link>{" "}
            and any of our AppStore or Google Play applications “Arab Gate”
            (hereinafter the “Application”). */}
            <br />
            {/* We have implemented various technical and organizational measures to
            be compliant with applicable personal data, privacy, and data
            security legislation in the countries where we operate or where the
            applicable law applies to us. */}
            <br />
            {/* This Privacy Policy sets forth the basic rules and principles by
            which we process your Personal Data and mentions our
            responsibilities while processing your Personal Data according to
            transparency obligations. We do not intend to collect personal data
            of children or persons under the age of 13 (thirteen) years old. */}
          </p>
        </div>
      </div>
      <div
        className={`appie-about-page-content pt-30 pb-120 noBefore ${dark ? "appie-about-page-dark" : ""
          }`}
      >
        <div className="container">
          <h3 className="title">{t("privacy.privacy_description.text_content_title_2")}</h3>
          <p>
            Email:{" "}
            <Link to="mailto:support@arabnetwork.org" className="ml-3">
              support@arabnetwork.org
            </Link>
          </p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_1")}</h4>
          <p>{t("privacy.privacy_description.desc_num_1")}</p>
          <ul className="list-circle">
            <li>{t("privacy.privacy_description.ul_num_1.li_1")}</li>
            <li>{t("privacy.privacy_description.ul_num_1.li_2")}</li>
            <li>{t("privacy.privacy_description.ul_num_1.li_3")}</li>
            <li>{t("privacy.privacy_description.ul_num_1.li_4")}</li>
            <li>{t("privacy.privacy_description.ul_num_1.li_5")}</li>
            <li>{t("privacy.privacy_description.ul_num_1.li_6")}</li>
          </ul>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_2")}</h4>
          <p>{t("privacy.privacy_description.desc_num_2")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_3")}</h4>
          <p>{t("privacy.privacy_description.desc_num_3")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_4")}</h4>
          <p>{t("privacy.privacy_description.desc_num_4")}</p>
          <ul className="list-circle">
            <li>{t("privacy.privacy_description.ul_num_4.li_1")}</li>
            <li>{t("privacy.privacy_description.ul_num_4.li_2")}</li>
            <li>{t("privacy.privacy_description.ul_num_4.li_3")}</li>
          </ul>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_5")}</h4>
          <p>{t("privacy.privacy_description.desc_num_5")}</p>
          <ul className="list-circle">
            <li>{t("privacy.privacy_description.ul_num_5.li_1")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_2")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_3")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_4")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_5")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_6")}</li>
            <li>{t("privacy.privacy_description.ul_num_5.li_7")}</li>
          </ul>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_6")}</h4>
          <p>{t("privacy.privacy_description.desc_num_6")}</p>
          <ul className="list-circle">
            <li>{t("privacy.privacy_description.ul_num_6.li_1")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_2")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_3")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_4")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_5")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_6")}</li>
            <li>{t("privacy.privacy_description.ul_num_6.li_7")}</li>
          </ul>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_7")}</h4>
          <p>{t("privacy.privacy_description.desc_num_7")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_8")}</h4>
          <p>{t("privacy.privacy_description.desc_num_8")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_9")}</h4>
          <p>{t("privacy.privacy_description.desc_num_9")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_10")}</h4>
          <p>{t("privacy.privacy_description.desc_num_10")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_11")}</h4>
          <p>{t("privacy.privacy_description.desc_num_11")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_12")}</h4>
          <p>{t("privacy.privacy_description.desc_num_12")}</p>

          <h4 className="mt-30">{t("privacy.privacy_description.title_num_13")}</h4>
          <p>{t("privacy.privacy_description.desc_num_13")}</p>

        </div>
      </div>
    </>
  );
}

export default HeroAbout;
