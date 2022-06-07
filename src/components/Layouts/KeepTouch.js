import React from 'react'

const KeepTouch = ({ t, lang }) => {
    return (
        <div className='keeptouch-section'>
            <div className="container">
                <div className="section-title text-center">
                    <h3 className='title'>Keep In Touch</h3>
                    <p>Don't be a stranger, connect with the community here</p>
                </div>
                <div className="section-inner">
                    <div className="grid-layout">
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-github"></i>
                                </div>
                                <h6>Github</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <h6>Linkedin</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </div>
                                <h6>Tiktok</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M47.73,25.53l14.1-10.31c1.23-1,2.17-.77,2.17,1.09V47.73c0,2.08-1.17,1.85-2.17,1.09L47.73,38.51ZM0,16.38V39.81a9.6,9.6,0,0,0,9.64,9.55H43.81a1.75,1.75,0,0,0,1.75-1.74V24.19a9.59,9.59,0,0,0-9.64-9.54H1.75A1.74,1.74,0,0,0,0,16.38Z" /></svg>
                                </div>
                                <h6>Zoom</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-facebook"></i>
                                </div>
                                <h6>Facebook</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <h6>Youtube</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-twitter"></i>
                                </div>
                                <h6>Twitter</h6>
                            </a>
                        </div>
                        <div className="card-social">
                            <a href='#' className="card-inner" target="_blank">
                                <div className="icon">
                                    <i className="fab fa-telegram"></i>
                                </div>
                                <h6>Telegram</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeepTouch