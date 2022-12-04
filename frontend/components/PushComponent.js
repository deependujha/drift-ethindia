import React, { useState, useEffect } from "react";
// import socketIO from "socket.io-client";
// import ChatCard from "../chatCard/ChatCardLeft";
// import styles from "../../styles/Chats.module.css"
// import axios from "axios";
import { Chat } from "@pushprotocol/uiweb";

const Send = () => {
    
  return (
    <div className="">
      Chats
      
      <div className="position-absolute bottom-0" style={{width:"800px"}}>
        <div className="d-flex">

        <Chat
   account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
   supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
   apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
    env="staging"
 />
          
        </div>
      </div>
    </div>
  );
};

export default Send;






