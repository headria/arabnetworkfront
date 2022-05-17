import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PopupVideo from '../PopupVideo'

function AboutHomeTwo({ dark }) {

    const [showVideo, setshowVideoValue] = useState(false);
    const handleVideoShow = (e) => {
        e.preventDefault();
        setshowVideoValue(!showVideo);
    };

    return (
        <>
            {showVideo && (
                <PopupVideo
                    handler={(e) => handleVideoShow(e)}
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                />
            )}
            <section className="appie-about-area mb-100 mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className={`appie-about-box wow animated fadeInUp ${dark ? 'appie-about-box-dark' : ''}`}
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="about-thumb">
                                            <img src="https://via.placeholder.com/513x400/ccc.png" alt="" />
                                            <div className="video-popup">
                                                <Link
                                                    onClick={(e) => handleVideoShow(e)}
                                                    role="button"
                                                    to="#"
                                                    className="appie-video-popup"
                                                >
                                                    <i className="fas fa-play" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="appie-about-content">
                                            <span>Marketing</span>
                                            <h3 className="title">
                                                Get Arab Gate now
                                            </h3>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit cumque in harum similique, repellat dignissimos dolores labore delectus, saepe temporibus quo. Omnis, aperiam nisi, eveniet placeat modi repudiandae iure accusantium nihil repellendus officiis blanditiis, vero excepturi possimus molestias perferendis!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeTwo;
