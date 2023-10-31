import { Link } from "react-router-dom";

export const ChatLinks = ({ activeLink, setActiveLink }) => {
  console.log(activeLink);

  const handleActivePersonal = () => {
    setActiveLink("personal");
  };

  return (
    <div className="chatlinks">
      <div
        className={`chatlinks__chats chatlinks__subtitle paragraph ${
          activeLink === "chats" ? "chatlinks__subtitle_selected" : ""
        }`}
      >
        <Link className="chatlinks__link" to={"/chats"}>
          Чати
        </Link>
      </div>
      <div
        className={`chatlinks__chats chatlinks__subtitle paragraph ${
          activeLink === "personal" ? "chatlinks__subtitle_selected" : ""
        }`}
      >
        <Link
          to={"/direct"}
          className="chatlinks__link"
          onClick={handleActivePersonal}
        >
          <span className="chatlinks__personal_all">Особисті повідомлення</span>
          <span className="chatlinks__personal_hidden">Особисті</span>
        </Link>
      </div>
    </div>
  );
};
