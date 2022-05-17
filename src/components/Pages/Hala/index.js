import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import HeroHomeThree from "../../Layouts/HeroHome/HeroHomeThree";
import ServicesAI from "../../Layouts/Services/ServicesAI";
import HalaAbout from "../../Pages/Hala/HalaAbout";

import Footer from "../../Layouts/Footer";
import useMoralisState from "../../Hooks/useMoralisState";
import { useMoralis } from "react-moralis";

import { t } from "i18next";

const Hala = () => {
  const html = document.getElementsByTagName("html");
  const [lang, setLang] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [drawer, drawerAction] = useToggle(false);

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
        changeModeLan={setLang.toggle}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <HeroHomeThree dark={darkMode} lang={lang} t={t} />
      <HalaAbout dark={darkMode} lang={lang} t={t} />
      <ServicesAI dark={darkMode} lang={lang} t={t} />

      <Footer dark={darkMode} lang={lang} />
      <BackToTop />
    </>
  );
};

export default Hala;
