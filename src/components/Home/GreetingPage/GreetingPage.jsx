// import './GreetingPage.scss'

import { GreetingDots } from "../GreetingDots/GreetingDots";

export const GreetingPage = ({
  choosedPageIndex,
  page,
  setChoosedPage,
  setWelcome,
  setGreeting,
  handlePageClick,
}) => {
  return (
    <>
      <div className="greetings-border">
        <div className="greetings">
          <img
            src={require("../../../images/greeting/" + page.image)}
            alt="human"
            className="greetings__image"
          />
          <div className="greetings__text">
            <div className="greetings__title">{page.header}</div>
            <div className="greetings__description">{page.text}</div>
          </div>

          {/* <ul className="greeting__dots">
            {[0, 1, 2].map((item) => (
              <li key={item}>
                <button
                  className={`greeting__dot ${item === choosedPageIndex ? 'active' : ''}`}
                  onClick={() => handlePageClick(item)}
                ></button>
              </li>
            ))}
          </ul> */}

          <GreetingDots
            choosedPage={choosedPageIndex}
            handlePageClick={handlePageClick}
          />

          <div className="greetings__buttons">
            {choosedPageIndex !== 2 ? (
              <div className="greetings__buttons_two">
                <button
                  className="greetings__button button-green"
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
                  className="greetings__button button-default"
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
                className="greetings__button_start button-green"
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
      </div>
    </>
  );
};
