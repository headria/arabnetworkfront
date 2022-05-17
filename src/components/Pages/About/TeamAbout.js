import React, { useRef } from "react";
import { a } from "react-router-dom";

import Slider from "react-slick";
import arabcoin from "../../../assets/images/cryptoicons/arab-coin-light.png";
import ahmadheidari from "../../../assets/images/profile/xvOBITB7_400x400.jpeg";
import mohamdben from "../../../assets/images/profile/1648499113498.jpeg";
import drnaji from "../../../assets/images/profile/1521221883410.jpeg";
import sharifalshawish from "../../../assets/images/profile/1640392369764.jpeg";
import arabcoindark from "../../../assets/images/cryptoicons/arab-coin-dark.png";

function TeamAbout({ dark, lang, t }) {
  const sliderRef = useRef();
  const settings = {
    autoplay: false,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    className: "team-slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <section
        className={`appie-team-area appie-team-about-area pb-120 
                    ${dark ? "appie-team-area-dark" : ""}
                    ${lang ? "team-rtl" : ""}
                `}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Our Team Works</h3>
                <p>We will deliver the best job with the best team</p>
              </div>
            </div>
          </div>

          <Slider ref={sliderRef} {...settings}>
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
                  {/* <div className="other-link">
                                        <a href="www.website.com" target="_blank" rel="noopener noreferrer">www.website.com</a>
                                    </div> */}
                </div>
              </div>
            </div>
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={drnaji} alt="img-name" />
                </div>
                <div className="info">
                  <h1 className="name">Dr. Naji Shouman</h1>
                  <h3>Development consultant</h3>
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/DrNajiShouman"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dr-naji-shouman-809a7858/"
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
                </div>
                <div className="info">
                  <h1 className="name">Abu Mouhanad</h1>
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
            <div className="card-team">
              <div className="card-inner">
                <div className="thumb">
                  <img src={!dark ? arabcoindark : arabcoin} alt="img-name" />
                </div>
                <div className="info">
                  <h1 className="name">Omar Asharif</h1>
                  <h3>Media</h3>
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
          </Slider>
        </div>
      </section>
    </>
  );
}

export default TeamAbout;
