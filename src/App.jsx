import "./App.css";
import "./_reset.css";
import { useState } from "react";
import { ChatList } from "./components/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NewChat } from "./components/NewChat/NewChat";
import { addChat, addMessage } from "./actions/actions";
import { Chat } from "./components/Chat/Chat";

function App() {
  const allChats = useSelector((state) => state);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("none");
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const removeUserName = () => {
    setUserName("");
  };

  const addNewChat = (title) => {
    const newChat = {
      id: Date.now(),
      title: title,
      messages: [],
    };
    dispatch(addChat(newChat));
  };

  const addMessageToChat = (message) => {
    dispatch(addMessage(selectedChatIndex, message));
  };

  return (
    <div className="App">
      <header>
        <div>
          HI{userName === "none" || userName === "" ? "!" : `, ${userName}!`}
        </div>
        {userName !== "none" && userName !== "" && (
          <button onClick={removeUserName}>Quit</button>
        )}
      </header>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              userName={userName}
              setUserName={setUserName}
              allChats={allChats}
            />
          }
        />
        <Route path="/home" element={<Navigate to="" replace />} />
        <Route
          exact
          path="/chats"
          element={
            <ChatList
              chatsList={allChats}
              setSelectedChatIndex={setSelectedChatIndex}
            />
          }
        />
        <Route
          exact
          path="/newchat"
          element={<NewChat addNewChat={addNewChat} />}
        />
        <Route
          exact
          path="/chat/:chatTitle"
          element={
            <Chat
              messages={allChats[selectedChatIndex]?.messages}
              userName={userName}
              setUserName={setUserName}
              addMessageToChat={addMessageToChat}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
