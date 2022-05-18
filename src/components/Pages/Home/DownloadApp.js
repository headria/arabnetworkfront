import React from 'react'

import downloadIos from '../../../assets/images/dowload-ios.png'
import downloadAndroid from '../../../assets/images/download-android.png'
import mobile from '../../../assets/images/arabnetwork-app.png'

const DownloadApp = ({ t }) => {
    return (
        <>
            <div className="downlaoad-app-section">
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="text-content">
                                    <h1 className='title'>{t('download_app.title')}</h1>
                                    <div className="information">
                                        <h2>{t('download_app.info.title')}</h2>
                                        <p className="desc">
                                            {t('download_app.info.desc')}
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