import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";
import NavMenu from "../components/Nav";
import Haku from "../components/Haku";

function Search() {
  return (
    <Fragment>
      <Helmet> 
        <title>Tarkkahaku | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <NavMenu />
        <br />
        
        <div>
          <h1>Hae Ossista</h1>
          <Haku />
        </div>
      </Container>
    </Fragment>
  );
}

export default Search;
