import React from "react";
import VideoPlayer from "react-background-video-player";
import { isIOS, isMacOs } from "react-device-detect";

import headerHeroImage from "../../assets/images/arabnetwork-hero-1.png";
import videoplayback_dark from "../../assets/videos/an-blockchain-dark.mp4";
import videoplayback_light from "../../assets/videos/an-blockchain-light.mp4";

const HeroArabnetwork = ({ t, lang, dark }) => {

    return (
        <>
            <div
                className={`network-hero ${lang ? "area-rtl" : ""} ${isIOS || isMacOs ? "iosback" : ""
                    }`}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1 className="title">
                                    {t("index_hero.title")} <br />
                                    <span>{t("index_hero.span")}</span>
                                </h1>
                                <p>{t("index_hero.desc")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <div className="thumb">
                    <div className="img-inner">
                        <img src={headerHeroImage} alt="" />
                    </div>
                </div> */}
                            <div className="video-thumb">
                                {dark ? (
                                    <VideoPlayer
                                        className="video-hero"
                                        src={videoplayback_dark}
                                        autoPlay={true}
                                        muted={true}
                                    />
                                ) : (
                                    <VideoPlayer
                                        className="video-hero"
                                        src={videoplayback_light}
                                        autoPlay={true}
                                        muted={true}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroArabnetwork;
