import React from "react";
import { Carousel, Row, Col, Button, Image } from "react-bootstrap";
import Img from "./../assets/banner1.jpg";
import Img2 from "./../assets/IMG-GROUP.jpg";
import Fade from "react-reveal/Fade";
const HeroSlider = () => {
  return (
    <>
      <Row className="g-0">
        <Col className="px-0">
          <Carousel interval={5000}>
            <Carousel.Item>
              <Fade>
                <Image
                  fluid
                  className="d-block w-100 h-100"
                  src={Img}
                  alt="First slide"
                />
              </Fade>
              <Carousel.Caption>
                <Fade delay={500}>
                  <h1>BIMBINGAN ONLINE SINGARAJA</h1>
                  <p>
                    Hadir secara online untuk bersama-sama menyiapkan diri
                    mengikuti ujian / seleksi berbasis Computer Based Test
                  </p>
                  <Button variant="light" size="lg" className="px-4 my-3">
                    Ayo Segera Daftar
                  </Button>
                </Fade>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Fade>
                <img
                  className="d-block w-100 h-100"
                  src={Img2}
                  alt="Second slide"
                />
              </Fade>
              <Carousel.Caption>
                <Fade delay={500}>
                  <h1>BIMBINGAN ONLINE SINGARAJA</h1>
                  <p>
                    Hadir secara online untuk bersama-sama menyiapkan diri
                    mengikuti ujian / seleksi berbasis Computer Based Test
                  </p>
                  <Button variant="light" size="lg" className="px-4 my-3">
                    Ayo Segera Daftar
                  </Button>
                </Fade>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Fade>
                <img
                  className="d-block w-100 h-100"
                  src={Img}
                  alt="Third slide"
                />
              </Fade>
              <Carousel.Caption>
                <Fade delay={500}>
                  <h1>BIMBINGAN ONLINE SINGARAJA</h1>
                  <p>
                    Hadir secara online untuk bersama-sama menyiapkan diri
                    mengikuti ujian / seleksi berbasis Computer Based Test
                  </p>
                  <Button variant="light" size="lg" className="px-4 my-3">
                    Ayo Segera Daftar
                  </Button>
                </Fade>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default HeroSlider;
