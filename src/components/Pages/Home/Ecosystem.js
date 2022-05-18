import React from 'react'

import cardImage1 from '../../../assets/images/ecosystem-1.png'
import cardImage2 from '../../../assets/images/ecosystem-2.png'
import cardImage3 from '../../../assets/images/ecosystem-3.png'
import cardImage4 from '../../../assets/images/ecosystem-4.png'
import cardImage5 from '../../../assets/images/ecosystem-5.png'
import cardImage6 from '../../../assets/images/ecosystem-6.png'

const Ecosystem = ({ t }) => {
    return (
        <>
            <div className="ecosystem-section pt-100 pb-100">
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className='title'>{t('ecosystem.title')}</h3>
                        <p>{t('ecosystem.desc')}</p>
                    </div>
                    <div className="section-inner mt-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage1} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_arabgate.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_arabgate.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage2} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_blockchain.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_blockchain.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage3} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_crypto.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_crypto.desc')}</p>
                                        </div>
                                    </div>
                                </div></div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage4} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_nft.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_nft.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage5} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_academy.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_academy.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage6} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>{t('ecosystem.cards_ecosystek_list.card_grant.title')}</h1>
                                            <p>{t('ecosystem.cards_ecosystek_list.card_grant.desc')}</p>
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

export default Ecosystem