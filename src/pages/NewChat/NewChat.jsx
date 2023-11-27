import { Link, useNavigate } from "react-router-dom";
import "./NewChat.css";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";

export const NewChat = ({
  addNewChat,
  setSelectedChatId,
  selectedChatIndex,
  selectedChatId,
  allChats
}) => {
  const [newChatTitle, setNewChatTitle] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const handleSetNewChatTitle = (event) => {
    setNewChatTitle(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newChatTitle.trim() !== "") {
      const newChat = {
        chatname: newChatTitle,
      };

      addNewChat(newChat);
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
        navigate(`/chats`);
      }, 1000);

      setNewChatTitle("");
    }
  };

  return (
    <div className="newchat">
      {showLoader && <Loader />}
      <div className="newchat__window window">
        <Link to={"/chats"} className="btn-close newchat__close"></Link>
        <div className="newchat__header title-usual">
          Створіть власний чат для спілкування
        </div>
        <form onSubmit={handleSubmit} className="newchat__form">
          <label htmlFor="newchat_name" className="newchat__title paragraph">
            Введіть тему, на яку б хотіли поспілкуватися
          </label>
          <input
            type="text"
            className="newchat__input input paragraph"
            placeholder="3D моделювання..."
            id="newchat_name"
            value={newChatTitle}
            onChange={handleSetNewChatTitle}
            required
          />
          <div className="newchat__buttons">
            <button
              type="submit"
              className={`newchat__button newchat__submit button-default ${
                newChatTitle === "" ? "button-green_disabled" : "button-green"
              }`}
            >
              Почати спілкування
            </button>
            <button
              className="newchat__button newchat__return button-default"
              onClick={() => navigate(`/chats`)}
            >
              Повернутися до списку тем
            </button>
          </div>
        </form>
      </div>
      {/* {showLoader && <Loader />} */}
    </div>
  );
};
