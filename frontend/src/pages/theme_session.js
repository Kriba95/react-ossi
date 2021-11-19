import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function ThemeSession() {
  return (
    <Fragment>
      <Helmet>
        <title>ThemeSession | Ossi</title>
      </Helmet>

      <Container>
        <div>
          <h1>My ThemeSession</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default ThemeSession;
