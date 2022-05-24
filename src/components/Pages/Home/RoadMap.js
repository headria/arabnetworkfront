import React from 'react'

const RoadMap = ({ t, lang }) => {
    return (
        <>
            <div className={`roadmap-section pt-60 pb-100 ${lang ? "area-rtl" : ""}`}>
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className='title'><span>{t('roadmap.title')}</span> {t('roadmap.title_span')}</h3>
                    </div>
                    <div className="section-inner mt-80">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="column-roadmap">
                                    <ul className='date-list'>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q2_2020.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q2_2020.desc")}</div>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q4_2020.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q4_2020.desc")}</div>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q4_2021.title")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.q4_2021.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.q4_2021.ul.li_2")}</li>
                                                <li>{t("roadmap.road_list.q4_2021.ul.li_3")}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q1_p1_2022.title")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.q1_p1_2022.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.q1_p1_2022.ul.li_2")}</li>
                                                <li>{t("roadmap.road_list.q1_p1_2022.ul.li_3")}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.arab_wallet_app.title")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.arab_wallet_app.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.arab_wallet_app.ul.li_2")}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="column-roadmap">
                                    <ul className='date-list'>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q1_p2_2022.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q1_p2_2022.desc")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.q1_p2_2022.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.q1_p2_2022.ul.li_2")}</li>
                                                <li>{t("roadmap.road_list.q1_p2_2022.ul.li_3")}</li>
                                                <li>{t("roadmap.road_list.q1_p2_2022.ul.li_4")}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q1_p3_2022.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q1_p3_2022.desc")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.q1_p3_2022.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.q1_p3_2022.ul.li_2")}</li>
                                                <li>{t("roadmap.road_list.q1_p3_2022.ul.li_3")}</li>
                                                <li>{t("roadmap.road_list.q1_p3_2022.ul.li_4")}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q4_p1_2022.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q4_p1_2022.desc_1")}</div>
                                            <ul className='d-list'>
                                                <li>{t("roadmap.road_list.q4_p1_2022.ul.li_1")}</li>
                                                <li>{t("roadmap.road_list.q4_p1_2022.ul.li_2")}</li>
                                            </ul>
                                            <div className="desc">{t("roadmap.road_list.q4_p1_2022.desc_2")}</div>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q4_p2_2022.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q4_p2_2022.desc")}</div>
                                        </li>
                                        <li>
                                            <div className="name">{t("roadmap.road_list.q2_2023.title")}</div>
                                            <div className="desc">{t("roadmap.road_list.q2_2023.desc")}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadMap