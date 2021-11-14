import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function Profile() {
  return (
    <Fragment>
      <Helmet>
        <title>Minun Profiili | Ossi</title>
      </Helmet>

      <div>
        <h1>My Profile</h1>
      </div>
    </Fragment>
  );
}

export default Profile;
