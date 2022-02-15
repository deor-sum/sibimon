import React from "react";
import { Card, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FaUserCheck, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons";
const RegisterCard = ({ icon, title, desc, delay }) => {
  const IconMap = [<FaUserCheck />, <FaShoppingCart />, <FaTrophy />];

  return (
    <>
      <Col md={4}>
        <Zoom delay={delay}>
          <Card className="mx-4 mb-4 register-card">
            <div className="card-icon mx-auto">
              <IconContext.Provider value={{ className: "react-icons" }}>
                {IconMap[icon]}
              </IconContext.Provider>
            </div>

            <Card.Body
              style={{
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "2px solid gray",
              }}
              className="pb-4"
            >
              <Card.Title>
                <h3>{title}</h3>
              </Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
          </Card>
        </Zoom>
      </Col>
    </>
  );
};

export default RegisterCard;
