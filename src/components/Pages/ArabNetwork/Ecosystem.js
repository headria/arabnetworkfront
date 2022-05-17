import React from 'react'

import cardImage1 from '../../../assets/images/ecosystem-1.png'
import cardImage2 from '../../../assets/images/ecosystem-2.png'
import cardImage3 from '../../../assets/images/ecosystem-3.png'
import cardImage4 from '../../../assets/images/ecosystem-4.png'
import cardImage5 from '../../../assets/images/ecosystem-5.png'
import cardImage6 from '../../../assets/images/ecosystem-6.png'

const Ecosystem = () => {
    return (
        <>
            <div className="ecosystem-section pt-100 pb-100">
                <div className="container">
                    <div className="appie-section-title text-center">
                        <h3 className='appie-title'>We are building a<br/>revolutionary ecosystem.</h3>
                        <p>We've got everything you need to start trading.</p>
                    </div>
                    <div className="section-inner mt-80">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-ecosystem">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={cardImage1} alt="eco-img" />
                                        </div>
                                        <div className="info">
                                            <h1>Arab Gate</h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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
                                            <h1>Arab Network Blockchain</h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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
                                            <h1>Arab Crypto Talk</h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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
                                            <h1>Babylon NFT Marketplace </h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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
                                            <h1>Arab Academy Devtrezor</h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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
                                            <h1>Arab Network Grant Program </h1>
                                            <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
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