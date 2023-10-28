import { useEffect, useRef, useState } from "react";
import up from "../../../images/chat/up.svg";

export const ShowMessages = ({ messages, message, userName, containerRef, scrollToBottom }) => {
  // const containerRef = useRef(null);
  const messagesRef = useRef(null);
  const [showButtonUp, setShowButtonUp] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  const goToTop = () => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setShowButtonUp(false);
  };

  const goToBottom = () => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setShowButtonUp(true);
  };

  useEffect(() => {
    if (containerRef.current) {
      setShowButtonUp(true);
    }
    scrollToBottom(); // Move scrollToBottom here
  }, [messages]); // Watch for changes in the 'messages' prop
  

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
        <div className={"show_message__messages"} ref={containerRef}>
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
          {messages?.map((card) => {
            return (
              <div
                className={`show_message__message  message ${
                  userName === card.user && "message_right"
                } ${card.id === messages.length - 1 && "message__last"}`}
                key={card.id}
              >
                <div className="message__name">{card.user}</div>
                <div className="message__text">{card.text}</div>
                <div className="message__date">{getDate(card.posted)}</div>
              </div>
            );
          })}
        </div>
        {/* {message && <div>{userName} is typing...</div>} */}
      </div>
    </>
  );
};
