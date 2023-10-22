import "./App.css";
import "./style/style.scss";
import { useEffect, useState } from "react";
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
// import { Support } from "./pages/Support/Support";
import { SupportForm } from "./pages/Support/SupportForm";
import { Rules } from "./pages/Rules/Rules";
import { PersonalMessage } from "./pages/PersonalMessage/PersonalMessage";

function App() {
  const allChats = useSelector((state) => state);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const [selectedChatId, setSelectedChatId] = useState(-1);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [chatMenu, setChatMenu] = useState(false);

  useEffect(() => {
    allChats.forEach((chat, index) => {
      if (chat.id === selectedChatId) {
        setSelectedChatIndex(index);
      }
    });
  }, [allChats, selectedChatId]);
  

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
  };

  const addMessageToChat = (message) => {
    dispatch(addMessage(selectedChatIndex, message));
  };

  const removeBurgerMenu = (event) => {
    event.stopPropagation();
    setHeaderMenu(false);
    setChatMenu(false);
  }

  return (
    <div className="App" onClick={(event) => {removeBurgerMenu(event)}}>
      <Header setHeaderMenu={setHeaderMenu} headerMenu={headerMenu} />
      <div className="app__chat" >
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
            element={
              <NewChat
                addNewChat={addNewChat}
                setSelectedChatId={setSelectedChatId}
                selectedChatIndex={selectedChatIndex}
              />
            }
          />
          <Route exact path="/endchats" element={<EndPage />} />
          <Route exact path="/rules" element={<Rules />} />
          {/* <Route exact path="/support" element={<SupportForm />} /> */}
          <Route exact path="/support" element={<SupportForm />} />
          <Route exact path="/direct" element={<PersonalMessage />} />
          <Route
            exact
            path="/chat/:chatId"
            element={
              <Chat
                chat={allChats[selectedChatIndex]}
                // chatTitle={allChats[selectedChatIndex].title}
                // messages={allChats[selectedChatIndex].messages}
                userName={userName}
                addMessageToChat={addMessageToChat}
                setChatMenu={setChatMenu}
                chatMenu={chatMenu}
              />
            }
          />
          <Route
            path="*"
            element={<h1 className="App__title">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
