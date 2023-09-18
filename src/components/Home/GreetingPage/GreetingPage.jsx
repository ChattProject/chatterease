export const GreetingPage = ({
  choosedPageIndex,
  page,
  setChoosedPage,
  setWelcome,
  setGreeting,
}) => {
  return (
    <>
      <div className="greeting__page">
        <img
          src={require("../../../images/greeting/" + page.image)}
          alt="human"
          className="greeting__image"
        />
        <div className="greeting__text">
          <div className="greeting__title">{page.header}</div>
          <div className="greeting__description">{page.text}</div>
        </div>
        <div className="greeting__buttons">
          {choosedPageIndex !== 2 ? (
            <div className="greeting__buttons_two">
              <button
                className="greeting__button button-green"
                onClick={() => {
                  if (choosedPageIndex === 2) {
                    setGreeting(false);
                    setWelcome(true);
                  }
                  setChoosedPage(choosedPageIndex + 1);
                }}
              >
                Далі
              </button>
              <button
                className="greeting__button button-default"
                onClick={() => {
                  setGreeting(false);
                  setWelcome(true);
                }}
              >
                Пропустити
              </button>
            </div>
          ) : (
            <button
              className="greeting__button_start button-green"
              onClick={() => {
                setGreeting(false);
                setWelcome(true);
              }}
            >
              Старт
            </button>
          )}
        </div>
      </div>
    </>
  );
};
