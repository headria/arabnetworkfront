import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import HeroNews from "../../Layouts/HeroHome/HeroNews";
import Footer from "../../Layouts/Footer";
// import HeroAbout from "./HeroAbout";
import Vision from "./Vision";
import MultiChain from "./MultiChain";
import OurValues from "./OurValues";
import TeamAbout from "./TeamAbout";


import { t } from "i18next";

function AboutUs() {
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

      <HeroNews
        title={lang ? t("about.title") : t("about.title")}
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/about", title: "About us" },
        ]}
        dark={darkMode}
        lang={lang}
      />
      {/* <HeroAbout dark={darkMode} lang={lang} t={t} /> */}
      <Vision dark={darkMode} lang={lang} t={t} />
      <MultiChain dark={darkMode} lang={lang} t={t} />
      <OurValues dark={darkMode} lang={lang} t={t} />

      <TeamAbout dark={darkMode} lang={lang} t={t} />

      <Footer dark={darkMode} lang={lang} />
      <BackToTop />
    </>
  );
}

export default AboutUs;
