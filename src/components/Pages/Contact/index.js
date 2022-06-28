import React, { useState } from "react";
import Header from "../../Layouts/Header";
import Drawer from "../../Layouts/Drawer";
import Footer from "../../Layouts/Footer";
import PageHero from "../../Layouts/PageHero";
import FormContact from "./FormContact";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";
import { Helmet } from "react-helmet";
import HeadTags from "../../Layouts/HeadTags";

const Contact = () => {
  const [drawer, drawerAction] = useState(false);
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode: darkmode, setDarkMode: updateDarkMode } = useDarkMode();

  return (
    <>
      <HeadTags title={t("contact.title")} description={t("contact.desc")} />
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
        title={t("contact.title")}
        desc={t("contact.desc")}
        haveSocialIcons={true}
        halfSize={true}
        lang={lang}
      />
      <FormContact t={t} lang={lang} />
      <Footer darkMode={darkmode} lang={lang} />
    </>
  );
};

export default Contact;
