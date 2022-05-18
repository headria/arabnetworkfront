import React from 'react'

const BannerLive = ({ t }) => {
    return (
        <>
            <div className="banner-section">
                <div className="section-inner">
                    <div className="container">
                        <h1>{t('banners.live')}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerLive