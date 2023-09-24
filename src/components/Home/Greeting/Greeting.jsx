// import './Greeting.scss';
import { useState } from "react";
import greetingPages from "../../../json/greeting.json";
import { GreetingPage } from "../GreetingPage/GreetingPage";

export const Greeting = ({ setWelcome, setGreeting }) => {
  const [choosedPage, setChoosedPage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setChoosedPage(pageIndex);
  };

  return (
    <>
      <div className="greeting">
        {/* <div className="greeting__container"> */}
          <GreetingPage
            choosedPageIndex={choosedPage}
            page={greetingPages[choosedPage]}
            setChoosedPage={setChoosedPage}
            setWelcome={setWelcome}
            setGreeting={setGreeting}
          />
          <ul className="greeting__numbers">
            {[0, 1, 2].map((item) => (
              <li key={item}>
                <button
                  className={`greeting__btn ${
                    item === choosedPage ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(item)}
                >
                  {item + 1}
                </button>
              </li>
            ))}
          </ul>
        {/* </div> */}
      </div>
    </>
  );
};
