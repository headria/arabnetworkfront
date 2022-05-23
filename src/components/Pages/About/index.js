import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import Drawer from '../../Layouts/Drawer'
import Footer from '../../Layouts/Footer'

import { t } from "i18next";
import { ThemeContext, Themes } from '../../Layouts/Themes/themeContext'
import HeroAbout from './HeroAbout';
import WhatisArabnetwork from './WhatisArabnetwork';
import OurVision from './OurVision';
import OurValues from './OurValues';
import Teams from './Teams';

const About = () => {
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
            <HeroAbout />
            <WhatisArabnetwork t={t} />
            <OurVision t={t} />
            <OurValues t={t} />
            <Teams t={t} />

            <Footer darkMode={darkMode} />
        </>
    )
}

export default About