import React from "react";
import "./ChatList.css";
import { ChatRoom } from "./components";

function ChatList() {
  return (
    <div className="container h-full">
      <div className="left-container">
        <p>Hello</p>
      </div>
      <div className="right-container h-full">
        <ChatRoom />
      </div>
    </div>
  );
}

export default ChatList;
