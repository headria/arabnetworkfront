import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import HeroArabnetwork from '../../Layouts/HeroArabnetwork'
import Drawer from '../../Layouts/Drawer'
import AboutArabnetwork from './AboutArabnetwork'
import AboutEcosystem from './AboutEcosystem'
import BannerLive from './BannerLive'
import Community from './Community'
import DownloadApp from './DownloadApp'
import Ecosystem from './Ecosystem'
import Footer from '../../Layouts/Footer'
import JoinCommunity from './JoinCommunity'
import RoadMap from './RoadMap'


import { t } from "i18next";
import { ThemeContext, Themes } from '../../Layouts/Themes/themeContext'

const ArabNetwork = () => {
    const [drawer, drawerAction] = useState(false);
    const [lang, setLang] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <Drawer
                drawer={drawer}
                setDrawer={drawerAction}
            />
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
            <HeroArabnetwork t={t} lang={lang} />
            <AboutArabnetwork t={t} lang={lang} />
            <Ecosystem t={t} lang={lang} />
            <BannerLive t={t} />
            <AboutEcosystem t={t} lang={lang} />
            <JoinCommunity t={t} lang={lang} />
            <RoadMap t={t} lang={lang} />
            <DownloadApp t={t} lang={lang} />
            <Community t={t} lang={lang} />
            <Footer darkMode={darkMode} lang={lang} />
        </>
    )
}

export default ArabNetwork