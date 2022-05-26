import React from 'react'

const PageHero = ({ title, desc, haveSocialIcons, halfSize, lang }) => {
    return (
        <>
            <div className={`pagehero-section ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            <div className={`${halfSize ? "col-lg-6" : "col-lg-8"}`}>
                                <h1 className='title'>{title}</h1>
                                <p className='desc'>{desc}</p>
                                {
                                    haveSocialIcons ? (
                                        <ul className='social-icons-list'>
                                            <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                                            <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                                            <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                                        </ul>
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHero