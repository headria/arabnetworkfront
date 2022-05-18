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
            />
            <HeroArabnetwork t={t} />
            <AboutArabnetwork t={t} />
            <Ecosystem t={t} />
            <BannerLive t={t} />
            <AboutEcosystem t={t} />
            <JoinCommunity t={t} />
            <RoadMap t={t} />
            <DownloadApp t={t} />
            <Community t={t} />
            <Footer darkMode={darkMode} />
        </>
    )
}

export default ArabNetwork