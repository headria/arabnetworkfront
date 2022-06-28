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

const Private = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <HeadTags
        title={t("private_plicy.title")}
        description={t("private_plicy.desc")}
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
      <PageHero
        title={t("private_plicy.title")}
        desc={t("private_plicy.desc")}
        haveSocialIcons={false}
        halfSize={false}
        lang={lang}
      />

      <PageTextContent t={t} lang={lang} />

      <Footer darkMode={darkMode} lang={lang} />
    </>
  );
};

export default Private;
