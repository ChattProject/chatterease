import React, { useState } from "react";
import "./EnterWindow.css";
import { Link, useNavigate } from "react-router-dom";

export const EnterWindow = ({ userName, setUserName }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSetName = () => {
    setUserName(inputValue);
  };

  const handleDontsetUserName = () => {
    setUserName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      handleSetName();
      navigate("/chats");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Save name</button>
        <Link to={"/chats"}>
          <button type="button" onClick={handleDontsetUserName}>
            Do it later
          </button>
        </Link>
      </form>
    </div>
  );
};
