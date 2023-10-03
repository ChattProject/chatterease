import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setUserName, userName }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorLength, setErrorLength] = useState(false);
  const [errorSymbols, setErrorSymbols] = useState(false);
  const navigate = useNavigate();

  const forbiddenSymbols = /[,<>/?"':-=+!@#$%^&*()]/;

  useEffect(() => {
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [setUserName]);

  useEffect(() => {
    if (inputValue.length > 2 && inputValue.length < 11 || inputValue.length === 0) {
      setErrorLength(false);
    } else {
      setErrorLength(true);
    }

    if (forbiddenSymbols.test(inputValue)) {
      setErrorSymbols(true);
    } else {
      setErrorSymbols(false);
    }
  }, [inputValue, forbiddenSymbols]);

  const handleSetName = () => {
    setUserName(inputValue);
    sessionStorage.setItem("userName", inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length > 2 && inputValue.length < 11) {
      setErrorLength(false);

      if (forbiddenSymbols.test(inputValue)) {
        setErrorSymbols(true);
      } else {
        handleSetName();
        navigate(-1);
        setErrorSymbols(false);
      }
    } else {
      setErrorLength(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="login">
        <div className="login__window window">
          <div className="login__title">Розпочни спілкування прямо зараз</div>
          <form action="submit" className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="login" className="login__text paragraph">
              Вигадай свій унікальний логін
            </label>
            <input
              type="text"
              placeholder="Логін"
              id="login"
              className={`login__name input paragraph ${
                errorLength || errorSymbols ? "login__name_error" : ""
              }`}
              value={inputValue}
              onChange={handleInputChange}
            />
            {errorLength && (
              <div className="login__error">Введіть від 3 до 10 символів</div>
            )}
            {errorSymbols && (
              <div className="login__error">{`Заборонені спеціальні символи: ,.<>/?':"-=+!@#$%^&*()`}</div>
            )}
            <button
              className={`login__button ${
                inputValue !== ""
                  ? "button-green"
                  : "button-green button-green_disabled"
              }`}
            >
              Почати спілкування
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
