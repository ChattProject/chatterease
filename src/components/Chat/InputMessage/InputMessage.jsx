import React from "react";
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
    <div className={"InputMessage container"}>
      <form className={"InputMessage__form-message form-message"} onSubmit={handleSubmit}>
        <div className={"form-message__name name-message"}>
        </div>
        <div className={"form-message__message text-message"}>
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
