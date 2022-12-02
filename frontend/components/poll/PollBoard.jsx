import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import No from "./No";
import Yes from "./Yes";

const PollBoard = ({ title, text, yes, no }) => {
  return (
    <Card style={{ width: "30rem" }} className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div>
          <Yes yes={yes} />
        </div>
        <div className="mt-3">
          <No no={no} />
        </div>
        <div className="d-flex flex-row-reverse mt-5">
          <div>
            <Button variant="success" size="sm" className="px-4">
              YES
            </Button>
          </div>
          <div className="me-5">
            <Button variant="danger" size="sm" className="px-4">
              NO
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PollBoard;
