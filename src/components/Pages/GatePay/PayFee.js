import React from 'react'
import paymentFee from '../../../assets/images/gate-pay/shape-payment-fee.png'

const PayFee = ({ dark, lang, t }) => {
    return (
        <>
            <div className={`paymeny-fee-content pt-80 pb-80
                ${lang ? "payment-fee-rtl" : ""}
                ${dark ? "payment-fee-dark" : ""}
            `}>
                <div className="container">
                    <div className="paymeny-fee-content-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="payment-fee-images">
                                    <img src={paymentFee} alt="img-name" />
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="payment-fee-text">
                                    <div className="payment-text">
                                        <h1 className='title'>{t("gate_pay.payment_fee.title")}</h1>
                                        <h5>{t("gate_pay.payment_fee.title_mini")}</h5>
                                        <p>{t("gate_pay.payment_fee.desc")}</p>
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

export default PayFee