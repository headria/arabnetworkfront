import React from 'react';
import { Link } from 'react-router-dom';

const HeroExchange = ({ dark, lang, titleEng, titleArb }) => {
    return (
        <>
            <div className={`appie-page-title-area ${dark ? 'page-title-area-dark' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {lang ? (
                                <>
                                    <div className="appie-page-title-item text-center  mt-20">
                                        <h3 className="title w-100">{titleArb}</h3>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="appie-page-title-item text-center">
                                        <h3 className="title w-100">{titleEng}</h3>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroExchange;
