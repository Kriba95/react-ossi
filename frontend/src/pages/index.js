import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Etusivu</title>
      </Helmet>

      <Container>
        <div>
          <h1>My Etusivu</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
