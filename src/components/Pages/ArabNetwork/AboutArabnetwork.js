import React from 'react'

import aboutImage from '../../../assets/images/arabnetwork-hero-2.png'

const AboutArabnetwork = () => {
    return (
        <>
            <div className="about-arabnetwork-section">
                <div className="arrow-text">Arab Network</div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-2 order-lg-1">
                            <div className="thumb">
                                <div className="img-inner">
                                    <img src={aboutImage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <div class="payment-text text-light">
                                <h1 class="title">What is Arab Network?</h1>
                                <p>Arab Network is a community that doesn't have a central command. There is no single owner. Instead, a group of people shares their knowledge in blockchain technology, business, and education, working together to empower the Arab community in blockchain for a better future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-text">Arab<br/>Network</div>
                </div>
            </div>
        </>
    )
}

export default AboutArabnetwork