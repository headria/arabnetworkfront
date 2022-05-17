

import React from 'react'

const OurValues = ({ dark, lang, t }) => {
    return (
        <>
            <section className={`appie-service-area bg-white pt-70 pb-120
                ${lang ? "service-rtl" : ""}
                ${dark ? "area-dark" : ""}
            `}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-12">
                            <div className="appie-section-title text-md-left text-lg-left text-center">
                                <h3 className="appie-title">{t("about.our_values.title")}</h3>
                                <div className="arrow-down"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i class="fas fa-fist-raised"></i>
                                </div>
                                <h4 className="title">{t("about.our_values.card_1.title")}</h4>
                                <p>{t("about.our_values.card_1.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i class="fas fa-box-open"></i>
                                </div>
                                <h4 className="title">{t("about.our_values.card_2.title")}</h4>
                                <p>{t("about.our_values.card_2.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h4 className="title">{t("about.our_values.card_3.title")}</h4>
                                <p>{t("about.our_values.card_3.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i class="fas fa-handshake"></i>
                                </div>
                                <h4 className="title">{t("about.our_values.card_4.title")}</h4>
                                <p>{t("about.our_values.card_4.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i class="fas fa-male"></i>
                                </div>
                                <h4 className="title">{t("about.our_values.card_5.title")}</h4>
                                <p>{t("about.our_values.card_5.desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurValues