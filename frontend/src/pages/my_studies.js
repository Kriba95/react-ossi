import React, { Fragment } from "react";

import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import NavMenu from "../components/Nav";

let STT = "9";

function MyStudies() {
  return (
    <Fragment>
      <Helmet>
        <title>Omat Opinnot | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <NavMenu />
        <br />

        <h1>Omat Opinnot</h1>
        <p>Suoritettavia tutkinnonosia tällähetkellä {STT}</p>

        <Row>
          <div className="col-lg-9 col-md-9 col-sm-12 my-studies">
            <h2 className="tutkinnonosa-header">
              Palvelutehtävissä toimiminen
            </h2>

            <dl>
              <dt>Osaamisia yhteensä:{"21"} </dt>
              <dt>
                <span className="color done-color"></span>Osaamisia saavutettu:{"1"}
              </dt>
              <dt>
                <span className="color unfinished-color"></span>Aloitettu:{"2"}
              </dt>
              <dt>
                <span className="color notstarted-color"></span>Aloittamatta:{"3"}
              </dt>
            </dl>
          </div>
        </Row>
      </Container>


    


    </Fragment>
  );
}

export default MyStudies;
