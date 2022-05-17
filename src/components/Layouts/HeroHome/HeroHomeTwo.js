import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroThumbDark from "../../../assets/images/simple-app-dark.png";
import heroThumbLight from "../../../assets/images/simple-app-light.png";
import { getUDIDState, submitUDID } from "../../Helper/udid";
import Modal from "../Modal";
import PopupVideo from "../PopupVideo";

function HeroHomeSix({ dark, lang, t }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [udidStr, setUdidStr] = useState("");
  const [showVideo, setshowVideoValue] = useState(false);

  const handleAddLoading = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  const handleVideoShow = (e) => {
    e.preventDefault();
    setshowVideoValue(!showVideo);
  };

  const checkUDID = async () => {
    setLoading(true);
    const udidState = await getUDIDState(udidStr);
    console.log(udidState);
    if (udidState === "Signed") {
      window.location =
        "itms-services://?action=download-manifest&url=https://arabgate.vercel.app/manifest.plist";
      setLoading(false);
      return;
    }
    if (udidState === "Signed2") {
      window.location =
        "itms-services://?action=download-manifest&url=https://arabgate.vercel.app/manifest2.plist";
      setLoading(false);
      return;
    }
    if (udidState === "Unregistred") {
      await submitUDID(udidStr);
      setLoading(false);
      setShowModal(true);
      return;
    }
    setLoading(false);
    setShowModal(true);
    return;
  };
  return (
    <>
      {showVideo && (
        <PopupVideo
          handler={(e) => handleVideoShow(e)}
          videoSrc="//www.youtube.com/embed/Yt8JR4oeoX8?autoplay=1"
        />
      )}

      <section
        className={`appie-hero-area appie-hero-6-area ${dark ? "area-dark" : ""
          }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-md-2 order-2">
              <div className="appie-hero-thumb-6 hero-thumb-type-2">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  {dark ? (
                    <>
                      <img src={heroThumbDark} className="img-video" alt="" />
                      <div className="video-popup">
                        <Link
                          onClick={(e) => handleVideoShow(e)}
                          role="button"
                          to="#"
                          className="appie-video-popup"
                        >
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <img src={heroThumbLight} className="img-video" alt="" />
                      <div className="video-popup">
                        <Link
                          onClick={(e) => handleVideoShow(e)}
                          role="button"
                          to="#"
                          className="appie-video-popup"
                        >
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-md-1 order-1">
              {lang ? (
                <>
                  <div className="appie-hero-content appie-hero-content-6 mb-md-0 text-right">
                    <span>Arab Gate</span>
                    <h1 className="appie-title">Get started with your UDID </h1>
                    <p>
                      by submitting your UDID number you will have an exclusive
                      access to Arab Gate Wallet IOS version that is limited
                      initialy to a 100 slot only
                    </p>
                    <div className="submit-id">
                      <form action="" className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            name="f-name"
                            value={udidStr}
                            onChange={(e) => setUdidStr(e.target.value)}
                            placeholder="Submit your udid"
                          />
                        </div>
                        <div className="col-md-4">
                          <Link
                            className={`main-btn ${loading ? "loading" : ""}`}
                            to="#"
                            onClick={(e) => checkUDID(e)}
                          >
                            Check UDID
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="appie-hero-content appie-hero-content-6 mb-md-0">
                    <span>{t("ios.mini_title")}</span>
                    <h1 className="appie-title">{t("ios.title")}</h1>
                    <p>{t("ios.description")}</p>
                    <div className="submit-id">
                      <form action="" className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            name="f-name"
                            value={udidStr}
                            onChange={(e) => setUdidStr(e.target.value)}
                            placeholder="Submit your udid"
                          />
                        </div>
                        <div className="col-md-4">
                          <Link
                            className={`main-btn ${loading ? "loading" : ""}`}
                            to="#"
                            onClick={(e) => checkUDID(e)}
                          >
                            {t("ios.btn_udid")}
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Suucess"
        icon="fas fa-check"
      >
        {
          <div className="modal-message">
            <div className="icon">
              <i className="far fa-laugh"></i>
            </div>
            <h2>congratulations!</h2>
            <p>
              Your UDID has been add to the exclusive access of Arab Gate IOS
              verion after 12 hours you need to submit UDID again to download
              the app
            </p>
          </div>
        }
      </Modal>
    </>
  );
}

export default HeroHomeSix;
