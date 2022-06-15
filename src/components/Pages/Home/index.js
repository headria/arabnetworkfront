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

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import KeepTouch from "../../Layouts/KeepTouch";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";

const ArabNetwork = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();

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
      <RoadMap t={t} lang={lang} />
      <DownloadApp t={t} lang={lang} />
      <Footer darkMode={darkMode} lang={lang} />
    </>
  );
};

export default ArabNetwork;
