import { useState } from "react";
import { Chat } from "../Chat/Chat";

export const ChatList = ({ chatsList, userName, setUserName }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const handleGoButtonClick = (index) => {
    setSelectedChatIndex(index);
  };
  const addMessage = (message) => {
    chatsList[selectedChatIndex].messages.push(message);
    localStorage.setItem("chatsList", JSON.stringify(chatsList));
    console.log(message, "meeeeeeeeee");
  };

  return (
    <>
      <div>
        <div>
          <div>You can choose any chat</div>
          <ul>
            {chatsList.map((chat, index) => (
              <li key={chat.id}>
                <div>{chat.title}</div>
                <button onClick={() => handleGoButtonClick(index)}>Go!</button>
              </li>
            ))}
          </ul>
          {selectedChatIndex !== null && (
            <Chat
              list={chatsList[selectedChatIndex].messages}
              userName={userName}
              setUserName={setUserName}
              addMessage={addMessage}
            />
          )}
        </div>
      </div>
    </>
  );
};
