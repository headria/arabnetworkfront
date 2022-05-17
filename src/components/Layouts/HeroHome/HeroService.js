import React from 'react';
import assetsMobileDark from '../../../assets/images/mobile-screenshots/screen-assets-dark.png';
import assetsMobileLight from '../../../assets/images/mobile-screenshots/screen-assets-light.png';

function HeroService({ title, description, dark, lang }) {
    return (
        <>
            {/* appie-hero-area appie-hero-area-dark */}
            <div className={`appie-page-title-area appie-page-service-title-area pt-120 ${dark ? 'page-title-area-dark' : ''}`}>
                <div className="container">
                    <div className="service-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                {lang ? (
                                    <>
                                        <div className="appie-page-title-item text-right">
                                            <span>{title}</span>
                                            <h3 className="title">
                                                {description}
                                            </h3>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="appie-page-title-item">
                                            <span>{title}</span>
                                            <h3 className="title">
                                                {description}
                                            </h3>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="col-lg-6">
                                <div className="thumb">
                                    {dark ? (
                                        <img src={assetsMobileDark} alt="" />
                                    ) : (
                                        <img src={assetsMobileLight} alt="" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroService;
