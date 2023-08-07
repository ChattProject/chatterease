import "./ChatList.css";
import { Link } from "react-router-dom";

export const ChatList = ({
  chatsList,
  setSelectedChatIndex,
}) => {
  const handleGoButtonClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <div className="ChatList">
        <div>
          <div>You can choose any chat</div>
          <ul>
            {chatsList.map((chat, index) => (
              <li key={chat.id}>
                <div>{chat.title}</div>
                <Link to={`/chat/${chat.title.toLowerCase()}`}>
                  <button onClick={() => handleGoButtonClick(index)}>
                    Go!
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div>Or create your own chat</div>
            <Link to={"/newchat"}>
              <button>Add chat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
