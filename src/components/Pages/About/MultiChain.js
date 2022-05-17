import React from 'react'
import aboutLevelupDark from '../../../assets/images/about-level-up-dark.png'
import aboutLevelupLight from '../../../assets/images/about-level-up-light.png'

const MultiChain = ({ lang, dark, t }) => {
    return (
        <>
            <div className={`multichain-section pt-50 pb-100
                ${lang ? "multichain-rtl" : ""}
                ${dark ? "multichain-dark" : ""}
            `}>
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="image-content">
                                    <div className="img-inner">
                                        {
                                            dark ? (
                                                <img src={aboutLevelupDark} alt="img-name" />
                                            ) : (
                                                <img src={aboutLevelupLight} alt="img-name" />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="text-content">
                                    <h1 className='title'>{t("about.we_build_arabgate.title")}</h1>
                                    <ul>
                                        <li>{t("about.we_build_arabgate.ul.li_1")}</li>
                                        <li>{t("about.we_build_arabgate.ul.li_2")}</li>
                                        <li>{t("about.we_build_arabgate.ul.li_3")}</li>
                                        <li>{t("about.we_build_arabgate.ul.li_4")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiChain