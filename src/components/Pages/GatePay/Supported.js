import React from "react";

const Supported = ({ dark, lang, t }) => {
  return (
    <>
      <div
        className={`gatepay-supported-content pt-50 pb-150
                ${lang ? "supported-rtl" : ""}
                ${dark ? "supported-dark" : ""}
            `}
      >
        <div className="container">
          <div className="appie-section-title text-center">
            <h3 className="appie-title">{t("gate_pay.supported.title")}</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card-support color-green">
                <div className="card-inner">
                  <div className="icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="info">
                    <h5>{t("gate_pay.supported.card_support_title_1")}</h5>
                    <p>{t("gate_pay.supported.card_support_desc_1")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card-support color-blue">
                <div className="card-inner">
                  <div className="icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="info">
                    <h5>{t("gate_pay.supported.card_support_title_2")}</h5>
                    <p>{t("gate_pay.supported.card_support_desc_2")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card-support color-red">
                <div className="card-inner">
                  <div className="icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="info">
                    <h5>{t("gate_pay.supported.card_support_title_3")}</h5>
                    <p>{t("gate_pay.supported.card_support_desc_3")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card-support color-yellow">
                <div className="card-inner">
                  <div className="icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="info">
                    <h5>{t("gate_pay.supported.card_support_title_4")}</h5>
                    <p>{t("gate_pay.supported.card_support_desc_4")}</p>
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

export default Supported;
