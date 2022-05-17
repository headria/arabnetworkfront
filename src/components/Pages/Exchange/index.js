import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import HeroExchange from "../../Layouts/HeroHome/HeroExchange";
import ExchangeBox from "./ExchangeBox";
import { ToastContainer } from "react-toastify";

// import HeaderHero from "../../Pages/GatePay/HeaderHero";
// import Payment from "./Payment";
// import PayFee from "./PayFee";
// import Supported from "./Supported";

const ExchangePage = () => {
  const html = document.getElementsByTagName("html");
  const [lang, setLang] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [drawer, drawerAction] = useToggle(false);

  useEffect(() => {
    document.body.classList.add("appie-init");

    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }

    if (lang) {
      html[0].lang = "ar";
      html[0].dir = "rtl";
    } else {
      html[0].lang = "en";
      html[0].dir = "";
    }
    return () => {
      html[0].lang = "en";
      html[0].dir = "";
      document.body.classList.remove("appie-dark");
    };
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Drawer lang={lang} drawer={drawer} action={drawerAction.toggle} />
      <Header
        className={`${darkMode ? "appie-header-area-dark" : ""}`}
        lang={lang}
        langEnabled="true"
        changeModeLan={setLang.toggle}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <HeroExchange
        titleEng="Merhaba"
        titleArb="مرحبا"
        dark={darkMode}
        lang={lang}
      />
      <ExchangeBox lang={lang} dark={darkMode} />

      <Footer lang={lang} dark={darkMode} />
      <BackToTop />
    </>
  );
};

export default ExchangePage;
