import React from 'react'

export const LanguageText = ({ languageText }) => {
    return (
        <li className="item">
            <span>
                {languageText}
                <i className="fal fa-angle-down" />
            </span>
        </li>
    )
}
