import React, { useState } from "react";

const ChatRoom = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey, how's it going?", isSender: false },
    { text: "Great! How about you?", isSender: true },
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
    <div style={styles.container}>
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
    padding: "20px",
    overflowY: "scroll",
  },
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
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
    marginTop: "20px",
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
