import "./ChatList.css";
import { Link } from "react-router-dom";

export const ChatList = ({ chatsList, setSelectedChatIndex }) => {
  const handleGoButtonClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <div className="ChatList">
        <div>
          <div>Обери тему і розпочни спілкування прямо зараз</div>
          <input type="text" name="search" id="search" />
          <ul>
            {chatsList.map((chat, index) => (
              <li key={chat.id}>
                <Link to={`/chat/${chat.title.toLowerCase()}`}>
                  <div onClick={() => handleGoButtonClick(index)}>
                    {chat.title}
                  </div>
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
      </div>
    </>
  );
};
