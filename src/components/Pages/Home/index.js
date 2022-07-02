import React, { useState } from "react";
import Header from "../../Layouts/Header";
import HeroArabnetwork from "../../Layouts/HeroArabnetwork";
import Drawer from "../../Layouts/Drawer";
import AboutArabnetwork from "./AboutArabnetwork";
import DownloadApp from "./DownloadApp";
import Ecosystem from "./Ecosystem";
import Footer from "../../Layouts/Footer";
import JoinCommunity from "./JoinCommunity";
import RoadMap from "./RoadMap";
import BackToTop from "../../Layouts/BackToTop";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import KeepTouch from "../../Layouts/KeepTouch";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";
import Partnership from "./Partnership";
import Modal from "../../Layouts/Modal";
import modalbgImg_en from "../../../assets/images/popup-arabcoin-en.jpg";
import modalbgImg_ar from "../../../assets/images/popup-arabcoin-ar.jpg";

const ArabNetwork = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Drawer drawer={drawer} setDrawer={drawerAction} />
      <Header
        drawer={drawer}
        setDrawer={drawerAction}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themecontext={ThemeContext}
        themes={Themes}
        setLang={setLang}
        lang={lang}
      />
      <HeroArabnetwork t={t} lang={lang} dark={darkMode} />
      <AboutArabnetwork t={t} lang={lang} />
      <Ecosystem t={t} lang={lang} />
      {/* <BannerLive t={t} /> */}
      {/* <AboutEcosystem t={t} lang={lang} /> */}
      <JoinCommunity t={t} lang={lang} />
      <KeepTouch t={t} lang={lang} />
      <Partnership t={t} lang={lang} darkMode={darkMode} />
      <RoadMap t={t} lang={lang} />
      <DownloadApp t={t} lang={lang} />
      <Footer darkMode={darkMode} lang={lang} />
      {/* 
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="hi"
        haveModalHeader={false}
        haveModalFooter={false}
        className="modal-type-2"
      >
        <div className="modal-popup">
          <div className="modal-float-close-btn">
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="popup-inner">
            <div className="img-content">
              {dir ? (
                <img src={modalbgImg_ar} alt="img-name" />
              ) : (
                <img src={modalbgImg_en} alt="img-name" />
              )}
            </div>
            <div className="link">
              <a
                href="https://app.viralsweep.com/sweeps/full/2b2b52-113053?framed=1"
                target="_blank"
                rel="noreferrer"
                className="main-btn"
              >
                {t("home.whitelistjoin")}
              </a>
            </div>
          </div>
        </div>
      </Modal>

      <BackToTop /> */}
    </>
  );
};

export default ArabNetwork;
