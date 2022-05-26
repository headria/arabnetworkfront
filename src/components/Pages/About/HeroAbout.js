import React from 'react'

const HeroAbout = ({ t, lang }) => {
    return (
        <>
            <div className={`about-header-hero ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-inner">
                        <div className="text-content">
                            <h1>{t("about_arabnetwork.title_3")}</h1>
                            <p>{t("about_arabnetwork.desc")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroAbout