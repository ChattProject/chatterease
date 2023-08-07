import './ChatList.css';
import { useState } from "react";
import { Chat } from "../Chat/Chat";
import { useDispatch } from "react-redux";
import { addChat, addMessage } from "../../actions/actions";
import { NewChat } from "../NewChat/NewChat";

export const ChatList = ({ chatsList, userName, setUserName }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [newChatCheck, setNewChatCheck] = useState(false);

  console.log(chatsList, "list");
  const dispatch = useDispatch();

  const addMessageToChat = (message) => {
    dispatch(addMessage(selectedChatIndex, message));
  };

  const addNewChat = (title) => {
    const newChat = {
      id: Date.now(),
      title: title,
      messages: [],
    };
    dispatch(addChat(newChat));
  };

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
                <button onClick={() => handleGoButtonClick(index)}>Go!</button>
              </li>
            ))}
          </ul>
          <div>
            <div>Or create your own chat</div>
            <button onClick={() => setNewChatCheck(true)}>Add chat</button>
            {newChatCheck && <NewChat addNewChat={addNewChat} setNewChatCheck={setNewChatCheck}/>}
          </div>
          {selectedChatIndex !== null && (
            <Chat
              list={chatsList[selectedChatIndex].messages}
              userName={userName}
              setUserName={setUserName}
              addMessageToChat={addMessageToChat}
            />
          )}
        </div>
      </div>
    </>
  );
};
