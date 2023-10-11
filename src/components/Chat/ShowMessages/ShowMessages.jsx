import { useEffect, useRef, useState } from "react";
import up from "../../../images/chat/up.svg";

export const ShowMessages = ({ messages, message, userName }) => {
  const containerRef = useRef(null);
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
    if (containerRef.current && autoScroll) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setShowButtonUp(true);
    }
  }, [messages, autoScroll]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (containerRef.current) {
  //       const scrollTop = containerRef.current.scrollTop;
  //       const scrollHeight = containerRef.current.scrollHeight;
  //       const clientHeight = containerRef.current.clientHeight;
        
  //       // Розрахунок 5% від відстані від верху контейнера до верху прокрученого вмісту
  //       const fivePercent = (scrollHeight - clientHeight) * 0.05;
  
  //       setShowButtonUp(scrollTop > fivePercent);
        
  //       if (scrollTop + clientHeight >= scrollHeight - fivePercent) {
  //         setAutoScroll(true); // Автоматична прокрутка, коли користувач на дні
  //       } else {
  //         setAutoScroll(false); // Вимкнути автоматичну прокрутку, коли користувач прокручує вгору
  //       }
  //     }
  //   };
  
  //   if (containerRef.current) {
  //     containerRef.current.addEventListener("scroll", handleScroll);
  //   }
  
  //   return () => {
  //     if (containerRef.current) {
  //       containerRef.current.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);
  
  function getDate(posted) {
    const date = new Date(posted);

    const year = date.getFullYear();

    // const months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];

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
      <div className={`show_message ${userName && 'show_message_input'}`}>
        <div className={'show_message__messages'} ref={containerRef}>
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
