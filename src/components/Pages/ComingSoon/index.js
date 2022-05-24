import React, { useState } from 'react'


import { t } from "i18next";
import { ThemeContext, Themes } from '../../Layouts/Themes/themeContext'
import CSoon from './CSoon';

const ComingSoon = () => {
    const [lang, setLang] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <CSoon t={t} darkMode={darkMode} />
        </>
    )
}

export default ComingSoon