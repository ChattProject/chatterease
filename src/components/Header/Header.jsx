// import './Header.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/Logo.svg";

export const Header = ({ setHeaderMenu, headerMenu, userName }) => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <Link
            to={userName ? "/chats" : "/home"}
            className="header__title"
            onClick={() => setHeaderMenu(false)}
          >
            <img src={Logo} alt="logo" className="header__logo" />
            {/* <img src="icon" alt="chat" className="header__logo" /> */}
            {/* <div className="header__logo">CHATTER EASE</div>
            <div className="header__name">chatter ease</div> */}
          </Link>
          <div className="header__mobile mobile">
            <button
              class="mobile__burger"
              type="button"
              value="menu"
              onClick={(event) => {
                event.stopPropagation();
                setHeaderMenu(true);}
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {headerMenu && (
              <div className="mobile__additional">
                <div
                  className="mobile__info mobile__info_rules"
                  onClick={() => setHeaderMenu(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mobile__icon"
                  >
                    <path
                      d="M19 5H19.006C20.107 5 21 5.895 21 6.994V19.006C20.9997 19.5348 20.7896 20.0418 20.4157 20.4157C20.0418 20.7896 19.5348 20.9997 19.006 21H6.994C6.46524 20.9997 5.95821 20.7896 5.58432 20.4157C5.21043 20.0418 5.00027 19.5348 5 19.006V19H18C18.555 19 19 18.552 19 18V5ZM3 5.006C3 3.898 3.897 3 5.006 3H14.994C16.102 3 17 3.897 17 5.006V14.994C17.0001 15.2575 16.9483 15.5184 16.8476 15.7618C16.7468 16.0053 16.5991 16.2264 16.4128 16.4128C16.2264 16.5991 16.0053 16.7468 15.7618 16.8476C15.5184 16.9483 15.2575 17.0001 14.994 17H5.006C4.74253 17.0001 4.48162 16.9483 4.23818 16.8476C3.99474 16.7468 3.77355 16.5991 3.58725 16.4128C3.40095 16.2264 3.25319 16.0053 3.15243 15.7618C3.05167 15.5184 2.99987 15.2575 3 14.994V5.006ZM5 5V15H15V5H5ZM6 8C6 7.448 6.453 7 6.997 7H13.003C13.553 7 14 7.444 14 8C14 8.552 13.547 9 13.003 9H6.997C6.86578 9.00013 6.73583 8.97434 6.61461 8.92409C6.4934 8.87385 6.3833 8.80014 6.29066 8.70722C6.19801 8.6143 6.12464 8.50398 6.07476 8.38261C6.02488 8.26124 5.99947 8.13122 6 8ZM6 11C6 10.448 6.453 10 6.997 10H13.003C13.553 10 14 10.444 14 11C14 11.552 13.547 12 13.003 12H6.997C6.86578 12.0001 6.73583 11.9743 6.61461 11.9241C6.4934 11.8738 6.3833 11.8001 6.29066 11.7072C6.19801 11.6143 6.12464 11.504 6.07476 11.3826C6.02488 11.2612 5.99947 11.1312 6 11Z"
                      fill="#292929"
                    />
                  </svg>
                  <Link
                    to={"/rules"}
                    className="mobile__link mobile__rules paragraph"
                  >
                    Правила користування
                  </Link>
                </div>
                <div
                  className="mobile__info mobile__info_help"
                  onClick={() => setHeaderMenu(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mobile__icon"
                  >
                    <path
                      d="M15 16H19V6H5V16H12.333L15 18V16ZM17 18V20C17 20.1857 16.9483 20.3678 16.8507 20.5257C16.753 20.6837 16.6133 20.8114 16.4472 20.8944C16.2811 20.9775 16.0952 21.0126 15.9102 20.996C15.7252 20.9793 15.5486 20.9114 15.4 20.8L11.667 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H17Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 10H17V8H7V10ZM7 14H13V12H7V14Z"
                      fill="#292929"
                    />
                  </svg>
                  <Link
                    to={"/support"}
                    className="mobile__link mobile__help paragraph"
                  >
                    Технічна підтримка
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="header__additional">
            <div className="header__info header__info_rules">
              <Link
                to={"/rules"}
                className="header__link header__rules paragraph"
              >
                Правила користування
              </Link>
            </div>
            <div className="header__info header__info_help">
              <Link
                to={"/support"}
                className="header__link header__help paragraph"
              >
                Технічна підтримка
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
