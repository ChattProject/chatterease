import { useState } from "react";
import "./Chat.css";
import { InputMessage } from "../InputMessage/InputMessage";
import { ShowMessage } from "../ShowMessage/ShowMessage";
import { Link } from "react-router-dom";

export const Chat = ({ messages, userName, setUserName, addMessageToChat }) => {
  const [message, setMessage] = useState("");
  const [userNameTemporary, setUserNameTemporary] = useState("");

  return (
    <>
      {" "}
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
