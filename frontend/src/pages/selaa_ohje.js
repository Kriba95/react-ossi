import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function SelaaOhje() {
  return (
    <Fragment>
      <Helmet>
        <title>Ohjeita | Ossi</title>
      </Helmet>

      <Container>
        <div>
          <h1>My SelaaOhje</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default SelaaOhje;
