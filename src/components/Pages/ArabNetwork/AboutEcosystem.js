import React, { useState } from 'react'

const AboutEcosystem = () => {

    const [showFaq, setFaq] = useState(1);
    const openFaq = (value) => {
        setFaq(value);
    };

    return (
        <>
            <div className="about-ecosystem-section pt-70 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="title-content">
                                <div className="title-inner">
                                    <h1>Ecosystem</h1>
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
                                        <div className='name'>Arab Gate</div>
                                        <div className='arrow'><i class="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 1 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                Arab Academy is the World's first cryptocurrency & Blockchain Education platform that will revolutionize the Arab World with a mission to empower people and educate them about cryptocurrency, blockchain, and programming.
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
                                        <div className='name'>Arab Network Blockchain</div>
                                        <div className='arrow'><i class="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 2 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                Arab Academy is the World's first cryptocurrency & Blockchain Education platform that will revolutionize the Arab World with a mission to empower people and educate them about cryptocurrency, blockchain, and programming.
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
                                        <div className='name'>Arab Crypto Talk:</div>
                                        <div className='arrow'><i class="fas fa-angle-down"></i></div>
                                    </div>
                                    <div className={`collapse-body ${showFaq === 3 ? "active" : ""}`}>
                                        <div className="card-content">
                                            <p>
                                                Arab Academy is the World's first cryptocurrency & Blockchain Education platform that will revolutionize the Arab World with a mission to empower people and educate them about cryptocurrency, blockchain, and programming.
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