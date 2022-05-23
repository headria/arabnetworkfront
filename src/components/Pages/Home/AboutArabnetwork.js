import React from 'react'

import aboutImage from '../../../assets/images/arabnetwork-hero-2.png'

const AboutArabnetwork = ({ t }) => {
    return (
        <>
            <div className="about-arabnetwork-section">
                <div className="arrow-text">{t('about_arabnetwork.arrow_title')}</div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-2 order-lg-1">
                            <div className="thumb">
                                <div className="img-inner">
                                    <img src={aboutImage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <div className="text-content text-light">
                                <h1>{t('about_arabnetwork.title_1')}</h1>
                                <h2 className="title">{t('about_arabnetwork.title_2')}</h2>
                                <p>{t('about_arabnetwork.desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-text">{t('about_arabnetwork.shadow_text_1')}<br />{t('about_arabnetwork.shadow_text_2')}</div>
                </div>
            </div>
        </>
    )
}

export default AboutArabnetwork