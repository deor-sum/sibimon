import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { SliderImage } from "./../Config";
class Testimoni extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Row className="g-0 p-4 mb-5 justify-content-center ">
        <Col xs={10} md={10}>
          <h2 className="py-4">Testimoni</h2>
          <Slider {...settings}>
            {SliderImage.map((item, index) => (
              <div key={index}>
                <img
                  src={require("./../assets/testimoni/" + item)}
                  alt={item}
                />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    );
  }
}

export default Testimoni;
