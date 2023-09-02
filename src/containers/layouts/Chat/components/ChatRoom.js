import React, { useState } from "react";
import "./ChatRoom.css";
import NoChatSelectedIimage from "../../../../assets/images/no-chats.png";

const Message = ({ message }) => (
  <div
    style={{
      alignSelf: message.isSender ? "flex-end" : "flex-start",
    }}
  >
    <div
      style={{
        backgroundColor: message.isSender ? "#DCF8C6" : "#ECE5DD",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {message.text}
    </div>
  </div>
);

const ChatRoom = (props) => {
  const { selectedChat } = props;
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = { text: inputText, isSender: true };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div style={styles.container} className="cr-container">
      {selectedChat ? (
        <>
          <ChatHeader selectedChat={selectedChat} />
          <div style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>
          <ChatInput
            inputText={inputText}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
          />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

const ChatHeader = ({ selectedChat }) => (
  <div style={styles.navContainer}>
    <div className="avatar">
      <img src={selectedChat?.avatarUrl} alt="Avatar" />
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50px",
          position: "absolute",
          right: "4px",
          bottom: "2px",
          background: selectedChat.status === "online" ? "green" : "grey",
        }}
      ></div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ fontWeight: "bold", margin: 0 }}>
        {selectedChat?.name || "--"}
      </p>
      <p style={{ color: "grey", fontSize: "12px", margin: 0 }}>
        {selectedChat?.status}
      </p>
    </div>
  </div>
);

const ChatInput = ({ inputText, handleInputChange, handleSendMessage }) => (
  <div style={styles.inputContainer}>
    <input
      type="text"
      placeholder="Type a message..."
      value={inputText}
      onChange={handleInputChange}
      style={styles.input}
    />
    {!!inputText ? (
      <button onClick={handleSendMessage} className="_cr-send-button">
        <i
          className="fa fa-paper-plane"
          aria-hidden="true"
          style={{ fontSize: 18 }}
        ></i>
      </button>
    ) : (
      <button onClick={handleSendMessage} className="_cr-send-button">
        <i
          className="fa fa-microphone"
          aria-hidden="true"
          style={{ fontSize: 18 }}
        ></i>
      </button>
    )}
  </div>
);

const NoChatSelected = () => (
  <div style={styles.noChatSelected}>
    <img
      src={NoChatSelectedIimage}
      alt="No chat selected"
      style={styles.noChatSelectedImg}
    />
    <p style={{ margin: 0, fontWeight: "bold" }}>
      Select a chat to start messaging
    </p>
  </div>
);

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    overflowY: "auto",
  },
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    padding: "20px 20px 10px 20px",
  },
  message: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  messageBubble: {
    padding: "10px",
    borderRadius: "10px",
    // maxWidth: "70%",
  },
  inputContainer: {
    display: "flex",
    // marginTop: "20px",
    position: "sticky",
    bottom: "0px",
    padding: "10px 20px",
    background: "#fff",
    boxShadow: "0px -1px 10px 1px #CCCCCC",
  },
  navContainer: {
    position: "sticky",
    top: "0px",
    padding: "10px 20px",
    background: "rgb(255, 255, 255)",
    boxShadow: "rgb(204, 204, 204) 0px 1px 10px 1px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "50px",
  },
  noChatSelected: {
    flex: "1 1 0%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    background: "#7c3e6617",
  },
  noChatSelectedImg: {
    maxWidth: "100%", // Set maximum width to fit the container
    maxHeight: "400px", // Set maximum height as needed
  },
};

export default ChatRoom;
