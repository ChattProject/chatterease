import rules from "../../json/rules.json";
import { useNavigate } from "react-router-dom";

// import './Rules.scss';
import NB from "../../images/nb.png"
import { useEffect } from "react";

export const Rules = ({setMobileChatsMenu, selectedChatId}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setMobileChatsMenu(true);
  }, []);

  const handleGoBack = () => {
    if (selectedChatId > -1) {
      navigate(`/chat/${selectedChatId}`);
    } else {
      navigate("/chats");
    }
  };

  return (
    <>
      <div className="rules">
        <div className="rules__title">Правила користування Chatter easy</div>
        <div className="rules__nb">
          <div className="rules__content">
            <img className="rules__icon " src={NB} alt="nota bene" />
            <h2 className="rules__subtitle">Важливо</h2>
          </div>
          
          <p className="rules__rule">
            Ми не збираємо та не зберігаємо інформацію про твою IP адресу, вона видаляється автоматично після завершення сесії
          </p>
        </div>
        <ul className="rules__list">
          {rules.map((rule) => (
            <li className="rules__item" key={rule.id}>
              <div className="rules__dot"></div>
              <div className="rules__rule">{rule.rule}</div>
            </li>
          ))}
        </ul>
        <button
          className="rules__button button-green"
          onClick={handleGoBack}
        >
          Повернутися в чат
        </button>
      </div>
    </>
  );
};
