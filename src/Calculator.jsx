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

  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");
  let [boxColor , setBoxColor] = useState("info")

  let [ans, setAns] = useState(
    "Enter the values and calculate the roots  => A.x^2 + B.x + C"
  );

  let changeHandler = (event) => {
    if(event.target.name == "A"){
      setA(parseFloat(event.target.value))
    }
    else if(event.target.name == "B"){
      setB(parseFloat(event.target.value))
    }
    else if(event.target.name == "C"){
      setC(parseFloat(event.target.value))
      console.log(typeof(c), c);
    }
  };

  let buttonHandler = (event) => {
    if(a && b && c){
      if (a == 0) {
        setBoxColor("danger")
        setAns("Value of A is can't be zero!");
      }
      else{

        let delta = b*b - 4 * a * c;

        if (delta < 0){
          setBoxColor("warning")
          setAns("There is no real root");
        }

        else{
          let x1 = (-b + delta ** 0.5) / (2*a);
          let x2 = (-b - delta ** 0.5) / (2*a);
          setBoxColor("success")

          setAns("Root 1 : " + x1.toFixed(3) + " Root 2 : " + x2.toFixed(3));
          console.log(delta);
        }

      }
    }
    else{
      setBoxColor("danger")
      setAns("Please enter valid values")

    }
    
  }


  return (
    <Container >
      <Row>

        <Col md="6">
          <Alert color={boxColor}>{ans}</Alert>
        </Col>

      </Row>

      <Row>

        <Col md="6">

          <InputGroup>
            <Button onClick={buttonHandler} color="success" >Calculate</Button>
            <Input onChange={changeHandler} value={a}  type="number" name="A" placeholder={"A : " } />
            <Input onChange={changeHandler} value={b} type="number" name="B" placeholder={"B : " }/>
            <Input onChange={changeHandler} value={c}  type="number" name="C" placeholder={"C : " } />
          </InputGroup>

        </Col>

      </Row>
    </Container>
  );
};

export default Calculator;
