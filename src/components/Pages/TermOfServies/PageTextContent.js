import React from 'react'
import { Link } from 'react-router-dom'

const PageTextContent = ({ t }) => {
    return (
        <div className='pageText-content-section'>
            <div className="container">
                <div className="section-inner">
                    <div className="text-content">
                        <p>{t("term_of_services.text_content.paragraph_1")}</p>
                        <p>{t("term_of_services.text_content.paragraph_2")}
                            <Link to="/private_policy" className="link"> {t("term_of_services.text_content.link")}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTextContent