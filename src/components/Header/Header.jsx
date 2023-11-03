// import './Header.scss'
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../images/Logo.svg";

export const Header = ({ setHeaderMenu, headerMenu, mobileChatsMenu }) => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <Link
            to={"/home"}
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
                setHeaderMenu(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12H20"
                  stroke="black"
                  stroke-opacity="0.95"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6H20"
                  stroke="black"
                  stroke-opacity="0.95"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="black"
                  stroke-opacity="0.95"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {headerMenu && (
              <div className="mobile__additional">
                <NavLink
                  to={"/rules"}
                  className={({ isActive }) =>
                    isActive
                      ? "mobile__rules mobile__info paragraph header__link_active  mobile__info_active"
                      : "mobile__rules mobile__info paragraph"
                  }
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
                  <p className="mobile__link">Правила користування</p>
                </NavLink>
                <NavLink
                  to={"/support"}
                  className={({ isActive }) =>
                    isActive
                      ? "mobile__help mobile__info paragraph header__link_active  mobile__info_active"
                      : "mobile__help mobile__info paragraph"
                  }
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
                  <p className="mobile__link">Технічна підтримка</p>
                </NavLink>
              </div>
            )}
          </div>
          {mobileChatsMenu && (
            <NavLink
              to={"/chats"}
              className={({ isActive }) =>
                isActive
                  ? "header__mobile_chats mobile_chats mobile_chats_active"
                  : "header__mobile_chats mobile_chats"
              }
            >
              <div className="mobile_chats__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.5 4.99924C14.5717 4.99924 13.6815 5.36799 13.0251 6.02437C12.3687 6.68075 12 7.57099 12 8.49924C12 9.4275 12.3687 10.3177 13.0251 10.9741C13.6815 11.6305 14.5717 11.9992 15.5 11.9992C16.4283 11.9992 17.3185 11.6305 17.9749 10.9741C18.6313 10.3177 19 9.4275 19 8.49924C19 7.57099 18.6313 6.68075 17.9749 6.02437C17.3185 5.36799 16.4283 4.99924 15.5 4.99924ZM10 8.49924C10.0001 7.63735 10.2028 6.78755 10.5917 6.01838C10.9806 5.2492 11.5448 4.58219 12.2388 4.07114C12.9329 3.56009 13.7373 3.21931 14.5872 3.07627C15.4372 2.93323 16.3088 2.99195 17.1319 3.24768C17.955 3.50342 18.7065 3.94902 19.3257 4.54853C19.9449 5.14805 20.4146 5.8847 20.6968 6.69908C20.979 7.51346 21.0659 8.38277 20.9504 9.23689C20.8349 10.091 20.5203 10.906 20.032 11.6162L22.707 14.2922L21.293 15.7062L18.618 13.0312C17.7922 13.5996 16.8267 13.9314 15.826 13.9908C14.8253 14.0502 13.8273 13.835 12.9401 13.3684C12.0528 12.9018 11.3099 12.2016 10.7917 11.3434C10.2736 10.4852 9.99978 9.50173 10 8.49924ZM3 3.99924H8V5.99924H3V3.99924ZM3 10.9992H8V12.9992H3V10.9992ZM21 17.9992V19.9992H3V17.9992H21Z"
                    fill="#292929"
                  />
                </svg>
              </div>
            </NavLink>
          )}
          <div className="header__additional">
            <div className="header__info header__info_rules">
              <NavLink
                to={"/rules"}
                activeClassName="header__link_active"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__help paragraph header__link_active"
                    : "header__link header__help paragraph"
                }
              >
                Правила користування
              </NavLink>
            </div>
            <div className="header__info header__info_help">
              <NavLink
                to={"/support"}
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__help paragraph header__link_active"
                    : "header__link header__help paragraph"
                }
              >
                Технічна підтримка
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
