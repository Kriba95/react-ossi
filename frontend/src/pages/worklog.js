import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";

function Worklog() {
  return (
    <Fragment>
      <Helmet>
        <title>Worklog | Ossi</title>
      </Helmet>

      <Container>
        <div>
          <h1>My Worklog</h1>
        </div>
      </Container>

      
    </Fragment>
  );
}

export default Worklog;
