import "./App.css";
import "./_reset.css";
import { useEffect, useState } from "react";
import { EnterWindow } from "./components/EnterWindow/EnterWindow";
import { ChatList } from "./components/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const allChats = useSelector((state) => state);
  const dispatch = useDispatch();

  const [enter, setEnter] = useState(false);
  const [userName, setUserName] = useState("none");

  const removeUserName = () => {
    setUserName("");
  };

  return (
    <div className="App">
      <header>
        <div>
          HI{userName === "none" || userName === "" ? "!" : `, ${userName}!`}
        </div>
        {(userName !== "none" && userName !== "") && (
          <button onClick={removeUserName}>Quit</button>
        )}
      </header>
      {!enter ? (
        <EnterWindow
          setEnter={setEnter}
          userName={userName}
          setUserName={setUserName}
        />
      ) : (
        <>
          <ChatList
            chatsList={allChats}
            userName={userName}
            setUserName={setUserName}
          />
        </>
      )}
    </div>
  );
}

export default App;
