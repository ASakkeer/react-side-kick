import React, { useState } from "react";
import "./ChatList.css";
import { ChatRoom } from "./components";

function ChatList() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchText, setSearchText] = useState("");
  const chatList = [
    {
      id: 1,
      name: "Barry Allen",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Hey there!",
      timestamp: "10:30 AM",
      status: "online", // Barry Allen is online
    },
    {
      id: 2,
      name: "Iris West",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Hello!",
      timestamp: "11:45 AM",
      status: "offline", // Iris West is offline
    },
    {
      id: 3,
      name: "Eobard Thawne",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "How's it going?",
      timestamp: "1:20 PM",
      status: "online", // Eobard Thawne is online
    },
    {
      id: 4,
      name: "Cisco Ramon",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Nice weather today!",
      timestamp: "3:15 PM",
      status: "offline", // Cisco Ramon is offline
    },
    {
      id: 5,
      name: "Caitlin Snow",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "See you later!",
      timestamp: "4:30 PM",
      status: "online", // Caitlin Snow is online
    },
    {
      id: 6,
      name: "Harrison Wells",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Got any plans for the weekend?",
      timestamp: "5:45 PM",
      status: "offline", // Harrison Wells is offline
    },
    {
      id: 7,
      name: "Nora West-Allen",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Can you help me with something?",
      timestamp: "7:10 PM",
      status: "online", // Nora West-Allen is online
    },
    {
      id: 8,
      name: "Jay Garrick",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "I'll be there in 10 minutes.",
      timestamp: "8:05 PM",
      status: "offline", // Jay Garrick is offline
    },
    {
      id: 9,
      name: "Patty Spivot",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Thanks for the gift!",
      timestamp: "9:30 PM",
      status: "online", // Patty Spivot is online
    },
    {
      id: 10,
      name: "Wally West",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Did you watch the game?",
      timestamp: "10:50 PM",
      status: "offline", // Wally West is offline
    },
    {
      id: 11,
      name: "Cecile Horton",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Happy birthday!",
      timestamp: "11:15 PM",
      status: "online", // Cecile Horton is online
    },
    {
      id: 12,
      name: "Ralph Dibny",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "See you at the party!",
      timestamp: "11:45 PM",
      status: "offline", // Ralph Dibny is offline
    },
    {
      id: 13,
      name: "Linda Park",
      avatarUrl: "https://picsum.photos/800/800",
      lastMessage: "Let's catch up soon.",
      timestamp: "12:20 AM",
      status: "online", // Linda Park is online
    },
  ];

  // Filter the chat list based on the search text
  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Handle the input change for the search bar
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Render each chat item
  const renderChatItem = (chat) => (
    <div
      className="chat-item"
      key={chat.id}
      onClick={() => setSelectedChat(chat)}
    >
      <div className="avatar">
        <img src={chat.avatarUrl} alt="User Avatar" />
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50px",
            position: "absolute",
            right: "4px",
            bottom: "2px",
            background: chat.status === "online" ? "green" : "grey",
          }}
        ></div>
      </div>
      <div className="chat-info">
        <div className="chat-name">{chat.name}</div>
        <div className="chat-message">{chat.lastMessage}</div>
      </div>
      <div className="timestamp">{chat.timestamp}</div>
    </div>
  );

  return (
    <div className="container h-full">
      <div className="left-panel">
        <div className="header">
          <p>WhatsApp Web</p>
          <div className="search-bar">
            <span className="search-icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchInputChange}
              placeholder="Type to search"
              style={{
                width: "100%",
                padding: "15px 0px",
                border: "none",
                outline: "none",
                background: "none",
              }}
            />
          </div>
        </div>
        <div className="chat-list">
          {filteredChats.map((chat) => renderChatItem(chat))}
        </div>
      </div>
      <div className="right-container h-full">
        <ChatRoom selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default ChatList;
