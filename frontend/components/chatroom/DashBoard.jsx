import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftCol from "../chatroom/LeftCol";
import RightCol from "./RightCol";
import MainCol from "./MainCol";
import { useState } from "react";

function ResponsiveAutoExample() {
  const [currLeft, setCurrLeft] = useState("home1");
  const [currRight, setCurrRight] = useState("right2");

  return (
    <div>
      <Row>
        <Col sm={2}>
            <LeftCol currLeft={currLeft} setCurrLeft={setCurrLeft} />
        </Col>
        <Col sm={8}>
          <MainCol currLeft={currLeft} currRight={currRight} />
        </Col>
        <Col sm={2}>
            <RightCol currRight={currRight} setCurrRight={setCurrRight} />
        </Col>
      </Row>
    </div>
  );
}

export default ResponsiveAutoExample;
