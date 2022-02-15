import React from "react";
import { Figure, Image } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import Logo from "./../assets/logoBimonWh.png";

const Kontak = ({ title, contact, icon }) => {
  return (
    <>
      <Figure className="py-3 py-md-5 text-start float-start px-4">
        <p className="fw-bolder fs-5 text-warning">{title}</p>
        {contact ? (
          <Figure.Caption className="text-white">
            {icon ? icon : <FaPhone />} {contact}
          </Figure.Caption>
        ) : (
          <Image src={Logo} width="auto" height={40} />
        )}
      </Figure>
    </>
  );
};

export default Kontak;
