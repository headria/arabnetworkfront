import React from "react";

function ServicesHomeTwo({ dark, lang, t }) {
  return (
    <>
      <section
        className={`appie-services-2-area pt-90 pb-100 ${dark ? "service-area-dark" : ""
          }`}
        id="service"
      >
        <div className="container">
          {lang ? (
            <>
              <div className="row align-items-end">
                <div className="col-lg-12">
                  <div className="appie-section-title text-center">
                    <h3 className="appie-title">Features</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 mt-30 wow animated fadeInUp text-right"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                  >
                    <div className="icon">
                      <i className="fas fa-comments-alt"></i>
                    </div>
                    <h4 className="title">Speech recognition</h4>
                    <p>
                      Hala can have an actual conversation with the user that
                      will gather input and users' requirements and execute.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp text-right"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <div className="icon">
                      <i className="fas fa-puzzle-piece"></i>
                    </div>
                    <h4 className="title">Customized Personality</h4>
                    <p>Users can customize Hala (voice, and personality)</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp text-right"
                    data-wow-duration="2000ms"
                    data-wow-delay="600ms"
                  >
                    <div className="icon">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <h4 className="title">User friendly</h4>
                    <p>
                      Hala is easy to use, users can give instructions simply by
                      just pushing the VA button.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row align-items-end">
                <div className="col-lg-12">
                  <div className="appie-section-title text-center">
                    <h3 className="appie-title">{t("hala.features.title")}</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                  >
                    <div className="icon">
                      <i className="fas fa-comments-alt"></i>
                    </div>
                    <h4 className="title">{t("hala.features.feature_1.title")}</h4>
                    <p>{t("hala.features.feature_1.desc")}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <div className="icon">
                      <i className="fas fa-puzzle-piece"></i>
                    </div>
                    <h4 className="title">{t("hala.features.feature_2.title")}</h4>
                    <p>{t("hala.features.feature_2.desc")}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="600ms"
                  >
                    <div className="icon">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <h4 className="title">{t("hala.features.feature_3.title")}</h4>
                    <p>{t("hala.features.feature_3.desc")}</p>
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

export default ServicesHomeTwo;
