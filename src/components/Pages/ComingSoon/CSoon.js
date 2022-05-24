import React from 'react'
import { Link } from 'react-router-dom'

import arabNetworkLogoWhite from "../../../assets/images/logo-arabnetwork-white.svg";
import comingsoonimg from "../../../assets/images/2385423.png";

const CSoon = ({ t }) => {
    return (
        <div className='coming-soon-area'>
            {/* <div className="container"> */}
            <div className="section-inner">
                <div className="logo">
                    <Link to="/home">
                        <img src={arabNetworkLogoWhite} alt="" />

                    </Link>
                </div>
                <div className="text-content">
                    <h1>We are launching <span>Soon!</span></h1>
                    {/* <div className="subscribe">
                        <h3>subscribe and get notified</h3>
                        <div className="inputgroup">
                            <input type="email" className='input' placeholder='youremail@rmail.com' />
                            <button type='submit' className='btn btn-primary'>Notify me</button>
                        </div>
                    </div> */}
                </div>
                <div className="thumb">
                    <div className="img-inner">
                        <img src={comingsoonimg} alt="img-name" />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default CSoon