export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__title">
          <img src="icon" alt="chat" className="header__logo" />
          <div className="header__name">chatter ease</div>
        </div>
        <div className="header__additional">
          <div className="header__info header__rules">
            Правила користування
          </div>
          <div className="header__info header__help">
            Технічна підтримка
          </div>
        </div>
      </div>
    </>
  );
};
