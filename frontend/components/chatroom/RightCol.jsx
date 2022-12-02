import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const RightCol = ({ currRight, setCurrRight }) => {
  return (
    <div className="d-flex flex-row sticky-top mt-3 ">
      <div className="vr" />
      <div className="ms-4">
        <div
          onClick={() => {
            console.log("right 1");
            setCurrRight("right1");
          }}
          className="text-success"
          style={{ cursor: "pointer" }}
        >
          right1
        </div>

        <div
          onClick={() => {
            console.log("right 2");
            setCurrRight("right2");
          }}
          className="mt-3 text-success"
          style={{ cursor: "pointer" }}
        >
          right2
        </div>
        <div
          onClick={() => {
            console.log("right 3");
            setCurrRight("right3");
          }}
          className="mt-3 text-success"
          style={{ cursor: "pointer" }}
        >
          right3
        </div>
      </div>
    </div>
  );
};

export default RightCol;
