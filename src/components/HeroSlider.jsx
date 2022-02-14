import React from "react";
import { Carousel, Row, Col, Button, Image } from "react-bootstrap";
import { Banner } from "./../Config";
import Fade from "react-reveal/Fade";

const HeroSlider = () => {
  return (
    <>
      <Row className="g-0">
        <Col className="px-0">
          <Carousel interval={5000}>
            {Banner.map((item, index) => (
              <Carousel.Item key={index}>
                <Fade>
                  <Image
                    fluid
                    className="d-block w-100 h-100"
                    src={require("./../assets/" + item.image)}
                    alt={item.alt}
                  />
                </Fade>
                <Carousel.Caption>
                  <div className="slider-overlay"></div>
                  <Fade delay={500}>
                    <h1>BIMBINGAN ONLINE SINGARAJA</h1>
                    <p>
                      Hadir secara online untuk bersama-sama menyiapkan diri
                      mengikuti ujian / seleksi berbasis Computer Based Test
                    </p>
                    <Button variant="primary" size="lg" className="px-4 my-3">
                      Ayo Segera Daftar
                    </Button>
                  </Fade>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default HeroSlider;
