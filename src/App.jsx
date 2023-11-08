import "./App.css";
import "./style/style.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchChats } from './store/actions/actionsChats.js';
import { useEffect, useState } from "react";
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
import { addChat } from "./store/middleware/middlewareNewChat";
import { addMessage } from "./store/middleware/middleNewMessage";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function App() {
  // useEffect(() => {
  //   fetchChats();
  // }, [fetchChats])
  // const selectChats = (state) => state.chats;
  // const allChats = useSelector(selectChats);

const [allChats, setAllChats] = useState([])
useEffect(() => {
  fetch('https://chat-service-kzyq.onrender.com/api/chats/')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .then(data => {
      setAllChats(data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  const dispatch = useDispatch();

  console.log(allChats, 'chatssssss')

  const [userName, setUserName] = useState("");
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const [selectedChatId, setSelectedChatId] = useState(-1);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [chatMenu, setChatMenu] = useState(false);
  const [mobileChatsMenu, setMobileChatsMenu] = useState(false);

  useEffect(() => {
    allChats.forEach((chat, index) => {
      if (chat.id === selectedChatId) {
        setSelectedChatIndex(index);
      }
    });
  }, [allChats, selectedChatId]);

  // const addNewChat = (newChat) => {
  //   dispatch(addChat(newChat));
  // };

  // const addMessageToChat = (message) => {
  //   dispatch(addMessage(selectedChatIndex, message));
  // };
  // useEffect(() => {
  //   localStorage.setItem("allChats", JSON.stringify(allChats));
  // }, [allChats]);


  useEffect(() => {
    // Викликати Redux action для завантаження чатів при завантаженні компоненту
    dispatch(fetchChats());
  }, []); // Порожній масив означає, що цей ефект буде викликано лише один раз при завантаженні компоненту

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));

    // Get the updated state after adding a chat
    // const updatedAllChats = useSelector((state) => state);

    // Save the updated state to localStorage
    // localStorage.setItem('allChats', JSON.stringify(allChats));
  };

  const addMessageToChat = (message) => {
    dispatch(addMessage(selectedChatIndex, message));

    // Get the updated state after adding a message
    // const updatedAllChats = useSelector((state) => state);

    // Save the updated state to localStorage
    // localStorage.setItem('allChats', JSON.stringify(allChats));
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
                chat={allChats[selectedChatIndex]}
                // chatTitle={allChats[selectedChatIndex].title}
                // messages={allChats[selectedChatIndex].messages}
                userName={userName}
                addMessageToChat={addMessageToChat}
                setChatMenu={setChatMenu}
                chatMenu={chatMenu}
                selectedChatId={selectedChatId}
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
