import "./App.css";
import { useState } from "react";
import { ChatList } from "./pages/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewChat } from "./components/NewChat/NewChat";
import { addChat, addMessage } from "./actions/actions";
import { Chat } from "./pages/Chat/Chat";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

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
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
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
              chatTitle={allChats[selectedChatIndex]?.title}
              messages={allChats[selectedChatIndex]?.messages}
              userName={userName}
              setUserName={setUserName}
              addMessageToChat={addMessageToChat}
            />
          }
        />
        <Route
          path="*"
          element={<h1 className="App__title">Page not found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
