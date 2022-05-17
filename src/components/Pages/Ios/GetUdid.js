import React from "react";
import { Link } from "react-router-dom";

import thumbLevel1 from "../../../assets/images/ios/IMG_0018.jpg";
import thumbLevel2 from "../../../assets/images/ios/IMG_0019.jpg";
import thumbLevel3 from "../../../assets/images/ios/IMG_0020.jpg";
import thumbLevel4 from "../../../assets/images/ios/IMG_0021.jpg";
import thumbLevel5 from "../../../assets/images/ios/IMG_0022.jpg";
import thumbLevel6 from "../../../assets/images/ios/IMG_0023.jpg";
import thumbLevel7 from "../../../assets/images/ios/IMG_0024.jpg";
import thumbLevel8 from "../../../assets/images/ios/IMG_0025.jpg";
import thumbLevel9 from "../../../assets/images/ios/IMG_0026.jpg";

function AboutHomeThree({ dark, lang, t }) {
  return (
    <>
      <section
        className={`appie-about-3-area get-id-section pt-60 pb-150 ${dark ? "about-3-area-dark" : ""
          }`}
        id="features"
      >
        <div className="container">
          {lang ? (
            <>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="appie-section-title text-center mb-50">
                    <h3 className="appie-title">
                      كيفية الحصول على UDID الخاص بك على جهاز iPhone الخاص بك
                    </h3>
                    <p>يستغرق سوى بضع دقائق</p>
                  </div>
                </div>
              </div>
              {/* Step 1 */}
              {/* {row align-items-center mt-50 flex-column-reverse flex-lg-row } */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-12">
                  <div className="appie-traffic-title text-center pr-md-0">
                    <span>Step 1</span>
                    <h3 className="title">Open Safari and Go to UDID.tech</h3>
                    <p></p>
                    <a
                      href="https://udid.tech/"
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Go to UDID.tech <i className="fal fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
                {/* <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <img src={thumbLevel1} alt="" />
              </div>
            </div> */}
              </div>
              {/* Step 2 */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-right text-md-center text-center pr-md-0">
                    <span>Step 2</span>
                    <h3 className="title">Then click on “Get your UDID now”</h3>
                    <p></p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-left text-md-center text-center pr-md-0">
                    <span>Step 3</span>
                    <h3 className="title">Click on “Got it!”</h3>
                    <p></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel3} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel4} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-right text-md-center text-center pr-md-0">
                    <span>Step 4</span>
                    <h3 className="title">Click on Allow button</h3>
                    <p></p>
                  </div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-left text-md-center text-center pr-md-0">
                    <span>Step 5</span>
                    <h3 className="title">Click on Close</h3>
                    <p></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel5} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 6 */}
              <div className="row align-items-center mt-100">
                <div className="col-lg-12">
                  <div className="appie-traffic-title text-lg-center text-md-center text-center pr-md-0">
                    <span>Step 6</span>
                    <h3 className="title">
                      Go to settings and find UDID profile settings and then accept
                      it.
                    </h3>
                    <p></p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel6} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel7} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div
                    className="appie-about-thumb-3 text-lg-right text-md-center mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel8} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 9 */}
              <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-left text-md-center text-center pr-md-0">
                    <span>Step 9</span>
                    <h3 className="title">
                      Go back to the website and copy your UDID.
                    </h3>
                    <p></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel9} alt="" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="appie-section-title text-center mb-50">
                    <h3 className="appie-title">{t("ios.steps.title")}</h3>
                    <p>{t("ios.steps.desc")}</p>
                  </div>
                </div>
              </div>
              {/* Step 1 */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-12">
                  <div className="appie-traffic-title text-center pr-md-0">
                    <span>{t("ios.steps.step_title_1")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_1")}</h3>
                    <a
                      href="https://udid.tech/"
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Go to UDID.tech <i className="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-left text-md-center text-center pl-md-0">
                    <span>{t("ios.steps.step_title_2")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_2")}</h3>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-right text-md-center text-center pr-md-0">
                    <span>{t("ios.steps.step_title_3")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_3")}</h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel3} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="row align-items-center mt-50">
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel4} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-left text-md-center text-center pl-md-0">
                    <span>{t("ios.steps.step_title_4")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_4")}</h3>
                  </div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-right text-md-center text-center pr-md-0">
                    <span>{t("ios.steps.step_title_5")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_5")}</h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel5} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 6 */}
              <div className="row align-items-center mt-100">
                <div className="col-lg-12">
                  <div className="appie-traffic-title text-lg-center text-md-center text-center pr-md-0">
                    <span>{t("ios.steps.step_title_6")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_6")}</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-about-thumb-3 text-lg-right mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel6} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel7} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div
                    className="appie-about-thumb-3 text-lg-right text-md-center mx-auto wow animated fadeInLeft"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel8} alt="" />
                  </div>
                </div>
              </div>
              {/* Step 9 */}
              <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="appie-traffic-title text-lg-right text-md-center text-center pr-md-0">
                    <span>{t("ios.steps.step_title_7")}</span>
                    <h3 className="title">{t("ios.steps.step_desc_7")}</h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="appie-about-thumb-3 text-lg-left mx-auto wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <img src={thumbLevel9} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default AboutHomeThree;
