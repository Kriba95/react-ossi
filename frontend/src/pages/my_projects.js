import React, { Fragment } from "react";

//import SCSS
import "../scss/custom.scss";

import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import TextEditor from "../components/CKeditor";


let mySQLdata = "Teknisen ja asiakaspalvelu osuuden"



function MyProjects() {
  return (
    <Fragment>
      <Helmet>
        <title>Omat Projektit | Ossi</title>
      </Helmet>
      <Container>
        <h1>Teemapäivät</h1>

        <h1>Tukipyynnöt</h1>
        <h1>Omat projektit</h1>

        <h2>Keskeneräiset</h2>
        <h2>Valmiit</h2>
        <ul id="valmiit">
          <li id="8753">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  {mySQLdata}
                </h2>
              </div>
            </div>
          </li>
          <li id="8753s">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  {mySQLdata}
                </h2>
              </div>
            </div>
          </li>
        </ul>

        <h2>Kuitatut</h2>
        <TextEditor />
      </Container>
    </Fragment>
  );
}

export default MyProjects;
