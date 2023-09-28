import React from "react";
import send from '../../../images/chat/send.svg';
import "./InputMessage.css";

export const InputMessage = ({
  addMessageToChat,
  userName,
  setMessage,
  message,
}) => {
  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && message.trim() !== "") {
      const messageData = {
        id: Date.now() + Math.random(),
        posted: new Date(),
        user: userName,
        text: message,
      };
      addMessageToChat(messageData);

      setMessage("");
      event.target.reset();
    }
  };

  return (
    <div className={"input-message"}>
      <form className={"input-message__form"} onSubmit={handleSubmit}>
          <input
            type={"text"}
            className={"input-message__input paragraph"}
            id={"text-message"}
            onChange={handleSetMessage}
            value={message}
            placeholder={"Повідомлення..."}
            required
          />
        <button type="submit" className={"input-message__button"}>
          <img src={send} alt="send" className="input-message__icon" />
        </button>
      </form>
    </div>
  );
};
