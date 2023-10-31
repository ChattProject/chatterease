import React from "react";
import send from "../../../images/chat/send.svg";
import "./InputMessage.css";

export const InputMessage = ({
  addMessageToChat,
  userName,
  setMessage,
  message,
  containerRef,
  scrollToBottom
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
      document.querySelector(".input-message__input").rows = 1;
  
      // Call scrollToBottom here to scroll to the bottom after adding a new message
      // scrollToBottom();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      // When Shift key is pressed, handle Enter key to send the message
      event.preventDefault(); // Prevent Enter key from creating a new line
    } else if (event.key === "Enter") {
      if (event.shiftKey) {
        // Shift+Enter should send the message
        handleSubmit(event);
      } else {
        // Enter without Shift should create a new line
        // Prevent form submission and add a new line character
        event.preventDefault();
        const textArea = event.target;
        const value = textArea.value;
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;

        textArea.value =
          value.substring(0, start) + "\n" + value.substring(end, value.length);

        textArea.selectionStart = textArea.selectionEnd = start + 1;
        textArea.rows = textArea.rows + 1;
      }
    }
  };

  return (
    <div className={"input-message"}>
      <form className={"input-message__form"} onSubmit={handleSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="input-message__emoji"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21ZM12 19C12.9193 19 13.8295 18.8189 14.6788 18.4672C15.5281 18.1154 16.2997 17.5998 16.9497 16.9497C17.5998 16.2997 18.1154 15.5281 18.4672 14.6788C18.8189 13.8295 19 12.9193 19 12C19 11.0807 18.8189 10.1705 18.4672 9.32122C18.1154 8.47194 17.5998 7.70026 16.9497 7.05025C16.2997 6.40024 15.5281 5.88463 14.6788 5.53284C13.8295 5.18106 12.9193 5 12 5C10.1435 5 8.36301 5.7375 7.05025 7.05025C5.7375 8.36301 5 10.1435 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C8.36301 18.2625 10.1435 19 12 19ZM8.05 14.197C7.883 13.72 8.152 13.206 8.651 13.047C9.151 12.888 9.69 13.146 9.856 13.622C9.916 13.796 10.081 14.109 10.351 14.418C10.777 14.906 11.307 15.182 12 15.182C12.693 15.182 13.223 14.906 13.65 14.418C13.92 14.108 14.083 13.796 14.144 13.622C14.31 13.146 14.85 12.888 15.349 13.047C15.848 13.206 16.117 13.72 15.951 14.197C15.7598 14.7068 15.4753 15.1765 15.112 15.582C14.348 16.458 13.306 17 12 17C10.694 17 9.652 16.458 8.888 15.582C8.52472 15.1765 8.2402 14.7068 8.049 14.197H8.05ZM9.5 11C9.10218 11 8.72064 10.842 8.43934 10.5607C8.15804 10.2794 8 9.89782 8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8C9.89782 8 10.2794 8.15804 10.5607 8.43934C10.842 8.72064 11 9.10218 11 9.5C11 9.89782 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89782 11 9.5 11ZM14.5 11C14.1022 11 13.7206 10.842 13.4393 10.5607C13.158 10.2794 13 9.89782 13 9.5C13 9.10218 13.158 8.72064 13.4393 8.43934C13.7206 8.15804 14.1022 8 14.5 8C14.8978 8 15.2794 8.15804 15.5607 8.43934C15.842 8.72064 16 9.10218 16 9.5C16 9.89782 15.842 10.2794 15.5607 10.5607C15.2794 10.842 14.8978 11 14.5 11Z"
            fill="#555454"
          />
        </svg>
        <span className="input-message__emoji_text">Maybe later :)</span>
        <textarea
          className="input-message__input paragraph"
          id="text-message"
          onChange={handleSetMessage}
          value={message}
          placeholder="Повідомлення..."
          required
          rows={1}
          onInput={(e) => {
            e.target.rows = 1;
            const lineHeight = parseInt(getComputedStyle(e.target).lineHeight);
            const rows = Math.floor(e.target.scrollHeight / lineHeight);
            e.target.rows = rows;
          }}
          onKeyDown={handleKeyDown}
        ></textarea>
        {/* <button type="submit" className="input-message__button"> */}
        <button
          type="submit"
          className={"input-message__button"}
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`"input-message__icon" ${
              message.length !== 0 && "input-message__icon_send"
            }`}
          >
            <path
              d="M6.97816 19.477C6.97816 20.848 8.62316 21.519 9.55516 20.527L21.5582 7.723C22.5182 6.695 21.8032 5 20.4092 5H3.49616C2.17816 5 1.50516 6.607 2.41816 7.572L6.97816 12.4V19.477ZM8.97116 18.212V11.585L3.85616 6.169C4.15916 6.491 3.93416 7.026 3.49616 7.026H19.4592L8.97116 18.212Z"
              fill="#ADADAD"
            />
            <path
              d="M8.41616 12.902L12.4262 10.952C12.6667 10.8303 12.8505 10.6199 12.9389 10.3653C13.0274 10.1106 13.0135 9.83159 12.9002 9.587C12.8471 9.46651 12.7703 9.35793 12.6743 9.26772C12.5784 9.17751 12.4653 9.10751 12.3418 9.06189C12.2183 9.01627 12.0868 8.99595 11.9553 9.00216C11.8238 9.00836 11.6948 9.04096 11.5762 9.098L7.56616 11.048C7.06916 11.29 6.85616 11.901 7.09116 12.412C7.14417 12.5327 7.22094 12.6415 7.31689 12.7319C7.41285 12.8223 7.52602 12.8925 7.64967 12.9382C7.77332 12.9839 7.90491 13.0043 8.0366 12.9981C8.16828 12.9918 8.29737 12.9592 8.41616 12.902Z"
              fill="#ADADAD"
            />
          </svg>
          {/* <img src={send} alt="send" className="input-message__icon" /> */}
        </button>
      </form>
    </div>
  );
};
