import React, { useState } from "react";
import "./EnterWindow.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const EnterWindow = ({ userName, setUserName }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [setUserName]);

  const handleSetName = () => {
    setUserName(inputValue);
    sessionStorage.setItem("userName", inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      handleSetName();
      navigate(-1);
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
          {/* <button type="button" onClick={handleDontsetUserName}>
            Do it later
          </button> */}
        </Link>
      </form>
    </div>
  );
};
