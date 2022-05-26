import React from 'react'

import mobileScreenShot from '../../../assets/images/vision-app-screenshot.png'

const OurVision = ({ t, lang }) => {
    return (
        <>
            <div className={`ourvision-section pt-50 pb-100 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className='title'>{t("our_vision.title")}</h3>
                        <p>{t("our_vision.desc")}</p>
                    </div>
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="text-content">
                                    <div className="rotate-text">
                                        <h1>{t("our_vision.built.title")}</h1>
                                        <h2>{t("our_vision.built.desc")}</h2>
                                    </div>
                                    <div className="information">
                                        <h6>{t("our_vision.information.title")}</h6>
                                        <ul>
                                            <li>{t("our_vision.information.ul.li_1")}</li>
                                            <li>{t("our_vision.information.ul.li_2")}</li>
                                            <li>{t("our_vision.information.ul.li_3")}</li>
                                            <li>{t("our_vision.information.ul.li_4")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image-content">
                                    <div className="img-inner">
                                        <img src={mobileScreenShot} alt="img-name" />
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

export default OurVision