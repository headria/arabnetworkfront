import React, { useState } from "react";
import InputGroup from "../../Layouts/Input";
import Textarea from "../../Layouts/Textarea";

const FormContact = ({ t, lang }) => {
  const [showForm, setShowForm] = useState(false);

  const handleChangeForm = (value) => {
    const v = parseInt(value);
    if (v === 0) setShowForm(false);
    if (v === 3) setShowForm(true);
  };

  return (
    <div className={`formsgroup-section ${lang ? "area-rtl" : ""}`}>
      <div className="container">
        <div className="section-inner">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-content">
                <h6>{t("contact.form_group.title")} ........</h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="forms-group">
                {!showForm ? (
                  <div className="form-inner">
                    <form action="">
                      <div className="row">
                        <div className="col-lg-12">
                          <InputGroup
                            type="email"
                            title={t("contact.form_group.form_contact.email")}
                            placeholder="example@email.com"
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-6">
                          <InputGroup
                            type="text"
                            title={t(
                              "contact.form_group.form_contact.first_name"
                            )}
                            placeholder=""
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-6">
                          <InputGroup
                            type="text"
                            title={t(
                              "contact.form_group.form_contact.last_name"
                            )}
                            placeholder=""
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-12">
                          <InputGroup
                            type="text"
                            title={t(
                              "contact.form_group.form_contact.company_name"
                            )}
                            placeholder=""
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className={`selectgroup mb-4 ${lang ? "rtl" : ""}`}>
                            <select
                              className="form-select"
                              onChange={(e) => handleChangeForm(e.target.value)}
                            >
                              <option defaultValue disabled>
                                {t("contact.form_group.form_contact.select.default_select")}
                              </option>
                              <option value={0}>
                                {t("contact.form_group.form_contact.select.option_1")}
                              </option>
                              <option value={1}>
                                {t("contact.form_group.form_contact.select.option_2")}
                              </option>
                              <option value={2}>
                                {t("contact.form_group.form_contact.select.option_3")}
                              </option>
                              <option value={3}>
                                {t("contact.form_group.form_contact.select.option_4")}
                              </option>
                              <option value={4}>
                                {t("contact.form_group.form_contact.select.option_5")}
                              </option>
                              <option value={5}>
                                {t("contact.form_group.form_contact.select.option_6")}
                              </option>
                              <option value={6}>
                                {t("contact.form_group.form_contact.select.option_7")}
                              </option>
                              <option value={7}>
                                {t("contact.form_group.form_contact.select.option_8")}
                              </option>
                              <option value={8}>
                                {t("contact.form_group.form_contact.select.option_9")}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t("contact.form_group.form_contact.message")}
                            rows="6"
                            placeholder={t(
                              "contact.form_group.form_contact.message_placeholder"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="buttons-group">
                            <button
                              type="submit"
                              className="btn btn-primary-dark"
                            >
                              {t("contact.form_group.form_contact.btn_send")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="form-inner">
                    <div className="form-header">
                      {t("contact.form_group.form_grant.header_title")}
                    </div>
                    <div className="form-title">
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleChangeForm(0)}
                      >
                        <i className="fas fa-long-arrow-left"></i>
                        {t("contact.form_group.form_grant.btn_return")}
                      </button>
                      <h1>{t("contact.form_group.form_grant.title")}</h1>
                      <p>{t("contact.form_group.form_grant.desc")}</p>
                    </div>
                    <form action="">
                      <div className="row">
                        <div className="col-lg-6">
                          <InputGroup
                            type="text"
                            title={t(
                              "contact.form_group.form_grant.project_name"
                            )}
                            placeholder=""
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-6">
                          <InputGroup
                            type="email"
                            title={t("contact.form_group.form_grant.email")}
                            placeholder="example@email.com"
                            mb="mb-4"
                          />
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t(
                              "contact.form_group.form_grant.project_description"
                            )}
                            rows="4"
                            mb="mb-4"
                            placeholder={t(
                              "contact.form_group.form_grant.project_description_desc"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t(
                              "contact.form_group.form_grant.team_information"
                            )}
                            rows="4"
                            mb="mb-4"
                            placeholder={t(
                              "contact.form_group.form_grant.team_information_desc"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t(
                              "contact.form_group.form_grant.project_impact"
                            )}
                            rows="4"
                            mb="mb-4"
                            placeholder={t(
                              "contact.form_group.form_grant.project_impact_desc"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t(
                              "contact.form_group.form_grant.needs_and_challenges"
                            )}
                            rows="4"
                            mb="mb-4"
                            placeholder={t(
                              "contact.form_group.form_grant.needs_and_challenges_desc"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <Textarea
                            title={t(
                              "contact.form_group.form_grant.previous_work"
                            )}
                            rows="4"
                            mb="mb-4"
                            placeholder={t(
                              "contact.form_group.form_grant.previous_work_desc"
                            )}
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="buttons-group">
                            <button
                              type="submit"
                              className="btn btn-primary-dark"
                            >
                              {t("contact.form_group.form_grant.btn_send")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
