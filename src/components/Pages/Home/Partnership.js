import React from "react";

import pertner_arabnetwork_light from "../../../assets/images/partnership/partnership-arabnetwork-dark.png";
import pertner_getblock_light from "../../../assets/images/partnership/partnership-getblock.png";
import polyogn_light from "../../../assets/images/partnership/polygon-light.png";
import polyogn_dark from "../../../assets/images/partnership/polygon-dark.png";
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
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="card-partnership">
                  <div className="card-inner">
                    <div className="img-content">
                      <img src={pertner_getblock_light} alt="img-name" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-12">
                                <div className="card-partnership">
                                    <div className="card-inner">
                                        <div className="img-content">
                                            <img src={pertner_arabnetwork_light} alt="img-name" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              <div className="col-lg-4 col-md-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
