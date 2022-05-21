import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import Drawer from '../../Layouts/Drawer'
import Footer from '../../Layouts/Footer'

import { t } from "i18next";
import { ThemeContext, Themes } from '../../Layouts/Themes/themeContext'
import PageHero from '../../Layouts/PageHero';
import PageTextContent from './PageTextContent';

const EntireAgreement = () => {
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
            <PageHero
                title={t('entire_agreement.title')}
                desc={t('entire_agreement.desc')}
                haveSocialIcons={false}
                halfSize={false}
            />

            <PageTextContent t={t} />

            <Footer darkMode={darkMode} />
        </>
    )
}

export default EntireAgreement