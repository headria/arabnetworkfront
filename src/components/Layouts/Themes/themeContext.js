import { createContext } from 'react'

export const Themes = {
    dark: "",
    light: 'light-theme'
}

export const ThemeContext = createContext({
    theme: Themes.dark,
    changeTheme: () => { },
});