import React from "react";
import { Link } from "react-router-dom";

const KeepinTouch = ({ lang, dark, t }) => {
  return (
    <>
      <section
        className={`appie-services-2-area pt-110 pb-120 ${dark ? "service-area-dark" : ""
          }`}
        id="service"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{t("community.keep_touch.title")}</h3>
                <p>{t("community.keep_touch.desc")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 facebook mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_facebook")}</h4>
                <p>
                  <a href="https://www.facebook.com/thebigboss">
                    @thebigboss
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 youtube mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_youtube")}</h4>
                <p>
                  <a href="https://www.youtube.com/c/sharifalshawish">
                    @sharifalshawish
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 twitter mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_twitter")}</h4>
                <p>
                  <a href="https://twitter.com/SharifAlShawish">
                    @SharifAlShawish
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 telegram mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-telegram"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_telegram")}</h4>
                <p>
                  <a href="https://t.me/ArabNetworkOfficial">
                    @ArabNetworkcommunity
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 tiktok mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </div>
                <h4 className="title">{t("community.keep_touch.social_tiktok")}</h4>
                <p>
                  <a href="https://www.tiktok.com/@sharifalshawish">
                    @sharifalshawish
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 linkedin mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_linkedin")}</h4>
                <p>
                  <a href="https://www.linkedin.com/in/sharifalshawish">
                    @sharifalshawish
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 github mt-30 text-center wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fab fa-github"></i>
                </div>
                <h4 className="title">{t("community.keep_touch.social_github")}</h4>
                <p>
                  <a href="https://github.com/Arab-Network">
                    @arabnetwok
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeepinTouch;
