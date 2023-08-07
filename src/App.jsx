import "./App.css";
import "./_reset.css";
import { useState } from "react";
import { ShowMessage } from "./components/ShowMessage/ShowMessage";
import { InputMessage } from "./components/InputMessage/InputMessage";
import { EnterWindow } from "./components/EnterWindow/EnterWindow";
import { ChatList } from "./components/ChatList/ChatList";
import chatList from "../src/json/chatList.json";

function App() {
  const [chatsList, setList] = useState(JSON.parse(localStorage.getItem('chatsList')) || chatList);
  const [enter, setEnter] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("none");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSetUserName = (event) => {
    setUserName(event.target.value);
  };

  console.log(chatList);

  return (
    <div className="App">
      <header>HI{(userName === "none" || userName === "") ? "!" :`, ${userName}!`}</header>
      {!enter ? (
        <EnterWindow
          setEnter={setEnter}
          userName={userName}
          setUserName={setUserName}
          // handlesetUserName={handleSetUserName}
        />
      ) : (
        <>
          <ChatList chatsList={chatsList} userName={userName} setUserName={setUserName} />
          {/* 
          <InputMessage
            name={name}
            setName={setName}
            message={message}
            setMessage={setMessage}
            addMessage={addMessage}
            userName={userName}
            setUserName={setUserName}
          /> */}
        </>
      )}
    </div>
  );
}

export default App;
