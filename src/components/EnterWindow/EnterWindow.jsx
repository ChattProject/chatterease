import React, { useState } from "react";
import "./EnterWindow.css";

export const EnterWindow = ({ setEnter, userName, setUserName }) => {
  const [inputName, setInputName] = useState("");

  const handleSetName = () => {
    setUserName(inputName);
    setEnter(true);
  };

  const handleDontSetUserName = () => {
    setUserName("");
    setEnter(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputName.trim() !== "") {
      handleSetName();
    }
  };

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  return (
    <div className="EnterWindow">
      <div className="EnterWindow__header">
        You can enter your name now or do it later
      </div>
      <form className="EnterWindow__form" onSubmit={handleSubmit}>
        <label htmlFor="form__user_name">Your name:</label>
        <input
          type="text"
          id="form__user_name"
          value={inputName}
          onChange={handleInputChange}
        />
        <button type="submit">Save name</button>
        <button type="button" onClick={handleDontSetUserName}>
          Do it later
        </button>
      </form>
    </div>
  );
};
