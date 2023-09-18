import "./ChatList.css";
import { Link } from "react-router-dom";

export const ChatList = ({ chatsList, setSelectedChatIndex }) => {
  const handleGoButtonClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <div className="chatlist">
        <div className="chatlist__header">
          Обери тему і розпочни спілкування прямо зараз
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="chatlist__search"
        />
        <ul className="chatlist__list">
          {chatsList.map((chat, index) => (
            <li key={chat.id} className="chatlist__item">
              <Link
                to={`/chat/${chat.title.toLowerCase()}`}
                onClick={() => handleGoButtonClick(index)}
                className="chatlist__link"
              >
                {chat.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <Link to={"/newchat"}>Створити власний чат</Link>
          </div>
        </div>
      </div>
    </>
  );
};
