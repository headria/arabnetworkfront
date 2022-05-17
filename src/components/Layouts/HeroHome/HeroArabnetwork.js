import React from 'react'

import headerHeroImage from '../../../assets/images/arabnetwork-hero-1.png'

const HeroArabnetwork = () => {
    return (
        <>
            <div className="network-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* <div className="appie-page-title-item"> */}
                                {/* <h3 className="title">your gateway for future <br/><span>opportunities</span></h3> */}
                            {/* </div> */}
                            <div className="appie-hero-content">
                                <h1 className="appie-title">your gateway for future <br /><span>opportunities</span></h1>
                                <p>a world where value is created and exchanged by everyone in an efficient, open and secure manner</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumb">
                                <div className="img-inner">
                                    <img src={headerHeroImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroArabnetwork