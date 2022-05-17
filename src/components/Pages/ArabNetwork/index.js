import React, { useState, useToggle } from 'react'
import HeaderArabNetwork from '../../Layouts/Header/HeaderArabNetwork'
import HeroArabnetwork from '../../Layouts/HeroHome/HeroArabnetwork'
import Drawer from '../../Layouts/Mobile/Drawer2'
import AboutArabnetwork from './AboutArabnetwork'
import AboutEcosystem from './AboutEcosystem'
import BannerLive from './BannerLive'
import Community from './Community'
import DownloadApp from './DownloadApp'
import Ecosystem from './Ecosystem'
import Footer from './Footer'
import JoinCommunity from './JoinCommunity'
import RoadMap from './RoadMap'

const ArabNetwork = () => {
    const [drawer, drawerAction] = useState(false);

    return (
        <>
            <Drawer
                drawer={drawer}
                setDrawer={drawerAction}
                classname="drawer-type-2"
            />
            <HeaderArabNetwork
                drawer={drawer}
                setDrawer={drawerAction}
            />
            <HeroArabnetwork />
            <AboutArabnetwork />
            <Ecosystem />
            <BannerLive />
            <AboutEcosystem />
            <JoinCommunity />
            <RoadMap />
            <DownloadApp />
            <Community />
            <Footer />
        </>
    )
}

export default ArabNetwork