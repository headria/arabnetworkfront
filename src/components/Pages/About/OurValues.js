import React from 'react'

import valueImage1 from '../../../assets/images/values-1.png'
import valueImage2 from '../../../assets/images/values-2.png'
import valueImage3 from '../../../assets/images/values-3.png'
import valueImage4 from '../../../assets/images/values-4.png'
import valueImage5 from '../../../assets/images/values-5.png'

const OurValues = ({ t }) => {
    return (
        <>
            <div className="ourvalue-section pt-100 pb-140">
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className='title'>{t('our_values.title')}</h3>
                    </div>
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-values">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={valueImage1} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h4>{t('our_values.card_afraid.title')}</h4>
                                            <p>{t('our_values.card_afraid.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-values">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={valueImage2} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h4>{t('our_values.card_think_outside.title')}</h4>
                                            <p>{t('our_values.card_think_outside.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-values">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={valueImage3} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h4>{t('our_values.card_community.title')}</h4>
                                            <p>{t('our_values.card_community.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-values">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={valueImage4} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h4>{t('our_values.card_succeed_together.title')}</h4>
                                            <p>{t('our_values.card_succeed_together.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-values">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={valueImage5} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h4>{t('our_values.card_humans.title')}</h4>
                                            <p>{t('our_values.card_humans.desc')}</p>
                                        </div>
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

export default OurValues