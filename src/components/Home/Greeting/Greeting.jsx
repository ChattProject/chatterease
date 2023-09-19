import { useState } from "react";
import greetingPages from "../../../json/greeting.json";
import { GreetingPage } from "../GreetingPage/GreetingPage";

import './Greeting.scss'

export const Greeting = ({ setWelcome, setGreeting }) => {
  const [choosedPage, setChoosedPage] = useState(0);
  return (
    <>
      <div className="greeting">
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
              <button className="greeting__btn" onClick={() => setChoosedPage(item)}>{item + 1}</button>
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
