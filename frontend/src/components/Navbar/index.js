import React from "react";

// React Assets
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom"; // Changes NavLink to shorter to Link

// Custom Style CSS
import { NavMenu } from "./NavbarStyle";

// Assets
import logo from "../../assets/images/it-velhot.png";


// Scripts 
let loggedInUser = "Opiskelijan(nimi)"

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <img
              src={logo}
              width="15%"
              height="15%"
              className="navbar-brand"
              alt="React Bootstrap logo"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavMenu>
                <Link title={loggedInUser} className="nav-link" to="/selaa_ohje">
                  Ohjeita
                </Link>
                <Link className="nav-link" to="/my_projects">
                  Omat_projektit
                </Link>
                <Link className="nav-link" to="/my_studies">
                  Omat_opinnot
                </Link>
                <Link className="nav-link" to="/worklog">
                  Työnajanseuranta
                </Link>
              </NavMenu>

              <NavDropdown title="Teempapäivät" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/themes/view">Selaa teemapäiviä</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/theme_session/theme_session">
                    Selaa teemapäivä ilmoituksia
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Opiskelijan(nimi)" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/">Etusivu</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/profile">Profiili</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link to="/logout">Kirjaudu ulos</Link>
                <br />
                <Link to="/login">Kirjaudu sisään</Link>
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
