import React from "react";

const RoadMap = ({ lang, dark, t }) => {
  return (
    <>
      <div
        className={`road-map-area pt-100 pb-120 
                ${dark ? "road-map-area-dark" : ""}
                ${lang ? "road-map-area-rtl" : ""}`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {lang ? (
                <div className="appie-section-title text-center">
                  <h3 className="appie-title">خريطة الطريق</h3>
                </div>
              ) : (
                <div className="appie-section-title text-center">
                  <h3 className="appie-title">{t("home.road_map.title")}</h3>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="road-map-cotntent">
                <div className="map-inner">
                  <div className="map-item right color-green">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                        <div className="text">
                          <h1>{t("home.road_map.q3_2021.q_title")}</h1>
                          <ul>
                            <li className="active">{t("home.road_map.q3_2021.item_1")}</li>
                            <li className="active">{t("home.road_map.q3_2021.item_2")}</li>
                            <li className="active">{t("home.road_map.q3_2021.item_3")}</li>
                            <li className="active">{t("home.road_map.q3_2021.item_4")}</li>
                            <li className="active">{t("home.road_map.q3_2021.item_5")}</li>
                            <li className="active">{t("home.road_map.q3_2021.item_6")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="map-item left color-red">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="text">
                          <h1>{t("home.road_map.q4_2021.q_title")}</h1>
                          <ul>
                            <li className="active">{t("home.road_map.q4_2021.item_1")}</li>
                            <li className="active">{t("home.road_map.q4_2021.item_2")}</li>
                          </ul>
                        </div>
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-item right color-blue">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                        <div className="text">
                          <h1>{t("home.road_map.q1_2022.q_title")}</h1>
                          <ul>
                            <li className="active">{t("home.road_map.q1_2022.item_1")}</li>
                            <li className="active">{t("home.road_map.q1_2022.item_2")}</li>
                            <li className="active">{t("home.road_map.q1_2022.item_3")}</li>
                            <li className="active">{t("home.road_map.q1_2022.item_4")}</li>
                            <li className="active">{t("home.road_map.q1_2022.item_5")}</li>
                            <li>{t("home.road_map.q1_2022.item_6")}</li>
                            <li>{t("home.road_map.q1_2022.item_7")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-item left color-green">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="text">
                          <h1>{t("home.road_map.q2_2022.q_title")}</h1>
                          <ul>
                            <li>{t("home.road_map.q2_2022.item_1")}</li>
                            <li>{t("home.road_map.q2_2022.item_2")}</li>
                            <li>{t("home.road_map.q2_2022.item_3")}</li>
                            <li>{t("home.road_map.q2_2022.item_4")}</li>
                          </ul>
                        </div>
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-item right color-red">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                        <div className="text">
                          <h1>{t("home.road_map.q3_2022.q_title")}</h1>
                          <ul>
                            <li>{t("home.road_map.q3_2022.item_1")}</li>
                            <li>{t("home.road_map.q3_2022.item_2")}</li>
                            <li>{t("home.road_map.q3_2022.item_3")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-item left color-blue">
                    <div className="item-inner">
                      <div className="number"></div>
                      <div className="info">
                        <div className="text">
                          <h1>{t("home.road_map.q4_2022.q_title")}</h1>
                          <ul>
                            <li>{t("home.road_map.q4_2022.item_1")}</li>
                          </ul>
                        </div>
                        <div className="icon">
                          <i className="fas fa-flag-alt"></i>
                        </div>
                      </div>
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

export default RoadMap;
