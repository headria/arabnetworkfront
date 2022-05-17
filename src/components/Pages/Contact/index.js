import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../../Layouts/BackToTop'
import Drawer from '../../Layouts/Mobile/Drawer'
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'

import HeaderNews from '../../Layouts/HeroHome/HeroNews';
// import HeroNews from '../News/HeroNews';
import Forms from './Forms';

function Contact() {
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
            <HeaderNews
                title="Contact"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/contact', title: 'contact' },
                ]}
                dark={darkMode}
            />
            <Forms />
            <Footer dark={darkMode} />
            <BackToTop />
        </>
    );
}

export default Contact;
