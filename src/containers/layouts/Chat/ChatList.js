import React, { useState } from "react";
import "./ChatList.css";
import { ChatRoom } from "./components";

function ChatList() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chatList = [
    {
      id: 1,
      name: "Barry Allen",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Hey there!",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      name: "Iris West",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Hello!",
      timestamp: "11:45 AM",
    },
    {
      id: 3,
      name: "Eobard Thawne",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "How's it going?",
      timestamp: "1:20 PM",
    },
    {
      id: 4,
      name: "Cisco Ramon",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Nice weather today!",
      timestamp: "3:15 PM",
    },
    {
      id: 5,
      name: "Caitlin Snow",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "See you later!",
      timestamp: "4:30 PM",
    },
    {
      id: 6,
      name: "Harrison Wells",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Got any plans for the weekend?",
      timestamp: "5:45 PM",
    },
    {
      id: 7,
      name: "Nora West-Allen",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Can you help me with something?",
      timestamp: "7:10 PM",
    },
    {
      id: 8,
      name: "Jay Garrick",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "I'll be there in 10 minutes.",
      timestamp: "8:05 PM",
    },
    {
      id: 9,
      name: "Patty Spivot",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Thanks for the gift!",
      timestamp: "9:30 PM",
    },
    {
      id: 10,
      name: "Wally West",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Did you watch the game?",
      timestamp: "10:50 PM",
    },
    {
      id: 11,
      name: "Cecile Horton",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Happy birthday!",
      timestamp: "11:15 PM",
    },
    {
      id: 12,
      name: "Ralph Dibny",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "See you at the party!",
      timestamp: "11:45 PM",
    },
    {
      id: 13,
      name: "Linda Park",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Let's catch up soon.",
      timestamp: "12:20 AM",
    },
    // Add more characters as needed
  ];

  return (
    <div className="container h-full">
      <div className="left-panel">
        <div className="header">WhatsApp Web</div>
        <div className="chat-list">
          {chatList.map((chat) => (
            <div
              className="chat-item"
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="avatar">
                <img src={chat.avatarUrl} />
              </div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-message">{chat.lastMessage}</div>
              </div>
              <div className="timestamp">{chat.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-container h-full">
        <ChatRoom selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default ChatList;
