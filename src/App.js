import React, { useState } from "react";
import "./App.css";
// import { Button, TextInput } from "./components";
import { ChatList } from "./containers";
import { Login } from "./containers/authentications";

function App() {
  // const [textValue, setTextValue] = useState("");

  return (
    <div className="App">
      {/* <ChatList /> */}
      {/* <p>hi</p> */}

      {/* <label htmlFor="fname">First name:</label> */}

      {/* <TextInput
        id="fname"
        type="text"
        onChange={(event) => {
          setTextValue(event.target.value);
        }}
        value={textValue}
        placeholder="Enter your name"
        className="_textInput"
        // name=""
      /> */}
      <Login />
    </div>
  );
}

export default App;
