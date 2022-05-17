import React from 'react';

import cryptoBitcoin from '../../../assets/images/cryptoicons/bitcoin.png'
import cryptoBinance from '../../../assets/images/cryptoicons/binance.png'
import cryptoEthereum from '../../../assets/images/cryptoicons/ethereum.png'
import cryptoRipple from '../../../assets/images/cryptoicons/ripple.png'
import cryptoPolygon from '../../../assets/images/cryptoicons/polygon.png'
import cryptoNear from '../../../assets/images/cryptoicons/near.png'
import cryptoTron from '../../../assets/images/cryptoicons/tron.png'
import cryptoSmartChain from '../../../assets/images/cryptoicons/bnb-bep20.png'
import cryptoDogecoin from '../../../assets/images/cryptoicons/dogecoin.png'
import cryptoShibaInu from '../../../assets/images/cryptoicons/shiba-inu.png'
import cryptoSand from '../../../assets/images/cryptoicons/sand.png'
import cryptoMana from '../../../assets/images/cryptoicons/mana.png'
import cryptoUsdt from '../../../assets/images/cryptoicons/usdt.png'
import cryptoArabCoin from '../../../assets/images/cryptoicons/arab-coin-dark.png'


function ServicesHomeTwo({ dark, lang, t }) {
    return (
        <>
            <section className={`appie-services-area pt-100 pb-100 
                    ${dark ? 'appie-service-area-dark' : ''}
                    ${lang ? 'service-area-rtl' : ''}
                    `} id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{t("assets.coin_list.title")}</h3>
                                <p>{t("assets.coin_list.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoBitcoin} alt="crypto-name" />
                                </div>
                                <h4 className="title">Bitcoin</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoBinance} alt="crypto-name" />
                                </div>
                                <h4 className="title">Binance Coin</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoArabCoin} alt="crypto-name" />
                                </div>
                                <h4 className="title">Arab coin</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoEthereum} alt="crypto-name" />
                                </div>
                                <h4 className="title">Ethereum</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoRipple} alt="crypto-name" />
                                </div>
                                <h4 className="title">XRP</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoPolygon} alt="crypto-name" />
                                </div>
                                <h4 className="title">Polygon</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoNear} alt="crypto-name" />
                                </div>
                                <h4 className="title">Near Protocol</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoTron} alt="crypto-name" />
                                </div>
                                <h4 className="title">Tron</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoSmartChain} alt="crypto-name" />
                                </div>
                                <h4 className="title">Smart Chain</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoDogecoin} alt="crypto-name" />
                                </div>
                                <h4 className="title">Dogecoin</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoShibaInu} alt="crypto-name" />
                                </div>
                                <h4 className="title">Shiba Inu</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoSand} alt="crypto-name" />
                                </div>
                                <h4 className="title">SAND</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoMana} alt="crypto-name" />
                                </div>
                                <h4 className="title">MANA</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={cryptoUsdt} alt="crypto-name" />
                                </div>
                                <h4 className="title">USDT</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeTwo;
