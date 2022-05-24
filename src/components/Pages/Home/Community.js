import React from 'react'

const Community = ({ t, lang }) => {
    return (
        <div className={`community-section ${lang ? "area-rtl" : ""}`}>
            <div className="container">
                <div className="section-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="text-content">
                                <h1>{t('banners.about_community.title')}</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-desc">
                                <p>{t('banners.about_community.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community