import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setUserName, userName }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorLength, setErrorLength] = useState(false);
  const [errorSymbols, setErrorSymbols] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [setUserName]);

  useEffect(() => {
    if (inputValue.length > 3 && inputValue.length < 10) {
      setError(false);
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
    if (inputValue.length > 3 && inputValue.length < 10) {
      handleSetName();
      setError(false);
      navigate(-1);
    } else {
      setError(true);
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
              className={`login__name paragraph ${error ? 'login__name_error' : ""}`}
              value={inputValue}
              onChange={handleInputChange}
            />
            {error && (
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
