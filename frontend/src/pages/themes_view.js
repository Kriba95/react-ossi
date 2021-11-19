import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function ThemesView() {
  return (
    <Fragment>
      <Helmet>
        <title>ThemesView | Ossi</title>
      </Helmet>

      <Container>
        <div>
          <h1>My ThemesView</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default ThemesView;
