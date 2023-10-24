// import './Header.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../../images/Logo.svg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

return (
  <div className="header">
    <div className="header__container">
      <Link to={"/home"} className="header__title">
        <img src={Logo} alt="logo" className="header__logo" />
      </Link>
      {isMenuOpen ? (
        
        <div className="header__menu">
          <Link to={"/rules"} className="header__info header__rules paragraph">
            Правила користування
          </Link>
          <Link to={"/support"} className="header__info header__help paragraph">
            Технічна підтримка
          </Link>
        </div>
      ) : (
       
        <div className="header__additional">
          <div className="header__burger" onClick={toggleMenu}>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
          </div>
        </div>
      )}
    </div>
  </div>
);
};