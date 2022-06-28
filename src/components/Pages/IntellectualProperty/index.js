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
import HeadTags from "../../Layouts/HeadTags";

const IntellectualProperty = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();

  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <HeadTags title={t("intellectual_property.title")} description="" />
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
      <PageHero
        title={t("intellectual_property.title")}
        desc=""
        haveSocialIcons={false}
        halfSize={false}
        lang={lang}
      />

      <PageTextContent t={t} lang={lang} />

      <Footer darkMode={darkMode} lang={lang} />
    </>
  );
};

export default IntellectualProperty;
