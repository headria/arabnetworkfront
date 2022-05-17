import React, { useState } from "react";
import { Link } from "react-router-dom";

function FaqHomeOne({ dark, lang, t }) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  return (
    <>
      <section
        className={`appie-faq-area pt-100 pb-95 
          ${dark ? "appie-faq-area-dark" : ""}
          ${lang ? "appie-faq-area-rtl" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {lang ? (
                <div className="appie-section-title text-center">
                  <h3 className="appie-title">الاسئلة الشائعة</h3>
                </div>
              ) : (
                <div className="appie-section-title text-center">
                  <h3 className="appie-title">{t("home.faq.title")}</h3>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  {lang ? (
                    <>
                      <div
                        onClick={() => openQuestion(1)}
                        className={`accrodion ${showQues === 1 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner text-right">
                          <div className="accrodion-title">
                            <h4>ما هي بوابة العرب؟</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 1 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>
                                بوابة العرب هي محفظة غير تحفظية ستربط مليارات
                                المستخدمين حول العالم بأمان. توفر بوابة العرب
                                سلاسل متعددة وغيرها. متصفح تطبيقات لامركزية
                                -Cross-chain bridge - DEX -(NFT & (عملات المشفرة
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => openQuestion(2)}
                        className={`accrodion ${showQues === 2 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner text-right">
                          <div className="accrodion-title">
                            <h4>من اين يتم تنزيل بوابة العرب؟</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 2 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>
                                <strong>هام جدا!</strong>
                                <br />
                                تحميل بوابة العرب فقط من خلال المصادر الرسمية
                                <br />
                                اليك رابط التحميل :
                                <br />
                                <Link
                                  className="mt-10"
                                  to="https://arabgatewallet.com"
                                >
                                  arabgatewallet.com
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => openQuestion(1)}
                        className={`accrodion ${showQues === 1 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner">
                          <div className="accrodion-title">
                            <h4>{t("home.faq.faqs.item_1.f_title")}</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 1 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>{t("home.faq.faqs.item_1.f_desc")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => openQuestion(2)}
                        className={`accrodion ${showQues === 2 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner">
                          <div className="accrodion-title">
                            <h4>{t("home.faq.faqs.item_2.f_title")}</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 2 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>
                                {t("home.faq.faqs.item_2.f_desc")}
                                <br />
                                <Link
                                  className="mt-10"
                                  to="https://arabgatewallet.com"
                                >
                                  arabgatewallet.com
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  {lang ? (
                    <>
                      <div
                        onClick={() => openQuestion(3)}
                        className={`accrodion ${showQues === 3 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner text-right">
                          <div className="accrodion-title">
                            <h4>كيف تعمل بوابة العرب؟</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 3 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>
                                بوابة العرب هي المفتاح الرئيسي لسلاسل المتعددة و
                                البروتوكلات والبرامج المستقبلية, حيث تعمل كنقطة
                                وحيدة للوصول الي خدمات DeFi عبر اكثر من بلوكشين
                                من خلال وجود اختلافات في المحفظة , لقد أنشأنا
                                منصة قوية لتوسيع مجموعة منتجاتنا.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => openQuestion(4)}
                        className={`accrodion ${showQues === 4 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner text-right">
                          <div className="accrodion-title">
                            <h4>هل أموالي آمنة على بوابة العرب؟ </h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 4 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>
                                بوابة العرب تستخدم معيارًا صناعيًا لتشفير محفظتك
                                وتأمين كلمات الاسترداد الخاصة بك مفاتيحك الخاص
                                لا يمكن ان تترك جهازك. باستخدام اقوي نظام تشفيري
                                لدي محفظة, يمكنك ان تطمئن علي ان اصولك الرقمية
                                امنة ومحمية.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => openQuestion(3)}
                        className={`accrodion ${showQues === 3 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner">
                          <div className="accrodion-title">
                            <h4>{t("home.faq.faqs.item_3.f_title")}</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 3 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>{t("home.faq.faqs.item_3.f_desc")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => openQuestion(4)}
                        className={`accrodion ${showQues === 4 ? "active" : ""
                          }`}
                      >
                        <div className="accrodion-inner">
                          <div className="accrodion-title">
                            <h4>{t("home.faq.faqs.item_4.f_title")}</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === 4 ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>{t("home.faq.faqs.item_4.f_desc")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {lang ? (
                <>
                  <div className="faq-text text-center pt-40">
                    <p>
                      لا يمكن لك ان تجد جواب؟{" "}
                      <a href="https://t.me/ArabNetworkOfficial">
                        انضم لقناتنا علي التليجرام
                      </a>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="faq-text text-center pt-40">
                    <p>
                      {t("home.faq.find_answer")}
                      <Link to="https://t.me/ArabNetworkOfficial">
                        Join our telegram channel
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqHomeOne;
