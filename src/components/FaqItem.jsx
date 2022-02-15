import React from "react";
import { Accordion } from "react-bootstrap";
const FaqItem = ({ id, title, desc }) => {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body className="text-start fs-6 text-muted px-4 pt-4 pb-2">
          {desc}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default FaqItem;
