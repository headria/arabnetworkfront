import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  return {
    lang: i18n.language,
    dir: i18n.language === "ar" || i18n.language === "fa",
  };
};

export default useLanguage;
