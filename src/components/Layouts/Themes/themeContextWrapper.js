import React, { useState, useEffect } from 'react';
import { ThemeContext, Themes } from './themeContext'

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(Themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case Themes.light:
                document.body.classList.add('light-theme');
                break;
            case Themes.dark:
            default:
                document.body.classList.remove('light-theme');
                break;
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}