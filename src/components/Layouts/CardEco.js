import React from 'react'

import cardImage1 from '../../assets/images/ecosystem-1.png'

export const CardEco = ({ t }) => {
    return (
        <div className="card-ecosystem">
            <a href='https://arabgatewallet.com' target="_blank" className="card-inner">
                <div className="thumb">
                    <img src={cardImage1} alt="eco-img" />
                </div>
                <div className="info">
                    <h1>{t('ecosystem.cards_ecosystem_list.card_arabgate.title')}</h1>
                    <p>{t('ecosystem.cards_ecosystem_list.card_arabgate.desc')}</p>
                </div>
            </a>
        </div>
    )
}
