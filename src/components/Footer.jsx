import React from "react";
import { Col, Nav, NavLink, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import Kontak from "./Kontak";
const Footer = () => {
  return (
    <>
      <Row className="g-0 bg-dark bg-gradient">
        <Col md={3} className="">
          <Kontak title="Kontak" />
        </Col>
        <Col md={3} className="px-xs-4">
          <Kontak
            title="Luh Tu Selpi Wahyuni,S.Pd"
            contact="( 0812-3743-0478 )"
          />
        </Col>
        <Col md={3}>
          <Kontak title="Luh Eka Ratna Widiari" contact="(0812-3944-5977 )" />
        </Col>
        <Col md={3}>
          <Kontak
            title="Email"
            contact="bimonsingaraja@gmail.com"
            icon={<FaEnvelope />}
          />
        </Col>
        <div className="hr"></div>
        <Col xs={12} md={12}>
          <Nav className="justify-content-center py-3">
            <NavLink href="/">
              <IconContext.Provider value={{ className: "footer-icons" }}>
                <FaInstagram />
              </IconContext.Provider>
            </NavLink>
            <NavLink href="/">
              <IconContext.Provider value={{ className: "footer-icons" }}>
                <FaFacebook />
              </IconContext.Provider>
            </NavLink>
          </Nav>
          <p className="text-white">
            Copyright © 2021 Sibimon Singaraja. All RIghts Reserved.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
