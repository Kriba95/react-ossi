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
      {/* NavDropdown pitää muokata vielä, sekä scripti ei ole vielä responsiivinen... --
      NavDropdown = <a> ja Link on myös <a> react ei tykkää seuraavasta = <a><a></a></a> <-- eli tähän jatkossa muutosta
       */}
    </>
  );
};

export default Navbars;
