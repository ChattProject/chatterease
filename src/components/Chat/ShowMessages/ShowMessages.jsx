import { useEffect, useRef, useState } from "react";
import up from "../../../images/chat/up.svg";

export const ShowMessages = ({
  messages,
  message,
  userName,
  containerRef,
  scrollToBottom,
  searchInChat,
  setSearchNothingVisible,
}) => {
  // const containerRef = useRef(null);
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {
    const hasSearchInChat = messages.some((message) =>
      message.content.includes(searchInChat)
    );
    setSearchNothingVisible(!hasSearchInChat);
    // scrollToBottom();
  }, [messages, searchInChat]);

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

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
          {messages?.map((card) => {
            const textArray = card.content
              .split(/(\n)/)
              .filter((text) => text !== "\n");

            return (
              <div
                className={`show_message__message  message ${
                  userName === card.author && "message_right"
                } ${card.id === messages.length - 1 && "message__last"}`}
                key={card.id}
              >
                <div className="message__name">{card.author}</div>
                <div className="message__text">
                  {textArray.map((text, index) => (
                    <span
                      key={index}
                      className={
                        searchInChat !== "" && text.includes(searchInChat)
                          ? "message__text_bold"
                          : ""
                      }
                    >
                      {`${text} `}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="message__date">{getDate(card.timestamp)}</div>
              </div>
            );
          })}
        </div>
        {/* {message && <div>{userName} is typing...</div>} */}
      </div>
    </>
  );
};
