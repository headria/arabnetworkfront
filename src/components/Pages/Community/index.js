import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../../Layouts/BackToTop";

import Drawer from "../../Layouts/Mobile/Drawer";
import Header from "../../Layouts/Header";
import HeroCommunity from "../../Layouts/HeroHome/HeroCommunity";
import Service from "../../Layouts/Services";
import Feature from "../../Layouts/Feature";
import AboutArea from "../../Layouts/AboutArea";
import FaqHome from "../../Layouts/Faq";
import Footer from "../../Layouts/Footer";
import KeepinTouch from "./KeepinTouch";

import { t } from "i18next";

function Home() {
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
            <HeroCommunity lang={lang} dark={darkMode} t={t} />
            <KeepinTouch lang={lang} dark={darkMode} t={t} />
            <Footer lang={lang} dark={darkMode} />
            {/* appie-footer-area-dark */}

            <BackToTop />
        </>
    );
}

export default Home;
