import React, { Fragment } from "react";

// Helmet HTML content
import { Helmet } from "react-helmet";

// Bootstrap
import { Container, Row } from "react-bootstrap";

function Login() {
  return (
    <Fragment>
      <Helmet>
        <title>Login | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <div class="col-md-6 hidden-sm hidden-xs">
            <img
              style={{
                verticalAlign: "middle",
                display: "block",
                maxWidth: "100%",
              }}
              class="img-responsive"
              src="https://ossi.esedu.fi/assets/images/ossi-yay.png"
              alt="OSSI-Logo"
            />
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div style={{ textAlign: "center" }} className="logo">
              <img
                style={{
                  width: "100%",
                  maxWidth: "400px",
                }}
                src="https://ossi.esedu.fi/assets/images/ossi-logo.png"
                alt="OSSI-Logo"
              />
            </div>

            <form className="form-signin">
              <div className="form-group form-group-lg">
                <label for="inputEmail" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  name="inputEmail"
                  className="form-control top"
                  placeholder="etunimi.sukunimi@esedulainen.fi"
                  required=""
                  autofocus=""
                />
              </div>
              <div className="form-group form-group-lg">
                <label for="inputPassword" className="sr-only">
                  Salasana
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  name="inputPassword"
                  className="form-control bottom"
                  placeholder="salasanasi"
                  required=""
                />
              </div>
              <button
                style={{
                  backgroundColor: "#3C8D2F",
                  color: "#ddd",
                }}
                className="login-btn btn btn-lg btn-block"
                type="submit"
              >
                Kirjaudu
              </button>
              <div className="pull-right">
                <a href="https://ossi.esedu.fi/security/resethandler/show_forgot_password">
                  Salasana unohtui
                </a>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Login;
