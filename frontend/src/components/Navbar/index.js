import React from "react";

// React Assets
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom"; // Changes NavLink to shorter to Link

// Custom Styled component -- CSS
// import { Search } from "./NavbarStyle";

// Custom CSS
import "./Navbar.scss";

// Assets
import logo from "../../assets/images/it-velhot.png";

// Scripts
let loggedInUser = "Opiskelijan(nimi)";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <img
              src={logo}
              width="%"
              height="50"
              className="navbar-brand"
              alt="React Bootstrap logo"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link title={loggedInUser} className="nav-link" to="/selaa_ohje">Ohjeita</Link>

              <Link className="nav-link" to="/forstudent/my_projects">Omat projektit</Link>
              <Link className="nav-link" to="/forstudent/my_studies">Omat opinnot</Link>
              <Link className="nav-link" to="/worklog">Työnajanseuranta</Link>

              <NavDropdown title="Teempapäivät" id="basic-nav-dropdown">
                <Link className="dropdown-item" role="button" tabIndex="0" to="/themes/view">
                  Selaa teemapäiviä
                </Link>
                <Link className="dropdown-item" role="button" tabIndex="0" to="/theme_session/theme_session">
                  Selaa teemapäivä ilmoituksia
                </Link>
              </NavDropdown>

              <NavDropdown title="Opiskelijan(nimi)" id="basic-nav-dropdown">
                
                  <Link className="dropdown-item" role="button" tabIndex="0" to="/">Etusivu</Link>
                  <Link className="dropdown-item" role="button" tabIndex="0" to="/profile">Profiili</Link>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" role="button" tabIndex="0" to="/logout">Kirjaudu ulos</Link>
                  <Link className="dropdown-item" role="button" tabIndex="0" to="/login">Kirjaudu sisään</Link>
                  (Kirjaudu sisään Linkki poistetaan käytöstä tästä näkymästä)
              </NavDropdown>

              <div className="search">
                <input type="text" className="search__input" aria-label="search" placeholder="Hae..." />
                <button className="search__submit" aria-label="submit search"><i className="fas fa-search"></i></button>
              </div>
{/* 
              <Search>
                <input className="search_input" type="text" name="" placeholder="Search here..." />              
                <a className="search_icon">
                  <i className="fa fa-search"></i>
                </a> 
              </Search> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* NavDropdown pitää CSS tyylitellä vielä, 
         
       */}
    </>
  );
};

export default Navbars;
