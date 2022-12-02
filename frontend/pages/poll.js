import React from "react";
import PollBoard from "../components/poll/PollBoard";

function poll() {
  return (
    <div>
      <PollBoard
        title="card title"
        text=" i am fine also not"
        yes="76"
        no="24"
      />
      <PollBoard
        title="card title"
        text=" i am fine also not"
        yes="70"
        no="30"
      />
      <PollBoard
        title="card title"
        text=" i am fine also not"
        yes="76"
        no="24"
      />
    </div>
  );
}

export default poll;
