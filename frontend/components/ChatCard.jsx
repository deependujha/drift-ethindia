import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

function ChatCard() {
  return (
    <Card style={{ width: "35rem" }}>
      <Card.Body>
        <Row>
          <Col sm={9}>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
          <Col sm={3}>
            <Image
              src="/chat.png"
              alt="load..."
              height="100"
              width="110"
              className="text-bg-success rounded-circle"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ChatCard;
