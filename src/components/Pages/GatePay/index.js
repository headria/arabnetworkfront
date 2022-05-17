import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import HeaderHero from "../../Pages/GatePay/HeaderHero";
import Payment from "./Payment";
import PayFee from "./PayFee";
import Supported from "./Supported";

import { t } from "i18next";

const GatePay = () => {
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

            <HeaderHero lang={lang} dark={darkMode} t={t} />
            <Payment lang={lang} dark={darkMode} t={t} />
            <PayFee lang={lang} dark={darkMode} t={t} />
            <Supported lang={lang} dark={darkMode} t={t} />
            <Footer lang={lang} dark={darkMode} />
            <BackToTop />
        </>
    )
}

export default GatePay