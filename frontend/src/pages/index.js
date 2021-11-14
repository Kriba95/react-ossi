import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Etusivu</title>
      </Helmet>

      <div>
        <h1>My Etusivu</h1>
      </div>
    </Fragment>
  );
}

export default Home;
