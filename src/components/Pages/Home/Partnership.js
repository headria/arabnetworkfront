import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import pertner_getblock_light from "../../../assets/images/partnership/partnership-getblock.png";
import polyogn_light from "../../../assets/images/partnership/partnership-polygon-light.png";
import polyogn_dark from "../../../assets/images/partnership/partnership-polygon-dark.png";
import pertner_ankr from "../../../assets/images/partnership/partnership-ankr.png";
import pertner_boba from "../../../assets/images/partnership/partnership-boba-dark.png";

// import pertner_arabnetwork_light from "../../../assets/images/partnership/partnership-arabnetwork-dark.png";
// import pertner_pinksale_light from "../../../assets/images/partnership/partnership-pinksale-dark.png";
// import pertner_pinksale_dark from "../../../assets/images/partnership/partnership-pinksale-light.png";

const Partnership = ({ t, lang, darkMode }) => {
  return (
    <>
      <div
        className={`partnership-section pt-60 pb-50 ${lang ? "area-rtl" : ""}`}
      >
        <div className="container">
          <div className="section-title text-center">
            <h3 className="title">{t("partnership.title")}</h3>
            <p>{t("partnership.desc")}</p>
          </div>
          <div className="section-inner">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="swiper-teams"
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      <img src={pertner_getblock_light} alt="img-name" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      {darkMode ? (
                        <img src={polyogn_dark} alt="img-name" />
                      ) : (
                        <img src={polyogn_light} alt="img-name" />
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      <img src={pertner_ankr} alt="img-name" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      <img src={pertner_boba} alt="img-name" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
