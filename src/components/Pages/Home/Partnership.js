import React from "react";

import pertner_arabnetwork_light from "../../../assets/images/partnership/partnership-arabnetwork-dark.png";
import pertner_getblock_light from "../../../assets/images/partnership/partnership-getblock.png";
import pertner_polygon_light from "../../../assets/images/partnership/partnership-polygon-light.png";
import pertner_polygon_dark from "../../../assets/images/partnership/partnership-polygon-dark.png";
import pertner_pinksale_light from "../../../assets/images/partnership/partnership-pinksale-dark.png";
import pertner_pinksale_dark from "../../../assets/images/partnership/partnership-pinksale-light.png";

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
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-12">
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      <img src={pertner_getblock_light} alt="img-name" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      {darkMode ? (
                        <img src={pertner_polygon_dark} alt="img-name" />
                      ) : (
                        <img src={pertner_polygon_light} alt="img-name" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-12">
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      {darkMode ? (
                        <img src={pertner_pinksale_light} alt="img-name" />
                      ) : (
                        <img src={pertner_pinksale_dark} alt="img-name" />
                      )}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
