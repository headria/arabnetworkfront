import React from 'react';
import aboutThumb from '../../../assets/images/about-thumb-2.png';
import aboutThumb3 from '../../../assets/images/about-thumb-3.png';

function AboutHomeThree({ dark }) {
    return (
        <>
            <section className={`appie-about-3-area pt-60 pb-150 ${dark ? 'about-3-area-dark' : ''}`} id="features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    Appie lets you launch your app in minutes.
                                </h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Browse over 40k Apps over the world</h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;
