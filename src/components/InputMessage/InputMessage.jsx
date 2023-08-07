import React from "react";
import "./InputMessage.css";

export const InputMessage = ({
  addMessageToChat,
  userName,
  setUserName,
  setMessage,
  message,
  userNameTemporary,
  setUserNameTemporary,
}) => {

  const handleSetUserName = () => {
    const inputName = document.querySelector("#name-message");
    setUserName(inputName.value);
  };

  const handlesetUserNameTemporary = (event) => {
    setUserNameTemporary(event.target.value);
  };

  const removeUserName = () => {
    setUserName("");
  };

  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((userName || userNameTemporary) && message.trim() !== "") {
      const messageData = {
        id: Date.now() + Math.random(),
        posted: new Date(),
        user: userNameTemporary || userName,
        text: message,
      };
      addMessageToChat(messageData);

      setMessage("");
      setUserNameTemporary("");
      event.target.reset();
    }
  };

  return (
    <div className={"InputMessage container"}>
      <form className={"InputMessage__form-message form-message"} onSubmit={handleSubmit}>
        <div className={"form-message__name name-message"}>
          {userName ? (
            <>
              <div>Your name: {userName}</div>
              <button className={"name-message__remove"} onClick={removeUserName}>
                Remove name
              </button>
            </>
          ) : (
            <>
              <label className={"name-message__label"} htmlFor={"name-message"}>
                Your name
              </label>
              <input
                type={"text"}
                className={"name-message__input"}
                id={"name-message"}
                onChange={handlesetUserNameTemporary}
                placeholder={"Type your name..."}
                required={!userNameTemporary}
              />
              <input
                type={"button"}
                className={"name-message__saved"}
                onClick={handleSetUserName}
                value={"Save name"}
              />
            </>
          )}
        </div>
        <div className={"form-message__message text-message"}>
          <label className={"text-message__label"} htmlFor={"text-message"}>
            Your message
          </label>
          <input
            type={"text"}
            className={"text-message__input"}
            id={"text-message"}
            onChange={handleSetMessage}
            value={message}
            placeholder={"Type your message..."}
            required
          />
        </div>
        <button type="submit" className={"name-message__button"}>
          Add message
        </button>
      </form>
    </div>
  );
};
