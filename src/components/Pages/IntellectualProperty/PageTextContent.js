import React from 'react'

const PageTextContent = ({ t }) => {
    return (
        <div className='pageText-content-section'>
            <div className="container">
                <div className="section-inner">
                    <div className="text-content">
                        <p>{t("intellectual_property.text_content.paragraph_1")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTextContent