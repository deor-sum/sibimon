import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import Fade from "react-reveal/Fade";

const FormLogin = ({ close }) => {
  return (
    <Fade>
      <div
        fluid
        className="login-form d-flex justify-content-center align-items-center"
      >
        <Modal.Dialog className="p-4">
          <Modal.Header className="text-center d-inline-block">
            <h3 className="fs-4 fw-bold pt-3">Login to your account</h3>
            <p className="py-1 ">
              Don't have an account?{" "}
              <a href="/" className="text-decoration-none">
                Sign up!
              </a>
            </p>
            <span className="closeBtn" onClick={close}>
              <IconContext.Provider value={{ className: "closeIcon" }}>
                <IoClose />
              </IconContext.Provider>
            </span>
          </Modal.Header>
          <Modal.Body>
            <Form className="bg-white px-5 py-4 mx-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username  " />
              </Form.Group>

              <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg">
                  Login
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </Fade>
  );
};

export default FormLogin;
