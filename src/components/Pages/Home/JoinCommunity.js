import React from 'react'
import { Link } from 'react-router-dom'

const JoinCommunity = ({ t, lang }) => {
    return (
        <>
            <div className={`join-community-section pt-30 pb-50 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-conent">
                                    <h1>{t('banners.community.title')}</h1>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="button-join">
                                    <Link to="#" className="btn btn-dark">{t('banners.community.join_community')}</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCommunity