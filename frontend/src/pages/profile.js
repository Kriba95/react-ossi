import React, { Fragment } from "react";





// Helmet HTML content
import { Helmet } from "react-helmet";

// Bootstrap
import { Container, Row } from "react-bootstrap";

// Components & Elements
// import RichTextEditor from "../components/RichTextEditor/index";

function Profile() {
  return (
    
    <Fragment>
      <Helmet>
        <title>Minun Profiili | Ossi</title>
      </Helmet>

      <Container>
        <Row>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1>Muokkaa profiilia</h1>
            </div>

            <form method="post" action="https://ossi.esedu.fi/profile/update/">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label for="nick_name" className=" control-label">
                    Kutsumanimi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nick_name"
                    id="nick_name"
                    placeholder="Kutsumanimi"
                    value="Kristian"
                  />
                </div>
                <div className="form-group">
                  <label for="first_name" className="control-label">
                    Etunimi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="Etunimi"
                    value="Kristian"
                  />
                </div>
                <div className="form-group">
                  <label for="last_name" className="control-label">
                    Sukunimi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="Sukunimi"
                    value="Töllikkö"
                  />
                </div>
                <div className="form-group">
                  <label for="discord_id" className="control-label">
                    Discord ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="discord_id"
                    id="discord_id"
                    placeholder="Discord ID"
                    value=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label for="user_info">Esittely</label>
                  <div
                    id="mceu_16"
                    className="mce-tinymce mce-container mce-panel"
                    hidefocus="1"
                    tabindex="-1"
                    role="application"
                    style={{visibility: "hidden", borderWidth: "1px", width: "100%"}}
                  >
                    <div
                      id="mceu_16-body"
                      className="mce-container-body mce-stack-layout"
                    >
                      <div
                        id="mceu_17"
                        className="mce-top-part mce-container mce-stack-layout-item mce-first"
                      >
                        <div id="mceu_17-body" className="mce-container-body">
                          <div
                            id="mceu_18"
                            className="mce-toolbar-grp mce-container mce-panel mce-first mce-last"
                            hidefocus="1"
                            tabindex="-1"
                            role="group"
                          >
                            <div
                              id="mceu_18-body"
                              className="mce-container-body mce-stack-layout"
                            >
                              <div
                                id="mceu_19"
                                className="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last"
                                role="toolbar"
                              >
                                <div
                                  id="mceu_19-body"
                                  className="mce-container-body mce-flow-layout"
                                >
                                  <div
                                    id="mceu_20"
                                    className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_20-body">
                                      <div
                                        id="mceu_0"
                                        className="mce-widget mce-btn mce-first mce-disabled"
                                        tabindex="-1"
                                        role="button"
                                        aria-label="Undo"
                                        aria-disabled="true"
                                      >
                                        <button
                                          id="mceu_0-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-undo"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_1"
                                        className="mce-widget mce-btn mce-last mce-disabled"
                                        tabindex="-1"
                                        role="button"
                                        aria-label="Redo"
                                        aria-disabled="true"
                                      >
                                        <button
                                          id="mceu_1-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-redo"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_21"
                                    className="mce-container mce-flow-layout-item mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_21-body">
                                      <div
                                        id="mceu_2"
                                        className="mce-widget mce-btn mce-menubtn mce-first mce-last"
                                        tabindex="-1"
                                        aria-labelledby="mceu_2"
                                        role="button"
                                        aria-haspopup="true"
                                      >
                                        <button
                                          id="mceu_2-open"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-insert"></i>{" "}
                                          <i className="mce-caret"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_22"
                                    className="mce-container mce-flow-layout-item mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_22-body">
                                      <div
                                        id="mceu_3"
                                        className="mce-widget mce-btn mce-menubtn mce-first mce-last mce-btn-has-text"
                                        tabindex="-1"
                                        aria-labelledby="mceu_3"
                                        role="button"
                                        aria-haspopup="true"
                                      >
                                        <button
                                          id="mceu_3-open"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <span className="mce-txt">Formats</span>{" "}
                                          <i className="mce-caret"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_23"
                                    className="mce-container mce-flow-layout-item mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_23-body">
                                      <div
                                        id="mceu_4"
                                        className="mce-widget mce-btn mce-first"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Bold"
                                      >
                                        <button
                                          id="mceu_4-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-bold"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_5"
                                        className="mce-widget mce-btn mce-last"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Italic"
                                      >
                                        <button
                                          id="mceu_5-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-italic"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_24"
                                    className="mce-container mce-flow-layout-item mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_24-body">
                                      <div
                                        id="mceu_6"
                                        className="mce-widget mce-btn mce-first"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align left"
                                      >
                                        <button
                                          id="mceu_6-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-alignleft"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_7"
                                        className="mce-widget mce-btn"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align center"
                                      >
                                        <button
                                          id="mceu_7-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-aligncenter"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_8"
                                        className="mce-widget mce-btn"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align right"
                                      >
                                        <button
                                          id="mceu_8-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-alignright"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_9"
                                        className="mce-widget mce-btn mce-last"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Justify"
                                      >
                                        <button
                                          id="mceu_9-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-alignjustify"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_25"
                                    className="mce-container mce-flow-layout-item mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_25-body">
                                      <div
                                        id="mceu_10"
                                        className="mce-widget mce-btn mce-splitbtn mce-menubtn mce-first"
                                        role="button"
                                        aria-pressed="false"
                                        tabindex="-1"
                                        aria-label="Bullet list"
                                        aria-haspopup="true"
                                      >
                                        <button
                                          type="button"
                                          hidefocus="1"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-bullist"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="mce-open"
                                          hidefocus="1"
                                          tabindex="-1"
                                        >
                                          {" "}
                                          <i className="mce-caret"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_11"
                                        className="mce-widget mce-btn mce-splitbtn mce-menubtn"
                                        role="button"
                                        aria-pressed="false"
                                        tabindex="-1"
                                        aria-label="Numbered list"
                                        aria-haspopup="true"
                                      >
                                        <button
                                          type="button"
                                          hidefocus="1"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-numlist"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="mce-open"
                                          hidefocus="1"
                                          tabindex="-1"
                                        >
                                          {" "}
                                          <i className="mce-caret"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_12"
                                        className="mce-widget mce-btn"
                                        tabindex="-1"
                                        role="button"
                                        aria-label="Decrease indent"
                                      >
                                        <button
                                          id="mceu_12-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-outdent"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_13"
                                        className="mce-widget mce-btn mce-last"
                                        tabindex="-1"
                                        role="button"
                                        aria-label="Increase indent"
                                      >
                                        <button
                                          id="mceu_13-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-indent"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="mceu_26"
                                    className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_26-body">
                                      <div
                                        id="mceu_14"
                                        className="mce-widget mce-btn mce-first"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Insert/edit link"
                                      >
                                        <button
                                          id="mceu_14-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-link"></i>
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_15"
                                        className="mce-widget mce-btn mce-last"
                                        tabindex="-1"
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Insert/edit image"
                                      >
                                        <button
                                          id="mceu_15-button"
                                          role="presentation"
                                          type="button"
                                          tabindex="-1"
                                        >
                                          <i className="mce-ico mce-i-image"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="mceu_27"
                        className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                        hidefocus="1"
                        tabindex="-1"
                        role="group"
                        style={{borderWidth: "1px 0px 0px"}}
                      >
                        <iframe
                          id="user_info_ifr"
                          frameborder="0"
                          allowtransparency="true"
                          title="Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"
                          style={{width:"100%", height: "200px", display: "block"}}
                        ></iframe>
                      </div>
                      <div
                        id="mceu_28"
                        className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                        hidefocus="1"
                        tabindex="-1"
                        role="group"
                        style={{borderWidth: "1px 0px 0px"}}
                      >
                        <div
                          id="mceu_28-body"
                          className="mce-container-body mce-flow-layout"
                        >
                          <div
                            id="mceu_29"
                            className="mce-path mce-flow-layout-item mce-first"
                          >
                            <div className="mce-path-item">&nbsp;</div>
                          </div>
                          <div
                            id="mceu_30"
                            className="mce-flow-layout-item mce-resizehandle"
                          >
                            <i className="mce-ico mce-i-resize"></i>
                          </div>
                          <span
                            id="mceu_31"
                            className="mce-branding mce-widget mce-label mce-flow-layout-item mce-last"
                          >
                           
                            <a
                              href="https://www.tinymce.com/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce"
                              rel="noreferrer"
                              target="_blank"
                              role="presentation"
                              tabindex="-1"
                            >
                              tinymce
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    type="text"
                    name="user_info"
                    id="user_info"
                    placeholder="Kirjoita itsestäsi tähän jotain :3"
                    className="form-control editable"
                    style={{display: "none"}}
                    aria-hidden="true"
                  >
                    {" "}
                  </textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <button className="btn btn-lg btn-info pull-right" type="submit">
                    Tallenna muutokset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Row>
        <div>
          <h1>Muokkaa profiilia</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default Profile;
