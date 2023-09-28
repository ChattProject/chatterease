import "./App.css";
import './style/style.scss';
import { useState } from "react";
import { ChatList } from "./pages/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { addChat, addMessage } from "./actions/actions";
import { Chat } from "./pages/Chat/Chat";
// import { Header } from "./components/Header/Header";

import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { NewChat } from "./pages/NewChat/NewChat";
import { Login } from "./pages/Login/Login";
import { EndPage } from "./pages/EndPage/EndPage";
import { Support } from "./pages/Support/Support";
import { Rules } from "./pages/Rules/Rules";
import { PersonalMessage } from "./pages/PersonalMessage/PersonalMessage";

function App() {
  const allChats = useSelector((state) => state);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
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
              userName={userName}
            />
          }
        />
        <Route
          exact
          path="/login"
          element={<Login setUserName={setUserName} userName={userName} />}
        />
        <Route
          exact
          path="/newchat"
          element={<NewChat addNewChat={addNewChat} />}
        />
        <Route exact path="/endchat" element={<EndPage />} />
        <Route exact path="/rules" element={<Rules />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/direct" element={<PersonalMessage />} />
        <Route
          exact
          path="/chat/:chatTitle"
          element={
            <Chat
              chatTitle={allChats[selectedChatIndex]?.title}
              messages={allChats[selectedChatIndex]?.messages}
              userName={userName}
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
