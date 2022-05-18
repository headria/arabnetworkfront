import React from 'react'
import { Link } from 'react-router-dom'

const JoinCommunity = ({ t }) => {
    return (
        <>
            <div className="join-community-section pt-50 pb-80">
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-conent">
                                    {/* <h1>Help us to build the<br /> future of Web3</h1> */}
                                    <h1>{t('banners.community.title')}</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="button-join">
                                    <Link to="#" className="btn btn-dark">{t('banners.community.join_community')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCommunity