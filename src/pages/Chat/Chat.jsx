import { useState } from "react";
// import "./Chat.css";
import { Link } from "react-router-dom";
import { InputMessage } from "../../components/Chat/InputMessage/InputMessage";
import { ShowMessages } from "../../components/Chat/ShowMessages/ShowMessages";
import { CloseSession } from "../../components/Chat/CloseSession/CloseSession";

export const Chat = ({
  chat,
  // chatTitle,
  // messages,
  userName,
  addMessageToChat,
}) => {
  const [message, setMessage] = useState("");
  const [isClosingChat, setIsClosingChat] = useState(false);

  // const handleChatClose = () => {
  //   // Perform any necessary cleanup or actions before closing the chat
  //   setIsClosingChat(true);
  // };

  return (
    <>
      <div className="chatpage">
        <div className="chatpage__links">
          <div className="chatpage__chats chatpage__subtitle chatpage__subtitle_selected paragraph">
            <Link className="chatpage__link">Чати</Link>
          </div>
          <div className="chatpage__personal chatpage__subtitle paragraph">
            <Link to={"/direct"} className="chatpage__link">
              Особисті повідомлення
            </Link>
          </div>
        </div>

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
          </div>
          <ShowMessages
            messages={chat.messages}
            message={message}
            userName={userName}
          />

          <div className="chat__input">
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
              <InputMessage
                userName={userName}
                addMessageToChat={addMessageToChat}
                setMessage={setMessage}
                message={message}
              />
            )}
          </div>
        </div>
      </div>
      {isClosingChat && <CloseSession setIsClosingChat={setIsClosingChat} />}
    </>
  );
};
