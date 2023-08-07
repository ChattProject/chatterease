import { useState } from "react";
import { InputMessage } from "../InputMessage/InputMessage";
import { ShowMessage } from "../ShowMessage/ShowMessage";

export const Chat = ({ list, userName, setUserName, addMessage }) => {
  const [message, setMessage] = useState("");
  const [userNameTemporary, setUserNameTemporary] = useState("");

  console.log(userName);

  return (
    <>
      <ShowMessage
        messages={list}
        message={message}
        userName={userName}
        userNameTemporary={userNameTemporary}
      />
      <InputMessage
        userName={userName}
        setUserName={setUserName}
        addMessage={addMessage}
        setMessage={setMessage}
        userNameTemporary={userNameTemporary}
        setUserNameTemporary={setUserNameTemporary}
      />
    </>
  );
};
