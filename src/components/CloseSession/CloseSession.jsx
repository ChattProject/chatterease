import warning from "../../images/closeSession/warning.svg";

export const CloseSession = ({ setIsClosingChat }) => {
  return (
    <>
      <div className="close">
        <div className="close__header">
          <img src={warning} alt="warning" className="close__icon" />
          <div className="close__title">Завершення сесії</div>
        </div>

        <div className="close__question">
          Ви впевнені, що хочете завершити сесію і закрити всі повідомлення?{" "}
        </div>
        <div className="close__buttons">
          <button className="close__button button-default">
            Так, звичайно
          </button>
          <button
            className="close__button button-default"
            onClick={() => setIsClosingChat(false)}
          >
            Ні, продовжити спілкування
          </button>
        </div>
      </div>
    </>
  );
};
