import React from "react";
import IconOne from "../../../assets/images/cryptoicons/ethereum.png";
import IconTwo from "../../../assets/images/cryptoicons/bnb-bep20.png";
import IconThree from "../../../assets/images/cryptoicons/solana.png";

function ServicesHomeOne({ lang, dark, t }) {
  return (
    <section
      className={`appie-service-area appie-service-3-area pt-90 pb-100 ${dark ? "appie-service-area-dark" : ""
        }`}
      id="service"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {lang ? (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">دعم NFTs على هذه البلوكشين</h3>
              </div>
            ) : (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{t("nft.supported_title")}</h3>
                <p>{t("nft.supported_desc")}</p>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="appie-single-service img-crypto text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
              </div>
              <h4 className="appie-title">{t("nft.single_service_1")}</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="appie-single-service img-crypto text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
              </div>
              <h4 className="appie-title">{t("nft.single_service_2")}</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div
              className="appie-single-service img-crypto text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
              </div>
              <h4 className="appie-title">{t("nft.single_service_3")}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
