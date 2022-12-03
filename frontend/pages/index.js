import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";

function landing() {
  return (
    <Row
      className="bg-info text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Col sm={6} className="text-center my-auto">
        <div>
          <p class="fs-1 fw-bold text-dark">Get Updated With Your DAO</p>
        </div>
        <Button variant="success" className="me-3">
          <Image
            alt="loading..."
            src="/metamask_landing_logo.png"
            height="35"
            width="35"
          />
          Connect With MetaMask
        </Button>
        <Button variant="success">
          {" "}
          <Image
            alt="loading..."
            src="/lense_landing.jpg"
            height="35"
            width="35"
            className="rounded-5"
          />{" "}
          Connect With Lens_ID
        </Button>
      </Col>
      <Col sm={6} className="my-auto">
        <Image src="/landing.png" height="537" width="600" alt="loading..." />
      </Col>
    </Row>
  );
}

export default landing;
