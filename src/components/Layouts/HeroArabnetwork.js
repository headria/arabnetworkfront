import React from 'react'

import headerHeroImage from '../../assets/images/arabnetwork-hero-1.png'

const HeroArabnetwork = ({ t, lang }) => {
    return (
        <>
            <div className={`network-hero ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1 className="title">{t('index_hero.title')} <br /><span>{t('index_hero.span')}</span></h1>
                                <p>{t('index_hero.desc')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumb">
                                <div className="img-inner">
                                    <img src={headerHeroImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroArabnetwork