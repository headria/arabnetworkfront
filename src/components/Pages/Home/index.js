import React, { useEffect, useState } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import HeroHome from "../../Layouts/HeroHome/HeroHome";
import Service from "../../Layouts/Services";
import Feature from "../../Layouts/Feature";
import AboutArea from "../../Layouts/AboutArea";
import FaqHome from "../../Layouts/Faq";
import Footer from "../../Layouts/Footer";
import ArabCoinAlert from "./ArabCoinAlert";
import RoadMap from "./RoadMap";
import Comparison from "./Comparison";

import { t, changeLanguage } from "i18next";

function Home() {
  const html = document.getElementsByTagName("html");
  const [lang, setLang] = useState(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [drawer, drawerAction] = useToggle(false);

  const handleChangeLang = () => {
    // changeLanguage("ar", null);
    setLang(!lang);
  };
  useEffect(() => {
    document.body.classList.add("appie-init");

    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }

    if (lang) {
      html[0].lang = "ar";
      html[0].dir = "rtl";
    } else {
      html[0].lang = "en";
      html[0].dir = "";
    }
    return () => {
      html[0].lang = "en";
      html[0].dir = "";
      document.body.classList.remove("appie-dark");
    };
  });

  return (
    <>
      <Drawer lang={lang} drawer={drawer} action={drawerAction.toggle} />
      <Header
        className={`${darkMode ? "appie-header-area-dark" : ""}`}
        lang={lang}
        langEnabled="true"
        changeModeLan={() => handleChangeLang()}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <HeroHome lang={lang} dark={darkMode} t={t} />
      <ArabCoinAlert lang={lang} dark={darkMode} t={t} />
      <Service lang={lang} dark={darkMode} t={t} />
      <Feature lang={lang} dark={darkMode} t={t} />
      <Comparison lang={lang} dark={darkMode} t={t} />
      {/* <AboutArea dark={darkMode} /> */}
      <RoadMap lang={lang} dark={darkMode} t={t} />
      <FaqHome lang={lang} dark={darkMode} t={t} />
      <Footer lang={lang} dark={darkMode} />

      {/* appie-footer-area-dark */}

      <BackToTop />
    </>
  );
}

export default Home;
