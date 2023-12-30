import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Login = ({ setUserName, userName, selectedChatId }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorLength, setErrorLength] = useState(false);
  const [errorSymbols, setErrorSymbols] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();
  const forbiddenSymbols = /[,<>/?"':-=+!@#$%^&*()]/;

  useEffect(() => {
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [setUserName]);

  useEffect(() => {
    if (
      (inputValue.length > 2 && inputValue.length < 11) ||
      inputValue.length === 0
    ) {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length > 2 && inputValue.length < 11) {
      setErrorLength(false);

      if (forbiddenSymbols.test(inputValue)) {
        setErrorSymbols(true);
      } else {
        const user = { username: inputValue };
        setShowLoader(true);

        fetch("https://wechat-85y195m1.b4a.run/api/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((userData) => {
            handleSetName();
            setErrorSymbols(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setTimeout(() => {
          setShowLoader(false);
          if (selectedChatId !== -1) {
            navigate(`/chat/${selectedChatId}`);
          } else {
            navigate(`/chats}`);
          }
        }, 1000);
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
        {showLoader && <Loader />}
        <div className="login__background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="196"
            viewBox="0 0 34 46"
            fill="none"
            className="login__background_flower_left login__background_flower"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.01465 25.9941C7.01465 37.0418 7.77892 45.9977 18.0372 45.9977C28.2954 45.9977 29.0597 37.0418 29.0597 25.9941"
              fill="#FFFFFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.0886 19.1002C20.7126 19.8418 20.3773 20.5983 20.0812 21.3661C20.0707 19.7848 20.1474 18.1919 20.3567 16.5773C20.7145 13.8114 21.261 11.06 21.7745 8.3129C22.1435 6.33876 22.1202 2.79282 23.5208 1.21962C23.9049 0.879629 23.9973 1.54664 23.9973 1.83611C24.0022 1.89729 23.9963 0.654589 23.6235 0.871054C21.4076 2.17656 20.6896 6.28151 19.9801 8.33677C18.9451 11.3367 18.0644 14.4033 17.7018 17.5245C17.6101 18.3129 17.5603 19.1011 17.5487 19.888C17.4734 19.6775 17.4027 19.4655 17.3244 19.2557C16.0455 15.834 14.3195 12.4953 12.1668 9.41608C11.637 8.65845 4.97453 1.18277 4.45298 2.32698C4.50444 2.49315 4.61218 2.63105 4.77647 2.74067C4.78612 2.75318 4.78639 2.74623 4.78076 2.72769C5.17205 3.4487 6.28456 4.56231 6.6311 5.19409C7.5032 6.78397 8.181 8.47119 8.86979 10.1262C10.3251 13.6237 11.675 17.1564 12.9837 20.6966C13.2885 21.5212 13.6061 22.3412 13.9301 23.1586C10.5899 17.6628 6.13394 12.6735 0 9.81726C2.09503 11.0331 3.46858 13.3206 4.88341 15.072C6.58983 17.1845 8.3871 19.2402 10.0967 21.3504C12.1132 23.8397 14.4859 26.4612 16.4255 29.2159C18.3043 33.7153 20.13 38.2196 21.2569 42.9493C20.7952 41.3152 21.2208 39.0569 21.1417 37.3419C21.079 35.9768 20.9391 34.6229 20.7474 33.2715C20.9844 33.881 21.1886 34.491 21.2811 35.0583C21.1966 34.1067 21.0993 33.1612 20.9948 32.2204C21.2631 31.3397 21.5266 30.5179 21.7045 29.8409C22.6165 26.3682 23.7025 22.9553 25.1814 19.6289C26.5499 16.5518 28.1196 13.5138 29.83 10.5686C30.6279 9.19544 31.4368 7.82736 32.2405 6.45696C32.7666 5.55981 33.2675 4.12336 34 3.26375C29.2653 8.20165 24.0925 13.1752 21.0886 19.1002Z"
              fill="#FFFFFF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="240"
            viewBox="0 0 50 52"
            fill="none"
            className="login__background_flower_right login__background_flower"
          >
            <g clipPath="url(#clip0_626_14219)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.4732 23.6947C44.8412 21.5176 43.3572 19.8136 41.8167 18.2523C38.8178 15.2128 37.2048 13.3334 36.136 8.88721C35.5075 6.27227 34.8677 3.50123 32.874 1.60406C31.4224 0.222503 28.9239 -0.938253 26.9826 0.0510542C23.9959 1.89188 23.1939 5.66957 23.4951 9.05227C23.8684 13.2449 25.7649 15.83 29.4083 17.3743C31.4612 18.244 32.8258 19.3916 33.9402 21.3912C34.8316 22.9902 35.3513 24.9925 36.4715 26.442C38.1462 28.6089 40.2419 29.5721 42.825 29.2122C40.4055 24.6153 37.5786 19.9751 34.169 16.1047C33.8499 15.7156 31.9674 14.2263 32.347 13.5631C32.7653 12.8329 34.6978 15.5758 34.6842 15.5592C35.675 16.7338 36.5919 17.9819 37.4923 19.242C37.49 19.2432 37.4873 19.2439 37.4848 19.2452C38.4119 20.5382 39.3315 21.8503 40.2336 23.1788C40.5984 23.7408 40.9535 24.3099 41.2934 24.8934C41.7923 25.7495 42.5839 28.1792 43.4003 28.7056C43.5749 28.8182 43.7364 28.8811 43.8874 28.907C44.4443 29.8487 44.9862 30.798 45.5016 31.7585C46.8476 34.2671 48.0029 36.9157 48.5332 39.7479C48.6879 40.5745 48.5784 43.6667 49.1248 44.2634C50.1239 45.3549 49.8312 43.253 49.7715 42.6186C49.2752 37.3648 47.4488 32.8889 44.7969 28.4721C45.6115 27.3734 45.7292 24.5769 45.4732 23.6947Z"
                fill="#FFFFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2569 26.231C12.3101 24.9495 14.8419 24.7321 16.3904 24.8179C18.3064 24.924 20.2745 25.4057 22.0974 25.9881C25.1003 26.9474 28.0181 28.698 30.6628 30.3924C30.9815 30.5966 34.908 33.035 34.5605 33.4629C34.2162 33.8869 30.3616 30.9904 29.5025 30.4912C27.6693 29.4256 25.9881 28.1654 23.9674 27.4617C21.8752 26.7329 19.6624 26.4444 17.4623 26.4643C17.1799 26.4669 16.2588 26.2636 16.239 26.695C16.2195 27.1169 17.7435 26.8968 18.0123 26.8993C19.1223 26.9098 20.2391 27.0177 21.3333 27.2163C23.3834 27.5885 25.3108 28.3381 27.0667 29.488C26.5768 30.6644 25.4023 31.2068 24.1702 30.9124C23.1054 30.6578 22.0673 30.0302 21.0246 29.8488C20.3065 29.7238 19.5875 29.7981 18.8911 30.0071C17.0543 30.5583 15.9949 31.6876 13.9753 30.9021C12.3921 30.2863 9.7443 28.0739 11.2569 26.231Z"
                fill="#FFFFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.448 14.1048H12.9463C12.9114 13.4518 12.8659 12.7999 12.7591 12.1542C12.3585 9.73401 11.1062 6.17937 8.35945 5.78654C8.25811 5.7719 7.88537 5.76944 7.43385 5.79649C7.21985 5.67434 6.98014 5.60047 6.72758 5.58348C4.38901 5.40735 1.77739 7.33471 0.649343 9.3404C-0.260022 10.9575 -0.106827 13.081 0.454853 14.799C0.830977 15.9492 1.65187 17.5892 3.02082 17.6051C4.73353 17.6251 4.81612 15.4627 4.84925 14.1985C4.89327 12.5178 5.10116 11.0536 6.39754 9.90802C6.69969 9.64114 7.02994 9.40634 7.33513 9.14315C7.81302 8.73122 8.34114 8.30945 8.4027 7.62796C8.48769 6.68775 7.96818 6.51855 7.17496 6.69322C7.03974 6.72295 5.67766 7.34733 5.87934 6.85382C5.9409 6.70306 6.16579 6.58359 6.44963 6.49407C7.18411 6.41249 8.06003 6.31783 8.31194 6.37438C11.0296 6.98346 12.0877 10.8291 12.3687 13.2725C12.4005 13.5491 12.4259 13.8267 12.448 14.1048Z"
                fill="#FFFFFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_626_14219">
                <rect
                  width="50"
                  height="51.3091"
                  fill="white"
                  transform="translate(0 0.46875)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
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
            {/* {errorLength && ( */}
            <div
              className={`login__error ${
                errorLength && "login__error_display"
              }`}
            >
              Введіть від 3 до 10 символів
            </div>
            {/* )} */}
            {/* {errorSymbols && ( */}
            <div
              className={`login__error ${
                errorSymbols && "login__error_display"
              }`}
            >{`Заборонені спеціальні символи: ,.<>/?':"-=+!@#$%^&*()`}</div>
            {/* )} */}
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
