import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <Container fluid className="bg">
      <Row className="align-items-center justify-content-center banner">
        <Col md={4} className="p-md-5 order-2 order-md-1">
          <Fade left duration={2000} distance="40px">
            <h1 className="text-white mb-4">
              Own your dream bike <br /> The best rides happen on two wheels
            </h1>
            <Button className="btn-primary" href="#services">
              Get Started
            </Button>
          </Fade>
        </Col>
        <Col md={6} className="order-1 order-md-2">
          <Fade right duration={2000} distance="40px">
            <Image
              src="https://robbreport.com/wp-content/uploads/2020/01/eve-2020-digitial-2.jpg?w=1000"
              fluid
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
