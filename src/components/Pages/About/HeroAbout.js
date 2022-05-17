import React from "react";
import { Link } from "react-router-dom";

function HeroAbout({ dark, lang, t }) {
  return (
    <>
      <div
        className={`appie-about-page-content pt-100 pb-90 noBefore
            ${dark ? "appie-about-page-dark" : ""}`}
      >
        <div className="container">
          {lang ? (
            <>
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  انضم إلى فريقنا لإنشاء أفضل الحلول الرقمية.
                </h3>
                <p>
                  بوابة العرب هي محفظة لامركزية غير تحفظية. تضمن لك التحكم الكامل في اموالك لانك تحتفظ بالعبارات الاحتياطية والمفاتيح الخاصة. ليس لدينا اي صلاحيات علي محفظتك او اي من معلوماتك الشخصية.
                  يتم تشفير ال 12 كلمة الاحتياطين وتخزينهم داخل جهازك.
                  علاوة علي ذلك, لا يتم الاحتفاظ بأصولك الرقمية داخل المحفظة نفسها, يتم تخزينها بأمان علي
                  Blockchain.
                  بوابة العرب تتصل مباشرة بعقود
                  Blockchain
                  وتعرض معلومات حول أرصدتك وسجل المعاملات وكل شيء آخر تراه في المحفظة
                  يمكنك ايضا استخدامه لاجراء معاملات
                  Blockchain.
                  بوابة العرب ايضا تسمح لتبديل وشراء العملات الرقمية.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{t("about.hero_about.title")}</h3>
                <p>{t("about.hero_about.desc")}</p>
              </div>

              {/* <Link to="/ios" className='btn-link'>
                View all Members <i className="fal fa-arrow-right ml-10"></i>
              </Link> */}

            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HeroAbout;
