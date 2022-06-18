import React from 'react'

export const LanguageItem = ({ changelanguage, t, text, num }) => {
    return (
        <li>
            <span onClick={() => changelanguage(num)}>
                {text}
            </span>
        </li>
    )
}
