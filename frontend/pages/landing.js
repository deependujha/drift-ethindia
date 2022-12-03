import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typed from "react-typed";
import Image from "next/image";

function landing() {
  return (
    <Row className="bg-info">
      <Col sm={6}>
        <div className="position-absolute top-50 ms-5">
          <div className="fs-1 fw-bold">Drift</div>
          <div className="fs-4">
            <Typed
              strings={[
                "hbvhdbvfhvbvhvbfhv...",
                "nnvfdvfvnvfdbvfvfdvbfvfv...",
                "fnv nmdf vnf vfnvmvfnv...",
                "jhvfjkvnjfvjfnvdfvnfvvfvh...",
              ]}
              typeSpeed={30}
              backSpeed={50}
              loop={true}
            />
          </div>
        </div>
      </Col>
      <Col sm={6}>
        <Image src="/landing.svg" height="937" width="600" alt="loading..." />
      </Col>
    </Row>
  );
}

export default landing;
