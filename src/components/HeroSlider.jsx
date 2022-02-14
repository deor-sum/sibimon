import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Img from "./../assets/banner1.jpg";
import Img2 from "./../assets/IMG-GROUP.jpg";
const HeroSlider = () => {
  return (
    <>
      <Row className=" g-0">
        <Col className="px-0">
          <Carousel fade interval={1500}>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={Img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>BIMBINGAN ONLINE SINGARAJA</h3>
                <p>
                  Hadir secara online untuk bersama-sama menyiapkan diri
                  mengikuti ujian / seleksi berbasis Computer Based Test
                </p>
                <Button variant="light" size="lg" className="px-4">
                  Ayo Segera Daftar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={Img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>BIMBINGAN ONLINE SINGARAJA</h3>
                <p>
                  Hadir secara online untuk bersama-sama menyiapkan diri
                  mengikuti ujian / seleksi berbasis Computer Based Test
                </p>
                <Button variant="light" size="lg" className="px-4">
                  Ayo Segera Daftar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={Img}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>BIMBINGAN ONLINE SINGARAJA</h3>
                <p>
                  Hadir secara online untuk bersama-sama menyiapkan diri
                  mengikuti ujian / seleksi berbasis Computer Based Test
                </p>
                <Button variant="light" size="lg" className="px-4">
                  Ayo Segera Daftar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default HeroSlider;
