import { useState } from "react";
import "./InputMessage.css";

export const InputMessage = ({
  addMessage,
  userName,
  setUserName,
  setMessage,
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
    const inputMessage = document.querySelector("#text-message");
    addMessage({
      id: Date.now() + Math.random(),
      posted: new Date(),
      user: userNameTemporary || userName,
      text: inputMessage.value,
    });

    setMessage('');
    setUserNameTemporary('');
    event.preventDefault();
    document.forms[0].reset();
  };

  return (
    <>
      <div className={"input_message container"}>
        <form
          className={"input_message__form-message form-message"}
          //   onSubmit={(event) => handleSubmit(event)}
        >
          <div className={"form-message__name name-message"}>
            {userName ? (
              <>
                <div>Your name: {userName}</div>
                <button
                  className={"name-message__remove"}
                  onClick={removeUserName}
                >
                  Remove name
                </button>
              </>
            ) : (
              <>
                <label
                  className={"name-message__label"}
                  htmlFor={"name-message"}
                >
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
              placeholder={"Type your message..."}
              //   required={"true"}
            />
          </div>
          <button
            // type={"submit"}
            className={"name-message__button"}
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Add message
          </button>
        </form>
      </div>
    </>
  );
};
