import React from 'react'
import { Link } from 'react-router-dom'

import gatePayScreenshot1Dark from '../../../assets/images/hero-header-dark.png'
import gatePayScreenshot1Light from '../../../assets/images/hero-header-light.png'

import blobShape1 from '../../../assets/images/gate-pay/blob-shape-1.svg'
import blobShape2 from '../../../assets/images/gate-pay/blob-shape-2.svg'


const HeaderHero = ({ dark, lang, t }) => {
    return (
        <>
            <div className={`gate-pay-header-hero 
                ${lang ? "gate-pay-header-hero-rtl" : ""}
                ${dark ? "gate-pay-header-hero-dark" : ""}
            `}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-text-content">
                                <span>{t("gate_pay.mini_title")}</span>
                                <h1 className='title'>{t("gate_pay.title")}</h1>
                                <Link to="/" className='main-btn'>{t("gate_pay.btn_title")}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-images-content">
                                <img src={blobShape1} className="shape shape-1" alt="img-name" />
                                <img src={blobShape2} className="shape shape-2" alt="img-name" />
                                <div className="img-inner">
                                    {dark ? (
                                        <img src={gatePayScreenshot1Dark} className="mobile-screen" alt="img-name" />

                                    ) : (
                                        <img src={gatePayScreenshot1Light} className="mobile-screen" alt="img-name" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderHero