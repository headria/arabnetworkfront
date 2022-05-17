import React from 'react'
import {Link} from 'react-router-dom'

const JoinCommunity = () => {
    return (
        <>
            <div className="join-community-section pt-50 pb-90">
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-conent">
                                    <h1>Help us to build the<br/> future of Web3</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="button-join">
                                    <Link to="#" className="btn btn-dark">Join the Community</Link>
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