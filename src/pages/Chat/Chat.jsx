import { useRef, useState } from "react";
// import "./Chat.css";
import { Link } from "react-router-dom";
import { InputMessage } from "../../components/Chat/InputMessage/InputMessage";
import { ShowMessages } from "../../components/Chat/ShowMessages/ShowMessages";
import { CloseSession } from "../../components/Chat/CloseSession/CloseSession";
import { ChatLinks } from "../../components/ChatLinks/ChatLinks";

export const Chat = ({
  chat,
  // chatTitle,
  // messages,
  userName,
  addMessageToChat,
  setChatMenu,
  chatMenu,
  selectedChatId
}) => {
  const [message, setMessage] = useState("");
  const [isClosingChat, setIsClosingChat] = useState(false);

  const containerRef = useRef(null);

  // const scrollToBottom = () => {
  //   containerRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "end",
  //     inline: "nearest",
  //   });
  // };
  const scrollToBottom = () => {
    const container = containerRef.current;
  
    if (container) {
      if ('scrollIntoView' in container) {
        // Check if smooth scrolling is supported
        container.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        const keyboardHeight = window.innerHeight - document.documentElement.clientHeight;
        const targetScrollPosition = container.getBoundingClientRect().bottom - keyboardHeight;
  
        // Use window.scrollTo to scroll the entire page
        window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleChatClose = () => {
    setIsClosingChat(true);
    setChatMenu(false);
  };

  return (
    <>
      <div className="chatpage">
        <ChatLinks chatId={selectedChatId}/>

        <div className="chatpage__chat chat">
          <div className="chat__header">
            <div className="chat__title">
              <div className="chat__info">
                <div className="chat__name">{chat.title}</div>
                <div className="chat__count paragraph">
                  {chat.messages.length === 0
                    ? "немає повідомлень"
                    : `${chat.messages.length} повідомлень`}
                </div>
              </div>
              <button
                type="button"
                className="btn-close chat__close"
                aria-label="Close"
                onClick={() => setIsClosingChat(true)}
              ></button>
            </div>

            <Link to={"/chats"} className="chat__back paragraph">
              Обрати інший чат
            </Link>

            <div className="chat__flexiblemenu flexiblemenu ">
              <button
                className="flexiblemenu__dots"
                onClick={(event) => {
                  event.stopPropagation();
                  setChatMenu(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                    fill="#292929"
                  />
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#292929"
                  />
                  <path
                    d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
                    fill="#292929"
                  />
                </svg>
              </button>
              {chatMenu && (
                <div
                  className="flexiblemenu__links"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flexiblemenu__search flexiblemenu__item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flexiblemenu__icon"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.9999 21.0004L16.6499 16.6504"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flexiblemenu__title">Пошук</div>
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={handleChatClose}
                    className="flexiblemenu__close flexiblemenu__item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flexiblemenu__icon"
                    >
                      <path
                        d="M12.0004 10.5866L6.70741 5.29357C6.5188 5.11141 6.2662 5.01062 6.00401 5.0129C5.74181 5.01517 5.491 5.12034 5.30559 5.30575C5.12018 5.49116 5.01501 5.74197 5.01273 6.00417C5.01045 6.26636 5.11125 6.51897 5.29341 6.70757L10.5864 12.0006L5.29341 17.2936C5.11125 17.4822 5.01045 17.7348 5.01273 17.997C5.01501 18.2592 5.12018 18.51 5.30559 18.6954C5.491 18.8808 5.74181 18.986 6.00401 18.9882C6.2662 18.9905 6.5188 18.8897 6.70741 18.7076L12.0004 13.4146L17.2934 18.7076C17.482 18.8897 17.7346 18.9905 17.9968 18.9882C18.259 18.986 18.5098 18.8808 18.6952 18.6954C18.8806 18.51 18.9858 18.2592 18.9881 17.997C18.9904 17.7348 18.8896 17.4822 18.7074 17.2936L13.4144 12.0006L18.7074 6.70757C18.8029 6.61532 18.8791 6.50498 18.9315 6.38297C18.9839 6.26097 19.0115 6.12975 19.0127 5.99697C19.0138 5.86419 18.9885 5.73251 18.9382 5.60962C18.8879 5.48672 18.8137 5.37507 18.7198 5.28117C18.6259 5.18728 18.5143 5.11303 18.3914 5.06275C18.2685 5.01247 18.1368 4.98717 18.004 4.98832C17.8712 4.98947 17.74 5.01706 17.618 5.06947C17.496 5.12188 17.3857 5.19806 17.2934 5.29357L12.0004 10.5866Z"
                        fill="#292929"
                      />
                    </svg>
                    <div className="flexiblemenu__title">Вийти з чату</div>
                  </button>
                </div>
              )}
            </div>
          </div>

          <ShowMessages
            messages={chat.messages}
            message={message}
            userName={userName}
            containerRef={containerRef}
            scrollToBottom={scrollToBottom}
          />
          {userName === "" ? (
            <div className="chat__login">
              <div className="chat__login_text paragraph">
                Щоб писати повідомлення - введи свій унікальний логін
              </div>
              <button className="chat__button_input button-green">
                <Link to={"/login"} className="chat__input-link">
                  Ввести логін
                </Link>
              </button>
            </div>
          ) : (
            <div className="chat__input">
              <InputMessage
                userName={userName}
                addMessageToChat={addMessageToChat}
                setMessage={setMessage}
                message={message}
                containerRef={containerRef}
                scrollToBottom={scrollToBottom}
              />
            </div>
          )}
        </div>
      </div>
      {isClosingChat && <CloseSession setIsClosingChat={setIsClosingChat} />}
    </>
  );
};
