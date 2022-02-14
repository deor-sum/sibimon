import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./../assets/logoBimon.png";
import { FaUser } from "react-icons/fa";
const NavbarMenu = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        sticky="top"
        expand="md"
        className="py-4"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="Sibimon logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">
                <FaUser /> Login / Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
