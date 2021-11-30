import React, { Fragment, useState } from "react";

//import SCSS
import "../scss/custom.scss";

import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import TextEditor from "../components/CKeditor";
import NavMenu from "../components/Nav";

let mySQLdata = "Teknisen ja asiakaspalvelu osuuden";


// const panel = {
//   panel: 'display: none',

// };

function MyProjects() {
  const [display, setDisplay] = useState('panel-body show');

  let setdisplay = "show"


    if(display === "panel-body show"){
      setdisplay = "panel-body none";
      console.log(setdisplay);
    } else if (display === "panel-body none") {
      setdisplay = "panel-body show";
      console.log(setdisplay); 
    }
    console.log(setDisplay);




  

  return (
    <Fragment>
      <Helmet>
        <title>Omat Projektit | Ossi</title>
      </Helmet>
      <Container>
        <br />
        <NavMenu />
        <br />

        <h1>Teemapäivät</h1>

        <h1>Tukipyynnöt</h1>
        <h1>Omat projektit</h1>

        <h2>Keskeneräiset</h2>

        <div className="col-lg-12">
          <h2>Valmiit</h2>

          <ul id="valmiit" style={{ listStyleType: "none", margin: "0" }}>
            <li
              id="8753"
              style={{
                display: "list-item",
                TextAlign: "-webkit-match-parent",
              }}
            >
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title">{mySQLdata}</h2>
                </div>


                <button onClick={() => setDisplay()}>Paina</button>
                <div className={display} >
                  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                  <a
                    style={{ float: "right" }}
                    className="btn btn-warning"
                    href="https://ossi.esedu.fi/projects/support_request/36"
                  >
                    Tee tukipyyntö
                  </a>
                  <a
                    style={{ float: "right" }}
                    target="_new"
                    className="btn btn-info"
                    href="https://ossi.esedu.fi/projects/details/36"
                  >
                    Avaa projektin kuvaus
                  </a>
                  <Row>
                    <Col>
                      <span>
                        <b>ID: </b>
                      </span>
                      <span>36</span>
                      <span>
                        <b> Aloitettu:</b>
                      </span>{" "}
                      <span>9.8.2021</span>
                      <span>
                        <b> Deadline:</b>
                      </span>{" "}
                      <span className="huomio-triangle">13.8.2021</span>
                      <br />
                      <br />
                    </Col>
                  </Row>

                  <h3>Suunnitelma</h3>
                  <div
                    className="editable mce-content-body"
                    data-target="plan"
                    data-id="8456"
                    id="mce_7"
                    contenteditable="true"
                    spellcheck="false"
                    style={{ position: "relative" }}
                  >
                    <p>
                      <br data-mce-bogus="1" />
                      <TextEditor />
                    </p>
                  </div>

                  <h3>Raportti</h3>
                  <div
                    className="editable mce-content-body"
                    data-id="8456"
                    data-target="report"
                    id="mce_8"
                    contenteditable="true"
                    spellcheck="false"
                    style={{ position: "relative" }}
                  >
                    <p>
                      <br data-mce-bogus="1" />
                      <TextEditor />
                    </p>
                  </div>

                  <h3>Työajanseuranta</h3>
                  <div className="project-worklog-div table-responsive">
                    <table className="table table-striped table-bordered worklog-table">
                      <thead>
                        <tr>
                          <th>pvm</th>
                          <th>aloitus klo</th>
                          <th>lopetus klo</th>
                          <th>kesto</th>
                          <th>kuvaus</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="add-work-form">
                          <form className="add-work" name="add-work"></form>
                          <input type="hidden" name="id" value="8456" />
                          <input type="hidden" name="uid" value="1250" />
                          <td>
                            <input
                              type="date"
                              name="pvm"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="time"
                              name="aloitus"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="time"
                              name="lopetus"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="hidden"
                              name="kesto"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="kuvaus"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-block btn-primary add-worklog-row-btn"
                              type="submit"
                            >
                              Lisää
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Kuittaa projekti valmiiksi:</h3>
                  <div className="form-group form-inline">
                    <Row>
                      <Col>
                        <input
                          className="form-control"
                          style={{ width: "30%" }}
                          type="date"
                          value="2021-11-25"
                        />
               
                      </Col>
                      <Col>
                      <span
                          data-id="8456"
                          data-projektiid="36"
                          className="btn btn-primary kuittaa"
                        >
                          Kuittaa projekti valmiiksi
                        </span></Col> 
                    </Row>
                  </div>

                  <h3>
                    Osaamiset{" "}
                    <span
                      className="project-skills-btn btn btn-info"
                      data-id="1250"
                      data-projectid="36"
                    >
                      Projektiin liittyvät osaamiset
                    </span>
                  </h3>
                  <div id="project-skills-table-36" data-id="36"></div>

                  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <h2>Kuitatut</h2>
        <TextEditor />
      </Container>
    </Fragment>
  );
}

export default MyProjects;
