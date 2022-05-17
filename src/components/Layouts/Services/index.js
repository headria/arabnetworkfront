import React from 'react';
import IconOne from '../../../assets/images/icon/secure.svg';
import IconTwo from '../../../assets/images/icon/decentralized.svg';
import IconThree from '../../../assets/images/icon/anonymous.svg';

function ServicesHomeOne({ lang, dark, t }) {
    return (
        <section className={`appie-service-area pt-50 pb-100 ${dark ? 'appie-service-area-dark' : ''}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        {lang ? (
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">لماذا بوابة العرب؟</h3>
                            </div>
                        ) : (
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{t("home.services.title")}</h3>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    {lang ? (
                        <>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <div className="icon">
                                        <img src={IconOne} alt="" />
                                    </div>
                                    <h4 className="appie-title">امان</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <div className="icon">
                                        <img src={IconTwo} alt="" />
                                    </div>
                                    <h4 className="appie-title">لا مركزية</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div
                                    className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <div className="icon">
                                        <img src={IconThree} alt="" />
                                    </div>
                                    <h4 className="appie-title">مجهول</h4>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <div className="icon">
                                        <img src={IconOne} alt="" />
                                    </div>
                                    <h4 className="appie-title">{t("home.services.service_secure")}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <div className="icon">
                                        <img src={IconTwo} alt="" />
                                    </div>
                                    <h4 className="appie-title">{t("home.services.service_decentralized")}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div
                                    className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <div className="icon">
                                        <img src={IconThree} alt="" />
                                    </div>
                                    <h4 className="appie-title">{t("home.services.service_anonymous")}</h4>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
