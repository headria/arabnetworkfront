import React from 'react'

import downloadIos from '../../../assets/images/dowload-ios.png'
import downloadAndroid from '../../../assets/images/download-android.png'
import mobile from '../../../assets/images/arabnetwork-app.png'

const DownloadApp = () => {
    return (
        <>
            <div className="downlaoad-app-section">
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="text-content">
                                    <h1 className='title'>RECENTLY LAUNCHED PROJECT</h1>
                                    <div className="information">
                                        <h2>Arab Gate</h2>
                                        <p className="desc">
                                            Arab Gate is a key component of future multichain protocols/applications, acting as a single point of access to various DeFi services across multiple blockchains. By having variations on the wallet, we have established a solid platform for expanding our product suite.
                                        </p>
                                    </div>
                                    <div className="download-links">
                                        <a href='#' className='btn-image'>
                                            <img src={downloadAndroid} alt="img-name" />
                                        </a>
                                        <a href='#' className='btn-image'>
                                            <img src={downloadIos} alt="img-name" />
                                        </a>
                                    </div>
                                </div>  
                            </div>
                            <div className="col-lg-5">
                                <div className="thumb">
                                    <div className="img-inner">
                                        <img src={mobile} alt="img-name" />
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

export default DownloadApp