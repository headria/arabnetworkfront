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

const EntireAgreement = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode: darkmode, setDarkMode: updateDarkMode } = useDarkMode();

  return (
    <>
      <HeadTags
        title={t("entire_agreement.title")}
        description={t("entire_agreement.desc")}
      />
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
        title={t("entire_agreement.title")}
        desc={t("entire_agreement.desc")}
        haveSocialIcons={false}
        halfSize={false}
        lang={lang}
      />

      <PageTextContent t={t} lang={lang} />

      <Footer darkMode={darkmode} lang={lang} />
    </>
  );
};

export default EntireAgreement;
