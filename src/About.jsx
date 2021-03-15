import React from "react";
import { Container, Row, Col } from "reactstrap";
import img from "./images/chat.png";

let About = (props) => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <h1>First React project</h1>
          <p>My first, simple react project</p>
        </Col>
        <Col md="6">
          <img src={img} alt="computer" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
