import React, { useState } from "react";
import {
  Button,
  InputGroup,
  Input,
  Alert,
  Container,
  Row,
  Col,
} from "reactstrap";

let Calculator = (props) => {
  let [root1, setRoot1] = useState("");
  let [root2, setRoot2] = useState("");
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");

  let [ans, setAns] = useState(
    "Enter the values and calculate the roots  => A.x^2 + B.x + C"
  );

  let changeHandler = (event) => {
    if(event.target.name == "A"){
      setA(event.target.value)
    }
    else if(event.target.name == "B"){
      setB(event.target.value)
    }
    else if(event.target.name == "C"){
      setC(event.target.value)
    }
  };

  let buttonHandler = (event) => {
    if(a && b && c){
      
    }
    
  }


  return (
    <Container >
      <Row>

        <Col md={{ size: 6, offset: 0 }}>
          <Alert color="success">{ans}</Alert>
        </Col>

      </Row>

      <Row>

        <Col md={{ size: 6, offset: 0 }}>

          <InputGroup>
            <Button onClick={buttonHandler} color="success" >Calculate</Button>
            <Input onChange={changeHandler} type="number" name="A" placeholder="A :" />
            <Input onChange={changeHandler} type="number" name="B" placeholder="B :" />
            <Input onChange={changeHandler} type="number" name="C" placeholder="C :" />
          </InputGroup>

        </Col>

      </Row>
    </Container>
  );
};

export default Calculator;
