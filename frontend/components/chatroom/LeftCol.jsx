import ListGroup from "react-bootstrap/ListGroup";

import Link from "next/link";
import { useState } from "react";

function BasicExample({ currLeft, setCurrLeft }) {
  // const currentItem = () => {
  //   console.log("hello world");
  // };

  return (
    <ListGroup
      style={{
        height: "100vh",
        overflow: "scroll",
      }}
      className="mt-3 sticky-top"
    >
      <ListGroup.Item>
        <div
          onClick={() => {
            console.log("home 1");
            setCurrLeft("home1");
          }}
          className="text-center shadow-sm p-1 bg-body rounded text-success"
          style={{ cursor: "pointer" }}
        >
          Home1
        </div>
      </ListGroup.Item>

      <ListGroup.Item>
        <div
          onClick={() => {
            console.log("home 2");
            setCurrLeft("home2");
          }}
          className="text-center shadow-sm p-1 bg-body rounded text-success"
          style={{ cursor: "pointer" }}
        >
          Home2
        </div>
      </ListGroup.Item>

      <ListGroup.Item>
        <div
          onClick={() => {
            console.log("home 3");
            setCurrLeft("home3");
          }}
          className="text-center shadow-sm p-1 bg-body rounded text-success"
          style={{ cursor: "pointer" }}
        >
          Home3
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default BasicExample;
