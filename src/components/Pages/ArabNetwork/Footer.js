import React from 'react'

import LogoWhite from '../../../assets/images/logo-arabnetwork-white-2.svg'

const Footer = () => {
  return (
    <div className='footer-arabnetwork'>
      <div className="container">
        <div className="footer-inner">
          <div className="row align-items-start">
            <div className="col-lg-3 col-md-6">
              <div className="logo">
                <div className="img-inner">
                  <img src={LogoWhite} alt="arab-network-logo" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="information">
                <h4 className="title">Get involved</h4>
                <div className="social-row">
                  <p>Don't be a stranger, connect with the community here</p>
                  <ul className='social-icons-list'>
                    <li><i class="fab fa-twitter-square"></i></li>
                    <li><i class="fab fa-youtube-square"></i></li>
                    <li><i class="fab fa-telegram"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="information">
                <div className="social-row">
                  <p>Read the latest news</p>
                  <ul className='social-icons-list'>
                    <li><i class="fab fa-twitter-square"></i></li>
                  </ul>
                </div>
                <div className="social-row">
                  <p>Follow Arab Network on Twitter</p>
                  <ul className='social-icons-list'>
                    <li><i class="fab fa-twitter-square"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="information no-border">
                <div className="social-row">
                  <p>Participate in open discussion</p>
                  <ul className='social-icons-list'>
                    <ul className='social-icons-list'>
                      <li><i class="fab fa-youtube-square"></i></li>
                      <li><i class="fab fa-telegram"></i></li>
                    </ul>
                  </ul>
                </div>
                <div className="social-row">
                  <p>Join Arab Network's Telegram & YouTube, the largest Arab crypto community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Copyright © 2022 . All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer