import React, { useEffect } from 'react'
import useToggle from '../../Hooks/useToggle'
import BackToTop from '../../Layouts/BackToTop'

import Drawer from '../../Layouts/Mobile/Drawer';
import Header from '../../Layouts/Header'
import HeroNews from '../../Layouts/HeroHome/HeroNews'
import Footer from '../../Layouts/Footer';
import PrivacyTextContent from './PrivacyTextContent';
// import TeamAbout from './TeamAbout';

import { t } from "i18next";

function AboutUs() {
    const html = document.getElementsByTagName('html');
    const [lang, setLang] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(true);
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('appie-init');

        if (darkMode) {
            document.body.classList.add('appie-dark');
        } else {
            document.body.classList.remove('appie-dark');
        }

        if (lang) {
            html[0].lang = 'ar';
            html[0].dir = 'rtl';
        } else {
            html[0].lang = 'en';
            html[0].dir = '';
        }
        return () => {
            html[0].lang = 'en';
            html[0].dir = '';
            document.body.classList.remove('appie-dark');
        };
    });

    return (
        <>
            <Drawer lang={lang} drawer={drawer} action={drawerAction.toggle} />
            <Header
                className={`${darkMode ? 'appie-header-area-dark' : ''}`}
                lang={lang}
                langEnabled="true"
                changeModeLan={setLang.toggle}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />

            <HeroNews
                title={t("privacy.title")}
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/privacy_and_policy', title: 'Privacy and policy' },
                ]}
                dark={darkMode}
                lang={lang}
            />
            <PrivacyTextContent dark={darkMode} t={t} />

            <Footer dark={darkMode} />
            <BackToTop />
        </>
    )
}

export default AboutUs