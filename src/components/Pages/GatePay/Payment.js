import React from 'react'

import paymentDark1 from '../../../assets/images/gate-pay/shape-payment-dark-1.png'
import paymentDark2 from '../../../assets/images/gate-pay/shape-payment-dark-2.png'
import paymentLight1 from '../../../assets/images/gate-pay/shape-payment-light-1.png'
import paymentLight2 from '../../../assets/images/gate-pay/shape-payment-light-2.png'

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
                                <h1 className="title">{t("gate_pay.payment.payment_title_1")}</h1>
                                <p>{t("gate_pay.payment.payment_desc_1")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-150">
                        <div className="col-lg-7 order-2 order-lg-1">
                            <div className="payment-text text-right">
                                <h1 className="title">{t("gate_pay.payment.payment_title_2")}</h1>
                                <p>{t("gate_pay.payment.payment_desc_2")}</p>
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