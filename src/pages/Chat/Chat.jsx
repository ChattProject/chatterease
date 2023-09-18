import { useState } from "react";
// import "./Chat.css";
import { Link } from "react-router-dom";
import { InputMessage } from "../../components/Chat/InputMessage/InputMessage";
import { ShowMessages } from "../../components/Chat/ShowMessages/ShowMessages";
import { CloseSession } from "../../components/CloseSession/CloseSession";

export const Chat = ({ chatTitle, messages, userName, addMessageToChat }) => {
  const [message, setMessage] = useState("");
  const [isClosingChat, setIsClosingChat] = useState(false);

  const handleChatClose = () => {
    // Perform any necessary cleanup or actions before closing the chat
    setIsClosingChat(true);
  };

  return (
    <>
      <div className="chatpage">
        <div className="chatpage__links">
          <div className="chatpage__chats">Чати</div>
          <div className="chatpage__personal">
            <Link to={"/direct"} className="chatpage__link">
              Особисті повідомлення
            </Link>
          </div>
        </div>

        <div className="chatpage__chat chat">
          <div className="chat__header">
            <div className="chat__title">{chatTitle}</div>
            <Link to={"/chats"} className="chat__back">
              Обрати інший чат
            </Link>
          </div>
          <ShowMessages
            messages={messages}
            message={message}
            userName={userName}
          />

          <div className="chat__input">
            {userName === "" ? (
              <div className="chat__login">
                <div className="chat__login_text">
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
