import React from "react";
import { Link } from "react-router-dom";

function HeroAbout({ dark, lang }) {
  return (
    <>
      <div
        className={`appie-about-page-content pt-100 pb-90 noBefore 
            ${dark ? "appie-about-page-dark" : ""}`}
      >
        <div className="container">
          {lang ? (
            <>
              <h3 className="title text-right">
                انضم إلى فريقنا لإنشاء أفضل الحلول الرقمية.
              </h3>
              <p className="text-right">
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
            </>
          ) : (
            <>
              <h3 className="title">
                NFT
              </h3>
              <p>
                Arab Gate offers full support for ERC721, ERC1155, BEP721, BEP1155 and SLP tokens, store, access, and manage your collectibles with peace of mind and security using Arab Gate’s innovative interface.
                <br />
                Design of the NFT page on the wallet (check trust wallet website)
              </p>
              {/* <Link to="#" className='btn-link'>
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
