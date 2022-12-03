import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typed from "react-typed";
import Image from "next/image";

function landing() {
  return (
    <Row className="bg-info">
      <Col sm={6}>
        <div className="">
          Hii
        </div>
      </Col>
      <Col sm={6}>
        <Image src="/landing.svg" height="937" width="600" alt="loading..." />
      </Col>
    </Row>
  );
}

export default landing;
