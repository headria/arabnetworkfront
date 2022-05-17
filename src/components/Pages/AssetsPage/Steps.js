import React from 'react';
import { Link } from "react-router-dom";

function ServicesHomeThree({ dark, t }) {
    return (
        <>
            <section className={`appie-service-area pt-100 pb-150 ${dark ? 'appie-service-area-dark' : ''}`} id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{t("assets.steps.title")}</h3>
                                <p>{t("assets.steps.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service text-center mt-20 wow animatedfadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-cloud-download"></i>
                                    <span>1</span>
                                </div>
                                <h4 className="appie-title">{t("assets.steps.step_1_title")}</h4>
                                <Link to="/">Download App<i className="fal fa-arrow-right ml-2"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service item-2 text-center mt-20 wow animatedfadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fab fa-bitcoin"></i>
                                    <span>2</span>
                                </div>
                                <h4 className="appie-title">{t("assets.steps.step_2_title")}</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div
                                className="appie-single-service item-3 text-center mt-20 wow animatedfadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-coins"></i>
                                    <span>3</span>
                                </div>
                                <h4 className="appie-title">{t("assets.steps.step_3_title")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
