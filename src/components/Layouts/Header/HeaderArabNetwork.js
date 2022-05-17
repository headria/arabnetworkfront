import React from 'react'
import { Link } from 'react-router-dom'
import arabNetworkLogo from '../../../assets/images/logo-arabnetwork-white.svg'

import { t } from "i18next";

const HeaderArabNetwork = ({ dark, drawer, setDrawer }) => {
    return (
        <>
            <div className="header-arabnetwork">
                <div className="top-header">
                    <div className="logo">
                        <Link to="/">
                            <img src={arabNetworkLogo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="bottom-header">
                    <div className="container">
                        <div className="header-inner">
                            <div className="appie-header-main-menu">
                                <ul className={`${dark ? "navigation-text-Light" : ""}`}>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            Ecosystem
                                            <i className="fal fa-angle-down" />
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <a
                                                    href="https://litepaper.arabnetwork.org"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Eco 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://whitepaper.arabnetwork.org"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Eco 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">Community</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-groups">
                                <button type='button' className='btn btn-dark'>
                                    Buy Arab Coin
                                </button>
                                <div className="choose-lang">
                                    <ul>
                                        <li className='item'>
                                            <Link to="#">
                                                En/USD
                                                <i className="fal fa-angle-down" />
                                            </Link>
                                        </li>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    to="#"
                                                    rel="noreferrer"
                                                >
                                                    En/USD
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    rel="noreferrer"
                                                >
                                                    Arb/Rial
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    rel="noreferrer"
                                                >
                                                    US/Dolar
                                                </Link>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="change-theme">
                                    <button type='button' className='btn-theme'>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                    </button>
                                    {/* <button type='button' className='btn-theme'>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                            </path>
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                            <div className="btn-show-drawer">
                                <button type='button' className='btn-drawer' onClick={() => setDrawer(!drawer)}>
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderArabNetwork