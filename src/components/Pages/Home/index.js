import React, { useState, useToggle } from 'react'
import HeaderArabNetwork from '../../Layouts/Header'
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

const ArabNetwork = () => {
    const [drawer, drawerAction] = useState(false);

    return (
        <>
            <Drawer
                drawer={drawer}
                setDrawer={drawerAction}
            />
            <HeaderArabNetwork
                drawer={drawer}
                setDrawer={drawerAction}
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
            <Footer />
        </>
    )
}

export default ArabNetwork