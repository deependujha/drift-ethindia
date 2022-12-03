import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";

function landing() {
  return (
    <Row className="bg-secondary" style={{ height: "99vh" }}>
      <Col sm={6} className="text-center my-auto">
        <div>
          <Button variant="success">
            <Image src="/metamask_landing_logo.png" height="35" width="35" />{" "}
            Connect With MetaMask
          </Button>
        </div>
        <div className="mt-3">
          <Button variant="success">
            {" "}
            <Image
              src="/lens-protocol-landing.jpg"
              height="35"
              width="35"
            />{" "}
            Connect With Lens_ID
          </Button>
        </div>
      </Col>
      <Col sm={6} className="my-auto">
        <Image src="/daooo.png" height="537" width="600" alt="loading..." />
      </Col>
    </Row>
  );
}

export default landing;
