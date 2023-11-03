import { Link, NavLink } from "react-router-dom";

export const ChatLinks = ({chatId}) => {

  return (
    <div className="chatlinks">
      <NavLink
        to={`/chat/${chatId}`}
        className={({ isActive }) =>
          isActive
            ? "chatlinks__chats chatlinks__subtitle paragraph chatlinks__subtitle_selected"
            : "chatlinks__chats chatlinks__subtitle paragraph"
        }
      >
        <div className="chatlinks__link">Чати</div>
      </NavLink>
      <NavLink
        to={"/direct"}
        className={({ isActive }) =>
          isActive
            ? "chatlinks__chats chatlinks__subtitle paragraph chatlinks__subtitle_selected"
            : "chatlinks__chats chatlinks__subtitle paragraph"
        }
      >
        <div className="chatlinks__link">
          <span className="chatlinks__personal_all">Особисті повідомлення</span>
          <span className="chatlinks__personal_hidden">Особисті</span>
        </div>
      </NavLink>
    </div>
  );
};
