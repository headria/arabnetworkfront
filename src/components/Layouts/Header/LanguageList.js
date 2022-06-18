import React from 'react'
import { LanguageItem } from './LanguageItem'
import { LanguageText } from './LanguageText'

const LanguageList = ({ t, changelanguage, languageText }) => {

    const languageList = t('language', { returnObjects: true });

    return (
        <ul>
            <LanguageText languageText={languageText} />

            <ul className="sub-menu">
                {
                    Object.values(languageList)?.map((lang, i) => (
                        <LanguageItem
                            key={i}
                            changelanguage={changelanguage}
                            num={i}
                            t={t}
                            text={lang}
                        />
                    ))
                }
            </ul>
        </ul>
    )
}

export default LanguageList