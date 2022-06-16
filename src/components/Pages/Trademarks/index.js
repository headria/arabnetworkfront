import React, { useState } from "react";
import Header from "../../Layouts/Header";
import Drawer from "../../Layouts/Drawer";
import Footer from "../../Layouts/Footer";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import PageHero from "../../Layouts/PageHero";
import PageTextContent from "./PageTextContent";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";

const Trademarks = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);

  const { darkMode: darkmode, setDarkMode: updateDarkMode } = useDarkMode();

  return (
    <>
      <Drawer drawer={drawer} setDrawer={drawerAction} />
      <Header
        drawer={drawer}
        setDrawer={drawerAction}
        darkMode={darkmode}
        setDarkMode={updateDarkMode}
        themecontext={ThemeContext}
        themes={Themes}
        setLang={setLang}
        lang={lang}
      />
      <PageHero
        title={t("trademarks.title")}
        desc={t("trademarks.desc")}
        haveSocialIcons={false}
        halfSize={false}
        lang={lang}
      />

      <PageTextContent t={t} lang={lang} />

      <Footer darkMode={darkmode} lang={lang} />
    </>
  );
};

export default Trademarks;
