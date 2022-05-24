import React, { useState } from 'react'

const AboutEcosystem = ({ t, lang }) => {

    const [showFaq, setFaq] = useState(1);
    const openFaq = (value) => {
        setFaq(value);
    };

    return (
        <>
            <div className={`about-ecosystem-section pt-70 pb-100 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="title-content">
                                <div className="title-inner">
                                    <h1>{t('ecosystem.about_ecosystem.title')}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="collapses-group">
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 1 ? "active" : ""}`}
                                        onClick={() => openFaq(1)}
                                    >
                                        <div className='number'>1</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_arabgate.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 1 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_arabgate.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 2 ? "active" : ""}`}
                                        onClick={() => openFaq(2)}
                                    >
                                        <div className='number'>2</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_blockchain.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 2 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_blockchain.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 3 ? "active" : ""}`}
                                        onClick={() => openFaq(3)}
                                    >
                                        <div className='number'>3</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_cryptotalk.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 3 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_cryptotalk.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 4 ? "active" : ""}`}
                                        onClick={() => openFaq(4)}
                                    >
                                        <div className='number'>4</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_academy.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 4 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_academy.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 5 ? "active" : ""}`}
                                        onClick={() => openFaq(5)}
                                    >
                                        <div className='number'>5</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_nft.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 5 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_nft.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 6 ? "active" : ""}`}
                                        onClick={() => openFaq(6)}
                                    >
                                        <div className='number'>6</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_devtrezor.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 6 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_devtrezor.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 7 ? "active" : ""}`}
                                        onClick={() => openFaq(7)}
                                    >
                                        <div className='number'>7</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_grant.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 7 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_grant.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-item">
                                    <div
                                        className={`btn-collapse ${showFaq === 8 ? "active" : ""}`}
                                        onClick={() => openFaq(8)}
                                    >
                                        <div className='number'>8</div>
                                        <div className='name'>{t('ecosystem.about_ecosystem.collapse_knowledge.title')}</div>
                                        <div className='arrow'><i className="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 8 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                {t('ecosystem.about_ecosystem.collapse_knowledge.desc')}
                                            </p>
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

export default AboutEcosystem