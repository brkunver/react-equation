import React from "react";
import { Container, Row, Col } from "reactstrap";
import img from "./images/chat.png";
import "./style/about.css"

let About = (props) => {
  return (
    <Container>
      <Row>
        <Col md="6" className="about-col">
          <h1>First React project</h1>
          <p>My first, simple react project</p>
        </Col>
        <Col md="6" className="about-col">
          <img src={img} alt="computer" className="img-computer"/>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
