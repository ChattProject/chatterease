import { Link } from "react-router-dom";
import warning from "../../../images/closeSession/warning.svg";

export const CloseSession = ({ setIsClosingChat }) => {
  return (
    <>
      <div className="close">
        <div className="close__content">
          <img src={warning} alt="warning" className="close__icon" />
          <div className="close__header">
            <div className="close__title title-usual">Завершення сесії</div>
            <button
              type="button"
              className="btn-close chat__close"
              aria-label="Close"
              onClick={() => setIsClosingChat(false)}
            ></button>
          </div>

          <div className="close__question paragraph">
            Ви впевнені, що хочете завершити сесію і закрити всі повідомлення?{" "}
          </div>
          <div className="close__buttons">
            <button className="close__button close__button_yes button-default">
              <Link to={"/endchats"}>Так, звичайно</Link>
            </button>
            <button
              className="close__button close__button_no button-default"
              onClick={() => setIsClosingChat(false)}
            >
              Ні, продовжити спілкування
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
