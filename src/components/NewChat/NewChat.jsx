import "./NewChat.css";
import { useState } from "react";

export const NewChat = ({ addNewChat, setNewChatCheck }) => {
  const [newChatTitle, setNewChatTitle] = useState("");

  const handleSetNewChatTitle = (event) => {
    setNewChatTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newChatTitle.trim() !== "") { 
      addNewChat(newChatTitle);
      setNewChatTitle(""); 
      setNewChatCheck(false);
    }
  };

  return (
    <div className="NewChat">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newChat_name">Chat's name:</label>
        <input
          type="text"
          placeholder="You can create any chat"
          id="newChat_name"
          value={newChatTitle} 
          onChange={handleSetNewChatTitle}
          required
        />
        <button type="submit">Create chat</button>
      </form>
    </div>
  );
};
