import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function Logout() {
  return (
    <Fragment>
      <Helmet>
        <title>Logout | Ossi</title>
      </Helmet>

      <Container>
        <div>
          <h1>My Logout</h1>
        </div>
      </Container>
    </Fragment>
  );
}

export default Logout;
