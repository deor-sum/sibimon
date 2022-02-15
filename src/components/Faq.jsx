import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { FaqData } from "./../Config";
import FaqItem from "./FaqItem";
const Faq = () => {
  return (
    <>
      <Row className="m-5 justify-content-md-center">
        <h2 className="text-center pb-4">Frequently Asked Questions</h2>
        <Col md={8}>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {FaqData.map((item, index) => (
              <FaqItem key={index} {...item} />
            ))}
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Faq;
