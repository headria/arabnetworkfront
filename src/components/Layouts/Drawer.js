import React, { useState } from "react";
import { Link } from "react-router-dom";
import arabNetworkLogo from '../../assets/images/logo-arabnetwork-white.svg'

import { t } from "i18next";

function Drawer({ drawer, setDrawer, lang }) {

    const [showCollsapse, setshowCollsapse] = useState('');
    const handleOpen = (value) => {
        setshowCollsapse(value);
    };

    return (
        <>
            <div className={`drawer-section ${drawer ? "active" : ""}`}>
                <div className="drawer-inner">
                    <div className="drawer-header">
                        <div className="logo">
                            <img src={arabNetworkLogo} alt="" />
                        </div>
                        <div
                            className="close"
                            onClick={() => setDrawer(false)}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="drawer-body">
                        <div className="drawer-link-list">
                            <div className="link-item">
                                <Link to="/" className="btn btn-primary">
                                    {t('menus.home')}
                                </Link>
                            </div>
                            {/* <div className="link-item">
                                <div
                                    className={`btn btn-primary ${showCollsapse === "assets" ? "active" : ""}`}
                                    onClick={() => handleOpen('assets')}
                                >
                                    {t('menus.ecosystem')}
                                    <div className="icon"><i className="fas fa-caret-right"></i></div>
                                </div>
                                <div className={`collapse  ${showCollsapse === "assets" ? "show" : ""}`} id="collapseExample">
                                    <div className="card card-body">
                                        <ul className="sub-links">
                                            <li>
                                                <Link to="">eco 1</Link>
                                            </li>
                                            <li>
                                                <Link to="">eco 2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            <div className="link-item">
                                <a href="https://whitepaper.arabnetwork.org"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary">
                                    {t('menus.whitepaper')}
                                </a>
                            </div>
                            <div className="link-item">
                                <Link to="/contact" className="btn btn-primary">
                                    {t('menus.contact')}
                                </Link>
                            </div>
                            <div className="link-item">
                                <Link to="/about" className="btn btn-primary">
                                    {t('menus.about')}
                                </Link>
                            </div>
                        </div>
                        <div className="social-icons">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/thebigboss">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/c/sharifalshawish">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/SharifAlShawish$">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/ArabNetworkOfficial">
                                        <i className="fab fa-telegram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@sharifalshawish">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/sharifalshawish">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Arab-Network">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => setDrawer(false)}
                className={`drawer-overlay ${drawer ? "active" : ""}`}>
            </div>
        </>
    );
}

export default Drawer;
