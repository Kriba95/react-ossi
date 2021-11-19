import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";
import NavMenu from "../components/Nav";

function OpettajanTilat() {
  return (
    <Fragment>
      <Helmet>
        <title>Opettajan Tilat | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <NavMenu />
        
        <br />
        <div>
          <h1>Opettajan Tilat </h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default OpettajanTilat;
