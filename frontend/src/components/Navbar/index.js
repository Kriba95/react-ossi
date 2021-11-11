import React from "react";
import { NavLink, NavMenu } from "./NavbarStyle";
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";

// Assets
import logo from "../../assets/images/it-velhot.png";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink to="/">
            <img
              src={logo}
              width="15%"
              height="15%"
              className="navbar-brand"
              alt="React Bootstrap logo"
            />
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavMenu>
                <NavLink className="nav-link" to="/selaa_ohje">
                  Ohjeita
                </NavLink>
                <NavLink className="nav-link" to="/my_projects">
                  Omat Projektit
                </NavLink>
                <NavLink className="nav-link" to="/my_studies">
                  Omat opinnot
                </NavLink>
                <NavLink className="nav-link" to="/worklog">
                  Työnajanseuranta
                </NavLink>
              </NavMenu>

              <NavDropdown title="Teempapäivät" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/themes/view">Selaa teemapäiviä</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <NavLink to="/theme_session/theme_session">
                    Selaa teemapäivä ilmoituksia
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Opiskelijan(nimi)" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/">Etusivu</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/profile">Profiili</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavLink to="/logout">Kirjaudu ulos</NavLink>
                <br />
                <NavLink to="/login">Kirjaudu sisään</NavLink>
                <br />
                (Kirjaudu sisään Linkki poistetaan käytöstä tästä näkymästä)
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <img
              src={logo}
              width="15%"
              height="15%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>

          <NavMenu>
            <NavLink to="/selaa_ohje">Ohjeita</NavLink>
            <NavLink to="/my_projects">Omat Projektit</NavLink>
            <NavLink to="/my_studies">Omat opinnot</NavLink>
            <NavLink to="/worklog">Työnajanseuranta</NavLink>
            <NavLink to="/worklog">Teemapäivät</NavLink>
          </NavMenu>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Kirjautunut: <a href="#login">Opsikelija</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <NavMenu>
          <NavLink to="/selaa_ohje">Ohjeita</NavLink>
          <NavLink to="/my_projects">Omat Projektit</NavLink>
          <NavLink to="/my_studies">Omat opinnot</NavLink>
          <NavLink to="/worklog">Työnajanseuranta</NavLink>
        </NavMenu>
      </Nav> */}
    </>
  );
};

export default Navbars;
