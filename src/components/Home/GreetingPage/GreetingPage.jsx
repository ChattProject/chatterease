export const GreetingPage = ({ choosedPageIndex, page, setChoosedPage, setWelcome, setGreeting }) => {
  return (
    <>
        <div className="greeting__page">
          <img
            src={require("../../../images/greeting/" +
              page.image)}
            alt="human"
            className="greeting__image"
          />
          <div className="greeting__text">
            <div className="greeting__title">
              {page.header}
            </div>
            <div className="greeting__description">
              {page.text}
            </div>
          </div>
          <div className="greeting__buttons">
            <button
              className="greeting__button"
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
              className="greeting__button"
              onClick={() => {
                setGreeting(false);
                setWelcome(true);
              }}
            >
              Пропустити
            </button>
          </div>
        </div>
    </>
  );
};
