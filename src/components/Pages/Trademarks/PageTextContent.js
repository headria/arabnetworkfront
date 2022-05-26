import React from 'react'
import { Link } from 'react-router-dom'

const PageTextContent = ({ t, lang }) => {
    return (
        <div className={`pageText-content-section ${lang ? "area-rtl" : ""}`}>
            <div className="container">
                <div className="section-inner">
                    <div className="text-content">
                        <p>{t("trademarks.text_content.paragraph_1")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTextContent