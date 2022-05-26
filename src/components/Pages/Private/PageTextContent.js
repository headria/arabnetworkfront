import React from 'react'

const PageTextContent = ({ t, lang }) => {
    return (
        <div className={`pageText-content-section ${lang ? "area-rtl" : ""}`}>
            <div className="container">
                <div className="section-inner">
                    <div className="text-content">
                        <p>{t("private_plicy.text_content.paragraph_1")}</p>
                        <p>{t("private_plicy.text_content.paragraph_2")}</p>
                        <p>{t("private_plicy.text_content.paragraph_3")}</p>
                        <p>{t("private_plicy.text_content.paragraph_4")}</p>
                        <p>{t("private_plicy.text_content.paragraph_5")}</p>
                        <p>{t("private_plicy.text_content.paragraph_6")}</p>
                        <p>{t("private_plicy.text_content.paragraph_7")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTextContent