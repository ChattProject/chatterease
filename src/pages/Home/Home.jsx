// import './Home.scss';
import { useState, React } from "react";
import { Welcome } from "../../components/Home/Welcome/Welcome";
import { Greeting } from "../../components/Home/Greeting/Greeting";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export const Home = ({setMobileChatsMenu}) => {
  const [welcome, setWelcome] = useState(false);
  const [greeting, setGreeting] = useState(true);

  const navigate = useNavigate();

useEffect(() => {
  setMobileChatsMenu(false);
}, []);

  useEffect(() => {
    if (welcome) {
      const timer = setTimeout(() => {
        navigate("/chats");
        setWelcome(false);
        setGreeting(true);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [welcome, navigate]);

  return (
    <>
      <div className="home">
        {greeting && (
          <div className="home__greeting">
            <Greeting setWelcome={setWelcome} setGreeting={setGreeting} />
          </div>
        )}
        {welcome && (
          <div className="home__welcome">
            <Welcome />
          </div>
        )}
      </div>
    </>
  );
};
