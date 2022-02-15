import React, { useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Logo from "./../assets/logoBimon.png";
import { FaUser } from "react-icons/fa";
import FormLogin from "./FormLogin";

const NavbarMenu = () => {
  const [showLogin, setShowLogin] = useState(false);

  const showLoginForm = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

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
            <Image
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
              <Nav.Link href="/" onClick={showLoginForm}>
                <FaUser /> Login / Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLogin && <FormLogin close={showLoginForm} />}
    </>
  );
};

export default NavbarMenu;
