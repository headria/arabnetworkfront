import React, { useState } from 'react';

// import compareImg from '../../../assets/images/icon-compare.svg';
import compareImgDark from '../../../assets/images/compare-icon-dark.svg';
import compareImgLight from '../../../assets/images/compare-icon-light.svg';

const Comparison = ({ lang, dark, t }) => {

    const [showCollapse, setShowCollapse] = useState(1);
    const openCollapse = (value) => {
        setShowCollapse(value);
    };

    return (
        <>
            <div className={`compare-area pt-100 pb-120
                ${dark ? "compare-area-dark" : ""}
                ${lang ? "compare-area-rtl" : ""}
            `}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{t("comparison.title")}</h3>
                                <p>{t("comparison.desc")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="compare-item">
                        <div className={`collapse-header ${showCollapse === 1 ? "active" : ""}`}
                            onClick={() => openCollapse(1)}
                        >
                            <div className="name">
                                {dark ?
                                    (<img src={compareImgDark} alt="" />) :
                                    (<img src={compareImgLight} alt="" />)
                                }
                                <h4>Arab Gate <span>vs Metamask</span></h4>
                            </div>
                            <div className="icon"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className={`collapse-body ${showCollapse === 1 ? "active" : ""}`}>
                            <div className="info-content">
                                <div className="table-compare">
                                    <div className="table-header">
                                        <ul>
                                            <li>{t("comparison.features.title")}</li>
                                            <li>Metamask</li>
                                            <li>Arab Gate</li>
                                        </ul>
                                    </div>
                                    <div className="table-body">
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multi_language")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.live_support")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.decentralized")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multichain")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.bitcoin_lightning")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.zkrollups")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.optimistic")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.solana_pay")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.low_fees")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="compare-item">
                        <div className={`collapse-header ${showCollapse === 2 ? "active" : ""}`}
                            onClick={() => openCollapse(2)}
                        >
                            <div className="name">
                                {dark ?
                                    (<img src={compareImgDark} alt="" />) :
                                    (<img src={compareImgLight} alt="" />)
                                }
                                <h4>Arab Gate <span>vs Argent Wallet</span></h4>
                            </div>
                            <div className="icon"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className={`collapse-body ${showCollapse === 2 ? "active" : ""}`}>
                            <div className="info-content">
                                <div className="table-compare">
                                    <div className="table-header">
                                        <ul>
                                            <li>Features</li>
                                            <li>Argent Wallet</li>
                                            <li>Arab Gate</li>
                                        </ul>
                                    </div>
                                    <div className="table-body">
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multi_language")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.live_support")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.decentralized")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multichain")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.bitcoin_lightning")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.zkrollups")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.optimistic")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.solana_pay")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.low_fees")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="compare-item">
                        <div className={`collapse-header ${showCollapse === 3 ? "active" : ""}`}
                            onClick={() => openCollapse(3)}
                        >
                            <div className="name">
                                {dark ?
                                    (<img src={compareImgDark} alt="" />) :
                                    (<img src={compareImgLight} alt="" />)
                                }
                                <h4>Arab Gate <span>vs Bitpay</span></h4>
                            </div>
                            <div className="icon"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className={`collapse-body ${showCollapse === 3 ? "active" : ""}`}>
                            <div className="info-content">
                                <div className="table-compare">
                                    <div className="table-header">
                                        <ul>
                                            <li>Features</li>
                                            <li>Bitpay</li>
                                            <li>Arab Gate</li>
                                        </ul>
                                    </div>
                                    <div className="table-body">
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multi_language")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.live_support")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.decentralized")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multichain")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.bitcoin_lightning")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.zkrollups")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.optimistic")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.solana_pay")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.low_fees")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="compare-item">
                        <div className={`collapse-header ${showCollapse === 4 ? "active" : ""}`}
                            onClick={() => openCollapse(4)}
                        >
                            <div className="name">
                                {dark ?
                                    (<img src={compareImgDark} alt="" />) :
                                    (<img src={compareImgLight} alt="" />)
                                }
                                <h4>Arab Gate <span>vs Coinbase</span></h4>
                            </div>
                            <div className="icon"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className={`collapse-body ${showCollapse === 4 ? "active" : ""}`}>
                            <div className="info-content">
                                <div className="table-compare">
                                    <div className="table-header">
                                        <ul>
                                            <li>Features</li>
                                            <li>Coinbase</li>
                                            <li>Arab Gate</li>
                                        </ul>
                                    </div>
                                    <div className="table-body">
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multi_language")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.live_support")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.decentralized")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.multichain")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.bitcoin_lightning")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.zkrollups")}</li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.optimistic")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.solana_pay")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="item-row">
                                            <ul>
                                                <li className='name'>{t("comparison.features.low_fees")}</li>
                                                <li><span className='icon'><i class="fas fa-times"></i></span></li>
                                                <li><span className='icon active'><i class="fas fa-check"></i></span></li>
                                            </ul>
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

export default Comparison