import { useState } from "react";
import greetingPages from "../../../json/greeting.json";

export const Greeting = ({ setWelcome, setGreeting }) => {
  const [choosedPage, setChoosedPage] = useState(0);
  return (
    <>
      <div className="greeting">
        <div className="greeting__page">
          <img
            src={require("../../../images/greeting/" +
              greetingPages[choosedPage].image)}
            alt="human"
            className="greeting__image"
          />
          <div className="greeting__text">
            <div className="greeting__title">
              {greetingPages[choosedPage].header}
            </div>
            <div className="greeting__description">
              {greetingPages[choosedPage].text}
            </div>
          </div>
          <div className="greeting__buttons">
            <button
              className="greeting__button"
              onClick={() => {
                if (choosedPage === 2) {
                  setGreeting(false);
                  setWelcome(true);
                }
                setChoosedPage(choosedPage + 1);
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
        <ul className="greeting__numbers">
          {[0, 1, 2].map((item) => (
            <li key={item}>
              <button onClick={() => setChoosedPage(item)}>{item + 1}</button>
            </li>
          ))}
          {/* <li>
            <button onClick={setChoosedPage(0)}>1</button>
          </li>
          <li>
            <button onClick={setChoosedPage(1)}>2</button>
          </li>
          <li>
            <button onClick={setChoosedPage(2)}>3</button>
          </li> */}
        </ul>
      </div>
    </>
  );
};
