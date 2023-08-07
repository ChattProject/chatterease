import { useState } from "react";
import './Chat.css';
import { InputMessage } from "../InputMessage/InputMessage";
import { ShowMessage } from "../ShowMessage/ShowMessage";

export const Chat = ({ list, userName, setUserName, addMessageToChat }) => {
  const [message, setMessage] = useState("");
  const [userNameTemporary, setUserNameTemporary] = useState("");

  return (
    <>
      {" "}
      <div className="Chat">
        <ShowMessage
          messages={list}
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
