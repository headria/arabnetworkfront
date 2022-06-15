import React, { useState } from "react";

import { t } from "i18next";
import { ThemeContext, Themes } from "../../Layouts/Themes/themeContext";
import CSoon from "./CSoon";
import useDarkMode from "../../Hooks/useDarkMode";
import useLanguage from "../../Hooks/useLanguage";

const ComingSoon = () => {
  const { dir } = useLanguage();
  const [lang, setLang] = useState(dir);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <CSoon t={t} darkMode={darkMode} />
    </>
  );
};

export default ComingSoon;
