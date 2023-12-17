import React, { useEffect, useState, useRef } from "react";
import up from "../../../images/chat/up.svg";
export const ShowMessages = ({
  messages,
  message,
  userName,
  containerRef,
  searchInChat,
  setSearchNothingVisible
}) => {
  const [showButtonUp, setShowButtonUp] = useState(false);
  const lastMessageRef = useRef(null);
const scrollToLastMessage = () => {
  if (lastMessageRef.current) {
    lastMessageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
};
  useEffect(() => {
    const hasSearchInChat = messages.some((message) =>
      message.content.includes(searchInChat)
    );
    setSearchNothingVisible(!hasSearchInChat);
    scrollToLastMessage();
  }, [messages, searchInChat, setSearchNothingVisible]);
  const goToTop = () => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setShowButtonUp(false);
  };
  const goToBottom = () => {
    scrollToLastMessage();
    setShowButtonUp(true);
  };
  function getDate(posted) {
    const date = new Date(posted);
    const year = date.getFullYear();
    function fullNumber(number) {
      if (number.toString().length === 1) {
        return `0${number}`;
      } else {
        return number;
      }
    }
    const day = fullNumber(date.getDate());
    const month = fullNumber(date.getMonth() + 1);
    const hours = fullNumber(date.getHours());
    const minutes = fullNumber(date.getMinutes());
    const seconds = fullNumber(date.getSeconds());
    return `${hours}:${minutes}:${seconds} ${day}/${`${month}`}/${year}`;
  }
  return (
    <>
      <div className={`show_message ${userName && "show_message_input"}`}>
        <button
          className={`show_message__button ${
            showButtonUp
              ? "show_message__button_up"
              : "show_message__button_down"
          }
            ${userName ? "show_message__button_input" : ""}`}
          onClick={showButtonUp ? goToTop : goToBottom}
        >
          <img src={up} alt="up" className="show_message__up_icon" />
        </button>
        <div className={"show_message__messages"} ref={containerRef}>
          {messages?.map((card, index) => {
            if (card && card.content) {
              const words = card.content.split(" ");
              const isLastMessage = index === messages.length - 1;
              return (
                <div
                  className={`show_message__message  message ${
                    userName === card.author && "message_right"
                  } ${isLastMessage && "message__last"}`}
                  key={card.id + index}
                  ref={isLastMessage ? lastMessageRef : null}
                >
                  <div className="message__name">{card.author}</div>
                  <div className="message__text">
                    {words.map((word, index) => (
                      <span
                        key={index + word.length}
                        className={
                          searchInChat !== "" && word.includes(searchInChat)
                            ? "message__text_bold"
                            : ""
                        }
                      >
                        {`${word} `}
                      </span>
                    ))}
                  </div>
                  <div className="message__date">{getDate(card.timestamp)}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};
