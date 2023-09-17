import { useState } from "react";
import "./Chat.css";
import { InputMessage } from "../../components/InputMessage/InputMessage";
import { ShowMessage } from "../../components/ShowMessage/ShowMessage";
import { Link } from "react-router-dom";

export const Chat = ({ chatTitle, messages, userName, setUserName, addMessageToChat }) => {
  const [message, setMessage] = useState("");
  const [userNameTemporary, setUserNameTemporary] = useState("");

  return (
    <>
      {" "}
      <div>{chatTitle}</div>
      <div className="Chat">
        <Link to={"/chats"}>
          <button>
            Go back
          </button>
        </Link>
        <ShowMessage
          messages={messages}
          message={message}
          userName={userName}
          userNameTemporary={userNameTemporary}
        />
        <InputMessage
          userName={userName}
          setUserName={setUserName}
          addMessageToChat={addMessageToChat}
          setMessage={setMessage}
          message={message}
          userNameTemporary={userNameTemporary}
          setUserNameTemporary={setUserNameTemporary}
        />
      </div>
    </>
  );
};
