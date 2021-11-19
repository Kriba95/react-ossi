import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";
import NavMenu from "../components/Nav";

function Harjoittelut() {
  return (
    <Fragment>
      <Helmet>
        <title>Harjoittelujakso | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <NavMenu />
        <br />
        
        <div>
          <h1>My Harjoittelujakso</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default Harjoittelut;
