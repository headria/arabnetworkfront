import React, { useState } from "react";
import Header from "../../Layouts/Header";
import Drawer from "../../Layouts/Drawer";
import Footer from "../../Layouts/Footer";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import PageHero from "../../Layouts/PageHero";
import FormContact from "./FormContact";

const Contact = () => {
  const [drawer, drawerAction] = useState(false);
  const [lang, setLang] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

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
      />
      <PageHero
        title={t("contact.title")}
        desc={t("contact.desc")}
        haveSocialIcons={true}
        halfSize={true}
      />
      <FormContact t={t} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Contact;
