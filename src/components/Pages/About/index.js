import React, { useState } from "react";
import Header from "../../Layouts/Header";
import Drawer from "../../Layouts/Drawer";
import Footer from "../../Layouts/Footer";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import HeroAbout from "./HeroAbout";
import WhatisArabnetwork from "./WhatisArabnetwork";
import OurVision from "./OurVision";
import OurValues from "./OurValues";
import Teams from "./Teams";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";
import { Helmet } from "react-helmet";
import HeadTags from "../../Layouts/HeadTags";

const About = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <HeadTags
        title={t("about_arabnetwork.title_3")}
        description={t("about_arabnetwork.desc")}
      />
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
      <HeroAbout t={t} lang={lang} />
      <WhatisArabnetwork t={t} lang={lang} />
      <OurVision t={t} lang={lang} />
      <OurValues t={t} lang={lang} />
      <Teams t={t} lang={lang} darkMode={darkMode} />

      <Footer darkMode={darkMode} lang={lang} />
    </>
  );
};

export default About;
