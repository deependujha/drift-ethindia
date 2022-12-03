import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import ChatCard from "../chatCard/ChatCardLeft";
import styles from "../../styles/Chats.module.css"
import axios from "axios";
const ENDPOINT = "http://localhost:4500";
const socket = socketIO(ENDPOINT, { transport: ["websocket"] });
// the axios instance with the api endpoint
const axiosInstance = axios.create({
  baseURL: "http://localhost:4500",
});

const Chats = ({ currLeft }) => {
  const [room, setRoom] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [txt, setTxt] = useState("");

  socket.on("connect", () => {
    // console.log('new connection frontend'); // ojIckSD2jqNzOqIrAGzL
    // console.log(`socket.id: ${socket.id}`);
  });

  socket.emit("join_room", currLeft);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.room === currLeft) setMsgs((msgs) => [...msgs, data]);
    });
  }, [socket]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosInstance
      .get(`/${currLeft}`)
      .then((resp) => {
        console.log("resp: ", resp);
        setMsgs(resp.data);
      })
      .catch((err) => {
        console.log("error occurred: ", err);
      });
  };

  const sendMsg = async () => {
    if (txt === "") {
      return;
    }
    socket.emit("send_message", {
      room: currLeft,
      msg: txt,
      sender: "deependu",
    });
    setMsgs([...msgs, { room: currLeft, msg: txt, sender: "deependu" }]);
    setTxt("");
  };

  return (
    <div className="">
      Chats
      <div>
        {msgs.map((ms, idx) => (
          <div key={idx}>
            <ChatCard sender={ms.sender} msg={ms.msg} />
          </div>
        ))}
      </div>
      <div className="position-absolute bottom-0" style={{width:"800px"}}>
        <div className="d-flex">
          <input
            type="email"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            className="form-control mx-2 my-2"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMsg}
            className="btn btn-success mx-2 my-2 px-3"
          >{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
