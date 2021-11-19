import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";
import NavMenu from "../components/Nav";

function ThemeSession() {
  return (
    <Fragment>
      <Helmet>
        <title>ThemeSession | Ossi</title>
      </Helmet>

      <Container>
      <br />
        <NavMenu />
        
        <br />
        <div>
          <h1>My ThemeSession</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default ThemeSession;
