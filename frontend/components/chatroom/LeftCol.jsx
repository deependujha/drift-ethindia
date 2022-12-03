import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import Link from "next/link";
import { useState } from "react";

function BasicExample({ currLeft, setCurrLeft }) {
  // const currentItem = () => {
  //   console.log("hello world");
  // };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll",
      }}
      className="mt-3 sticky-top"
    >
      <div
        onClick={() => {
          console.log("home 1");
          setCurrLeft("home1");
        }}
        className="text-center text-success"
        style={{ cursor: "pointer" }}
      >
        Home1
      </div>

      <div
        onClick={() => {
          console.log("home 2");
          setCurrLeft("home2");
        }}
        className="text-center mt-3 text-success"
        style={{ cursor: "pointer" }}
      >
        Home2
      </div>

      <div
        onClick={() => {
          console.log("home 3");
          setCurrLeft("home3");
        }}
        className="text-center mt-3 text-success"
        style={{ cursor: "pointer" }}
      >
        Home3
      </div>
    </div>
  );
}

export default BasicExample;
