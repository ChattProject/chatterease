import React, { useEffect, useState } from "react";
import "./SupportForm.scss";
import IconSuccessfull from "../../images/iconSuccessfull.png";
import { useNavigate } from "react-router-dom";

export const SupportForm = ({ setMobileChatsMenu, selectedChatId }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMobileChatsMenu(true);
  }, []);

  const [isWindowContentVisible, setIsWindowContentVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setIsWindowContentVisible(false);
  };

  const handleGoBack = () => {
    setIsWindowContentVisible(true);
    if (selectedChatId > -1) {
      navigate(`/chat/${selectedChatId}`);
    } else {
      navigate("/chats");
    }
  };

  return (
    <div className="supportForm">
      <div className="supportForm__window window">
        <button
          type="button"
          className="btn-close supportForm__btn-close"
          aria-label="Close"
          onClick={handleGoBack}
        ></button>
        {isWindowContentVisible ? (
          <>
            <h1 className="supportForm__title">Ми на зв’язку</h1>
            <form className="supportForm__form" onSubmit={handleSubmit}>
              <div className="supportForm__name">
                <label className="supportForm__text paragraph">
                  Вкажіть ваше ім’я
                </label>
                <input
                  className="supportForm__input"
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="supportForm__name">
                <label className="supportForm__text paragraph">
                  Вкажіть вашу електронну пошту
                </label>
                <input
                  className="supportForm__input"
                  type="email"
                  name="email"
                  placeholder="Електронна пошта"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="supportForm__name">
                <label className="supportForm__text paragraph">
                  Опишіть проблему
                </label>
                <textarea
                  required
                  className="supportForm__input"
                  name="message"
                  placeholder="Не можу відправити повідомлення"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className={`login__button ${
                  formData.name && formData.email && formData.message
                    ? "button-green"
                    : "button-green button-green_disabled"
                }`}
              >
                Надіслати
              </button>
            </form>
          </>
        ) : (
          <>
            <img
              className="supportForm__icon"
              src={IconSuccessfull}
              alt="IconSuccessfull"
            />
            <h2 className="supportForm__title">Ваше повідомлення надіслано!</h2>
            <p className="supportForm__text paragraph">
              Дякуємо за звернення! Наша служба підтримки найближчим часом вам
              відповість
            </p>
            <button
              className="supportForm__button button-green"
              onClick={handleGoBack}
            >
              Повернутися в чат
            </button>
          </>
        )}
      </div>
    </div>
  );
};
