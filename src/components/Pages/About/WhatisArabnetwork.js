import React from 'react'

import aboutImage from '../../../assets/images/about-arabnetwork-3.png'

const AboutArabnetwork = ({ t, lang }) => {
    return (
        <>
            <div className={`about-arabnetwork-section type-2 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="text-content text-light">
                                    <h1>{t('about_arabnetwork.title_1')}</h1>
                                    <h2 className="title">{t('about_arabnetwork.title_2')}</h2>
                                    <p>{t('about_arabnetwork.desc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="thumb">
                                    <div className="img-inner">
                                        <img src={aboutImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutArabnetwork