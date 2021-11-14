import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function Logout() {
  return (
    <Fragment>
      <Helmet>
        <title>Logout | Ossi</title>
      </Helmet>

      <div>
        <h1>My Logout</h1>
      </div>
    </Fragment>
  );
}

export default Logout;
