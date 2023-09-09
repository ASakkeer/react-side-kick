import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";
import NoChatSelectedIimage from "../../../../assets/images/no-chats.png";

const Message = ({ message }) => (
  <div
    style={{
      alignSelf: message.isSender ? "flex-end" : "flex-start",
      marginBottom: "10px",
      maxWidth: "60%", // Limit the container to 60% of parent's width
      wordWrap: "break-word", // Wrap long words
    }}
  >
    <pre
      style={{
        backgroundColor: message.isSender ? "#DCF8C6" : "#ECE5DD",
        padding: "10px",
        borderRadius: "10px",
        margin: 0,
        fontFamily: "inherit",
        whiteSpace: "pre-wrap", // Preserve line breaks
      }}
    >
      {message.text}
    </pre>
  </div>
);

const ChatRoom = (props) => {
  const { selectedChat } = props;
  const [inputText, setInputText] = useState("");

  const [messages, setMessages] = useState([]);

  const messagesContainerRef = useRef(null);

  // const [showScrollToDown, setScrollToDown] = useState(false);

  const goToBottomOfTheScreen = () => {
    if (messagesContainerRef.current) {
      const messagesContainer = messagesContainerRef.current;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottomOfTheScreen();
  }, [messages]);

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

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents new line
      handleSendMessage();
    }
  };

  // const handleScroll = (event) => {
  //   const messagesContainer = event.target;

  //   // Check if the user has scrolled up (reached the top)
  //   console.log(messagesContainer?.current?.scrollBottom, "ijijiji");
  //   if (messagesContainer.scrollBottom > 0 && !showScrollToDown) {
  //     setScrollToDown(true);
  //     return;
  //   }

  //   if (messagesContainer.scrollBottom === 0) {
  //     setScrollToDown(false);
  //   }
  // };

  return (
    <>
      {/* {showScrollToDown && (
        <div
          style={styles.scrollToDownContainer}
          onClick={() => goToBottomOfTheScreen()}
        >
          <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </div>
      )} */}
      <div
        style={{}}
        className="cr-container"
        ref={messagesContainerRef}
        // onScroll={handleScroll}
      >
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
              handleKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <NoChatSelected />
        )}
      </div>
    </>
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
      <p
        style={{
          color: "#525252",
          fontSize: "12px",
          margin: "0px",
          marginTop: "5px",
        }}
      >
        {selectedChat?.status}
      </p>
    </div>
  </div>
);

const ChatInput = ({
  inputText,
  handleInputChange,
  handleSendMessage,
  handleKeyDown,
}) => (
  <div style={styles.inputContainer}>
    <textarea
      placeholder="Type a message..."
      value={inputText}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
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
    // position: "relative",
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
    alignItems: "center",
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
    borderRadius: "10px",
    resize: "none",
    minHeight: "40px",
    fontFamily: "inherit", // Use the same font as the parent container
    fontSize: "inherit",
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
  scrollToDownContainer: {
    position: "absolute",
    right: "20px",
    bottom: "110px",
    width: "50px",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "10px",
    background: "gainsboro",
    fontSize: "24px",
    zIndex: "1",
    opacity: "0.8",
  },
};

export default ChatRoom;
