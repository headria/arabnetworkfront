import React from 'react'
import { Link } from 'react-router-dom'

const PageTextContent = ({ t }) => {
    return (
        <div className='pageText-content-section'>
            <div className="container">
                <div className="section-inner">
                    <div className="text-content">
                        <p>{t("entire_agreement.text_content.paragraph_1")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTextContent