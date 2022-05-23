import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";

const Teams = ({ t }) => {
    return (
        <>
            <div className="teams-section pt-100 pb-50">
                <div className="container">
                    <div className="section-title text-left">
                        <h3 className='title'>{t("teams.title")}</h3>
                        <p>{t("teams.desc")}</p>
                    </div>
                    <div className="section-inner">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation={true}
                            modules={[Navigation]}
                            className="swiper-teams"
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">{t("teams.card_team_1.name")}</h1>
                                            <h6 className="job">{t("teams.card_team_1.job")}</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">sharif abdel khalee</h1>
                                            <h6 className="job">founder CEO of Arab Network</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">sharif abdel khalee</h1>
                                            <h6 className="job">founder CEO of Arab Network</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">sharif abdel khalee</h1>
                                            <h6 className="job">founder CEO of Arab Network</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">sharif abdel khalee</h1>
                                            <h6 className="job">founder CEO of Arab Network</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src="https://via.placeholder.com/200x200/ccc.png" alt="user-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">sharif abdel khalee</h1>
                                            <h6 className="job">founder CEO of Arab Network</h6>
                                            <ul className='social-icons'>
                                                <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                                <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams