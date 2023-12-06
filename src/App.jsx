import "./App.css";
import "./style/style.scss";
// import axios from "axios";
import { connect } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { ChatList } from "./pages/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
// import { addChat, addMessage } from "./actions/actions";
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
import { addChat, fetchChats } from "./store/middleware/middlewareChats";
import { addMessage } from "./store/middleware/middlewareMessages";

import { updateChats } from "./store/actions/actionsChats";
import { fetchUsers } from "./store/middleware/middlewareUsers";
import { updateUsers } from "./store/actions/actionsUsers";
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);
  const selectChats = (state) => state.chats.chats;
  const allChats = useSelector(selectChats);

  const [userName, setUserName] = useState("");
  // const [userId, setUserId] = useState(-1);
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const [selectedChatTitle, setSelectedChatTitle] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(-1);
  const [previousChat, setPreviousChat] = useState(-1);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [chatMenu, setChatMenu] = useState(false);
  const [mobileChatsMenu, setMobileChatsMenu] = useState(false);

  useEffect(() => {
    if (allChats) {
      allChats.forEach((chat, index) => {
        if (chat.id === selectedChatId) {
          setSelectedChatIndex(index);
          setSelectedChatTitle(chat.chatname);
        }
      });
    }
  }, [allChats, selectedChatId]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [userName]);

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
  };

  return (
    <div
      className="App"
      onClick={(event) => {
        removeBurgerMenu(event);
      }}
    >
      <Header
        setHeaderMenu={setHeaderMenu}
        headerMenu={headerMenu}
        mobileChatsMenu={mobileChatsMenu}
      />
      <div className="app__chat">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setMobileChatsMenu={setMobileChatsMenu} />}
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            exact
            path="/chats"
            element={
              <ChatList
                chatsList={allChats}
                setSelectedChatIndex={setSelectedChatIndex}
                userName={userName}
                selectedChatId={selectedChatId}
                setSelectedChatId={setSelectedChatId}
                setMobileChatsMenu={setMobileChatsMenu}
                setPreviousChat={setPreviousChat}
                previousChat={previousChat}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Login
                setUserName={setUserName}
                userName={userName}
                selectedChatId={selectedChatId}
              />
            }
          />
          <Route
            exact
            path="/newchat"
            element={
              <NewChat
                addNewChat={addNewChat}
                setSelectedChatId={setSelectedChatId}
                selectedChatIndex={selectedChatIndex}
                selectedChatId={selectedChatId}
                allChats={allChats}
              />
            }
          />
          <Route exact path="/endchats" element={<EndPage />} />
          <Route
            exact
            path="/rules"
            element={
              <Rules
                setMobileChatsMenu={setMobileChatsMenu}
                selectedChatId={selectedChatId}
              />
            }
          />
          {/* <Route exact path="/support" element={<SupportForm />} /> */}
          <Route
            exact
            path="/support"
            element={
              <SupportForm
                setMobileChatsMenu={setMobileChatsMenu}
                selectedChatId={selectedChatId}
              />
            }
          />
          <Route
            exact
            path="/direct"
            element={<PersonalMessage selectedChatId={selectedChatId} />}
          />
          <Route
            exact
            path="/chat/:chatId"
            element={
              <Chat
                // chat={allChats[selectedChatIndex]}
                chatTitle={selectedChatTitle}
                // messages={allChats[selectedChatIndex].messages}
                userName={userName}
                addMessageToChat={addMessageToChat}
                setChatMenu={setChatMenu}
                chatMenu={chatMenu}
                selectedChatId={selectedChatId}
                // userId={userId}
                users={users}
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
