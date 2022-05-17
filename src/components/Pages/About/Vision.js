import React from 'react'

import paymentDark1 from '../../../assets/images/about-image-dark-1.png'
import paymentLight1 from '../../../assets/images/about-image-light-1.png'
import paymentDark2 from '../../../assets/images/about-image-dark-2.png'
import paymentLight2 from '../../../assets/images/about-image-light-2.png'

import shapeSix from "../../../assets/images/shape/shape-6.png";
import shapeSeven from "../../../assets/images/shape/shape-7.png";
import shapeEight from "../../../assets/images/shape/shape-8.png";


const Payment = ({ dark, lang, t }) => {
    return (
        <>
            <div className={`gatepay-payment pt-100 pb-50
                ${lang ? "gatepay-payment-rtl" : ""}
                ${dark ? "gatepay-payment-dark" : ""}
            `}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="payment-images">
                                {dark ? (
                                    <img src={paymentDark1} alt="img-name" />

                                ) : (
                                    <img src={paymentLight1} alt="img-name" />
                                )}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="payment-text">
                                <h1 className="title">{t("about.arab_network.title")}</h1>
                                <p>{t("about.arab_network.desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-150">
                        <div className="col-lg-7 order-2 order-lg-1">
                            <div className="payment-text">
                                <h1 className="title">{t("about.our_vision.title")}</h1>
                                <p>{t("about.our_vision.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2">
                            <div className="payment-images">
                                {dark ? (
                                    <img src={paymentDark2} alt="img-name" />

                                ) : (
                                    <img src={paymentLight2} alt="img-name" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-shape-1">
                    <img src={shapeSix} alt="" />
                </div>
                <div className="features-shape-2">
                    <img src={shapeSeven} alt="" />
                </div>
                <div className="features-shape-3">
                    <img src={shapeEight} alt="" />
                </div>

            </div>
        </>
    )
}

export default Payment