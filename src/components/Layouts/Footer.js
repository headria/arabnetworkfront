import React from 'react'

import LogoWhite from '../../assets/images/logo-arabnetwork-white-2.svg'
import LogoBlack from '../../assets/images/logo-arabnetwork-dark-2.svg'

import { t } from "i18next";
import { Link } from 'react-router-dom';

const Footer = ({ darkMode, lang }) => {
  return (
    <div className={`footer ${lang ? "area-rtl" : ""}`}>
      <div className="container">
        <div className="footer-inner">
          <div className="row align-items-start">
            <div className="col-lg-3 col-md-6">
              <div className="logo">
                <div className="img-inner">
                  {darkMode ? (
                    <img src={LogoWhite} alt="" />
                  ) : (
                    <img src={LogoBlack} alt="" />
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="information">
                <h4 className="title">{t('footer.get_involve.title')}</h4>
                <div className="social-row">
                  <p>{t('footer.get_involve.desc')}</p>
                  <ul className='social-icons-list'>
                    <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                    <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="information">
                <div className="social-row">
                  <p>{t('footer.read_last')}</p>
                  <ul className='social-icons-list'>
                    <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                  </ul>
                </div>
                <div className="social-row">
                  <p>{t('footer.follow')}</p>
                  <ul className='social-icons-list'>
                    <li><a href='#' target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="information no-borders">
                <div className="social-row">
                  <p>{t('footer.discussion')}</p>
                  <ul className='social-icons-list'>
                    <ul className='social-icons-list'>
                      <li><a href='#' target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                      <li><a href='#' target="_blank"><i className="fab fa-telegram"></i></a></li>
                    </ul>
                  </ul>
                </div>
                <div className="social-row">
                  <p>{t('footer.join')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="links">
                <ul>
                  <li><Link to="">{t("menus.privacy")}</Link></li>
                  <li><Link to="">{t("menus.term")}</Link></li>
                  <li><Link to="">{t("menus.intellectual_property_rights")}</Link></li>
                  <li><Link to="">{t("menus.trademarks")}</Link></li>
                  <li><Link to="">{t("menus.prohibited_uses")}</Link></li>
                  <li><Link to="">{t("menus.entire_agreement")}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">{t('footer.copyright')}</div>
      </div>
    </div>
  )
}

export default Footer