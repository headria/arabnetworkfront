import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import shape12 from "../../../assets/images/shape/shape-12.png";
import shape13 from "../../../assets/images/shape/shape-13.png";
import shape14 from "../../../assets/images/shape/shape-14.png";
import shape15 from "../../../assets/images/shape/shape-15.png";

import showCase1 from "../../../assets/images/nft/bitcoin-list-light.png";
import showCase2 from "../../../assets/images/nft/nft-details-light.png";
import showCase3 from "../../../assets/images/nft/nft-list-light.png";
import showCase4 from "../../../assets/images/nft/nft-transaction-fee-light.png";
import showCase5 from "../../../assets/images/nft/nft-transaction-fee-progress-light.png";
import showCase6 from "../../../assets/images/nft/nft-transfer-light.png";
import showCase7 from "../../../assets/images/nft/nft-confirm-light.png";

function ShowCaseHomeThree({ dark, lang, t }) {
  const sliderRef = useRef();
  const settings = {
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={`appie-showcase-area ${dark ? "showcase-dark" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{t("nft.show_case_title")}</h3>
              </div>
            </div>
          </div>
          <div className="row appie-showcase-slider">
            <div className="col-lg-12">
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase1} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase2} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase3} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase4} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase5} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase6} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                      <img src={showCase7} alt="" />
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="showcase-shape-1">
          <img src={shape14} alt="" />
        </div>
        <div className="showcase-shape-2">
          <img src={shape13} alt="" />
        </div>
        <div className="showcase-shape-3">
          <img src={shape12} alt="" />
        </div>
        <div className="showcase-shape-4">
          <img src={shape15} alt="" />
        </div>
      </section>
    </>
  );
}

export default ShowCaseHomeThree;
