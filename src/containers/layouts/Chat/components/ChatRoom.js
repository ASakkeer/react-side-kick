import React, { useState } from "react";
import "./ChatRoom.css";

const ChatRoom = (props) => {
  const { selectedChat } = props;
  console.log(selectedChat, "khubunhbjb");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey, how's it going?", isSender: false },
    { text: "Great! How about you?", isSender: true },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    { text: "I am good too.", isSender: false },
    // Add more messages as needed
  ]);

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
      <div style={styles.navContainer}>
        <p>{selectedChat?.name || "--"}</p>
      </div>
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: message.isSender ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: message.isSender ? "#DCF8C6" : "#ECE5DD",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

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
    padding: "20px",
    background: "#fff",
    boxShadow: "0px -1px 10px 1px #CCCCCC",
  },
  navContainer: {
    display: "flex",
    // marginTop: "20px",
    position: "sticky",
    top: "0px",
    padding: "10px 20px",
    background: "#fff",
    boxShadow: "0px 1px 10px 1px #CCCCCC",
  },
  input: {
    flex: 1,
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  sendButton: {
    marginLeft: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ChatRoom;
