import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";

import ahmadheidari from "../../../assets/images/profile/xvOBITB7_400x400.jpeg";
import mohamdben from "../../../assets/images/profile/1648499113498.jpeg";
import drnaji from "../../../assets/images/profile/1521221883410.jpeg";
import sharifalshawish from "../../../assets/images/profile/1640392369764.jpeg";
import arabcoindark from "../../../assets/images/profile/arab-coin-dark.png";
import arabcoin from "../../../assets/images/profile/arab-coin-light.png";

const Teams = ({ t, lang, dark }) => {
    return (
        <>
            <div className={`teams-section pt-100 pb-100 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className='title'>{t("teams.title")}</h3>
                        <p>{t("teams.desc")}</p>
                    </div>
                    <div className="section-inner">
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            className="swiper-teams"
                            breakpoints={{
                                450: {
                                    slidesPerView: 1,
                                    // spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    // spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    // spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 4,
                                    // spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={sharifalshawish} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">
                                                Sharif Abdel Ra'ouf Khaleel Elshaweesh
                                            </h1>
                                            <h3>Founder & CEO of Arab Network</h3>
                                            <ul>
                                                <li>
                                                    <a
                                                        href="https://twitter.com/SharifAlShawish"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.linkedin.com/in/sharifalshawish/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={mohamdben} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Benahcene Mohammed Lamine</h1>
                                            <h3>Co-Founder & Head of R&D and CBDO of Arab Network</h3>
                                            <ul>
                                                <li>
                                                    <a
                                                        href="https://twitter.com/mohammedbenahc2"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.linkedin.com/in/mohammed-benahcene-8507b0128/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={ahmadheidari} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Ahmad Heidari</h1>
                                            <h3>Co-Founder & CTO of Arab Network</h3>
                                            <ul>
                                                <li>
                                                    <a
                                                        href="https://mobile.twitter.com/headria2"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.linkedin.com/mwlite/in/ahmad-heidari-a08880b0"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Abdulrahman Alfawal</h1>
                                            <h3>Backend Developer</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Mohammed Abo seedo</h1>
                                            <h3>UI-UX Designer</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Abbas Dolati</h1>
                                            <h3>UI-UX Designer</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Vahid Hoseini</h1>
                                            <h3>Graphic Designer</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Zineb</h1>
                                            <h3>Communications</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Seif</h1>
                                            <h3>Finance</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <div className="card-inner">
                                        <div className="thumb">
                                            <img src={dark ? arabcoindark : arabcoin} alt="img-name" />
                                        </div>
                                        <div className="info">
                                            <h1 className="name">Wassim</h1>
                                            <h3>Communications</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
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