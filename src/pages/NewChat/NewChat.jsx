import { useNavigate } from "react-router-dom";
import "./NewChat.css";
import { useState } from "react";

export const NewChat = ({ addNewChat }) => {
  const [newChatTitle, setNewChatTitle] = useState("");
  const navigate = useNavigate();

  const handleSetNewChatTitle = (event) => {
    setNewChatTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newChatTitle.trim() !== "") {
      addNewChat(newChatTitle);
      setNewChatTitle("");
      navigate("/chats"); // Navigate to the '/chats' page after creating the chat
    }
  };

  return (
    <div className="NewChat">
      <div className="newchat__header">
        Створіть власний чат для спілкування
      </div>
      <form onSubmit={handleSubmit} className="newchat__form">
        <label htmlFor="newchat_name" className="newchat__title">
          Введіть тему, на яку б хотіли поспілкуватися
        </label>
        <input
          type="text"
          className="newchat__input"
          placeholder="3D моделювання..."
          id="newchat_name"
          value={newChatTitle}
          onChange={handleSetNewChatTitle}
          required
        />
        <button
          type="submit"
          className={`newchat__button ${
            newChatTitle === "" ? "button-green_disabled" : "button-green"
          }`}
        >
          Почати спілкування
        </button>
      </form>
    </div>
  );
};
