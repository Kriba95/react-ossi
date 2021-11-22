import React from "react";

// React Assets
import { Nav } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom"; // Changes NavLink to shorter to "Link"

// Custom Style CSS
// import { NavMenu } from "./NavbarStyle";

// Assets

// Scripts

const NavMenu = () => {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/">

        <Link className="nav-link" to="/forstudent/my_projects">Projektit</Link>
        <Link className="nav-link" to="/forstudent/my_studies">Opinnot</Link>
        <Link className="nav-link" to="/opettaja_tila">Opettajien tilat</Link>
        <Link className="nav-link" to="/theme_session/theme_session">Teemapäivät</Link>
        <Link className="nav-link" to="/harjoittelut">Harjoittelujaksot</Link>
        <Link className="nav-link" to="/search">Hae</Link>

      </Nav>
    </>
  );
};

export default NavMenu;
