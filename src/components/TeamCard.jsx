import React from "react";
import { Card, Col } from "react-bootstrap";
const TeamCard = ({ name, img }) => {
  return (
    <>
      <Col md={3} className="pb-4">
        <Card className="mx-4 team-card">
          <Card.Img variant="top" src={require("./../assets/" + img)} />
          <Card.Body
            style={{
              minHeight: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TeamCard;
